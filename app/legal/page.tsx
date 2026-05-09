import Link from "next/link";
import { PageHeader, Section, CalloutBand } from "@/components/PageHeader";

export const metadata = {
  title: "Legal — Evolve8 Enterprises",
  description:
    "Two paths: Public Action & Class Actions education across the United States, and the Legal Help Platform for people navigating the criminal and civil legal system. Not legal advice.",
};

export default function LegalHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Two paths to legal education and support."
        accent="Two paths"
        lede="Evolve8 Enterprises operates two legal support programs. Public Action & Class Actions helps people across the United States learn about harm categories, document their experiences, and understand class action pathways. The Legal Help Platform helps people navigate the criminal and civil legal system with organized, attorney-ready materials."
        crumbs={[{ href: "/", label: "Home" }, { href: "/legal", label: "Legal" }]}
      />

      {/* Two Paths */}
      <Section>
        <p className="eyebrow mb-4">Two programs</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card border-l-2 border-accent">
            <p className="eyebrow mb-2">Path 1</p>
            <h3 className="h-display text-bone text-2xl mb-3">Public Action &amp; Class Actions</h3>
            <p className="text-bone/80 leading-relaxed mb-6">
              A national public-interest education and documentation platform covering eleven harm
              categories. Search companies with open class actions, upload evidence, receive a
              tailored checklist, join campaigns, and learn how to work with legal partners.
            </p>
            <Link href="/legal/demo" className="btn-primary">
              Enter the Demo →
            </Link>
          </div>
          <div className="card">
            <p className="eyebrow mb-2">Path 2</p>
            <h3 className="h-display text-bone text-2xl mb-3">Legal Help Platform</h3>
            <p className="text-bone/80 leading-relaxed mb-6">
              A planned AI-guided legal support tool for people in the criminal and civil legal
              system. Build case timelines. Organize documents. Prepare for attorney meetings.
              Make every minute with your lawyer count.
            </p>
            <Link href="/legal/help-platform" className="text-accent text-sm font-mono hover:underline">
              Learn About the Platform →
            </Link>
          </div>
        </div>
      </Section>

      <CalloutBand
        title="Legal Help Platform."
        body="A planned AI-guided legal support tool to help people organize documents, timelines, questions, and case materials so they can communicate more effectively with their lawyer or public defender."
        ctaHref="/legal/help-platform"
        ctaLabel="Learn about the platform"
      />

      <CalloutBand
        title="Public Defender Network."
        body="A directory of pro-bono and low-fee legal partners across the United States, prioritized for harm categories where class action or public action may apply. Free to search; partners apply to be listed."
        ctaHref="/legal/public-defender-network"
        ctaLabel="Open the directory"
      />

      <Section bordered={false}>
        <p className="eyebrow mb-4">Important disclaimers</p>
        <div className="max-w-3xl space-y-3 text-bone/60 text-sm">
          <p>· Evolve8 Enterprises is not a law firm.</p>
          <p>· This platform does not provide legal advice.</p>
          <p>· Filing a report does not create an attorney-client relationship.</p>
          <p>· Class action eligibility and legal outcomes are not guaranteed.</p>
          <p>· Users should consult licensed attorneys for all legal matters.</p>
          <p>· Any legal partner review is separate from education content.</p>
          <p>· For urgent danger, call 911. For a legal deadline today, contact a licensed attorney immediately.</p>
          <Link href="/legal/disclaimer" className="text-accent text-sm font-mono hover:underline block mt-4">Read the full legal disclaimer →</Link>
        </div>
      </Section>
    </>
  );
}
