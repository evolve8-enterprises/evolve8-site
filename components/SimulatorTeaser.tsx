import Link from "next/link";

export function SimulatorTeaser() {
  return (
    <section className="border-t border-line bg-[#070707]">
      <div className="container-x py-20 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="eyebrow mb-2">The Silent Apocalypse Simulator</p>
          <h2 className="h-display text-3xl md:text-5xl mb-6">
            What happens if the dollar stops protecting your family?
          </h2>
          <p className="text-bone/80 text-lg leading-relaxed mb-6 h-serif">
            Run a 5-minute simulation across food, water, work, housing, debt, health,
            digital dependence, and community resilience. Receive your <span className="text-accent">Silent Apocalypse Index</span>,
            your eight system scores, and your first seven moves.
          </p>
          <p className="text-bone/60 text-sm mb-8 leading-relaxed">
            Educational simulation. Not a forecast. Not financial, legal, or medical advice.
          </p>
          <Link href="/simulator" className="btn-primary">Silent Apocalypse Simulator →</Link>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <span className="tag">Live preview</span>
            <span className="font-mono text-xs text-bone/50">SAI v0.1</span>
          </div>
          <div className="space-y-4">
            {[
              { k: "Work / AI displacement", v: 78 },
              { k: "Purchasing power", v: 72 },
              { k: "Food dependence", v: 65 },
              { k: "Housing burden", v: 71 },
              { k: "Debt / health system", v: 69 },
              { k: "Community resilience", v: 58 },
            ].map((row) => (
              <div key={row.k}>
                <div className="flex justify-between text-xs text-bone/70 font-mono mb-1">
                  <span>{row.k}</span>
                  <span className="text-accent">{row.v}/100</span>
                </div>
                <div className="h-1 bg-[#1a1a1a]">
                  <div className="h-full bg-accent" style={{ width: `${row.v}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-line">
            <div className="flex items-baseline gap-3">
              <span className="text-bone/60 text-xs font-mono uppercase">Index</span>
              <span className="h-display text-5xl text-accent">71</span>
              <span className="text-bone/60 text-xs">/100 · Vulnerable</span>
            </div>
            <p className="text-bone/60 text-xs mt-2">Sample household. Run yours to see your score.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
