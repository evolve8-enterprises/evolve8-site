"use client";
import { useState } from "react";
import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";

const WALLET = "5FA8wXmTkWPFD9nbijR3dpukA5qBgNLzQmAFZboceSX8jAmu";

export default function TaoDonatePage() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(WALLET);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };
  return (
    <>
      <PageHeader
        eyebrow="Macro8 · TAO Donations"
        title="Donate TAO to the campaign."
        accent="Donate TAO"
        lede="The Macro8 Donations wallet receives TAO contributions to fund the Silent Apocalypse Campaign, Vivinate Farms, and the Public Action Network. Every donation is on-chain and auditable."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/money", label: "Money · Macro8" },
          { href: "/money/macro8/tao", label: "TAO Donations" },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Wallet · Macro8 Donations</p>
        <div className="card max-w-3xl">
          <div className="font-mono text-sm md:text-base text-bone break-all">{WALLET}</div>
          <div className="mt-4 flex gap-2">
            <button onClick={copy} className="btn-primary text-sm">
              {copied ? "Copied ✓" : "Copy address"}
            </button>
            <a
              href={`https://taostats.io/account/${WALLET}`}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-sm"
            >
              View on Taostats →
            </a>
          </div>
        </div>
        <p className="mt-6 text-bone/55 text-sm max-w-3xl">
          Always verify the address character-by-character before sending. Donations sent to incorrect
          addresses are not recoverable. If you have questions, email donate@evolve8enterprises.com
          before sending.
        </p>
      </Section>

      <Section>
        <p className="eyebrow mb-4">How to donate</p>
        <ol className="space-y-6 max-w-3xl">
          {[
            { t: "Get TAO", b: "Buy TAO on a centralized exchange (Kraken, MEXC, Gate.io) or transfer from an existing Bittensor wallet." },
            { t: "Open your wallet", b: "Use the Bittensor wallet (CLI, Polkadot.js, or Bittensor mobile / browser extensions). Make sure you are on the Bittensor (Finney) network, not Polkadot mainnet." },
            { t: "Paste the address", b: "Copy the Macro8 Donations address above. Paste into your wallet's send field. Verify the first six and last six characters match exactly." },
            { t: "Send a small test first", b: "If this is your first transfer to this address, send a small test (0.01 TAO). Confirm receipt on Taostats. Then send the main amount." },
            { t: "Save the receipt", b: "Save the transaction hash. We post a public quarterly Transparency report with all incoming TAO, USD-equivalents, and program allocations." },
          ].map((s, i) => (
            <li key={s.t} className="flex gap-4">
              <span className="text-accent font-mono">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="h-display text-bone text-lg mb-1">{s.t}</h3>
                <p className="text-bone/80 leading-relaxed">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section bordered={false}>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="card">
            <p className="eyebrow mb-2">USD donations</p>
            <p className="text-bone/80 text-sm">
              Prefer cash? Donate via Far Away Projects (our 501(c)(3) fiscal sponsor) for tax-deductible
              U.S. giving.
            </p>
            <Link href="/donate" className="btn-secondary text-sm mt-4">USD Donate →</Link>
          </div>
          <div className="card">
            <p className="eyebrow mb-2">Tax & compliance</p>
            <p className="text-bone/55 text-sm">
              Cryptocurrency donations may have tax consequences in your jurisdiction. Consult a tax
              professional. Macro8 is not investment advice.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
