import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";

export const metadata = { title: "Money · Macro8 — Evolve8 Enterprises" };

export default function MoneyHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Money · Macro8"
        title="Open financial intelligence. Three audiences. One mission."
        accent="One mission."
        lede="Macro8 is the financial education and research arm of Evolve8 Enterprises. Built on Bittensor. Explicitly not investment advice. Choose your path below."
        crumbs={[{ href: "/", label: "Home" }, { href: "/money", label: "Money · Macro8" }]}
      />

      <Section>
        <p className="eyebrow mb-4">Three paths</p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/money/whitepaper" className="card group block border-l-2 border-accent">
            <p className="eyebrow mb-2">Deep Dive</p>
            <h3 className="h-display text-bone text-2xl mb-3 group-hover:text-accent transition-colors">Macro8 White Paper</h3>
            <p className="text-bone/75 leading-relaxed mb-4 text-sm">
              The full methodology. Bittensor subnet architecture, macroeconomic modeling framework,
              regime detection logic, and the open research roadmap.
            </p>
            <div className="text-accent text-sm font-mono">Read the white paper →</div>
          </Link>

          <Link href="/money/families" className="card group block">
            <p className="eyebrow mb-2">For Families</p>
            <h3 className="h-display text-bone text-2xl mb-3 group-hover:text-accent transition-colors">For Families &amp; Beginners</h3>
            <p className="text-bone/75 leading-relaxed mb-4 text-sm">
              Plain language. What inflation, dollar stress, and AI disruption mean for your
              household. Five modes. Family investment scenario tool. No jargon.
            </p>
            <div className="text-accent text-sm font-mono">Start here →</div>
          </Link>

          <Link href="/money/investors" className="card group block">
            <p className="eyebrow mb-2">For Builders</p>
            <h3 className="h-display text-bone text-2xl mb-3 group-hover:text-accent transition-colors">For Investors &amp; Coders</h3>
            <p className="text-bone/75 leading-relaxed mb-4 text-sm">
              Bittensor subnet integration, TAO donations, open-source model contribution,
              and the investment thesis for Macro8 as a network intelligence layer.
            </p>
            <div className="text-accent text-sm font-mono">Open the thesis →</div>
          </Link>
        </div>
      </Section>

      <Section bordered={false}>
        <p className="text-bone/50 text-sm max-w-3xl">
          Macro8 is financial education, research, simulation, and model transparency. It is not guaranteed investment advice and does not promise returns. See <Link href="/disclaimers" className="text-accent hover:underline">full disclaimers</Link>.
        </p>
      </Section>
    </>
  );
}
