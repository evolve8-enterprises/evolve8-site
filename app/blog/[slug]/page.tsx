import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";

const POSTS: Record<string, { title: string; date: string; body: string[] }> = {
  "you-are-not-imagining-it": {
    title: "You Are Not Imagining It. The Silent Apocalypse Is Now.",
    date: "May 2026",
    body: [
      "If you feel like the systems your parents trusted no longer hold, you are correct. Food is more expensive and lower-quality. Housing has detached from wages. Healthcare is opaque. Insurance denies what it once paid. Jobs are being automated faster than rungs are being rebuilt. Education costs more and transfers less skill. The internet, once a public commons, is a series of platform monopolies that surveil and price-discriminate against you.",
      "This is the Silent Apocalypse. It is not a forecast. It is a name for what has already happened.",
      "Evolve8 Enterprises is a public-interest company building the infrastructure to document this collapse and replace what failed. The Silent Apocalypse Campaign is our flagship transparency project — a simulator, a Public Action Network, and eight programs covering the systems that failed.",
      "We are not waiting for permission. We are not waiting for a politician. We are documenting the harm, building the alternatives, and inviting everyone who has been affected to join us. This is the work.",
    ],
  },
  "merit-not-lottery": {
    title: "Why the Land Track Is Merit-Based, Not a Lottery",
    date: "May 2026",
    body: [
      "Several people have asked us the same question: why don't you run the Land Track as a lottery? Wouldn't that be fairer?",
      "The short answer is: in Texas, a lottery run by a private organization is a felony. Texas Penal Code Chapter 47 defines an illegal lottery as any scheme with the three elements of consideration, chance, and prize. A merit-based selection has no chance element, and that single change is the difference between a permissible competition and a third-degree felony.",
      "The longer answer is that we want to choose families, not chance. A merit-based two-track design lets us match families to land based on what they say they will do, and it lets us track outcomes and improve the program every cycle. A lottery treats every applicant identically; merit lets us prioritize families who have documented harm in the Public Action Network, who have completed Vivinate Farms or Skills Academy modules, or who bring a verified plan.",
      "Track 1 is Live + Work. Track 2 is Just Live. Both are merit-based. Neither is a lottery, drawing, sweepstakes, or raffle.",
    ],
  },
  "documentation-as-resistance": {
    title: "Documentation Is the First Act of Resistance",
    date: "May 2026",
    body: [
      "When something bad happens to one family, it looks like bad luck. When it happens to ten thousand families and they all keep silent, it stays bad luck. When ten thousand families file a structured report with the same five fields, it becomes a pattern. Patterns are how regulators act. Patterns are how journalists write. Patterns are how class actions get certified.",
      "The Public Action Network is built around this single observation. We collect structured reports across twelve harm categories. We anonymize and publish patterns. We route documented patterns to enforcement and legal partners.",
      "We are not legal advice. We are not a lawyer. We are not your attorney. We are a documentation engine. That is the lane. Filing your report does not guarantee any outcome — but if you do not file, your harm stays invisible. Make it visible.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = POSTS[params.slug];
  if (!p) return {};
  return { title: `${p.title} — Evolve8 Blog` };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  if (!post) return notFound();
  return (
    <>
      <PageHeader
        eyebrow={post.date}
        title={post.title}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
          { href: `/blog/${params.slug}`, label: post.title.slice(0, 30) + "…" },
        ]}
      />
      <Section>
        <article className="max-w-3xl space-y-6 text-bone/85 leading-relaxed h-serif text-lg">
          {post.body.map((p, i) => <p key={i}>{p}</p>)}
        </article>
        <Link href="/blog" className="mt-10 inline-block btn-secondary">← All posts</Link>
      </Section>
    </>
  );
}
