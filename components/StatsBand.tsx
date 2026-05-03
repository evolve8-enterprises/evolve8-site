import Link from "next/link";

const STATS = [
  { num: "$35T+", label: "U.S. national debt — growing $1T every 100 days" },
  { num: "40%+", label: "Grocery price increase since 2020" },
  { num: "#1", label: "Medical debt — leading cause of personal bankruptcy" },
  { num: "249", label: "Years — America at the civilizational threshold" },
  { num: "300M", label: "Jobs projected at risk of AI displacement this decade" },
];

export function StatsBand() {
  return (
    <section className="border-b border-line bg-[#050505]">
      <div className="container-x py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
          {STATS.map((s) => (
            <div key={s.num}>
              <div className="h-display text-accent text-2xl md:text-3xl mb-1">{s.num}</div>
              <div className="text-bone/50 text-xs leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="border-t border-line pt-8 grid md:grid-cols-2 gap-10">
          <div className="space-y-3 text-bone/70 text-sm leading-relaxed">
            <p>
              No civilization in recorded history has lasted longer than 400 years without structural collapse.
              America is 249 years old. The collapse does not announce itself — it arrives through decades of
              compounding failures in food, housing, healthcare, money, and work.
            </p>
            <p>
              The ecological toll is already visible: topsoil with 60 years of capacity remaining, a dollar
              that has lost 97% of its purchasing power since 1913, and AI disruption arriving faster than
              new work pathways can be built.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <p className="text-bone/50 text-xs font-mono uppercase tracking-widest">What Evolve8 does</p>
            <ul className="space-y-2 text-bone/75 text-sm">
              <li>· Documents the collapse with public, verifiable data</li>
              <li>· Builds alternatives: food, work, money, land, legal access</li>
              <li>· Gives families tools to measure and lower their exposure</li>
              <li>· Connects harm to accountability through the Public Action Network</li>
            </ul>
            <Link href="/silent-apocalypse" className="text-accent text-xs font-mono mt-2 hover:underline">
              Read the full methodology →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
