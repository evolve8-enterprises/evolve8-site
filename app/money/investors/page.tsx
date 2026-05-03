import Link from "next/link";
import { PageHeader, Section, CalloutBand } from "@/components/PageHeader";

export const metadata = {
  title: "For Investors & Coders — Macro8 · Evolve8 Enterprises",
  description: "Bittensor subnet integration, TAO donations, open-source model contribution, and the investment thesis for Macro8 as a network intelligence layer.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Money · For Investors & Coders"
        title="Build on Macro8. Mine it. Contribute to it."
        accent="Contribute to it."
        lede="Macro8 is an open-source macroeconomic intelligence subnet on Bittensor. If you are a developer, quantitative researcher, miner, validator, or investor in the Bittensor ecosystem — this page is for you."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/money", label: "Money · Macro8" },
          { href: "/money/investors", label: "For Investors & Coders" },
        ]}
      />

      {/* The Investment Thesis */}
      <Section>
        <p className="eyebrow mb-4">The investment thesis</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-8 max-w-4xl">
          Macro8 as a network intelligence layer for macroeconomic data.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-bone/80 leading-relaxed">
            <p>The global market for macroeconomic research, regime analysis, and financial data is enormous — Bloomberg terminals alone cost $24,000/year per seat. Institutional traders, family offices, RIAs, hedge funds, and sovereign wealth funds all pay for macroeconomic intelligence that retail investors and families cannot access.</p>
            <p>Macro8's thesis: build the same quality of macroeconomic regime detection on a decentralized, open, permissionless network — and make it freely available. The network effect compounds as more miners compete, validators improve scoring, and the model quality approaches or exceeds centralized alternatives.</p>
            <p>A Bittensor subnet that wins on macroeconomic intelligence becomes infrastructure for a large and underserved market. TAO staked to Macro8 participates in that network value.</p>
          </div>
          <div className="space-y-4">
            <div className="card">
              <p className="eyebrow mb-3">Market sizing</p>
              <ul className="space-y-2 text-bone/70 text-sm">
                <li>· Bloomberg terminal: $24,000/year per seat (~330,000 subscribers)</li>
                <li>· FactSet: $12,000-$48,000/year per user</li>
                <li>· Refinitiv Eikon: $22,000/year per user</li>
                <li>· Total addressable market (financial data): $35B+ annually</li>
                <li>· Retail access to macro intelligence: largely unserved</li>
              </ul>
            </div>
            <div className="card">
              <p className="eyebrow mb-3">What Macro8 disrupts</p>
              <ul className="space-y-2 text-bone/70 text-sm">
                <li>· Centralized financial data monopolies</li>
                <li>· Institutional-only macroeconomic research</li>
                <li>· Pay-walled regime analysis tools</li>
                <li>· Opaque AI-driven financial intelligence</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* TAO Donations */}
      <Section>
        <p className="eyebrow mb-4">TAO donations & staking</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          Support the subnet. On-chain, transparent, auditable.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-bone/80 leading-relaxed">
            <p>Macro8 accepts TAO (Bittensor's native token) donations directly to the subnet staking pool. Staked TAO increases miner incentives — better rewards attract better miners with more compute, which improves model quality.</p>
            <p>All donations go on-chain to the subnet validator address. There is no intermediary, no Evolve8 revenue extraction from TAO donations, and no lock-up. You can audit every inflow on-chain in real time.</p>
            <p>This is not an equity investment. TAO is a network token. Its value fluctuates. You are supporting an open-source infrastructure project — not buying a financial product.</p>
          </div>
          <div className="card">
            <p className="eyebrow mb-4">How to donate TAO</p>
            <ol className="space-y-3 text-bone/80 text-sm">
              <li><span className="text-accent mr-2 font-mono">01.</span> Set up a Bittensor wallet (Polkadot-JS or Bittensor native CLI)</li>
              <li><span className="text-accent mr-2 font-mono">02.</span> Acquire TAO on a supported exchange (MEXC, Bitget, Gate.io)</li>
              <li><span className="text-accent mr-2 font-mono">03.</span> Use btcli to stake to the Macro8 subnet validator hotkey</li>
              <li><span className="text-accent mr-2 font-mono">04.</span> Your stake is visible on-chain and earns network emissions proportional to subnet performance</li>
            </ol>
            <p className="mt-4 text-bone/40 text-xs">Subnet hotkey and staking address available via the open-source repo or contact. TAO staking is subject to Bittensor network mechanics and carries technical and market risk.</p>
          </div>
        </div>
      </Section>

      {/* Mining & Validating */}
      <Section>
        <p className="eyebrow mb-4">Mine and validate</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-8 max-w-4xl">
          Run a miner or validator on the Macro8 subnet.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card border-l-2 border-accent">
            <p className="eyebrow mb-2">Mining</p>
            <h3 className="h-display text-bone text-2xl mb-3">Run a Macro8 Miner</h3>
            <p className="text-bone/75 text-sm leading-relaxed mb-4">
              Miners ingest public macroeconomic data, train or run regime classification models, and submit outputs to validators. Better outputs earn more TAO. You bring the compute; the subnet provides the task and the reward.
            </p>
            <p className="eyebrow text-xs mb-2">Requirements</p>
            <ul className="space-y-1.5 text-bone/70 text-sm mb-4">
              <li>· Python 3.10+, Bittensor SDK</li>
              <li>· GPU recommended (CUDA-capable, 8GB+ VRAM minimum)</li>
              <li>· Registered hotkey with TAO for subnet registration fee</li>
              <li>· Access to public macroeconomic data APIs (FRED, BLS, etc.)</li>
            </ul>
            <Link href="/contact" className="text-accent text-sm font-mono">Get setup instructions →</Link>
          </div>

          <div className="card">
            <p className="eyebrow mb-2">Validating</p>
            <h3 className="h-display text-bone text-2xl mb-3">Run a Macro8 Validator</h3>
            <p className="text-bone/75 text-sm leading-relaxed mb-4">
              Validators score miner outputs based on model accuracy, regime consistency, and calibration over time. Validators control weight assignments and shape the incentive landscape. High-quality validators with large stake drive subnet quality.
            </p>
            <p className="eyebrow text-xs mb-2">Requirements</p>
            <ul className="space-y-1.5 text-bone/70 text-sm mb-4">
              <li>· Significant TAO stake (validator weight is stake-weighted)</li>
              <li>· Python 3.10+, Bittensor SDK</li>
              <li>· Reliable uptime (validators need consistent availability)</li>
              <li>· Understanding of the Macro8 scoring rubric</li>
            </ul>
            <Link href="/contact" className="text-accent text-sm font-mono">Validator onboarding →</Link>
          </div>
        </div>
      </Section>

      {/* Open Source Contribution */}
      <Section>
        <p className="eyebrow mb-4">Open-source contribution</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          Improve the models. Expand the data. Build on the outputs.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-bone/80 leading-relaxed mb-4">
              Macro8's code, model architecture, scoring rubric, and research roadmap are open-source. Contributions are welcome across the full stack — model improvements, new data source integrations, output visualization, API wrappers, and downstream applications.
            </p>
            <p className="eyebrow mb-3 text-xs">Priority contribution areas</p>
            <ul className="space-y-2 text-bone/80 text-sm">
              <li>· Improved regime detection models (LSTM, Transformer, ensemble methods)</li>
              <li>· Multi-country and global regime correlation</li>
              <li>· Real-time data pipeline improvements</li>
              <li>· Output API and developer-friendly endpoint documentation</li>
              <li>· Visualization tools for regime signals</li>
              <li>· Backtesting frameworks for regime-based strategies</li>
              <li>· Dollar stress and reserve currency decay modeling</li>
              <li>· AI employment disruption impact models</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="card">
              <p className="eyebrow mb-3">Build on Macro8 outputs</p>
              <p className="text-bone/75 text-sm leading-relaxed mb-3">
                Macro8 regime signals are freely available via the subnet. Developers can build applications on top of the signal feed — portfolio tools, family financial dashboards, research interfaces, or downstream Bittensor subnet integrations.
              </p>
              <Link href="/contact" className="text-accent text-sm font-mono">API access & docs →</Link>
            </div>
            <div className="card">
              <p className="eyebrow mb-3">Quantitative researchers</p>
              <p className="text-bone/75 text-sm leading-relaxed">
                The Macro8 research roadmap is publicly documented. If you are a quant, economist, or data scientist who wants to contribute to the modeling methodology — the door is open. We are building toward a peer-review process for model contributions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Bittensor Ecosystem Context */}
      <Section>
        <p className="eyebrow mb-4">Bittensor ecosystem context</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          How Macro8 fits in the broader Bittensor network.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-bone/80 leading-relaxed">
            <p>Bittensor is a decentralized network for AI computation. Each subnet within Bittensor specializes in a specific AI task — text generation, image synthesis, financial modeling, and more. Subnets compete for TAO emissions proportional to their value to the overall network.</p>
            <p>Macro8 occupies a distinct niche: macroeconomic regime intelligence. No other major Bittensor subnet focuses on financial macro modeling at the population level. The output is not price prediction — it is economic condition classification, which is a fundamentally different (and more defensible) task.</p>
            <p>As the Bittensor ecosystem grows, subnet specialization becomes more valuable. A macro intelligence layer that thousands of downstream applications and investors rely on is a high-value subnet position.</p>
          </div>
          <div className="card">
            <p className="eyebrow mb-3">Key Bittensor mechanics</p>
            <ul className="space-y-2 text-bone/70 text-sm">
              <li>· <span className="text-bone/90">TAO</span> — native Bittensor token, fixed supply (21M)</li>
              <li>· <span className="text-bone/90">Subnet emissions</span> — each subnet earns TAO proportional to network weight</li>
              <li>· <span className="text-bone/90">Validator weight</span> — determined by stake; shapes miner incentives</li>
              <li>· <span className="text-bone/90">Miner rewards</span> — determined by validator scoring of outputs</li>
              <li>· <span className="text-bone/90">Registration</span> — miners/validators pay a TAO fee to register on a subnet</li>
              <li>· <span className="text-bone/90">Immune period</span> — new miners have a grace period before scoring begins</li>
            </ul>
            <Link href="/money/whitepaper" className="mt-4 block text-accent text-sm font-mono">Read the full white paper →</Link>
          </div>
        </div>
      </Section>

      <CalloutBand
        title="Ready to build on Macro8?"
        body="Whether you want to mine, validate, donate TAO, contribute code, or build an application on the output signal — we want to hear from you."
        ctaHref="/contact"
        ctaLabel="Contact the Team →"
      />

      <Section bordered={false}>
        <p className="text-bone/50 text-sm max-w-3xl">
          Macro8 is financial education and open-source research infrastructure. Nothing on this page constitutes investment advice, a securities offering, or a recommendation to buy or sell TAO or any other asset. TAO and all cryptocurrency investments carry substantial risk of total loss. Bittensor subnet participation involves technical and economic risk. Consult a licensed financial advisor. See <Link href="/disclaimers" className="text-accent hover:underline">full disclaimers</Link>.
        </p>
      </Section>
    </>
  );
}
