import Link from "next/link";
import { PageHeader, Section, CardLink, CalloutBand } from "@/components/PageHeader";

export const metadata = {
  title: "The Silent Apocalypse — Evolve8 Enterprises",
  description:
    "The Silent Apocalypse is the ongoing collapse of the systems families were told to trust. Educational simulation, public documentation, and a path forward.",
};

const COLLAPSES = [
  { name: "Food", slug: "/food", note: "Industrial food system, ultra-processed dependence, regional fragility." },
  { name: "Housing", slug: "/land", note: "Median home unaffordable in every metro; rent-to-income above 30%." },
  { name: "Healthcare", slug: "/medical", note: "Medical debt is the #1 cause of personal bankruptcy in the U.S." },
  { name: "Education", slug: "/skills", note: "Outcomes decoupled from cost; debt without skill transfer." },
  { name: "Jobs", slug: "/work", note: "AI displacement, contract churn, vanishing entry-level rungs." },
  { name: "Debt & Insurance", slug: "/legal", note: "Predatory pricing, denied claims, opaque dispute paths." },
  { name: "Internet", slug: "/legal/categories", note: "Algorithmic exploitation, identity theft, platform capture." },
  { name: "Money", slug: "/money", note: "Inflation, currency debasement, wage stagnation, savings erosion." },
];

export default function SilentApocalypsePage() {
  return (
    <>
      <PageHeader
        eyebrow="A Public Transparency Campaign"
        title="The Silent Apocalypse."
        accent="Silent Apocalypse"
        lede="It is not a forecast. It is a name for what has already happened to your parents, to you, and to your kids — the slow, systemic collapse of the institutions families were told to trust. We are not predicting it. We are documenting it, publicly, in plain language, and building what comes next."
        crumbs={[{ href: "/", label: "Home" }, { href: "/silent-apocalypse", label: "Silent Apocalypse" }]}
      />

      <Section>
        <p className="eyebrow mb-4">What it is</p>
        <h2 className="h-display text-bone text-3xl md:text-5xl mb-8 max-w-4xl">
          You are not imagining it. <span className="text-accent">It is already here.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-bone/80 leading-relaxed">
          <p className="h-serif text-lg">
            The Silent Apocalypse is the active collapse of food, housing, healthcare, education, jobs,
            debt, insurance, internet, money, and public infrastructure. It does not arrive on a single
            day. It is generational. It compounds. It hides behind paperwork, fine print, denial letters,
            and the assumption that someone else is in charge.
          </p>
          <p>
            Evolve8 Enterprises is a private public-interest company. The Silent Apocalypse Campaign is its
            flagship transparency project — a simulator, a public documentation network, and eight
            programs (legal, medical, food, money, work, land, skills, and education library) designed to
            help families measure harm, document it, and replace what failed with something durable.
          </p>
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4">Eight Systems in Active Collapse</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-10 max-w-4xl">
          Each one looks personal. Together they are <span className="text-accent">structural</span>.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {COLLAPSES.map((c) => (
            <Link key={c.name} href={c.slug} className="card block group">
              <h3 className="h-display text-bone text-xl mb-2 group-hover:text-accent transition-colors">
                {c.name}
              </h3>
              <p className="text-bone/60 text-sm leading-relaxed">{c.note}</p>
              <div className="mt-4 text-accent text-xs font-mono">Open program →</div>
            </Link>
          ))}
        </div>
      </Section>

      <CalloutBand
        title="Run the 5-Minute Simulator."
        body="24 questions. Plain language. You get a Silent Apocalypse Index Score and a personalized 7-day starter plan — privacy-first, no account required."
        ctaHref="/simulator"
        ctaLabel="Start Simulator"
      />

      <Section>
        <p className="eyebrow mb-4">The Public Action Network</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          Documentation is the first act of resistance.
        </h2>
        <p className="text-bone/80 max-w-3xl leading-relaxed h-serif text-lg">
          The Public Action Network is a documentation pathway across twelve harm categories — wage
          theft, denied medical claims, predatory debt, eviction abuse, identity theft, algorithmic
          discrimination, and more. You file a structured report; a trained reviewer triages it; we
          publish anonymized patterns so the system can be seen.
        </p>
        <p className="mt-4 text-bone/60 text-sm max-w-3xl">
          The Public Action Network is public-interest documentation and education. It is not legal
          advice and does not guarantee eligibility, payouts, or settlements.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/legal" className="btn-primary">Open Public Action Network →</Link>
          <Link href="/legal/disclaimer" className="btn-secondary">Read the Disclaimer</Link>
        </div>
      </Section>

      <Section bordered={false}>
        <div className="grid md:grid-cols-3 gap-6">
          <CardLink href="/press" eyebrow="Media" title="Press kit & coverage">
            Founder bio, key statistics, downloadable assets, embargoed briefings.
          </CardLink>
          <CardLink href="/sponsor" eyebrow="Partners" title="Sponsor a category">
            Local businesses, foundations, and aligned brands underwrite specific harm categories.
          </CardLink>
          <CardLink href="/investors" eyebrow="Capital" title="Investor briefing">
            Macro8 thesis, Vivinate Farms expansion, Work8 placement engine, Evolve8 platform.
          </CardLink>
        </div>
      </Section>
    </>
  );
}
