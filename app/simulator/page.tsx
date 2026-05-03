"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { QUESTIONS, PAGES, Question } from "@/lib/simulatorQuestions";
import { score, firstEightMoves, SimMove, SubScores, Answers } from "@/lib/simulator";

const TIMELINES = [
  { v: "1y", l: "1 year" }, { v: "3y", l: "3 years" },
  { v: "5y", l: "5 years" }, { v: "10y", l: "10 years" }, { v: "15y", l: "15 years" },
];

const TOTAL_STEPS = PAGES.length + 2;

// ─── System detail data ────────────────────────────────────────────────────
const SYSTEM_DATA: Record<keyof SubScores, {
  icon: string;
  stat: string;
  statDetail: string;
  whyWeAsked: string;
  programName: string;
  programHref: string;
}> = {
  work: {
    icon: "⚙",
    stat: "44% of U.S. job tasks can now be performed by AI — up from 9% in 2018",
    statDetail: "The pace is accelerating every quarter. Most people don't feel it until they're already in it. Creative, transportation, and knowledge work roles are being disrupted at 3x historical rates.",
    whyWeAsked: "We asked about your industry, your self-assessed AI risk, your financial runway, and your independent income capability — because these factors together determine how hard displacement will hit and how fast you can recover. Most people underestimate their sector's risk until they're already in the disruption.",
    programName: "Work8",
    programHref: "/work",
  },
  purchasingPower: {
    icon: "$",
    stat: "The average American family has lost $4,200/year in real purchasing power since 2020",
    statDetail: "Same paycheck. Groceries up 40%. Rent up 30%. Insurance up 25%. The gap is structural and compounding, not cyclical. It does not correct itself without deliberate action.",
    whyWeAsked: "Your emergency runway, wage trajectory, and debt load together tell us whether you're building a buffer or slowly going under — even when income looks stable on paper. The most dangerous situation is feeling fine while the margin quietly disappears.",
    programName: "Macro8",
    programHref: "/money/families",
  },
  food: {
    icon: "⬡",
    stat: "The average American grocery store has 3 days of inventory. Most households have less.",
    statDetail: "During COVID-19, store shelves went empty within 48 hours of panic buying. The logistics system has not been hardened since. Local food production in the U.S. has declined 40% since the 1970s.",
    whyWeAsked: "Food is the most immediate survival system. We asked about your buffer, production capability, water storage, and local sourcing because a household with less than a week of food and no production capability is one supply chain event — storm, strike, shortage — away from crisis.",
    programName: "Vivinate Farms",
    programHref: "https://www.vivinatefarms.org",
  },
  housing: {
    icon: "⌂",
    stat: "3.7 million Americans face eviction every year. The average renter spends 35–50% of income on housing.",
    statDetail: "Housing cost burden is at its highest level in recorded American history. Renters have no security of tenure — a landlord's decision, a rent increase, or a lease non-renewal can eliminate housing with 30 days notice.",
    whyWeAsked: "Housing tenure and cost-as-percentage-of-income are the two most predictive structural risk factors in this entire simulation. A renter spending 50% of income on housing has essentially zero buffer for any other system failure — medical, food, work, anything.",
    programName: "Land Access",
    programHref: "/land",
  },
  medical: {
    icon: "+",
    stat: "530,000 U.S. bankruptcies per year are caused by medical bills. 1 in 3 Americans has medical debt.",
    statDetail: "Insurance companies deny 18% of in-network claims on average. The average deductible is now $1,763 — up 83% since 2008. Medical costs are the #1 cause of financial ruin in the United States, and uniquely American.",
    whyWeAsked: "Medical debt, delayed care, and insurance adequacy are tightly correlated with financial ruin. If you're deferring care due to cost, you're converting a manageable medical issue into a future financial crisis. The debt accumulates invisibly until it doesn't.",
    programName: "Way Stations",
    programHref: "/medical/way-stations",
  },
  legal: {
    icon: "§",
    stat: "Only 1 in 10 Americans who experience institutional harm — denied claims, wage theft, violations — ever formally documents it.",
    statDetail: "Without documentation, there is no case. Without a case, the harm becomes invisible to the system. Insurance companies, employers, and landlords build their business models on people not knowing their rights or not having the records to enforce them.",
    whyWeAsked: "Legal preparedness is the least visible failure — and the most preventable. We asked about harm history, legal access knowledge, and document organization because the families who get restitution are the ones who kept records, not the ones who were wronged the most.",
    programName: "Legal Action",
    programHref: "/legal",
  },
  digital: {
    icon: "◈",
    stat: "5 companies control 80% of the digital infrastructure Americans use for work, communication, and commerce.",
    statDetail: "When Meta went down for 6 hours in 2021, small business owners lost an estimated $200M. Total platform dependence isn't just inconvenient — it means a private company's internal decision can destabilize your income overnight.",
    whyWeAsked: "Platform dependence and community isolation are force multipliers for every other system failure. If your income, communication, and news all run through the same two apps, a single policy change, hack, or ban can simultaneously eliminate your livelihood and your support network.",
    programName: "Education Library",
    programHref: "/education-library#work-ai",
  },
  skills: {
    icon: "◎",
    stat: "1 in 4 Americans has no close friends. Social isolation has doubled since 1990.",
    statDetail: "Communities with strong mutual aid networks recovered from COVID-19 economic disruption 3× faster than isolated ones. Practical skills and human networks are the most durable resilience assets — they can't be inflated away, automated, or platform-banned.",
    whyWeAsked: "Skills and community are the most underrated variables in this entire simulation. A household with practical tradeable skills and 6 people who would show up in a crisis is exponentially more resilient than their savings balance suggests — and the inverse is equally true.",
    programName: "Skills Academy",
    programHref: "/skills",
  },
};

// ─── Personalized insight by system ───────────────────────────────────────
function getPersonalInsight(key: keyof SubScores, answers: Answers, sysScore: number): string {
  const high = sysScore >= 70;
  const med = sysScore >= 45;

  switch (key) {
    case "work": {
      const runway = answers.B3 as string;
      const ai = answers.B2 as string;
      const b6 = answers.B6 as string;
      if (runway === "none") return "You have no financial runway. If your income stopped today, your household would be in crisis within days — not weeks. This is the most urgent combination in this simulation.";
      if (ai === "5") return "You are already seeing AI do your job. This is not a 5-year risk — it is a current, accelerating displacement. Every week without a parallel income path increases your exposure.";
      if (!b6 || b6 === "no") return "You haven't started any AI or tech-readiness training. In a labor market being restructured this fast, that gap compounds every quarter you wait.";
      if (high) return "Your work exposure is high. Your industry, your AI risk self-assessment, or your income independence — at least one is a serious active vulnerability.";
      if (med) return "Your work exposure is moderate. You have some protection, but meaningful gaps that would hurt if displacement arrived before you were ready.";
      return "Your work exposure is relatively low. Now is the time to build independent income — while it's optional, not urgent.";
    }
    case "purchasingPower": {
      const trend = answers.B5 as string;
      const runway = answers.B3 as string;
      if (trend === "falling" && (runway === "none" || runway === "lt1")) return "Your income is falling behind inflation and you have almost no runway. This is the most common financial precursor to crisis — the margin disappears before the emergency arrives.";
      if (trend === "falling") return "Your real purchasing power is declining even if your paycheck looks the same. Groceries, rent, and insurance are consuming a growing share of every dollar you earn.";
      if (runway === "none" || runway === "lt1") return "Less than one month of runway. Any unexpected cost — car repair, medical bill, reduced hours — triggers a debt spiral before you can course-correct.";
      if (high) return "Your purchasing power exposure is high. Savings runway, income trajectory, or debt load — at least one is creating real pressure on your household finances right now.";
      return "Your purchasing power has some cushion. The priority is extending your runway and reducing fixed costs before the next squeeze arrives.";
    }
    case "food": {
      const days = answers.C1 as string;
      const water = answers.C3 as string;
      const grow = answers.C2 as string;
      if (days === "0-1") return "Less than 1 day of food at home. A single supply disruption — severe weather, logistics event, price shock — puts your household in immediate food crisis with no buffer.";
      if (days === "2-3" && water === "no") return "3 days of food and no water storage. That's below the minimum FEMA recommends for any household under any circumstance.";
      if (grow === "none" && days === "0-1") return "No food production capability and less than 1 day of food stored. You are entirely dependent on a supply chain that has demonstrated — multiple times — that it can fail.";
      if (high) return "Your food and water exposure is high. Limited buffer, no production capability, and inadequate water storage combine to create a serious vulnerability to any supply disruption.";
      return "Your food security has a foundation. The next step is extending your buffer to 14+ days and adding at least one production element — even a container garden matters.";
    }
    case "housing": {
      const pct = answers.D2 as string;
      const tenure = answers.D1 as string;
      if ((pct === "45-55" || pct === "55+") && tenure === "renting") return "You are renting and spending over 45% of income on housing. No security of tenure, no financial margin. This is your most structurally dangerous combination.";
      if (pct === "55+") return "Over 55% of your income goes to housing. You have almost no margin for any other system failure. Even a modest disruption cascades immediately.";
      if (tenure === "temporary") return "Temporary or unstable housing is the highest-risk housing situation in this simulation. It amplifies every other vulnerability you carry.";
      if (high) return "Your housing exposure is high. Either your tenure is insecure, your costs are too high as a percentage of income, or both — and both compound over time.";
      return "Your housing situation has some stability. The priority is securing that stability long-term and building toward a path you own.";
    }
    case "medical": {
      const ins = answers.E1 as string;
      const delayed = answers.E2 as string;
      const debt = answers.D4 as string;
      if (ins === "none") return "You are uninsured. A single medical event — accident, illness, emergency surgery — can generate tens of thousands of dollars in debt with no systemic protection.";
      if (delayed === "multiple") return "You are regularly delaying or skipping care due to cost. You are converting manageable medical issues into future financial crises simultaneously.";
      if (debt === "significant") return "You have significant medical debt you cannot pay off. This debt accumulates interest and affects your credit, your housing options, and your ability to borrow in every future emergency.";
      if (high) return "Your medical exposure is high. Debt, delayed care, or inadequate insurance are compounding risks that tend to arrive as crises rather than gradual pressure.";
      return "Your medical exposure is moderate. Document any denied claims and verify your coverage is adequate for your actual usage — not just what it covers in theory.";
    }
    case "legal": {
      const harm = answers.L1 as string;
      const access = answers.L2 as string;
      const docs = answers.L3 as string;
      if (harm === "yes_undocumented") return "You have experienced institutional harm and haven't documented it. The documentation window may still be open — but it narrows every week you wait.";
      if (access === "no") return "You don't know how to access legal help. Most institutional harm goes unremedied not because the law doesn't protect you — but because people don't know the first step.";
      if (!docs || docs === "no") return "Your important documents are not organized. In a crisis, the inability to find your insurance policy, lease, or medical records costs you time and often your legal standing.";
      if (high) return "Your legal and documentation exposure is high. Undocumented harm, lack of legal access knowledge, or disorganized records are leaving you legally unprotected.";
      return "Your legal preparedness has a foundation. Document any past harm and build the habit of keeping records — before you need them.";
    }
    case "digital": {
      const dep = answers.F1 as string;
      const alt = answers.F2 as string;
      if (dep === "total") return "Your income and livelihood depend almost entirely on platforms you don't control. One platform decision — a policy change, a ban, an outage — can destabilize your household.";
      if (alt === "no" && dep === "high") return "High platform dependence with no off-platform alternatives. You have no fallback if any of these platforms change, restrict your account, or go down.";
      if (high) return "Your digital dependence is high. You have meaningful vulnerability to platform decisions, outages, or account actions you cannot predict or prevent.";
      return "Your digital exposure is moderate. Build at least one real off-platform channel for work and community now — before you need it.";
    }
    case "skills": {
      const community = answers.F3 as string;
      const skillArr = Array.isArray(answers.F4) ? answers.F4 : [];
      const skillCount = skillArr.length;
      if (community === "0" && skillCount === 0) return "No community network and no practical tradeable skills. You are entirely dependent on systems and platforms that are actively failing. This is the most foundational gap to close.";
      if (community === "0") return "No community network within driving distance. Skills without community are still vulnerable — the network is what makes them actionable when systems fail.";
      if (skillCount === 0) return "No practical tradeable skills identified. In a crisis, the ability to cook, repair, grow food, or provide care is more valuable than almost any financial asset.";
      if (high) return "Your skills and community resilience are lower than your other indicators. This is the system most people dismiss — and the one that matters most when all others fail simultaneously.";
      return `You have ${skillCount} practical skill${skillCount > 1 ? "s" : ""} and some community foundation. Building on both compounds over time and costs almost nothing to start.`;
    }
  }
}

// ─── Bucket narratives ─────────────────────────────────────────────────────
const BUCKET_NARRATIVE: Record<string, { headline: string; body: string }> = {
  "Resilient": {
    headline: "You came here because you're paying attention. That's why your score reflects it.",
    body: "Your household shows strong fundamentals across most systems. This is genuinely good news — and it's also the moment when most people stop watching. The Silent Apocalypse doesn't spare households that are currently stable. Conditions that are manageable today compound quickly when multiple systems deteriorate simultaneously. Your job now is to build deeper buffers in your exposed areas before the pressure increases — while you still have room to do it without urgency.",
  },
  "Stable — but exposed": {
    headline: "You are better positioned than most Americans. You are also not as protected as you think.",
    body: "Stable but exposed is the most dangerous score category — not because the risk is highest, but because the comfort level is high enough to delay action. You have some runway, some skills, some resilience. But you have identifiable gaps that compound over time. The families who end up in crisis from this position are the ones who didn't act during the window when it was optional. That window is open right now.",
  },
  "Stretched": {
    headline: "Your household is working harder for less ground. You are not imagining it.",
    body: "Stretched means you're spending more on food, housing, and healthcare than your income was designed to absorb — and you probably feel it every month. You are not in crisis, but you are operating with almost no margin. A single disruption — job loss, medical bill, eviction, rate change — can cascade. The time to build that margin is before the disruption arrives, not during it. Everything you do in the next 90 days is worth more than what you do in the next 90 days of crisis.",
  },
  "Vulnerable": {
    headline: "One bad month could start a sequence that is hard to stop. That's what vulnerable means.",
    body: "Vulnerable means multiple systems are under simultaneous pressure. A job loss while you have no runway. A medical bill while you already carry medical debt. A rent increase while you're already at 50% of income. These aren't hypothetical — they're happening to millions of American families right now. Your score is telling you something important: the window to act before the sequence starts is smaller than it looks. The eight moves below are not suggestions.",
  },
  "Critically exposed": {
    headline: "This is not a score we're going to soften. You came here for the truth.",
    body: "Critically exposed means multiple systems are actively failing or at immediate risk of failing simultaneously. You have options right now that you won't have in six months if conditions continue. The good news: you found this tool before the crisis, not during it. The eight steps below are your minimum immediate priorities. Start with your three highest-scored systems. Move in order. Every point you bring that score down is real protection you've built.",
  },
};

// ─── 5-year timeline ────────────────────────────────────────────────────────
const TIMELINE_ROWS = [
  {
    year: "Year 1 · 2026",
    without: "Food costs rise another 8–12%. Emergency fund depleted by one unexpected expense. AI continues displacing 2–3M more jobs. Nothing documented.",
    withEvolve8: "14-day food buffer established. Work8 track identified and started. First harm documented in the Public Action Network. Skills Academy enrolled.",
  },
  {
    year: "Year 2 · 2027",
    without: "Credit cards used for monthly groceries. Insurance premium forces coverage downgrade. No legal recourse for past harm — statute of limitations closes.",
    withEvolve8: "Independent income stream generating supplemental revenue. Land access application submitted. Evidence vault building legal record.",
  },
  {
    year: "Year 3 · 2028",
    without: "Housing cost forces move to cheaper, less stable area. Medical debt accumulating interest. Job displacement arrives without safety net.",
    withEvolve8: "Multiple income streams operational. Food production established. Way Station connection providing medical navigation. Community network active.",
  },
  {
    year: "Year 5 · 2030",
    without: "Recovery from scratch with depleted credit, no assets, no documentation, no network. Catching up while systems continue to deteriorate.",
    withEvolve8: "Resilience foundation built. Land access secured or in process. Skills and community providing independent buffer. Score below 40.",
  },
];

// ─── Main component ────────────────────────────────────────────────────────
export default function SimulatorPage() {
  const [step, setStep] = useState(-1);
  const [timeline, setTimeline] = useState("5y");
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [expandedSystem, setExpandedSystem] = useState<keyof SubScores | null>(null);
  const [timelineMode, setTimelineMode] = useState<"without" | "with">("without");

  const result = useMemo(() => score(answers, timeline), [answers, timeline]);
  const moves = useMemo(() => firstEightMoves(result.top3.map((t) => t.key as keyof SubScores)), [result]);

  useEffect(() => {
    if (step >= 0) window.scrollTo(0, 0);
  }, [step]);

  const setAns = (id: string, val: string | string[]) =>
    setAnswers((a) => ({ ...a, [id]: val }));

  const toggleMulti = (id: string, val: string) => {
    const cur = (answers[id] as string[]) || [];
    if (val === "none") {
      setAns(id, cur.includes("none") ? [] : ["none"]);
      return;
    }
    const without = cur.filter((v) => v !== "none");
    setAns(id, without.includes(val) ? without.filter((v) => v !== val) : [...without, val]);
  };

  const renderQ = (q: Question) => {
    const curAnswer = answers[q.id];
    return (
      <div key={q.id} className="mb-10">
        <h3 className="h-display text-bone text-xl md:text-2xl mb-2 leading-snug">{q.prompt}</h3>
        {q.subtext && <p className="text-bone/50 text-sm mb-4 italic">{q.subtext}</p>}
        {q.type === "select" ? (
          <div className="grid sm:grid-cols-2 gap-2 mt-4">
            {q.options.map((o) => {
              const active = curAnswer === o.value;
              return (
                <button key={o.value} onClick={() => setAns(q.id, o.value)}
                  className={`text-left px-4 py-3 border transition-colors ${active ? "border-accent bg-accent/10 text-bone" : "border-line text-bone/80 hover:border-bone/40"}`}>
                  {active && <span className="text-accent mr-2 font-mono">▸</span>}
                  {o.label}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-2 mt-4">
            {q.options.map((o) => {
              const cur = (curAnswer as string[]) || [];
              const active = cur.includes(o.value);
              return (
                <button key={o.value} onClick={() => toggleMulti(q.id, o.value)}
                  className={`text-left px-4 py-3 border transition-colors ${active ? "border-accent bg-accent/10 text-bone" : "border-line text-bone/80 hover:border-bone/40"}`}>
                  <span className="mr-3 text-accent font-mono">{active ? "■" : "□"}</span>
                  {o.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // ── Landing ──────────────────────────────────────────────────────────────
  if (step === -1) {
    return (
      <div className="container-x py-16 md:py-24">
        <p className="eyebrow mb-4">Silent Apocalypse Simulator</p>
        <h1 className="h-display text-bone text-4xl md:text-6xl mb-6 max-w-4xl leading-tight">
          How exposed is your household<br />
          <span className="text-accent">to what is already happening?</span>
        </h1>
        <p className="text-bone/80 max-w-2xl text-lg leading-relaxed mb-6">
          31 questions across 8 systems — work, money, food, water, housing, health, legal, and community. Takes 15–20 minutes. You get a Silent Apocalypse Index score, a breakdown across all eight programs, real-world context for every number, and eight personalized next steps linked to Evolve8 resources.
        </p>
        <p className="text-bone/50 text-sm max-w-2xl mb-10">
          No account required. Completely private. Educational simulation — not a financial, legal, or medical forecast.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 max-w-3xl">
          {[
            { n: "44%", l: "of U.S. job tasks now AI-performable" },
            { n: "40%+", l: "Grocery inflation since 2019" },
            { n: "1 in 3", l: "Americans carry medical debt" },
            { n: "3 days", l: "Average grocery store inventory" },
          ].map((s) => (
            <div key={s.n} className="border border-line p-4">
              <div className="h-display text-accent text-2xl md:text-3xl">{s.n}</div>
              <div className="text-bone/50 text-xs mt-1 leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => setStep(0)} className="btn-primary">Run the Simulator (15–20 min) →</button>
          <Link href="/silent-apocalypse" className="btn-secondary">See the methodology</Link>
        </div>
      </div>
    );
  }

  // ── Timeline selection ────────────────────────────────────────────────────
  if (step === 0) {
    return (
      <div className="container-x py-16 md:py-24">
        <ProgressBar current={1} total={TOTAL_STEPS} />
        <p className="eyebrow mt-8 mb-4">Step 1 / {TOTAL_STEPS} — Timeline</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-4 max-w-3xl">
          How far ahead do you want to stress-test your household?
        </h2>
        <p className="text-bone/60 max-w-2xl mb-8 text-sm leading-relaxed">
          The 5-year window is the default. The 10–15 year windows model deeper systemic drift — the kind that builds slowly and arrives all at once. This is not a prophecy; it is a scenario.
        </p>
        <div className="flex flex-wrap gap-2 mb-10">
          {TIMELINES.map((t) => (
            <button key={t.v} onClick={() => setTimeline(t.v)}
              className={`px-5 py-3 border transition-colors ${timeline === t.v ? "border-accent bg-accent/10 text-bone" : "border-line text-bone/80"}`}>
              {t.l}
            </button>
          ))}
        </div>
        <div className="mb-10">
          <label className="block text-bone/50 text-sm mb-2">ZIP code (optional — used for regional context only)</label>
          <input value={zip} onChange={(e) => setZip(e.target.value)} placeholder="e.g. 75225" className="max-w-xs" />
        </div>
        <div className="flex gap-3">
          <button onClick={() => setStep(-1)} className="btn-secondary">Back</button>
          <button onClick={() => setStep(1)} className="btn-primary">Start →</button>
        </div>
      </div>
    );
  }

  // ── Question pages ────────────────────────────────────────────────────────
  if (step >= 1 && step <= PAGES.length) {
    const pageName = PAGES[step - 1];
    const pageQs = QUESTIONS.filter((q) => q.page === pageName);
    const isLast = step === PAGES.length;

    const PAGE_CONTEXT: Record<string, string> = {
      "Household": "We start with household basics — who you're protecting and what size of system we're assessing.",
      "Income & Work": "Income is your first line of defense. These questions measure your exposure to AI displacement and your financial runway.",
      "Food & Water": "Food and water security are the most immediate survival systems. Most households are two disruptions away from crisis.",
      "Housing & Debt": "Housing cost and debt are the two largest structural vulnerabilities for American families right now.",
      "Health & Medical": "Healthcare costs are the leading cause of financial ruin in the U.S. These questions assess your medical exposure.",
      "Legal & Documentation": "Most families experiencing institutional harm never document it. This section measures your legal preparedness and your ability to protect yourself.",
      "Digital & Community": "Platform dependence and community isolation are force multipliers for every other system failure.",
      "Already Happening": "This page matters most. What has already happened to you is direct evidence — not a forecast.",
    };

    return (
      <div className="container-x py-16 md:py-24">
        <ProgressBar current={step + 1} total={TOTAL_STEPS} />
        <div className="flex items-center gap-3 mt-8 mb-2">
          <p className="eyebrow">Section {step} of {PAGES.length}</p>
          <span className="text-bone/30 text-xs">—</span>
          <p className="text-bone/50 text-sm font-medium">{pageName}</p>
        </div>
        <p className="text-bone/40 text-sm mb-8 max-w-xl leading-relaxed">{PAGE_CONTEXT[pageName] ?? ""}</p>
        {pageName === "Already Happening" && (
          <div className="border-l-2 border-accent pl-4 mb-8">
            <p className="text-bone/70 text-sm leading-relaxed">
              This is the most important section. What has already happened to your household is direct evidence of system failure — not a prediction. Answer honestly. It only makes your score more accurate.
            </p>
          </div>
        )}
        <div className="mt-4 max-w-3xl">{pageQs.map(renderQ)}</div>
        <div className="flex justify-between mt-4">
          <button onClick={() => setStep(step - 1)} className="btn-secondary">Back</button>
          <button onClick={() => setStep(step + 1)} className="btn-primary">
            {isLast ? "Almost done →" : "Continue →"}
          </button>
        </div>
      </div>
    );
  }

  // ── Email gate ────────────────────────────────────────────────────────────
  if (step === PAGES.length + 1) {
    return (
      <div className="container-x py-16 md:py-24 max-w-2xl">
        <ProgressBar current={TOTAL_STEPS - 1} total={TOTAL_STEPS} />
        <p className="eyebrow mt-8 mb-4">Almost there — Email (optional)</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-4">Want your full report emailed to you?</h2>
        <p className="text-bone/70 mb-6 text-sm leading-relaxed">
          We will send your Silent Apocalypse Index, all eight system scores, the methodology behind them, and your eight personalized next steps. We never sell your email. Skip to go straight to your results.
        </p>
        <label className="block text-bone/50 text-sm mb-2">Email (optional)</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="mb-6 max-w-sm" />
        <div className="flex flex-wrap gap-3">
          <button onClick={() => setStep(step - 1)} className="btn-secondary">Back</button>
          <button onClick={() => setStep(step + 1)} className="btn-secondary">Show results without email</button>
          <button onClick={() => setStep(step + 1)} className="btn-primary" disabled={!email}>Email me & show results →</button>
        </div>
      </div>
    );
  }

  // ── RESULTS ───────────────────────────────────────────────────────────────
  const subLabels: Record<keyof SubScores, string> = {
    work: "Work / AI", purchasingPower: "Purchasing power", food: "Food & water",
    housing: "Housing / land", medical: "Medical & health", legal: "Legal & docs",
    digital: "Digital", skills: "Skills & community",
  };

  const programMap: Record<keyof SubScores, { href: string; label: string }> = {
    work: { href: "/work", label: "Work8" },
    purchasingPower: { href: "/money/families", label: "Macro8" },
    food: { href: "https://www.vivinatefarms.org", label: "Vivinate Farms" },
    housing: { href: "/land", label: "Land Access" },
    medical: { href: "/medical/way-stations", label: "Way Stations" },
    legal: { href: "/legal", label: "Legal Action" },
    digital: { href: "/education-library", label: "Education Library" },
    skills: { href: "/skills", label: "Skills Academy" },
  };

  const narrative = BUCKET_NARRATIVE[result.bucket] ?? BUCKET_NARRATIVE["Stretched"];

  return (
    <div className="container-x py-12 md:py-20 max-w-5xl">

      {/* ── Score hero ──────────────────────────────────────────────────── */}
      <div className="border border-line bg-[#080808] p-8 md:p-12 mb-8">
        <p className="eyebrow mb-4">Your Silent Apocalypse Index</p>
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
          <div>
            <div className={`text-[100px] md:text-[140px] h-display leading-none ${result.bucketColor}`}>
              {result.index}
            </div>
            <p className="text-bone/40 text-sm font-mono uppercase tracking-widest mb-2">out of 100 · {timeline} window</p>
            <p className={`h-display text-2xl md:text-3xl ${result.bucketColor} mb-3`}>{result.bucket}</p>
            <div className="flex gap-2 flex-wrap">
              {result.top3.map((t) => (
                <span key={t.key} className="text-xs font-mono border border-line px-2 py-1 text-bone/50">
                  {subLabels[t.key]} · {t.score}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="h-display text-bone text-xl md:text-2xl mb-3 leading-snug">{narrative.headline}</h2>
            <p className="text-bone/70 leading-relaxed text-sm mb-4">{narrative.body}</p>
            <p className="text-bone/40 text-xs font-mono">
              This is a simulation, not a forecast. See <Link href="/disclaimers" className="text-accent hover:underline">full disclaimers</Link>.
            </p>
          </div>
        </div>
      </div>

      {/* ── National context stats ──────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {[
          { n: "$4,200", l: "Annual purchasing power lost since 2020 per household" },
          { n: "44%", l: "of U.S. job tasks now AI-performable — up from 9% in 2018" },
          { n: "530K", l: "U.S. bankruptcies per year caused by medical bills" },
          { n: "1 in 10", l: "Americans who experience institutional harm ever documents it" },
        ].map((s) => (
          <div key={s.n} className="border border-line bg-[#060606] p-4">
            <div className="h-display text-accent text-xl md:text-2xl mb-1">{s.n}</div>
            <div className="text-bone/45 text-xs leading-snug">{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── Eight system breakdown (expandable) ────────────────────────── */}
      <div className="mb-12">
        <div className="flex items-baseline gap-3 mb-5">
          <h3 className="h-display text-bone text-2xl">Your eight system scores</h3>
          <span className="text-bone/35 text-sm font-mono">click any row to expand</span>
        </div>

        <div className="space-y-2">
          {(Object.keys(result.sub) as (keyof SubScores)[]).map((k) => {
            const v = Math.round(result.sub[k]);
            const barColor = v < 35 ? "bg-emerald-500" : v < 55 ? "bg-amber-500" : v < 75 ? "bg-orange-500" : "bg-accent";
            const labelColor = v < 35 ? "text-emerald-400" : v < 55 ? "text-amber-400" : v < 75 ? "text-orange-400" : "text-accent";
            const sys = SYSTEM_DATA[k];
            const isOpen = expandedSystem === k;
            const personalInsight = getPersonalInsight(k, answers as Answers, v);

            return (
              <div key={k} className={`border transition-colors ${isOpen ? "border-accent/40 bg-[#0a0a0a]" : "border-line bg-[#060606] hover:border-line/60"}`}>
                {/* Collapsed row */}
                <button
                  className="w-full text-left px-5 py-4"
                  onClick={() => setExpandedSystem(isOpen ? null : k)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-bone/30 font-mono text-lg w-6 shrink-0">{sys.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-bone/85 text-sm font-medium">{subLabels[k]}</span>
                        <div className="flex items-center gap-3">
                          <span className={`h-display text-lg font-bold ${labelColor}`}>{v}</span>
                          <span className="text-bone/30 text-xs font-mono">{isOpen ? "▴" : "▾"}</span>
                        </div>
                      </div>
                      <div className="h-1.5 bg-[#111] border border-line/50">
                        <div className={`h-full ${barColor} transition-all`} style={{ width: `${v}%` }} />
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <div className="px-5 pb-6 pt-1 border-t border-line/30">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="bg-accent/8 border border-accent/20 px-4 py-3 mb-4">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-accent mb-1">Did you know</p>
                          <p className="text-bone/85 text-sm font-medium leading-snug">{sys.stat}</p>
                          <p className="text-bone/50 text-xs mt-2 leading-relaxed">{sys.statDetail}</p>
                        </div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-bone/35 mb-1">Why we asked these questions</p>
                        <p className="text-bone/65 text-sm leading-relaxed">{sys.whyWeAsked}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-bone/35 mb-2">What your answers reveal</p>
                        <div className={`border-l-2 pl-4 mb-4 ${v >= 70 ? "border-accent" : v >= 45 ? "border-amber-500" : "border-emerald-500"}`}>
                          <p className="text-bone/80 text-sm leading-relaxed">{personalInsight}</p>
                        </div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-bone/35 mb-2">Evolve8 program for this system</p>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href={sys.programHref}
                          {...(sys.programHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="block border border-line hover:border-accent px-4 py-3 transition-colors group">
                          <p className="text-accent text-xs font-mono mb-0.5">{sys.programName}</p>
                          <p className="text-bone/70 text-xs group-hover:text-bone transition-colors">
                            {v >= 70 ? "Urgent — start here →" : v >= 45 ? "Address this system →" : "Maintain and build →"}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 5-Year Timeline ─────────────────────────────────────────────── */}
      <div className="mb-12">
        <div className="flex items-baseline gap-4 mb-5">
          <h3 className="h-display text-bone text-2xl">Your 5-year timeline</h3>
        </div>

        {/* Toggle */}
        <div className="flex gap-1 mb-6 border border-line w-fit">
          <button
            onClick={() => setTimelineMode("without")}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${timelineMode === "without" ? "bg-accent text-white" : "text-bone/50 hover:text-bone"}`}
          >
            Without action
          </button>
          <button
            onClick={() => setTimelineMode("with")}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${timelineMode === "with" ? "bg-emerald-700 text-white" : "text-bone/50 hover:text-bone"}`}
          >
            With Evolve8
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-3">
          {TIMELINE_ROWS.map((row, i) => (
            <div key={i}
              className={`border p-5 transition-all ${timelineMode === "without" ? "border-accent/30 bg-accent/4" : "border-emerald-800/50 bg-emerald-950/20"}`}>
              <p className={`text-[10px] font-mono uppercase tracking-widest mb-3 ${timelineMode === "without" ? "text-accent/70" : "text-emerald-400/70"}`}>
                {row.year}
              </p>
              <p className="text-bone/75 text-xs leading-relaxed">
                {timelineMode === "without" ? row.without : row.withEvolve8}
              </p>
            </div>
          ))}
        </div>

        <p className="text-bone/30 text-xs mt-3 font-mono">
          Timeline is illustrative based on current national trends, not a prediction for your household specifically.
        </p>
      </div>

      {/* ── First eight moves ────────────────────────────────────────────── */}
      <div className="mb-12">
        <h3 className="h-display text-bone text-2xl mb-2">Your first eight moves</h3>
        <p className="text-bone/50 text-sm mb-6">
          Based on your three highest-exposure systems: {result.top3.map((t) => subLabels[t.key]).join(", ")}.
          Each step links directly to the relevant Evolve8 program.
        </p>
        <ol className="space-y-2 max-w-3xl">
          {moves.map((m: SimMove, i: number) => (
            <li key={i} className="flex gap-4 p-4 border border-line bg-[#060606] hover:bg-[#0a0a0a] transition-colors">
              <span className="text-accent font-mono text-sm shrink-0 mt-0.5 w-7">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex flex-col gap-2 min-w-0">
                <span className="text-bone/85 text-sm leading-relaxed">{m.text}</span>
                {m.href && (
                  m.href.startsWith("http") ? (
                    <a href={m.href} target="_blank" rel="noopener noreferrer" className="text-accent text-xs font-mono hover:underline self-start">
                      {m.cta ?? "Learn more →"}
                    </a>
                  ) : (
                    <Link href={m.href} className="text-accent text-xs font-mono hover:underline self-start">
                      {m.cta ?? "Learn more →"}
                    </Link>
                  )
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* ── All eight programs ───────────────────────────────────────────── */}
      <div className="mb-10">
        <h3 className="h-display text-bone text-xl mb-4">All eight Evolve8 programs</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {(Object.keys(programMap) as (keyof SubScores)[]).map((k) => {
            const p = programMap[k];
            const v = Math.round(result.sub[k]);
            const barColor = v < 35 ? "border-l-emerald-500" : v < 55 ? "border-l-amber-500" : v < 75 ? "border-l-orange-500" : "border-l-accent";
            const cls = `card block group border-l-2 ${barColor} py-3`;
            const inner = <>
              <p className="text-bone/35 text-[10px] font-mono mb-0.5">{subLabels[k]}</p>
              <h4 className="h-display text-bone text-sm group-hover:text-accent transition-colors">{p.label}</h4>
              <p className="text-bone/35 text-xs mt-1 font-mono">Score: {v}</p>
            </>;
            return p.href.startsWith("http") ? (
              <a key={k} href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
            ) : (
              <Link key={k} href={p.href} className={cls}>{inner}</Link>
            );
          })}
        </div>
      </div>

      {/* ── CTA block ─────────────────────────────────────────────────────── */}
      <div className="border border-line bg-[#080808] p-6 md:p-8 mb-8">
        <h3 className="h-display text-bone text-xl mb-2">What happens next is up to you.</h3>
        <p className="text-bone/65 text-sm leading-relaxed mb-6 max-w-2xl">
          This score reflects where your household stands right now. Every point you bring it down is real protection you have built. The tools, programs, and resources to do that are on this site — and they're designed for people exactly like you.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/land" className="btn-primary">Apply for Land Access →</Link>
          <Link href="/work/apply" className="btn-secondary">Take Work8 Intake</Link>
          <Link href="/legal" className="btn-secondary">Document Harm</Link>
          <Link href="/contact" className="btn-secondary">Talk to a Rep</Link>
        </div>
      </div>

      {/* ── Run again ────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-3">
        <button onClick={() => { setStep(-1); setAnswers({}); setExpandedSystem(null); }} className="btn-secondary">
          Run again
        </button>
        <Link href="/silent-apocalypse" className="btn-secondary">Methodology</Link>
        <Link href="/donate" className="btn-primary">Support the Campaign →</Link>
      </div>

      <p className="mt-8 text-bone/25 text-xs max-w-2xl leading-relaxed">
        Educational simulation only. Not financial, legal, or medical advice. Results are not a forecast or prediction of any specific event. See <Link href="/disclaimers" className="text-accent hover:underline">full disclaimers</Link>.
      </p>
    </div>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.min((current / total) * 100, 100);
  return (
    <div className="h-0.5 bg-[#151515] border-b border-line max-w-2xl">
      <div className="h-full bg-accent transition-all duration-300" style={{ width: `${pct}%` }} />
    </div>
  );
}
