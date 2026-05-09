import Link from "next/link";

const SESSIONS = [
  { date: "May 14", time: "1:00 PM CST" },
  { date: "May 16", time: "3:30 PM CST" },
  { date: "May 20", time: "10:00 AM CST" },
  { date: "May 24", time: "12:00 PM CST" },
];

export function JobFairBand() {
  return (
    <section className="border-b border-line bg-[#080808] relative overflow-hidden">
      {/* Red top bar */}
      <div className="h-1 w-full bg-accent" />

      <div className="container-x py-14 md:py-18">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left: copy */}
          <div>
            <p className="eyebrow mb-4">Now Hiring · Virtual Job Fair · May 2026</p>
            <h2 className="h-display text-bone text-3xl md:text-4xl lg:text-5xl mb-5 leading-[1.02]">
              We&apos;re hiring. Join us live{" "}
              <span className="text-accent">this May.</span>
            </h2>
            <p className="text-bone/75 leading-relaxed mb-5 max-w-xl">
              Evolve8 is holding four virtual job fair sessions in May 2026. Open roles span
              farm operations, campus build-out, skills facilitation, logistics, admin, and
              content — with wages, <strong className="text-bone">free on-campus housing</strong>,{" "}
              <strong className="text-bone">free food through Vivinate Farms</strong>, and a
              structured path to <strong className="text-bone">your own land</strong>.
            </p>
            <p className="text-bone/50 text-sm mb-8">
              Full platform participation is required for applications to be considered.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/work/virtual-job-fair" className="btn-primary">
                Reserve Your Spot →
              </Link>
              <Link href="/work/virtual-job-fair#sessions" className="btn-secondary">
                View Session Dates
              </Link>
            </div>
          </div>

          {/* Right: session grid */}
          <div>
            <p className="text-bone/40 text-xs font-mono uppercase tracking-widest mb-4">
              Available Sessions
            </p>
            <div className="grid grid-cols-2 gap-3">
              {SESSIONS.map((s) => (
                <Link
                  key={s.date}
                  href="/work/virtual-job-fair"
                  className="card group hover:border-accent"
                >
                  <p className="h-display text-bone text-xl group-hover:text-accent transition-colors">
                    {s.date}
                  </p>
                  <p className="text-bone/50 text-sm font-mono mt-1">{s.time}</p>
                  <p className="text-accent text-xs font-mono mt-3">Reserve →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
