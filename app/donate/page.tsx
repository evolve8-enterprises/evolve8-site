import Link from "next/link";
import { PageHeader, Section, CardLink } from "@/components/PageHeader";

export const metadata = { title: "Donate — Evolve8 Enterprises" };

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Fund the campaign."
        lede="Every donation funds the Silent Apocalypse Public Transparency Campaign — Vivinate Farms growing kits, Public Action Network triage, Skills Academy classes, and the Land Track. Every dollar is reported publicly in our quarterly Transparency Report."
        crumbs={[{ href: "/", label: "Home" }, { href: "/donate", label: "Donate" }]}
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <p className="eyebrow mb-2">USD · tax-deductible</p>
            <h3 className="h-display text-bone text-2xl mb-3">Donate via Far Away Projects</h3>
            <p className="text-bone/80 mb-6">
              Vivinate Farms is a fiscally sponsored project of Far Away Projects, a registered 501(c)(3)
              public charity (EIN 82-1917723). USD donations made through Far Away Projects are eligible
              for tax-deductible treatment under U.S. law.
            </p>
            <a href="https://www.farawayprojects.org/" target="_blank" rel="noreferrer" className="btn-primary text-sm">
              Donate USD →
            </a>
            <p className="mt-4 text-bone/55 text-xs">Make sure to designate "Vivinate Farms / Evolve8 Silent Apocalypse Campaign".</p>
          </div>
          <div className="card">
            <p className="eyebrow mb-2">TAO · on-chain</p>
            <h3 className="h-display text-bone text-2xl mb-3">Donate via Bittensor</h3>
            <p className="text-bone/80 mb-6">
              The Macro8 Donations wallet receives TAO contributions to fund the campaign. Every
              transaction is on-chain and auditable.
            </p>
            <Link href="/money/macro8/tao" className="btn-primary text-sm">Open TAO Donations Guide →</Link>
            <p className="mt-4 text-bone/55 text-xs">Cryptocurrency donations may have tax consequences in your jurisdiction. Consult a tax professional.</p>
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <div className="grid md:grid-cols-3 gap-4">
          <CardLink href="/sponsor" title="Sponsor a category">Underwrite a full Silent Apocalypse program for a year.</CardLink>
          <CardLink href="/transparency" title="Where the money goes">Read the public quarterly Transparency Report.</CardLink>
          <CardLink href="/contact" title="Talk to us first">Major donors and foundations: schedule a founder call.</CardLink>
        </div>
      </Section>
    </>
  );
}
