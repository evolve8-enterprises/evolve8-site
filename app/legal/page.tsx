import Link from "next/link";
import { PageHeader, Section, CardLink, CalloutBand } from "@/components/PageHeader";
import { LEGAL_CATEGORIES } from "@/lib/legalCategories";

export const metadata = {
  title: "Legal — Evolve8 Enterprises",
  description:
    "Two paths: Public Action & Class Actions education across the United States, and the Legal Help Platform for people navigating the criminal and civil legal system. Not legal advice.",
};

const CLASS_ACTION_CATEGORIES = [
  { slug: "medical-debt", name: "Medical Debt", short: "Billing errors, surprise bills, denied claims, inflated medical charges." },
  { slug: "food-health-harm", name: "Food & Health Harm", short: "Deceptive labeling, contamination, unsafe ingredients, false health claims." },
  { slug: "data-attention-extraction", name: "Data & Attention Extraction", short: "Unauthorized data collection, targeted manipulation, privacy violations." },
  { slug: "ai-algorithmic-harm", name: "AI & Algorithmic Harm", short: "Algorithmic discrimination in hiring, lending, housing, and criminal justice." },
  { slug: "labor-wage-extraction", name: "Labor & Wage Extraction", short: "Wage theft, hour manipulation, misclassification, tip theft, tip pooling abuse." },
  { slug: "student-debt-education", name: "Student Debt & Education Failure", short: "Predatory schools, false job placement stats, discharge denials, servicing errors." },
  { slug: "housing-land-access", name: "Housing & Land Access", short: "Discriminatory lending, illegal evictions, deed theft, zoning abuse." },
  { slug: "environmental-infrastructure", name: "Environmental & Infrastructure Harm", short: "Water contamination, toxic exposure, utility neglect, infrastructure failure." },
  { slug: "insurance-harm", name: "Insurance Harm", short: "Bad faith denials, predatory policies, claim suppression, premium manipulation." },
  { slug: "consumer-deception", name: "Consumer Deception", short: "False advertising, hidden fees, deceptive subscriptions, bait and switch." },
  { slug: "corporate-misconduct", name: "Corporate Misconduct", short: "Fraud, market manipulation, securities violations, public harm concealment." },
];

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

      {/* Two Paths Overview */}
      <Section>
        <p className="eyebrow mb-4">Two programs</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card border-l-2 border-accent">
            <p className="eyebrow mb-2">Path 1</p>
            <h3 className="h-display text-bone text-2xl mb-3">Public Action &amp; Class Actions</h3>
            <p className="text-bone/80 leading-relaxed mb-4">
              A national public-interest education and documentation platform covering eleven harm categories.
              Learn which companies may have open or pending class actions. Upload evidence. Get an evidence
              checklist. Understand how to talk to legal partners.
            </p>
            <Link href="#public-action" className="text-accent text-sm font-mono hover:underline">Explore Public Action →</Link>
          </div>
          <div className="card">
            <p className="eyebrow mb-2">Path 2</p>
            <h3 className="h-display text-bone text-2xl mb-3">Legal Help Platform</h3>
            <p className="text-bone/80 leading-relaxed mb-4">
              A planned AI-guided legal support tool for people involved in the criminal and civil legal
              system. Build case timelines. Organize documents. Prepare for attorney meetings. Make every
              minute with your lawyer count.
            </p>
            <Link href="/legal/help-platform" className="text-accent text-sm font-mono hover:underline">Learn About the Platform →</Link>
          </div>
        </div>
      </Section>

      {/* Public Action & Class Actions */}
      <Section id="public-action">
        <p className="eyebrow mb-4">Public Action &amp; Class Actions — National</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          Document the harm. Make the system visible.
        </h2>
        <p className="text-bone/80 max-w-3xl mb-10 leading-relaxed">
          Evolve8 Enterprises helps people across the United States get educated about existing and potential
          public action and class action categories. This is not legal advice. It is public-interest education
          so families understand what has happened to them, what systems failed them, and what pathways may exist.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="eyebrow mb-4">What you will eventually be able to do</p>
            <ul className="space-y-3 text-bone/85 text-sm">
              <li><span className="text-accent mr-2">→</span> Search by harm category</li>
              <li><span className="text-accent mr-2">→</span> Learn which companies may have open class actions</li>
              <li><span className="text-accent mr-2">→</span> Learn which companies may have pending or potential claims</li>
              <li><span className="text-accent mr-2">→</span> Upload documents and store evidence</li>
              <li><span className="text-accent mr-2">→</span> Receive an evidence checklist</li>
              <li><span className="text-accent mr-2">→</span> Learn how to talk to legal partners</li>
              <li><span className="text-accent mr-2">→</span> Participate in public action education</li>
              <li><span className="text-accent mr-2">→</span> Enroll into open campaigns where eligible</li>
              <li><span className="text-accent mr-2">→</span> Request help starting or documenting a potential new campaign</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">How it works today</p>
            <ol className="space-y-4 text-bone/85 text-sm">
              <li><span className="text-accent font-mono mr-3">01</span> Pick the category that fits what happened.</li>
              <li><span className="text-accent font-mono mr-3">02</span> File a structured report — timeline, evidence, parties involved.</li>
              <li><span className="text-accent font-mono mr-3">03</span> A reviewer triages and assigns a tracking number.</li>
              <li><span className="text-accent font-mono mr-3">04</span> Anonymized patterns publish in our quarterly Transparency Report.</li>
              <li><span className="text-accent font-mono mr-3">05</span> When a pattern is strong, we route to enforcement and legal partners.</li>
            </ol>
          </div>
        </div>

        <p className="eyebrow mb-4">Eleven harm categories</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {CLASS_ACTION_CATEGORIES.map((c) => (
            <div key={c.slug} className="card">
              <h3 className="h-display text-bone text-lg mb-2">{c.name}</h3>
              <p className="text-bone/70 text-sm leading-relaxed">{c.short}</p>
            </div>
          ))}
        </div>

        <p className="eyebrow mb-4">Existing reporting categories</p>
        <p className="text-bone/70 text-sm mb-6 max-w-2xl">These twelve categories have active structured reporting pathways today. File a report and receive a tracking number.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEGAL_CATEGORIES.map((c) => (
            <CardLink key={c.slug} href={`/legal/categories/${c.slug}`} title={c.name}>
              {c.short}
            </CardLink>
          ))}
        </div>
      </Section>

      {/* Evidence Vault */}
      <Section>
        <p className="eyebrow mb-4">Evidence Vault / Document Upload</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          Your documents. Organized. Ready.
        </h2>
        <p className="text-bone/80 max-w-3xl mb-8 leading-relaxed">
          The Evidence Vault is a planned feature that will allow users to securely upload and organize
          documents related to their harm claims. The goal is to help you build a complete, attorney-ready
          evidence package — even before you speak to a lawyer.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { type: "Bills & Financial Records", items: ["Medical bills", "Pay stubs", "Receipts", "Insurance documents"] },
            { type: "Contracts & Agreements", items: ["Leases and housing contracts", "Employment agreements", "School and debt records", "Platform terms and records"] },
            { type: "Communications & Evidence", items: ["Screenshots", "Letters and notices", "Written timelines", "Court and legal documents"] },
            { type: "Health & Medical", items: ["Medical records (where appropriate)", "Prescription records", "Denial letters", "EOBs and claims"] },
            { type: "Government & Public Records", items: ["Housing documents", "Government correspondence", "Environmental test results", "Public records"] },
            { type: "Digital & Platform Records", items: ["App usage records", "Algorithmic decision notices", "Data export files", "Account records"] },
          ].map((g) => (
            <div key={g.type} className="card">
              <h3 className="h-display text-bone text-lg mb-3">{g.type}</h3>
              <ul className="space-y-1 text-bone/70 text-sm">
                {g.items.map((i) => <li key={i}>· {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-bone/55 text-sm max-w-3xl border-l border-accent pl-4">
          Evidence Vault is in development. Document upload, storage, and attorney handoff are planned features.
          In the meantime, use the structured reporting forms to begin documenting your experience.
        </p>
      </Section>

      {/* Legal Help Platform Teaser */}
      <CalloutBand
        title="Legal Help Platform."
        body="A planned AI-guided legal support tool to help people organize documents, timelines, questions, and case materials so they can communicate more effectively with their lawyer or public defender. Subscription-based. Educational. Not a replacement for a licensed attorney."
        ctaHref="/legal/help-platform"
        ctaLabel="Learn about the platform"
      />

      {/* Public Defender Network */}
      <CalloutBand
        title="Public Defender Network."
        body="A directory of pro-bono and low-fee legal partners across the United States, prioritized for harm categories where class action or public action may apply. Free to search; partners apply to be listed."
        ctaHref="/legal/public-defender-network"
        ctaLabel="Open the directory"
      />

      {/* Disclaimers */}
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
