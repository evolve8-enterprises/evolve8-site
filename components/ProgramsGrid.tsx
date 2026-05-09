"use client";
import Link from "next/link";

const PROGRAMS = [
  { num: "01", title: "Silent Apocalypse Campaign", desc: "Public transparency, simulator, and risk index documenting the civilizational collapse.", href: "/silent-apocalypse" },
  { num: "02", title: "Public Action & Legal Education Network", desc: "Search what failed you. Document harm across 12 categories nationally. Not legal advice.", href: "/legal" },
  { num: "03", title: "Vivinate Farms — Food, Water & Environment", desc: "Fiscally sponsored nonprofit arm building family resilience and youth education.", href: "/food", externalHref: "https://www.vivinatefarms.org" },
  { num: "04", title: "Macro8 — Open Financial Intelligence", desc: "Open-source financial modeling subnet with a TAO/Bittensor donation rail.", href: "/money/whitepaper" },
  { num: "05", title: "Work8 — Human Value Labor Network", desc: "Independent work pathways, lead generation, and campus employment. Work for yourself.", href: "/work" },
  { num: "06", title: "Resilience Points & Skills Academy", desc: "Learn the systems. Build the skills. Earn access. Non-cash participation credits.", href: "/skills" },
  { num: "07", title: "Land, Property & Campus Competition", desc: "Two merit-based tracks: Live + Work, or Just Live. Phased pathway. Not a lottery.", href: "/land" },
  { num: "08", title: "Global Resilience Expansion", desc: "Mexico bridge, then Caribbean, Latin America, Africa, India, Asia.", href: "/about" },
];

export function ProgramsGrid() {
  return (
    <section className="container-x py-20 border-t border-line">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="eyebrow mb-2">Eight Integrated Programs</p>
          <h2 className="h-display text-3xl md:text-5xl">Awareness → Documentation → Education → Work → Financial Intelligence → Skills → Land → Global Scale</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROGRAMS.map((p) => (
          <div key={p.num} className="card group relative">
            {/* Stretched invisible link covers the whole card for internal navigation */}
            <Link href={p.href} className="absolute inset-0" aria-label={p.title} />
            <div className="flex items-start justify-between mb-6">
              <span className="tag">Program {p.num}</span>
              <span className="text-accent text-lg group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <h3 className="h-display text-lg mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
            <p className="text-sm text-bone/70 leading-relaxed">{p.desc}</p>
            {p.externalHref && (
              <a href={p.externalHref} target="_blank" rel="noopener noreferrer"
                className="relative z-10 mt-3 inline-block text-[10px] font-mono text-accent/60 hover:text-accent transition-colors">
                {p.externalHref.replace("https://", "")} ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
