import Link from "next/link";

export function LandCompetitionSection() {
  return (
    <section className="border-t border-b border-line bg-[#0a0a0a]">
      <div className="container-x py-20">
        <p className="eyebrow mb-4">Land Access Competition</p>
        <h2 className="h-display text-bone text-3xl md:text-5xl mb-4 max-w-4xl">
          Two Tracks to <span className="text-accent">Land Access.</span>
        </h2>
        <p className="text-bone/75 max-w-3xl mb-12 text-lg leading-relaxed h-serif">
          A merit-based competition with two residency pathways — for people who want to build alongside
          Evolve8 Enterprises, and for people who simply need stable land, community, and food access.
          Not a lottery. Not a guarantee. A pathway.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="card border-l-2 border-accent">
            <p className="eyebrow mb-2">Track 1</p>
            <h3 className="h-display text-bone text-2xl mb-3">Live + Work</h3>
            <p className="text-bone/80 leading-relaxed mb-4">
              For people and families who want to live on an Evolve8 Enterprises campus and help build
              the ecosystem through paid work — food systems, land stewardship, education, operations,
              business development, or community support.
            </p>
            <ul className="space-y-1.5 text-bone/65 text-sm mb-6">
              <li>· Land access pathway with housing and stipend</li>
              <li>· Paid roles in food, education, operations, and more</li>
              <li>· Resilience Points + Skills Academy integration</li>
              <li>· Potential long-term land stewardship pathway</li>
              <li>· Future cooperative ownership pathway if legally structured</li>
            </ul>
            <Link href="/land#apply" className="btn-primary text-sm">Apply — Live + Work →</Link>
          </div>

          <div className="card border-l-2 border-line">
            <p className="eyebrow mb-2">Track 2</p>
            <h3 className="h-display text-bone text-2xl mb-3">Just Live</h3>
            <p className="text-bone/80 leading-relaxed mb-4">
              For people and families seeking stable land and community access, food support, resilience
              education, and a chance to rebuild — without being required to work directly for
              Evolve8 Enterprises.
            </p>
            <ul className="space-y-1.5 text-bone/65 text-sm mb-6">
              <li>· Campus residency pathway with subsidized housing</li>
              <li>· Food access and community growing systems</li>
              <li>· Resilience education and AI health guidance</li>
              <li>· Prioritized for documented harm and families with dependents</li>
              <li>· Competition entry — finalist cohort selected by rubric</li>
            </ul>
            <Link href="/land#apply" className="btn-primary text-sm">Apply — Just Live →</Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/land" className="btn-secondary text-sm">Read Prize Rules &amp; Criteria</Link>
          <Link href="/sponsor" className="btn-secondary text-sm">Sponsor a Family</Link>
          <Link href="/land" className="btn-secondary text-sm">Learn About the Competition →</Link>
        </div>

        <p className="mt-8 text-bone/40 text-xs max-w-3xl">
          The Land, Property &amp; Campus Competition is a merit-based two-track residency pathway. It is
          not a lottery, drawing, sweepstakes, raffle, or guaranteed transfer of property. Participation
          does not guarantee admission. Do not promise guaranteed free land. Use language like land access
          pathway, competition entry, finalist cohort, residency pathway.
        </p>
      </div>
    </section>
  );
}
