import { PageHeader, Section } from "@/components/PageHeader";

export const metadata = {
  title: "Legal Disclaimer — Evolve8 Enterprises",
  description: "Disclaimers governing the Public Action Network, Silent Apocalypse Simulator, Macro8, and the Land, Property, and Campus Competition.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Review Center"
        title="Disclaimers."
        crumbs={[{ href: "/", label: "Home" }, { href: "/legal", label: "Public Action" }, { href: "/legal/disclaimer", label: "Disclaimers" }]}
      />
      <Section>
        <div className="prose-block max-w-3xl space-y-8 text-bone/85 leading-relaxed">
          <div>
            <h2 className="h-display text-bone text-2xl mb-3">Government affiliation</h2>
            <p>
              Evolve8 Enterprises is a private public-interest company. Vivinate Farms is a fiscally
              sponsored project of Far Away Projects (501(c)(3), EIN 82-1917723) on the path to its own
              501(c)(3) determination. Neither Evolve8 Enterprises nor Vivinate Farms is a government
              agency.
            </p>
          </div>
          <div>
            <h2 className="h-display text-bone text-2xl mb-3">Public Action Network is not legal advice</h2>
            <p>
              The Public Action Network is public-interest documentation and education. It is not legal
              advice. Filing a report does not create an attorney-client relationship and does not
              guarantee eligibility, payouts, or settlements. For urgent danger, call 911. For a
              deadline today, contact a licensed attorney in your jurisdiction.
            </p>
          </div>
          <div>
            <h2 className="h-display text-bone text-2xl mb-3">Macro8 is not investment advice</h2>
            <p>
              Macro8 is open-source financial research and education. Nothing on this site is investment,
              tax, or legal advice. Macro8 does not promise profits or returns. Past performance of any
              instrument referenced is not indicative of future results.
            </p>
          </div>
          <div>
            <h2 className="h-display text-bone text-2xl mb-3">Silent Apocalypse Simulator is a simulation</h2>
            <p>
              The Silent Apocalypse Simulator and Index are educational simulations of household
              exposure across eight systems. They are not forecasts of the U.S. dollar, the U.S.
              economy, your job, your housing, your health, or your finances. They do not predict a
              collapse date or any specific economic event.
            </p>
          </div>
          <div>
            <h2 className="h-display text-bone text-2xl mb-3">Land, Property, and Campus Competition</h2>
            <p>
              The Land, Property, and Campus Competition is a merit-based two-track residency pathway.
              It is not a lottery, drawing, sweepstakes, raffle, or guaranteed transfer of property. No
              chance element determines participation or selection. Selection is based on stated,
              published criteria and review by qualified evaluators. Participation does not guarantee
              admission to either track.
            </p>
          </div>
          <div>
            <h2 className="h-display text-bone text-2xl mb-3">Resilience Points</h2>
            <p>
              Resilience Points are non-cash internal participation credits issued by Evolve8
              Enterprises. They are not currency, securities, or wages, are non-transferable, have no
              cash value, and may be modified or retired at any time at the discretion of Evolve8
              Enterprises.
            </p>
          </div>
          <div>
            <h2 className="h-display text-bone text-2xl mb-3">Donations and tax treatment</h2>
            <p>
              Donations to Vivinate Farms are processed through Far Away Projects and are eligible for
              tax treatment under U.S. law where applicable. Donors should consult their own tax
              professional. Cryptocurrency donations to the Macro8 Donations wallet are subject to
              applicable tax rules in the donor's jurisdiction.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
