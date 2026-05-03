import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";

export const metadata = {
  title: "Public Defender Network — Evolve8",
  description: "A directory of pro-bono and low-fee legal partners across Texas. Free to search; partners apply to be listed.",
};

const PARTNERS = [
  { name: "Legal Aid of NorthWest Texas", area: "Civil aid · Dallas-Fort Worth", url: "https://www.lanwt.org/" },
  { name: "Texas Legal Services Center", area: "Statewide civil aid hotline", url: "https://www.tlsc.org/" },
  { name: "Dallas Volunteer Attorney Program", area: "Pro bono · Dallas County", url: "https://www.dvapdallas.org/" },
  { name: "Texas RioGrande Legal Aid", area: "South & Central Texas", url: "https://www.trla.org/" },
  { name: "Disability Rights Texas", area: "Disability discrimination & IEP", url: "https://disabilityrightstx.org/" },
  { name: "Texas Tenants' Union", area: "Eviction & tenant abuse", url: "https://txtenants.org/" },
];

export default function PublicDefenderNetworkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Public Defender Network"
        title="Pro-bono and low-fee legal partners."
        lede="A directory of organizations that take public-interest cases. Free to search. Partners apply to be listed and are vetted before inclusion. The directory is informational and is not a referral or endorsement."
        crumbs={[{ href: "/", label: "Home" }, { href: "/legal", label: "Public Action" }, { href: "/legal/public-defender-network", label: "Public Defender Network" }]}
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PARTNERS.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="card block group">
              <p className="eyebrow mb-2">{p.area}</p>
              <h3 className="h-display text-bone text-xl group-hover:text-accent transition-colors">{p.name}</h3>
              <p className="mt-3 text-bone/60 text-xs font-mono break-all">{p.url}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section bordered={false}>
        <div className="max-w-3xl">
          <h2 className="h-display text-bone text-2xl mb-3">Apply to be listed</h2>
          <p className="text-bone/80 mb-6">
            Lawyers, clinics, and legal aid organizations across Texas can apply to be listed in the
            Public Defender Network. We require active license, malpractice insurance, and a public
            scope-of-practice statement.
          </p>
          <Link href="/contact" className="btn-primary">Apply →</Link>
        </div>
      </Section>
    </>
  );
}
