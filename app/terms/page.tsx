import { PageHeader, Section } from "@/components/PageHeader";

export const metadata = { title: "Terms of Use — Evolve8 Enterprises" };

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms"
        title="Terms of Use"
        crumbs={[{ href: "/", label: "Home" }, { href: "/terms", label: "Terms" }]}
      />
      <Section>
        <div className="max-w-3xl space-y-6 text-bone/85 leading-relaxed">
          <p>Last updated: May 2026.</p>
          <p>
            By using evolve8enterprises.com, the Silent Apocalypse Simulator, the Public Action Network,
            or any other Evolve8 service, you agree to these Terms of Use.
          </p>
          <h2 className="h-display text-bone text-2xl mt-6">No professional advice</h2>
          <p>
            The site is for general information and education. It is not legal, medical, financial, or
            tax advice. The Public Action Network is not legal advice and does not create an
            attorney-client relationship. Macro8 is not investment advice. The Silent Apocalypse
            Simulator is an educational simulation, not a forecast.
          </p>
          <h2 className="h-display text-bone text-2xl mt-6">User content</h2>
          <p>
            You retain ownership of content you submit (Public Action reports, contact messages). By
            submitting, you grant Evolve8 a non-exclusive license to triage, anonymize, and publish
            patterns derived from that content. We will not publish identifiable details without your
            consent.
          </p>
          <h2 className="h-display text-bone text-2xl mt-6">No warranty</h2>
          <p>
            The site is provided "as is", without warranty of any kind. To the maximum extent permitted
            by law, Evolve8 disclaims all warranties and is not liable for any loss arising from your use
            of the site.
          </p>
          <h2 className="h-display text-bone text-2xl mt-6">Land Competition</h2>
          <p>
            The Land, Property, and Campus Competition is a merit-based two-track residency pathway. It
            is not a lottery, drawing, sweepstakes, raffle, or guaranteed transfer of property.
            Participation does not guarantee admission. See the <a href="/legal/disclaimer" className="text-accent hover:underline">full disclaimer</a>.
          </p>
          <h2 className="h-display text-bone text-2xl mt-6">Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of Texas, without regard to conflict-of-laws principles.
          </p>
        </div>
      </Section>
    </>
  );
}
