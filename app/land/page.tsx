import Link from "next/link";
import { PageHeader, Section, CardLink } from "@/components/PageHeader";

export const metadata = {
  title: "Land, Property & Campus Competition — Evolve8 Enterprises",
  description: "A merit-based two-track residency pathway. Live + Work or Just Live. Not a lottery, drawing, sweepstakes, or guaranteed transfer of property.",
};

export default function LandPage() {
  return (
    <>
      <PageHeader
        eyebrow="Land, Property & Campus Competition"
        title="A merit-based residency pathway."
        accent="merit-based"
        lede="Two tracks, both merit-based. Track 1 places families on a working campus to live and contribute to Vivinate Farms. Track 2 places families in stable housing without a work obligation. Selection is by published criteria and qualified evaluation. No chance element. Not a lottery."
        crumbs={[{ href: "/", label: "Home" }, { href: "/land", label: "Land Competition" }]}
      />

      <Section>
        <p className="eyebrow mb-4">Two tracks</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <p className="eyebrow mb-2">Track 1</p>
            <h3 className="h-display text-bone text-2xl mb-3">Live + Work</h3>
            <p className="text-bone/80 mb-4 leading-relaxed">
              For families and individuals who want to live on a working campus and contribute to
              Vivinate Farms or another Evolve8 program. Stipend, housing, and Resilience Points
              attached. Twelve-month initial term, renewable on review.
            </p>
            <ul className="space-y-1 text-bone/70 text-sm mb-6">
              <li>· Selection: documented skill in growing, building, teaching, or care</li>
              <li>· Selection: completed Skills Academy modules or equivalent</li>
              <li>· Selection: written one-page plan and reviewer interview</li>
            </ul>
            <Link href="/land#apply" className="btn-primary text-sm">Apply Track 1 →</Link>
          </div>
          <div className="card">
            <p className="eyebrow mb-2">Track 2</p>
            <h3 className="h-display text-bone text-2xl mb-3">Just Live</h3>
            <p className="text-bone/80 mb-4 leading-relaxed">
              For families and individuals who need stable housing without a work obligation. Selection
              prioritizes documented harm (Public Action Network), local roots, and dependents in the
              household. No stipend; subsidized rent.
            </p>
            <ul className="space-y-1 text-bone/70 text-sm mb-6">
              <li>· Selection: documented harm filed in the Public Action Network</li>
              <li>· Selection: dependents (children, elders, disabled adults) in household</li>
              <li>· Selection: regional roots and stated intent to remain</li>
            </ul>
            <Link href="/land#apply" className="btn-primary text-sm">Apply Track 2 →</Link>
          </div>
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4">How selection works</p>
        <ol className="space-y-4 max-w-3xl text-bone/85">
          <li><span className="text-accent font-mono mr-3">01</span> You submit a complete application.</li>
          <li><span className="text-accent font-mono mr-3">02</span> A first reviewer scores against published criteria.</li>
          <li><span className="text-accent font-mono mr-3">03</span> A second reviewer independently scores.</li>
          <li><span className="text-accent font-mono mr-3">04</span> Top-scoring applicants enter a structured interview.</li>
          <li><span className="text-accent font-mono mr-3">05</span> A selection panel makes a final decision against rubric.</li>
        </ol>
        <p className="mt-6 text-bone/55 text-sm max-w-3xl">
          The Land, Property & Campus Competition is a merit-based two-track residency pathway. It is
          not a lottery, drawing, sweepstakes, raffle, or guaranteed transfer of property. No chance
          element determines participation or selection. Participation does not guarantee admission to
          either track.
        </p>
      </Section>

      <Section id="apply">
        <p className="eyebrow mb-4">Apply</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-4">Applications open in late 2026.</h2>
        <p className="text-bone/80 max-w-3xl mb-6">
          Join the waitlist to be notified when applications open. We will send the published criteria,
          the rubric, and the application form so you can prepare.
        </p>
        <Link href="/contact" className="btn-primary">Join the waitlist →</Link>
      </Section>
    </>
  );
}
