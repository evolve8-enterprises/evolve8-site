const ITEMS = [
  { label: "Groceries", line: "outpacing paychecks every year" },
  { label: "Rent", line: "rising faster than wages in every metro" },
  { label: "Degrees", line: "losing market value while debt grows" },
  { label: "Jobs", line: "automating without replacement rungs" },
  { label: "Insurance", line: "becoming unaffordable or inaccessible" },
  { label: "Healthcare", line: "delayed or skipped because of cost" },
  { label: "Internet", line: "controlled, metered, and monetized against you" },
  { label: "Debt", line: "compounding across generations" },
  { label: "Public benefits", line: "eroding while need rises" },
  { label: "Community", line: "thinned by relocation and platform capture" },
];

export function InheritedCollapses() {
  return (
    <section className="container-x py-20 border-t border-line">
      <p className="eyebrow mb-3">10 Systems in Active Collapse</p>
      <h2 className="h-display text-3xl md:text-5xl mb-12 max-w-4xl">
        These are not personal failures. <span className="text-accent">They are connected symptoms of a civilization past its peak.</span>
      </h2>
      <ul className="grid md:grid-cols-2 gap-x-12 gap-y-1 border-t border-line">
        {ITEMS.map((it, i) => (
          <li key={it.label} className="flex items-baseline gap-6 py-5 border-b border-line">
            <span className="font-mono text-xs text-accent w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <span className="h-display text-2xl md:text-3xl">{it.label}</span>
            <span className="text-bone/70 text-sm md:text-base">{it.line}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
