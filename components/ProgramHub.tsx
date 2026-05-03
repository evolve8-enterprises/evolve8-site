import Link from "next/link";
import { PageHeader, Section, CalloutBand } from "./PageHeader";

export type Module = { name: string; bullets: string[] };

export function ProgramHub({
  programName,
  hero,
  lede,
  whatItIs,
  modules,
  ctas,
  disclaimer,
  crumbHref,
  externalSite,
}: {
  programName: string;
  hero: string;
  lede: string;
  whatItIs: string;
  modules: Module[];
  ctas: { label: string; href: string; primary?: boolean; external?: boolean }[];
  disclaimer?: string;
  crumbHref: string;
  externalSite?: { href: string; label: string; description?: string };
}) {
  return (
    <>
      <PageHeader
        eyebrow={programName}
        title={hero}
        lede={lede}
        crumbs={[{ href: "/", label: "Home" }, { href: crumbHref, label: programName }]}
      />

      {externalSite && (
        <div className="container-x pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-accent/30 bg-accent/5 px-5 py-4">
            <div>
              <p className="text-[10px] font-mono text-accent/70 uppercase tracking-widest mb-1">Dedicated Website</p>
              <p className="text-bone/80 text-sm leading-relaxed">
                {externalSite.description ?? externalSite.label} —{" "}
                <a href={externalSite.href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-mono">
                  {externalSite.href.replace("https://", "")}
                </a>
              </p>
            </div>
            <a href={externalSite.href} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm shrink-0">
              {externalSite.label} ↗
            </a>
          </div>
        </div>
      )}

      <Section>
        <p className="eyebrow mb-4">What it is</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">{programName}.</h2>
        <p className="text-bone/85 max-w-3xl leading-relaxed h-serif text-lg">{whatItIs}</p>
        {disclaimer && (
          <p className="mt-6 text-bone/55 text-sm max-w-3xl border-l border-accent pl-4">{disclaimer}</p>
        )}
      </Section>

      <Section>
        <p className="eyebrow mb-4">Modules</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <div key={m.name} className="card">
              <h3 className="h-display text-bone text-xl mb-3">{m.name}</h3>
              <ul className="space-y-2 text-bone/75 text-sm">
                {m.bullets.map((b) => <li key={b}>· {b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section bordered={false}>
        <div className="flex flex-wrap gap-3">
          {ctas.map((c) =>
            c.external ? (
              <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer"
                className={c.primary ? "btn-primary" : "btn-secondary"}>
                {c.label} ↗
              </a>
            ) : (
              <Link key={c.href} href={c.href} className={c.primary ? "btn-primary" : "btn-secondary"}>
                {c.label} {c.primary ? "→" : ""}
              </Link>
            )
          )}
        </div>
      </Section>
    </>
  );
}
