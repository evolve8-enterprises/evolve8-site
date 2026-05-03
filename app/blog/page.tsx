import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";

export const metadata = { title: "Blog — Evolve8 Enterprises" };

const POSTS = [
  {
    slug: "you-are-not-imagining-it",
    title: "You Are Not Imagining It. You Inherited It.",
    date: "May 2026",
    excerpt: "The opening note for the Silent Apocalypse Public Transparency Campaign — what it is, why now, and what we are asking from families.",
  },
  {
    slug: "merit-not-lottery",
    title: "Why the Land Track Is Merit-Based, Not a Lottery",
    date: "May 2026",
    excerpt: "Texas Penal Code Chapter 47 makes lotteries with chance, prize, and consideration a criminal offense for private organizers. We chose merit so we could choose families.",
  },
  {
    slug: "documentation-as-resistance",
    title: "Documentation Is the First Act of Resistance",
    date: "May 2026",
    excerpt: "How the Public Action Network turns isolated harm into structural pattern, and why every report matters.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Field notes from the campaign."
        crumbs={[{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }]}
      />
      <Section>
        <div className="space-y-10 max-w-3xl">
          {POSTS.map((p) => (
            <article key={p.slug} className="border-b border-line pb-10">
              <p className="eyebrow mb-2">{p.date}</p>
              <h2 className="h-display text-bone text-2xl md:text-3xl mb-3">
                <Link href={`/blog/${p.slug}`} className="hover:text-accent">{p.title}</Link>
              </h2>
              <p className="text-bone/75 leading-relaxed h-serif">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="mt-4 inline-block text-accent text-sm font-mono">
                Read post →
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-10 text-bone/60 text-sm">More posts coming weekly.</p>
      </Section>
    </>
  );
}
