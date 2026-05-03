import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 gridline opacity-40 pointer-events-none" />
      <div className="container-x relative pt-16 pb-14 md:pt-24 md:pb-20">

        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="tag">Public Transparency Campaign</span>
          <span className="tag">Evolve8 Enterprises</span>
        </div>

        <h1 className="h-display text-bone text-[40px] sm:text-[58px] md:text-[80px] lg:text-[96px] leading-[0.97] max-w-5xl mb-6">
          You Are Not<br className="hidden sm:block" />
          <span className="text-accent"> Imagining It.</span>
        </h1>

        <p className="max-w-2xl text-bone/80 text-lg md:text-xl leading-relaxed mb-10">
          Groceries, rent, healthcare, jobs, debt, money — the systems American families were
          promised would hold are failing at the same time. Evolve8 Enterprises documents it,
          builds the alternatives, and helps families prepare.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/simulator" className="btn-primary">Run the Simulator →</Link>
          <Link href="/silent-apocalypse" className="btn-secondary">Why This Exists</Link>
          <Link href="/legal" className="btn-secondary">Document Harm</Link>
        </div>
      </div>
    </section>
  );
}
