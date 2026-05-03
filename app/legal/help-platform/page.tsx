import Link from "next/link";
import { PageHeader, Section, CalloutBand } from "@/components/PageHeader";

export const metadata = {
  title: "Legal Help Platform — Evolve8 Enterprises",
  description:
    "A planned AI-guided legal support tool to help people organize documents, timelines, and case materials so they can communicate more effectively with their lawyer or public defender.",
};

export default function LegalHelpPlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Help Platform"
        title="Organize your case. Make every minute with your lawyer count."
        accent="Make every minute with your lawyer count."
        lede="Evolve8 Legal Help Platform is a planned subscription-based legal support tool designed to help people organize documents, timelines, questions, evidence, and case materials so they can communicate more effectively with their lawyer or public defender."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/legal", label: "Legal" },
          { href: "/legal/help-platform", label: "Legal Help Platform" },
        ]}
      />

      {/* What It Is */}
      <Section>
        <p className="eyebrow mb-4">What it is</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          AI-guided legal support for people in the system.
        </h2>
        <p className="text-bone/85 max-w-3xl leading-relaxed h-serif text-lg mb-6">
          Most people who face the legal system — criminal, civil, family, housing, or otherwise — cannot
          afford to spend long hours with a lawyer reviewing every document and question. The result is
          disorganized meetings, missed details, and worse outcomes. The Legal Help Platform is built to
          close that gap.
        </p>
        <p className="text-bone/80 max-w-3xl leading-relaxed mb-6">
          This platform is designed for people involved in criminal proceedings, civil cases, housing
          disputes, public defender situations, and other legal processes. It is not a replacement for a
          lawyer. It is an organizational and educational tool to help you prepare before you walk into
          that room.
        </p>
        <p className="text-bone/55 text-sm max-w-3xl border-l border-accent pl-4">
          This is administrative, educational, and organizational support intended to help users work
          with licensed counsel — not replace it.
        </p>
      </Section>

      {/* Planned Features */}
      <Section>
        <p className="eyebrow mb-4">Planned features</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: "AI Case Timeline Builder",
              bullets: [
                "Walk through your case step by step",
                "AI-guided prompts to surface key dates and events",
                "Exportable timeline document for your attorney",
                "Version tracking as your case evolves",
              ],
            },
            {
              name: "Document Organization",
              bullets: [
                "Upload and categorize all case documents",
                "Label by date, party, and document type",
                "Attorney handoff packet generation",
                "Secure storage and retrieval",
              ],
            },
            {
              name: "Question Builder for Attorney Meetings",
              bullets: [
                "AI-guided prompts to help you prepare questions",
                "Prioritized question list by urgency",
                "Pre-meeting checklist",
                "Notes capture during or after meetings",
              ],
            },
            {
              name: "Hearing Preparation Checklists",
              bullets: [
                "What to bring and what to wear",
                "What to expect during hearings",
                "How to address the court",
                "Documentation you will need",
              ],
            },
            {
              name: "Evidence Checklist",
              bullets: [
                "Category-specific evidence checklists",
                "Guidance on what constitutes useful evidence",
                "Document upload for each checklist item",
                "Gap analysis — what you still need",
              ],
            },
            {
              name: "Public Defender Communication Support",
              bullets: [
                "Templates for communicating with a public defender",
                "How to request meetings and updates",
                "What information to prioritize in limited time",
                "How to document your communications",
              ],
            },
            {
              name: "Legal Education Modules",
              bullets: [
                "Plain-language explanations of legal processes",
                "Criminal, civil, housing, and family law basics",
                "Your rights at each stage of a case",
                "Glossary of legal terms",
              ],
            },
            {
              name: "Court Date Tracker",
              bullets: [
                "Calendar integration for hearings and deadlines",
                "Reminder notifications",
                "Preparation prompts ahead of each date",
                "Notes and outcomes log",
              ],
            },
            {
              name: "Family Support Dashboard",
              bullets: [
                "Share relevant case updates with trusted family members",
                "Designated family contact features",
                "Support resources and referral pathways",
                "Communication guides for family navigating the system",
              ],
            },
          ].map((f) => (
            <div key={f.name} className="card">
              <h3 className="h-display text-bone text-xl mb-3">{f.name}</h3>
              <ul className="space-y-2 text-bone/70 text-sm">
                {f.bullets.map((b) => (
                  <li key={b}>· {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Subscription Model */}
      <Section>
        <p className="eyebrow mb-4">Access model</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          Subscription-based. Built for real access.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-bone/80 leading-relaxed mb-4">
              The Legal Help Platform is planned as a monthly subscription service, with income-based
              access tiers to ensure people who need it most can use it. People enrolled in the Vivinate
              Farms or Land Competition programs will receive access as part of their participation.
            </p>
            <ul className="space-y-2 text-bone/75 text-sm">
              <li><span className="text-accent mr-2">→</span> Monthly subscription option</li>
              <li><span className="text-accent mr-2">→</span> Income-based access tiers (planned)</li>
              <li><span className="text-accent mr-2">→</span> Attorney handoff packets included</li>
              <li><span className="text-accent mr-2">→</span> Bundled with campus program enrollment</li>
              <li><span className="text-accent mr-2">→</span> Document summary tools</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Join the waitlist</p>
            <p className="text-bone/75 text-sm mb-4">
              The platform is in development. Join the waitlist to be notified when early access opens
              and to help shape what features we prioritize.
            </p>
            <Link href="/contact" className="btn-primary">Join the Waitlist →</Link>
          </div>
        </div>
      </Section>

      <CalloutBand
        title="Public Action &amp; Class Actions."
        body="Learn about harm categories across the United States, upload evidence, and understand what class action or public action pathways may exist for what happened to you."
        ctaHref="/legal"
        ctaLabel="Explore Public Action"
      />

      {/* Disclaimers */}
      <Section bordered={false}>
        <p className="eyebrow mb-4">Important disclaimers</p>
        <div className="max-w-3xl space-y-3 text-bone/60 text-sm">
          <p>· This is not a replacement for a lawyer.</p>
          <p>· This platform does not provide legal advice.</p>
          <p>· This does not create an attorney-client relationship.</p>
          <p>· This is administrative, educational, and organizational support intended to help users work with licensed counsel.</p>
          <p>· Evolve8 Enterprises is not a law firm.</p>
          <p>· For urgent legal matters or emergencies, contact a licensed attorney immediately.</p>
          <Link href="/legal/disclaimer" className="text-accent text-sm font-mono hover:underline block mt-4">Read the full legal disclaimer →</Link>
        </div>
      </Section>
    </>
  );
}
