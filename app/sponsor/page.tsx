import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";

export const metadata = { title: "Sponsor — Evolve8 Enterprises" };

const TIERS = [
  { name: "Neighbor", price: "$500 / mo", body: "One named line on a category page. One newsletter mention per quarter." },
  { name: "Builder", price: "$2,500 / mo", body: "Named placement on a category, quarterly Transparency Report mention, one Skills Academy class underwritten in your name." },
  { name: "Anchor", price: "$10,000 / mo", body: "Named anchor of a full category for one year. Logo on relevant pages. Founder briefing each quarter." },
  { name: "Underwriter", price: "$50,000 / yr", body: "Underwrite a full Vivinate Farms cohort, a Public Action Network category buildout, or a Land Track family." },
];

export default function SponsorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sponsor"
        title="Underwrite a category, a cohort, or a family."
        lede="Sponsorships fund specific public-interest work. Every dollar is reported publicly in our quarterly Transparency Report. We do not sell ad space — we sell visibility into work that is already happening."
        crumbs={[{ href: "/", label: "Home" }, { href: "/sponsor", label: "Sponsor" }]}
      />

      <Section>
        <p className="eyebrow mb-4">Tiers</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIERS.map((t) => (
            <div key={t.name} className="card">
              <p className="eyebrow mb-2">{t.name}</p>
              <h3 className="h-display text-bone text-2xl mb-3">{t.price}</h3>
              <p className="text-bone/75 text-sm">{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bordered={false}>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:donate@evolve8enterprises.com?subject=Sponsorship%20inquiry" className="btn-primary">Email donate@</a>
          <Link href="/contact" className="btn-secondary">Contact form</Link>
        </div>
      </Section>
    </>
  );
}
