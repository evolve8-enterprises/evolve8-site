import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";

export const metadata = { title: "Transparency — Evolve8 Enterprises" };

export default function TransparencyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transparency"
        title="Receipts public. Numbers public. Mistakes public."
        lede="Every quarter we publish a Transparency Report covering donations received (USD and TAO), allocations across the eight programs, Public Action Network volume, Skills Academy enrollment, and any operational corrections."
        crumbs={[{ href: "/", label: "Home" }, { href: "/transparency", label: "Transparency" }]}
      />

      <Section>
        <p className="eyebrow mb-4">Q2 2026 · upcoming</p>
        <div className="card max-w-3xl">
          <h3 className="h-display text-bone text-2xl mb-3">First Transparency Report</h3>
          <p className="text-bone/80 mb-4">
            The first Transparency Report will publish at the end of Q2 2026 and will cover the launch
            window of the campaign. It will include:
          </p>
          <ul className="space-y-2 text-bone/75 text-sm">
            <li>· Donations received in USD (via Far Away Projects) and TAO (Macro8 Donations wallet)</li>
            <li>· Allocations across the eight programs</li>
            <li>· Public Action Network reports filed, by category</li>
            <li>· Skills Academy enrollment and completion rates</li>
            <li>· Operational corrections and lessons learned</li>
          </ul>
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4">Live links</p>
        <ul className="space-y-3 text-bone/85 max-w-3xl">
          <li>· <Link href="/money/macro8/tao" className="text-accent hover:underline">Macro8 Donations TAO wallet</Link> — auditable on-chain</li>
          <li>· <a href="https://www.farawayprojects.org/" target="_blank" rel="noreferrer" className="text-accent hover:underline">Far Away Projects</a> — fiscal sponsor (501(c)(3), EIN 82-1917723)</li>
          <li>· <Link href="/legal/disclaimer" className="text-accent hover:underline">Disclaimers</Link> — what this campaign is and is not</li>
        </ul>
      </Section>
    </>
  );
}
