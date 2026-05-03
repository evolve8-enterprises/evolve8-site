import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader, Section } from "@/components/PageHeader";
import { LEGAL_CATEGORIES } from "@/lib/legalCategories";
import { IntakeForm } from "@/components/IntakeForm";

export function generateStaticParams() {
  return LEGAL_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cat = LEGAL_CATEGORIES.find((c) => c.slug === params.slug);
  if (!cat) return {};
  return {
    title: `${cat.name} — Public Action Network`,
    description: cat.short,
  };
}

export default function LegalCategoryPage({ params }: { params: { slug: string } }) {
  const cat = LEGAL_CATEGORIES.find((c) => c.slug === params.slug);
  if (!cat) return notFound();

  return (
    <>
      <PageHeader
        eyebrow="Public Action Network"
        title={cat.name}
        lede={cat.short}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/legal", label: "Public Action" },
          { href: `/legal/categories/${cat.slug}`, label: cat.name },
        ]}
      />

      <Section>
        <div className="grid md:grid-cols-[1fr_2fr] gap-10">
          <aside>
            <p className="eyebrow mb-4">In this category</p>
            <ul className="space-y-2 text-bone/80 text-sm">
              {cat.examples.map((e) => <li key={e}>· {e}</li>)}
            </ul>
            <p className="eyebrow mt-8 mb-4">Other categories</p>
            <ul className="space-y-1 text-sm">
              {LEGAL_CATEGORIES.filter((c) => c.slug !== cat.slug).slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/legal/categories/${c.slug}`} className="text-bone/70 hover:text-accent">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <div>
            <p className="text-bone/85 leading-relaxed h-serif text-lg">{cat.description}</p>
            <p className="mt-6 text-bone/60 text-sm">
              The Public Action Network is public-interest documentation and education. It is not legal
              advice. Filing a report does not create an attorney-client relationship.
            </p>
            <div className="mt-10">
              <h3 className="h-display text-bone text-2xl mb-4">File a report</h3>
              <IntakeForm category={cat.slug} categoryName={cat.name} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
