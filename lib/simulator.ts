// Silent Apocalypse Simulator — scoring engine
// Eight subscores mapped 1:1 to Evolve8's eight programs

export type SubScores = {
  work: number;
  purchasingPower: number;
  food: number;
  housing: number;
  medical: number;
  legal: number;
  digital: number;
  skills: number;
};

export type Answers = Record<string, string | string[] | undefined>;

export type SimMove = {
  text: string;
  href?: string;
  cta?: string;
};

const map = (val: string | undefined, table: Record<string, number>, fallback = 50): number => {
  if (val == null) return fallback;
  return table[val] ?? fallback;
};

const clamp = (n: number) => Math.max(0, Math.min(100, n));

export function score(answers: Answers, timeline: string = "5y"): {
  index: number;
  bucket: string;
  bucketColor: string;
  sub: SubScores;
  top3: { key: keyof SubScores; label: string; score: number }[];
} {
  // Work / AI displacement
  const b1 = (answers.B1 as string) || "";
  const b1Risk: Record<string, number> = {
    retail: 72, food_service: 68, transportation: 82, knowledge_work: 58,
    software: 52, healthcare: 28, education: 42, government: 32,
    creative: 62, agriculture: 22, manual_trades: 28, other: 50,
  };
  const b6Literacy = map(answers.B6 as string, { no: 75, considering: 55, started: 30, active: 10 }, 60);
  const work = clamp(
    0.45 * (b1Risk[b1] ?? 50) +
    0.25 * map(answers.B2 as string, { "1": 0, "2": 20, "3": 50, "4": 78, "5": 98 }, 50) +
    0.20 * map(answers.B4 as string, { none: 82, sometimes: 50, regularly: 18 }, 60) +
    0.10 * b6Literacy
  );

  // Purchasing power
  const purchasingPower = clamp(
    0.40 * map(answers.B3 as string, { none: 98, lt1: 82, "1-3": 62, "3-6": 38, "6-12": 18, "12+": 5 }, 60) +
    0.35 * map(answers.B5 as string, { falling: 92, flat: 65, slightly_ahead: 32, clearly_ahead: 8 }, 60) +
    0.25 * map(answers.D3 as string, { none: 5, lt1: 25, "1-3": 50, "3-6": 78, "6+": 96 }, 50)
  );

  // Food & Water (merged)
  const food = clamp(
    0.30 * map(answers.C1 as string, { "0-1": 97, "2-3": 78, "4-7": 52, "8-14": 25, "15+": 5 }, 70) +
    0.20 * map(answers.C2 as string, { none: 85, herbs: 65, vegetables: 32, significant: 8 }, 70) +
    0.20 * map(answers.C3 as string, { no: 92, partial: 52, yes: 8 }, 60) +
    0.10 * map(answers.C4 as string, { no: 88, somewhat: 45, yes: 8 }, 60) +
    0.20 * map(answers.C5 as string, { no: 85, aware: 65, occasional: 40, regular: 12 }, 70)
  );

  // Housing / Land
  const d1 = (answers.D1 as string) || "";
  const tenureExposure: Record<string, number> = {
    renting: 72, mortgaged: 50, owned: 12, temporary: 93, other: 60,
  };
  const d5Bonus = map(answers.D5 as string, { no: 0, considering: -5, exploring: -12, acquired: -25 }, 0);
  const housing = clamp(
    0.40 * (tenureExposure[d1] ?? 60) +
    0.60 * map(answers.D2 as string, { lt25: 12, "25-35": 38, "35-45": 65, "45-55": 86, "55+": 97 }, 60)
    + d5Bonus
  );

  // Medical / Health
  const medical = clamp(
    0.20 * map(answers.D3 as string, { none: 5, lt1: 25, "1-3": 50, "3-6": 75, "6+": 96 }, 50) +
    0.20 * map(answers.D4 as string, { no: 5, some: 48, significant: 92 }, 40) +
    0.15 * map(answers.E1 as string, { employer: 28, marketplace: 50, medicaid: 55, va: 32, none: 97, other: 60 }, 50) +
    0.25 * map(answers.E2 as string, { no: 8, once: 52, multiple: 92 }, 50) +
    0.20 * map(answers.E3 as string, { no: 12, somewhat: 55, yes: 92 }, 50)
  );

  // Legal / Documentation
  const legal = clamp(
    0.50 * map(answers.L1 as string, { no: 30, yes_undocumented: 85, yes_partial: 55, yes_documented: 20 }, 50) +
    0.30 * map(answers.L2 as string, { no: 90, vaguely: 55, yes: 15 }, 60) +
    0.20 * map(answers.L3 as string, { no: 85, somewhat: 50, yes: 20, digital: 8 }, 60)
  );

  // Digital dependence
  const digital = clamp(
    0.50 * map(answers.F1 as string, { low: 8, medium: 38, high: 72, total: 96 }, 60) +
    0.50 * map(answers.F2 as string, { no: 88, somewhat: 50, yes: 12 }, 60)
  );

  // Skills / Community resilience
  const a2 = map(answers.A2 as string, { "1": 30, "2": 30, "3-4": 50, "5+": 70 }, 50);
  const a3 = map(answers.A3 as string, { yes: 65, no: 30, na: 35 }, 40);
  const a4 = map(answers.A4 as string, { yes: 65, no: 30, na: 35 }, 40);
  const f3 = map(answers.F3 as string, { "0": 96, "1-2": 65, "3-5": 32, "6+": 8 }, 60);
  const f4skills = Array.isArray(answers.F4) ? answers.F4.length : 0;
  const f4 = f4skills >= 5 ? 8 : f4skills >= 3 ? 28 : f4skills >= 1 ? 55 : 92;
  const skills = clamp(0.12 * a2 + 0.12 * a3 + 0.08 * a4 + 0.28 * f3 + 0.28 * f4 + 0.12 * b6Literacy);

  // G1 — lived experience boosts (already happened = higher exposure confirmed)
  const g1 = Array.isArray(answers.G1) ? answers.G1 as string[] : [];
  const hasNone = g1.includes("none");

  const g1Boosts = hasNone ? {} : {
    work:            g1.includes("job_ai")          ? 18 : 0,
    purchasingPower: g1.includes("wages_fell")       ? 15 : 0,
    food:            g1.includes("food_insecurity")  ? 22 : 0,
    housing:         g1.includes("housing_crisis")   ? 22 : 0,
    medical:         (g1.includes("insurance_deny")  ? 14 : 0) +
                     (g1.includes("medical_debt")    ? 16 : 0) +
                     (g1.includes("delayed_care")    ? 10 : 0),
    legal:           (g1.includes("insurance_deny")  ? 12 : 0) +
                     (g1.includes("identity_theft")  ? 10 : 0),
    digital:         g1.includes("identity_theft")   ? 14 : 0,
  };

  // Timeline modifier
  const timelineMul: Record<string, number> = { "1y": 1.0, "3y": 1.05, "5y": 1.1, "10y": 1.18, "15y": 1.25 };
  const mul = timelineMul[timeline] ?? 1.1;

  const sub: SubScores = {
    work:            clamp((work            + (g1Boosts.work            ?? 0)) * mul),
    purchasingPower: clamp((purchasingPower  + (g1Boosts.purchasingPower ?? 0)) * mul),
    food:            clamp((food            + (g1Boosts.food            ?? 0)) * mul),
    housing:         clamp((housing         + (g1Boosts.housing         ?? 0)) * mul),
    medical:         clamp((medical         + (g1Boosts.medical         ?? 0)) * mul),
    legal:           clamp((legal           + (g1Boosts.legal           ?? 0)) * mul),
    digital:         clamp((digital         + (g1Boosts.digital         ?? 0)) * mul),
    skills:          clamp(skills * mul),
  };

  const index = Math.round(
    0.15 * sub.work + 0.14 * sub.purchasingPower + 0.13 * sub.food +
    0.12 * sub.housing + 0.14 * sub.medical + 0.10 * sub.legal +
    0.10 * sub.digital + 0.12 * sub.skills
  );

  const bucket =
    index < 25 ? "Resilient" :
    index < 45 ? "Stable — but exposed" :
    index < 65 ? "Stretched" :
    index < 80 ? "Vulnerable" : "Critically exposed";

  const bucketColor =
    index < 25 ? "text-emerald-400" :
    index < 45 ? "text-green-300" :
    index < 65 ? "text-amber-400" :
    index < 80 ? "text-orange-400" : "text-accent";

  const labels: Record<keyof SubScores, string> = {
    work:            "Work / AI displacement",
    purchasingPower: "Purchasing power",
    food:            "Food & water",
    housing:         "Housing / land",
    medical:         "Medical & health",
    legal:           "Legal & documentation",
    digital:         "Digital dependence",
    skills:          "Skills & community",
  };

  const top3 = (Object.keys(sub) as (keyof SubScores)[])
    .map((k) => ({ key: k, label: labels[k], score: Math.round(sub[k]) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return { index, bucket, bucketColor, sub, top3 };
}

export function firstEightMoves(top3Keys: (keyof SubScores)[]): SimMove[] {
  const playbook: Record<keyof SubScores, SimMove[]> = {
    work: [
      {
        text: "Take the Work8 track intake — 5 questions that place you in the right income path for your situation. Tracks cover AI-resistant roles, independent income building, and full career reskilling. Designed for people who need real income, not another course.",
        href: "/work/apply",
        cta: "Start the Work8 intake →",
      },
      {
        text: "Browse the Skills Academy for AI-era technical skills — coding, AI tools, and high-demand practical work that employers cannot automate away. Free to start.",
        href: "/skills",
        cta: "Browse Skills Academy →",
      },
    ],
    purchasingPower: [
      {
        text: "Read Macro8 for Families — a plain-language breakdown of the five economic squeezers destroying household purchasing power and the four macro modes families use to respond. No jargon, no investment pitch.",
        href: "/money/families",
        cta: "Read Macro8 for Families →",
      },
      {
        text: "Watch the Financial Literacy series in the Education Library — focused videos on inflation, building an emergency fund, and reducing fixed costs. Under 30 minutes total.",
        href: "/education-library#money",
        cta: "Watch Financial Literacy videos →",
      },
    ],
    food: [
      {
        text: "Apply for the Vivinate Farms Family Module — kale, tomatoes, peppers, herbs. Your household's first 14-day food buffer, grown and distributed with support in DFW. No gardening experience required.",
        href: "/food",
        cta: "Apply for Vivinate Farms →",
      },
      {
        text: "Watch the Food & Water Resilience series in the Education Library — three videos on building a real household food and water plan, sourcing from local farms, and setting the 14-day minimum buffer.",
        href: "/education-library#food-water",
        cta: "Watch Food & Water videos →",
      },
    ],
    housing: [
      {
        text: "Apply for Land Access — Evolve8 offers a merit-based two-track pathway for families seeking land in the DFW region. Live + Work and Just Live tracks are both open. This is explicitly not a lottery.",
        href: "/land",
        cta: "Apply for Land Access →",
      },
      {
        text: "If housing cost is over 35% of take-home, document any landlord violations, escrow abuse, or eviction threats in the Public Action Network now. The record you build today becomes legal leverage later.",
        href: "/legal",
        cta: "Document housing issues →",
      },
    ],
    medical: [
      {
        text: "Find a Way Station near you — Evolve8's network of community health access points connecting families to no-cost and low-cost care, prescription assistance, and medical navigation support.",
        href: "/medical/way-stations",
        cta: "Find a Way Station →",
      },
      {
        text: "Request itemized billing on every healthcare charge in the last 24 months. Up to 80% of medical bills contain errors that can be disputed. Document every denied claim in the Public Action Network for the class action record.",
        href: "/legal",
        cta: "Open the Public Action Network →",
      },
    ],
    legal: [
      {
        text: "File your first harm report in the Public Action Network. Insurance denial, wage theft, predatory debt, housing violation — pattern documentation is how individual harm becomes policy-level change. It takes 10 minutes.",
        href: "/legal",
        cta: "File a harm report →",
      },
      {
        text: "Use the Legal Help Platform to organize your case documents, understand your rights, and connect with legal aid resources in DFW. No attorney required to start — the platform guides you through each step.",
        href: "/legal/help-platform",
        cta: "Access Legal Help Platform →",
      },
    ],
    digital: [
      {
        text: "Watch the AI Literacy for Families series in the Education Library — a practical introduction to where AI is changing work, which tools actually matter for your income, and how to use AI to protect rather than lose your position.",
        href: "/education-library#work-ai",
        cta: "Start AI Literacy series →",
      },
      {
        text: "Move critical logins — email, banking, taxes, documents — off platforms you don't control and enable two-factor authentication on all of them. Build one real off-platform channel to reach your community.",
        href: "/skills",
        cta: "Browse digital resilience skills →",
      },
    ],
    skills: [
      {
        text: "Browse the Skills Academy for practical, teachable skills — cooking, repair, food growing, first aid, coding, construction. Every skill you can teach or trade reduces your dependence on systems that are actively failing.",
        href: "/skills",
        cta: "Explore Skills Academy →",
      },
      {
        text: "Visit the Education Library for the full Evolve8 video catalog — legal action, food security, financial literacy, land access, and AI readiness. Each series is under 60 minutes and free.",
        href: "/education-library",
        cta: "Browse Education Library →",
      },
    ],
  };

  const moves: SimMove[] = [];
  for (const k of top3Keys) {
    moves.push(...(playbook[k] ?? []));
  }

  // Always include a talk-to-rep move as final option
  moves.push({
    text: "Talk to an Evolve8 team representative about your specific score. Every simulator result comes with the option to schedule a call — we will walk through your top three systems and your most urgent next steps.",
    href: "/contact",
    cta: "Schedule a call →",
  });

  // Deduplicate by href, return exactly 8
  const seen = new Set<string>();
  const unique = moves.filter((m) => {
    const key = m.href ?? m.text.slice(0, 40);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return unique.slice(0, 8);
}
