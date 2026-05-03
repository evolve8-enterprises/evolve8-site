import Link from "next/link";

type Crumb = { href: string; label: string };

export function PageHeader({
  eyebrow,
  title,
  lede,
  accent,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  accent?: string; // text fragment that should be red
  crumbs?: Crumb[];
}) {
  let titleNode: React.ReactNode = title;
  if (accent && title.includes(accent)) {
    const [before, after] = title.split(accent);
    titleNode = (
      <>
        {before}
        <span className="text-accent">{accent}</span>
        {after}
      </>
    );
  }
  return (
    <section className="relative border-b border-line">
      <div className="absolute inset-0 gridline opacity-30 pointer-events-none" />
      <div className="container-x relative pt-14 pb-16 md:pt-20 md:pb-24">
        {crumbs && crumbs.length > 0 && (
          <nav className="mb-6 text-xs font-mono uppercase tracking-widest text-bone/50">
            {crumbs.map((c, i) => (
              <span key={c.href}>
                <Link href={c.href} className="hover:text-accent">
                  {c.label}
                </Link>
                {i < crumbs.length - 1 && <span className="mx-2 text-accent">/</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="h-display text-bone text-[36px] sm:text-[52px] md:text-[68px] lg:text-[80px] leading-[1.02] max-w-5xl">
          {titleNode}
        </h1>
        {lede && (
          <p className="mt-6 max-w-3xl text-bone/80 text-lg md:text-xl leading-relaxed h-serif">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  bordered = true,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`${bordered ? "border-b border-line" : ""} ${className}`}>
      <div className="container-x py-16 md:py-20">{children}</div>
    </section>
  );
}

export function CardLink({
  href,
  eyebrow,
  title,
  children,
}: {
  href: string;
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={href} className="card block group">
      {eyebrow && <p className="eyebrow mb-2 group-hover:text-bone">{eyebrow}</p>}
      <h3 className="h-display text-bone text-2xl mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      {children && <div className="text-bone/70 text-sm leading-relaxed">{children}</div>}
      <div className="mt-4 text-accent text-sm font-mono">Open →</div>
    </Link>
  );
}

export function CalloutBand({
  title,
  body,
  ctaHref,
  ctaLabel,
}: {
  title: string;
  body: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <section className="border-y border-line bg-[#0a0a0a]">
      <div className="container-x py-14 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-3xl">
          <h3 className="h-display text-bone text-2xl md:text-3xl mb-2">{title}</h3>
          <p className="text-bone/75 leading-relaxed">{body}</p>
        </div>
        <Link href={ctaHref} className="btn-primary shrink-0">
          {ctaLabel} →
        </Link>
      </div>
    </section>
  );
}
