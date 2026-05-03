import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";

export const metadata = { title: "Investors — Evolve8 Enterprises" };

export default function InvestorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investors"
        title="The for-profit thesis behind the public-interest work."
        lede="Evolve8 Enterprises is a private public-interest company. The non-profit work happens through Vivinate Farms (fiscally sponsored by Far Away Projects). The for-profit work — Macro8, Work8, Skills Academy, and the Evolve8 platform — is venture-backable. This page is for investors and partners only."
        crumbs={[{ href: "/", label: "Home" }, { href: "/investors", label: "Investors" }]}
      />

      <Section>
        <p className="eyebrow mb-4">Why now</p>
        <ul className="space-y-3 text-bone/85 max-w-3xl">
          <li>· Median rent-to-income in every U.S. metro is above 30%. Median home is unaffordable in every metro.</li>
          <li>· Medical debt is the leading cause of personal bankruptcy in the U.S.</li>
          <li>· AI is removing the entry-level rungs of knowledge work faster than the workforce can re-skill.</li>
          <li>· Inflation, currency debasement, and wage stagnation have stripped purchasing power across two generations.</li>
          <li>· Trust in institutions is at a generational low. The market for credible, transparent alternatives is enormous.</li>
        </ul>
      </Section>

      <Section>
        <p className="eyebrow mb-4">What we are building</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="h-display text-bone text-xl mb-2">Macro8</h3>
            <p className="text-bone/80 text-sm">Open-source financial education plus on-chain TAO donations rail. Education is free; B2B research subscription and white-label licensing are the revenue lines.</p>
          </div>
          <div className="card">
            <h3 className="h-display text-bone text-xl mb-2">Work8</h3>
            <p className="text-bone/80 text-sm">A placement engine for AI-resistant, AI-adjacent, and off-platform work. Revenue from employer placements and apprenticeship cohorts.</p>
          </div>
          <div className="card">
            <h3 className="h-display text-bone text-xl mb-2">Skills Academy</h3>
            <p className="text-bone/80 text-sm">Practical, low-cost teaching layer with paid instructor program, sponsor-underwritten cohorts, and a credentialing roadmap.</p>
          </div>
          <div className="card">
            <h3 className="h-display text-bone text-xl mb-2">Evolve8 Platform</h3>
            <p className="text-bone/80 text-sm">The orchestration layer — Public Action intake, Resilience Points ledger, simulator, transparency reporting, and the connective tissue across all eight programs.</p>
          </div>
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4">Talk to the founder</p>
        <p className="text-bone/85 max-w-3xl mb-6">
          For investor introductions, due diligence, and partnership conversations, contact Reya Porche
          directly. Pitch deck and one-pager available under NDA.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:founder@evolve8enterprises.com" className="btn-primary">Email founder@</a>
          <Link href="/contact" className="btn-secondary">Contact form</Link>
        </div>
      </Section>

      <Section bordered={false}>
        <p className="text-bone/55 text-sm max-w-3xl">
          This page is informational and is not an offer to sell or a solicitation of an offer to buy
          any security. Macro8 is not investment advice.
        </p>
      </Section>
    </>
  );
}
