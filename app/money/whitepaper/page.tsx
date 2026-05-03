import Link from "next/link";

export const metadata = {
  title: "Macro8 White Paper — Evolve8 Enterprises",
  description: "Macro8: AI-Driven Macro Strategy Discovery on Bittensor. Full technical white paper.",
};

function Section({ id, num, title, children }: { id: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-10 border-t border-gray-200">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-sm text-[#E11D2E] shrink-0">{num}</span>
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Sub({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-mono text-xs text-[#E11D2E] shrink-0">{num}</span>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Formula({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 bg-gray-50 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-800 overflow-x-auto">
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-gray-700 text-sm leading-relaxed">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2"><span className="text-[#E11D2E] shrink-0">·</span>{item}</li>
      ))}
    </ul>
  );
}

function TwoCol({ children }: { children: React.ReactNode }) {
  return <div className="grid md:grid-cols-2 gap-8">{children}</div>;
}

function InfoBox({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 border border-gray-200 p-5 my-4">
      {title && <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">{title}</p>}
      {children}
    </div>
  );
}

export default function WhitepaperPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Document header */}
        <div className="border-b-2 border-gray-900 pb-10 mb-4">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/money" className="font-mono text-xs text-gray-400 hover:text-[#E11D2E] transition-colors">
              ← Money · Macro8
            </Link>
          </div>
          <p className="font-mono text-xs text-[#E11D2E] uppercase tracking-widest mb-3">Technical White Paper</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-tight">
            Macro8
          </h1>
          <p className="text-xl text-gray-600 mb-6">AI-Driven Macro Strategy Discovery on Bittensor</p>
          <div className="flex flex-wrap gap-6 text-xs text-gray-400 font-mono">
            <span>Evolve8 Enterprises</span>
            <span>Bittensor Subnet</span>
            <span>Open Source</span>
            <span>May 2026</span>
          </div>
        </div>

        {/* Table of contents */}
        <div className="py-8 border-b border-gray-200 mb-2">
          <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4">Contents</p>
          <div className="grid md:grid-cols-2 gap-1 text-sm">
            {[
              ["1", "Abstract"], ["2", "Introduction"], ["3", "System Overview"],
              ["4", "Core Architecture"], ["5", "Scoring System"],
              ["6", "Signal Lifecycle Management"], ["7", "Knowledge System"],
              ["8", "Multi-Agent Framework"], ["9", "Bittensor Integration"],
              ["10", "Full Pipeline"], ["11", "Current Status"],
              ["12", "Risks"], ["13", "Roadmap"],
              ["14", "Success Criteria"], ["15", "Conclusion"],
            ].map(([num, title]) => (
              <a key={num} href={`#s${num}`} className="flex items-baseline gap-3 py-1 hover:text-[#E11D2E] transition-colors text-gray-600">
                <span className="font-mono text-xs text-gray-400 shrink-0 w-5">{num}.</span>
                <span>{title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── 1. ABSTRACT ─────────────────────────────────────────── */}
        <Section id="s1" num="1." title="Abstract">
          <p className="text-gray-700 leading-relaxed mb-5">
            Macro8 is a distributed, AI-powered macroeconomic strategy discovery system built on the Bittensor network. It leverages genetic programming, probabilistic portfolio construction, and realistic execution modeling to identify, evaluate, and allocate capital to robust trading signals.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">Unlike traditional alpha research platforms, Macro8 integrates:</p>
          <Bullets items={[
            "Evolutionary signal discovery via genetic programming",
            "Multi-horizon validation across 1, 7, and 30-day windows",
            "Transaction cost-aware simulation with spread and market impact modeling",
            "Capital scalability testing from $1K to $1M",
            "Decentralized incentive alignment via Bittensor's miner-validator architecture",
          ]} />
          <p className="text-gray-700 leading-relaxed mt-5">
            Macro8 transforms financial research into a competitive intelligence market, where miners generate strategies and validators allocate rewards based on true economic performance — not backtested curves.
          </p>
        </Section>

        {/* ── 2. INTRODUCTION ─────────────────────────────────────── */}
        <Section id="s2" num="2." title="Introduction">
          <p className="text-gray-700 leading-relaxed mb-5">
            Financial markets are complex, noisy, and adaptive systems. Extracting persistent alpha requires three properties that are almost never found together: generalization across economic regimes, robustness to real transaction costs, and scalability across meaningful capital levels.
          </p>
          <TwoCol>
            <InfoBox title="Why most approaches fail">
              <Bullets items={[
                "Overfit historical data — strategies that look great in backtest fail live",
                "Ignore execution constraints — signals that can't survive bid-ask spread are worthless",
                "Optimize static signals — markets adapt, static signals decay",
                "Lack continuous discovery — a one-time research effort becomes stale",
              ]} />
            </InfoBox>
            <InfoBox title="What Macro8 does instead">
              <Bullets items={[
                "Evolves signals continuously via genetic programming",
                "Scores every signal after realistic costs are deducted",
                "Tests every signal at multiple capital scales before production",
                "Rewards intelligence based on real, sustained performance",
              ]} />
            </InfoBox>
          </TwoCol>
          <p className="text-gray-700 leading-relaxed mt-5">
            Macro8 addresses these limitations by creating a self-improving research ecosystem where intelligence competes, evolves, and is rewarded based on real performance. The result is a system that gets better over time rather than decaying.
          </p>
        </Section>

        {/* ── 3. SYSTEM OVERVIEW ──────────────────────────────────── */}
        <Section id="s3" num="3." title="System Overview">
          <p className="text-gray-700 leading-relaxed mb-6">Macro8 is a five-layer system. Each layer contributes a distinct function to the overall alpha generation and capital allocation process.</p>
          <div className="flex flex-col gap-px my-6">
            {[
              { l: "Layer 1", n: "Data & Feature Layer", d: "Structured, causally valid inputs from market, macro, and derived sources" },
              { l: "Layer 2", n: "Signal Discovery", d: "Genetic programming evolves thousands of candidate signals per epoch" },
              { l: "Layer 3", n: "Knowledge System", d: "Research graph connects hypotheses, signals, performance, and regime" },
              { l: "Layer 4", n: "Signal Health & Lifecycle", d: "Tracks decay, capacity, and crowding risk across all active signals" },
              { l: "Layer 5", n: "Network Incentives", d: "Bittensor miner-validator incentive layer rewards sustained performance" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-[80px_160px_1fr] gap-4 bg-gray-50 border border-gray-200 px-4 py-3 text-sm">
                <span className="font-mono text-xs text-[#E11D2E] self-center">{row.l}</span>
                <span className="font-semibold text-gray-800 self-center">{row.n}</span>
                <span className="text-gray-600">{row.d}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 4. CORE ARCHITECTURE ────────────────────────────────── */}
        <Section id="s4" num="4." title="Core Architecture">

          <Sub num="4.1" title="Data & Feature Layer">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">The foundation of Macro8 is a structured, causally valid feature set. Raw market data is transformed into signals with predictive properties before any discovery begins.</p>
            <TwoCol>
              <div>
                <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">Primary inputs</p>
                <Bullets items={[
                  "OHLCV market data (open, high, low, close, volume)",
                  "Momentum indicators across multiple lookback windows",
                  "Volatility measures (realized, implied, rolling)",
                  "Z-score normalized cross-sectional features",
                  "Macro signals: rates, inflation, credit spreads, PMI",
                ]} />
              </div>
              <div>
                <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">Extensions</p>
                <Bullets items={[
                  "PCA latent factors (dimensionality reduction)",
                  "Autoencoder representations of market structure",
                  "Rolling regime detection (expansion / contraction / stress)",
                  "Cross-asset correlation matrices",
                  "Global macro data (DXY, yield curves, commodity indices)",
                ]} />
              </div>
            </TwoCol>
          </Sub>

          <Sub num="4.2" title="Signal Discovery — Genetic Programming">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">Signals in Macro8 are not designed by humans. They are evolved. The genetic programming engine generates expression trees that represent trading formulas, then evolves them through mutation, crossover, and selection pressure.</p>
            <Formula>
              alpha = f(features)<br />
              <br />
              Operators: +, −, ×, ÷, log, sqrt<br />
              Transformations: rank, z-score, normalize<br />
              Time delays: lag(x, n), rolling_mean(x, n)<br />
              <br />
              Evolution: mutation → crossover → selection → next generation
            </Formula>
            <p className="text-gray-700 text-sm leading-relaxed">Each epoch produces thousands of candidate signals. Only those that survive scoring — after costs, at scale, across multiple horizons — advance to validation. The rest are discarded. This creates natural selection pressure toward genuinely robust signals.</p>
          </Sub>

          <Sub num="4.3" title="Signal Engine">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">The signal engine converts evolved expressions into position-generating signals ready for portfolio construction.</p>
            <Formula>
              1. Evaluate formula: alpha_t = f(features_t)<br />
              2. Normalize output (remove scale dependency)<br />
              3. Transform: rank-normalize or z-score<br />
              4. Generate position: position_t = normalize(alpha_t)
            </Formula>
          </Sub>

          <Sub num="4.4" title="Execution & Cost Model">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              A signal that looks profitable before costs is worthless. Macro8 explicitly models two components of real-world trading friction.
            </p>
            <Formula>
              Spread cost:  cost_spread = spread × |Δposition|<br />
              <br />
              Market impact: impact = k × (trade_size / volume)^α<br />
              <br />
              Total cost:   total_cost = spread_cost + impact_cost<br />
              <br />
              Net return:   net_return = gross_return − total_cost
            </Formula>
            <InfoBox>
              <p className="text-sm text-gray-700 font-semibold">Core principle: A signal is only valid if it survives after costs.</p>
              <p className="text-sm text-gray-600 mt-1">Many signals that appear profitable on gross return are neutral or negative after realistic execution costs. Macro8 rejects them at the scoring stage before they ever reach production.</p>
            </InfoBox>
          </Sub>

          <Sub num="4.5" title="Portfolio Engine">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">Multiple validated signals are combined into a single capital allocation. Weights are dynamic and performance-driven — not static or equal-weighted.</p>
            <Formula>
              R_portfolio = Σ (w_i × R_i)<br />
              <br />
              Weights: dynamic, Sharpe-weighted, rebalanced on scoring cycle
            </Formula>
          </Sub>
        </Section>

        {/* ── 5. SCORING SYSTEM ───────────────────────────────────── */}
        <Section id="s5" num="5." title="Scoring System">
          <p className="text-gray-700 leading-relaxed mb-2">The scoring system is the core innovation of Macro8. It determines which signals survive, which are rewarded, and how capital is allocated.</p>

          <Sub num="5.1" title="Performance Metrics">
            <p className="text-gray-700 text-sm mb-3">Each signal is evaluated across six dimensions:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                ["Sharpe Ratio", "Risk-adjusted return"],
                ["Mean Return", "Average gross and net return"],
                ["Volatility", "Return standard deviation"],
                ["Max Drawdown", "Worst peak-to-trough loss"],
                ["Turnover", "Portfolio churn and cost drag"],
                ["Capacity", "Scalability to larger capital pools"],
              ].map(([name, desc]) => (
                <div key={name} className="bg-gray-50 border border-gray-200 p-3">
                  <div className="font-semibold text-gray-800 text-sm">{name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
                </div>
              ))}
            </div>
          </Sub>

          <Sub num="5.2" title="Multi-Horizon Validation">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">Metrics are computed across three time horizons simultaneously. A signal must demonstrate edge at all three to advance.</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { h: "1 Day", desc: "Short-term edge and signal freshness" },
                { h: "7 Days", desc: "Medium-term stability under regime variation" },
                { h: "30 Days", desc: "Long-term robustness and non-overfitting" },
              ].map((r) => (
                <div key={r.h} className="bg-gray-50 border border-gray-200 p-4 text-center">
                  <div className="font-mono text-lg font-bold text-[#E11D2E]">{r.h}</div>
                  <div className="text-xs text-gray-500 mt-1">{r.desc}</div>
                </div>
              ))}
            </div>
          </Sub>

          <Sub num="5.3" title="Capital Scaling Tests">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">Every signal is tested at four capital levels. Signals that degrade under larger sizes are rejected before production. This prevents the system from allocating capital to signals that cannot actually deploy it.</p>
            <div className="flex gap-3 flex-wrap">
              {["$1,000", "$10,000", "$100,000", "$1,000,000"].map((amt) => (
                <div key={amt} className="bg-gray-50 border border-gray-200 px-4 py-2 font-mono text-sm text-gray-800">{amt}</div>
              ))}
            </div>
          </Sub>

          <Sub num="5.4" title="Composite Score">
            <Formula>
              score = f(sharpe, return, drawdown, turnover, capacity)<br />
              <br />
              Weights tuned empirically; capacity and drawdown are hard gates.
            </Formula>
          </Sub>

          <Sub num="5.5" title="Probabilistic Capital Allocation">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">Macro8 uses Sharpe-weighted softmax to allocate capital across validated signals. This approach prevents winner-take-all overconcentration while still tilting toward higher-quality signals.</p>
            <Formula>
              w_i = exp(λ × Sharpe_i) / Σ exp(λ × Sharpe_j)<br />
              <br />
              λ controls sharpness of differentiation (higher λ = more concentrated)
            </Formula>
            <InfoBox>
              <p className="text-sm text-gray-700 font-semibold mb-1">Advantages over equal-weighting or winner-take-all:</p>
              <Bullets items={[
                "Prevents overconcentration in any single signal",
                "Preserves diversification across uncorrelated signals",
                "Creates smooth, continuous capital flow as signal quality changes",
                "Naturally degrades exposure to decaying signals without hard cutoffs",
              ]} />
            </InfoBox>
          </Sub>
        </Section>

        {/* ── 6. SIGNAL LIFECYCLE ─────────────────────────────────── */}
        <Section id="s6" num="6." title="Signal Lifecycle Management">
          <p className="text-gray-700 leading-relaxed mb-5">Signals evolve through defined states based on scoring performance and age. This prevents stale signals from holding capital and ensures continuous refresh.</p>

          <div className="flex flex-wrap gap-2 items-center my-6 font-mono text-xs">
            {["EXPERIMENTAL", "→", "VALIDATED", "→", "PRODUCTION", "→", "DECAYING", "→", "RETIRED"].map((s, i) => (
              <span key={i} className={s === "→" ? "text-gray-400" : "bg-gray-100 border border-gray-300 px-3 py-1.5 text-gray-700"}>{s}</span>
            ))}
          </div>

          <Sub num="6.1" title="Decay Model">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">Signal quality (information coefficient) degrades over time. The decay rate determines how long a signal remains viable.</p>
            <Formula>
              IC(t) ≈ IC₀ × exp(−λt)<br />
              <br />
              IC₀ = initial information coefficient (signal quality at launch)<br />
              λ = decay rate (estimated per-signal from live performance)<br />
              Half-life = ln(2) / λ
            </Formula>
            <p className="text-gray-700 text-sm">When a signal's IC falls below the production threshold, it enters DECAYING state. Continued underperformance triggers RETIRED.</p>
          </Sub>

          <Sub num="6.2" title="Capacity Model">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">Each signal's capacity score incorporates four factors:</p>
            <Bullets items={[
              "Observation stability — consistency of signal generation over time",
              "Observation count — minimum data history for statistical confidence",
              "Crowding risk — estimated exposure overlap with other active signals",
              "Market scalability — impact of the signal's trades on target markets",
            ]} />
          </Sub>
        </Section>

        {/* ── 7. KNOWLEDGE SYSTEM ─────────────────────────────────── */}
        <Section id="s7" num="7." title="Knowledge System">
          <p className="text-gray-700 leading-relaxed mb-5">Macro8 builds a persistent research graph connecting hypotheses, signals, performance data, and regime context. This graph grows continuously, allowing the system to learn from its own history.</p>

          <Formula>
            Hypothesis ↔ Signal ↔ Performance ↔ Regime
          </Formula>

          <Sub num="7.1" title="Auto-Hypothesis Generation">
            <p className="text-gray-700 text-sm leading-relaxed">Latent features extracted by the autoencoder and PCA layers can generate new research hypotheses automatically. When a latent factor shows predictive correlation with future returns, the system surfaces it as a candidate hypothesis for miner exploration. Example: "Latent factor X shows 0.12 IC at 7-day horizon in expansion regimes."</p>
          </Sub>

          <Sub num="7.2" title="Continuous Learning">
            <p className="text-gray-700 text-sm leading-relaxed mb-2">The knowledge system improves by reinforcing hypotheses connected to sustained production signals and eliminating those connected to failed or decayed signals. Over time, this biases the GP discovery engine toward more fertile areas of the feature space.</p>
          </Sub>
        </Section>

        {/* ── 8. MULTI-AGENT FRAMEWORK ────────────────────────────── */}
        <Section id="s8" num="8." title="Multi-Agent Framework">
          <p className="text-gray-700 leading-relaxed mb-5">Macro8 introduces role-based intelligence. Rather than a single monolithic system, distinct AI agents handle specialized tasks within the pipeline.</p>
          <div className="space-y-2">
            {[
              { role: "Signal Agent", desc: "Generates candidate signal formulas via genetic programming" },
              { role: "Strategy Agent", desc: "Refines and combines validated signals into portfolio constructs" },
              { role: "Risk Agent", desc: "Evaluates signal stability, drawdown risk, and crowding" },
              { role: "Portfolio Agent", desc: "Executes softmax capital allocation across production signals" },
              { role: "Meta Agent", desc: "Oversees system evolution, manages knowledge graph, and adjusts scoring weights" },
            ].map((a) => (
              <div key={a.role} className="grid grid-cols-[180px_1fr] gap-4 bg-gray-50 border border-gray-200 px-4 py-3 text-sm">
                <span className="font-semibold text-gray-800">{a.role}</span>
                <span className="text-gray-600">{a.desc}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 9. BITTENSOR INTEGRATION ────────────────────────────── */}
        <Section id="s9" num="9." title="Bittensor Integration">
          <p className="text-gray-700 leading-relaxed mb-5">Macro8 operates as a Bittensor subnet. The Bittensor network provides the decentralized incentive infrastructure that aligns miner behavior with genuine signal quality — without any central authority controlling outcomes.</p>

          <TwoCol>
            <InfoBox title="Miners">
              <Bullets items={[
                "Run the GP discovery engine to generate candidate signals",
                "Submit strategies with supporting performance data",
                "Compete for TAO rewards based on validator scoring",
                "Self-select toward more productive hypothesis areas over time",
              ]} />
            </InfoBox>
            <InfoBox title="Validators">
              <Bullets items={[
                "Evaluate miner-submitted signals against the full scoring system",
                "Apply multi-horizon, multi-scale, cost-aware scoring",
                "Assign weights via: subtensor.set_weights()",
                "Stake-weighted — larger stake = greater influence on reward distribution",
              ]} />
            </InfoBox>
          </TwoCol>

          <Sub num="9.1" title="Incentive Alignment">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">Bittensor's economic structure ensures that rewards flow to miners producing signals with real, verifiable performance — not signals that look good on paper but fail under scrutiny. Three properties drive alignment:</p>
            <Bullets items={[
              "Real performance: scoring is based on net returns after costs, not gross backtest",
              "Robustness: multi-horizon and multi-scale testing prevents single-point overfitting",
              "Scalability: capacity testing prevents rewards for signals that can't deploy real capital",
            ]} />
          </Sub>
        </Section>

        {/* ── 10. FULL PIPELINE ───────────────────────────────────── */}
        <Section id="s10" num="10." title="Full Pipeline">
          <p className="text-gray-700 leading-relaxed mb-6">End-to-end data flow from raw features to validator reward assignment:</p>
          <div className="flex flex-col gap-px max-w-sm">
            {[
              "Features (market + macro + derived)",
              "GP Miner (evolve expression trees)",
              "Signal Engine (normalize → position)",
              "Execution + Cost Model (spread + impact)",
              "Performance Metrics (Sharpe, return, drawdown)",
              "Capital Scaling Simulation ($1K → $1M)",
              "Composite Scoring",
              "Softmax Allocation (portfolio weights)",
              "Portfolio Construction",
              "Validator Reward Assignment (Bittensor)",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-4 py-2.5">
                <span className="font-mono text-xs text-[#E11D2E] w-5 shrink-0">{i + 1}</span>
                <span className="text-sm text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 11. CURRENT STATUS ──────────────────────────────────── */}
        <Section id="s11" num="11." title="Current Status">
          <TwoCol>
            <InfoBox title="Completed">
              <Bullets items={[
                "Feature system and data pipeline",
                "Genetic programming engine",
                "Execution cost modeling (spread + impact)",
                "Multi-horizon scoring framework",
                "Softmax capital allocation",
                "Signal lifecycle modeling (decay + capacity)",
              ]} />
            </InfoBox>
            <InfoBox title="In Progress">
              <Bullets items={[
                "Bittensor subnet deployment and registration",
                "Miner-validator communication protocol",
                "Real market data integration (live feeds)",
                "Validator scoring calibration",
                "Miner onboarding documentation",
              ]} />
            </InfoBox>
          </TwoCol>
        </Section>

        {/* ── 12. RISKS ───────────────────────────────────────────── */}
        <Section id="s12" num="12." title="Risks">
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { r: "Signal overfitting", d: "GP may find signals that fit historical data but lack predictive power. Multi-horizon validation and out-of-sample testing are the primary mitigations." },
              { r: "Underestimated costs", d: "Cost models are estimates. Live execution may exhibit higher impact or wider spreads than modeled, especially in stress periods." },
              { r: "Signal crowding", d: "If many miners converge on similar signals, market impact increases and alpha decays faster than the decay model predicts." },
              { r: "Capacity collapse", d: "Signals validated at $10K may degrade significantly at $1M if market liquidity assumptions were optimistic." },
              { r: "Validator bias", d: "Validators with large stake could theoretically bias rewards toward miners they control. Decentralization of stake is the structural mitigation." },
            ].map((item) => (
              <div key={item.r} className="bg-gray-50 border border-gray-200 p-4">
                <div className="font-semibold text-gray-800 text-sm mb-1">{item.r}</div>
                <div className="text-xs text-gray-600 leading-relaxed">{item.d}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 13. ROADMAP ─────────────────────────────────────────── */}
        <Section id="s13" num="13." title="Roadmap">
          <div className="space-y-3">
            {[
              { phase: "Phase 1", title: "Testnet Deployment", items: ["Bittensor subnet registration", "Miner onboarding and documentation", "Validator calibration on simulated data"] },
              { phase: "Phase 2", title: "Feature Expansion", items: ["Advanced macro feature set (global liquidity, sovereign credit)", "Regime modeling (expansion / contraction / stagflation / stress)", "Multi-country signal coverage"] },
              { phase: "Phase 3", title: "Meta-Learning Layer", items: ["Auto-hypothesis generation from latent features", "Adaptive scoring weight tuning", "Cross-signal correlation management"] },
              { phase: "Phase 4", title: "Real Capital Integration", items: ["Live market data pipelines", "Institutional-grade execution infrastructure", "Open API for downstream applications"] },
            ].map((p) => (
              <div key={p.phase} className="border border-gray-200 p-5">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-xs text-[#E11D2E]">{p.phase}</span>
                  <span className="font-semibold text-gray-800">{p.title}</span>
                </div>
                <Bullets items={p.items} />
              </div>
            ))}
          </div>
        </Section>

        {/* ── 14. SUCCESS CRITERIA ────────────────────────────────── */}
        <Section id="s14" num="14." title="Success Criteria">
          <p className="text-gray-700 leading-relaxed mb-5">Macro8 is considered successful if it demonstrably achieves all four of the following:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              ["Scalable alpha", "Signals survive costs and remain profitable at $100K+ capital levels in live trading"],
              ["True signal quality rewards", "Miners producing genuinely robust signals consistently out-earn miners producing overfitted ones"],
              ["Regime adaptability", "The portfolio maintains positive performance across expansion, contraction, and stagflation regimes"],
              ["Efficient capital allocation", "Softmax weighting consistently allocates more capital to better signals, not to larger miners"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-gray-50 border border-gray-200 p-4">
                <div className="font-semibold text-gray-800 text-sm mb-1">{title}</div>
                <div className="text-xs text-gray-600 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 15. CONCLUSION ──────────────────────────────────────── */}
        <Section id="s15" num="15." title="Conclusion">
          <p className="text-gray-700 leading-relaxed mb-5">
            Macro8 is not just a trading system. It is a discovery engine, a simulation environment, a capital allocator, and a decentralized intelligence market — all built on open-source infrastructure with transparent incentives.
          </p>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {[
              ["Miners generate ideas", "Evolutionary search across the signal space, continuous and decentralized"],
              ["Validators enforce reality", "Cost-aware, multi-horizon, multi-scale scoring with no override"],
              ["Capital flows to truth", "Softmax allocation ensures capital tracks genuine performance"],
              ["The system gets better", "Knowledge graph, auto-hypothesis generation, and continuous signal refresh"],
            ].map(([title, desc]) => (
              <div key={title} className="border-l-2 border-[#E11D2E] pl-4 py-1">
                <div className="font-semibold text-gray-800 text-sm">{title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            The global market for macroeconomic intelligence is served almost entirely by centralized, paywalled platforms — Bloomberg, FactSet, Refinitiv — costing upward of $24,000 per seat per year. Macro8 is the open alternative: distributed intelligence, transparent incentives, and outputs available to anyone.
          </p>
        </Section>

        {/* Footer */}
        <div className="border-t-2 border-gray-900 pt-10 mt-4 flex flex-wrap justify-between items-start gap-6">
          <div>
            <p className="font-mono text-xs text-gray-400 mb-1">Macro8 · Evolve8 Enterprises</p>
            <p className="font-mono text-xs text-gray-400">Open Source · Bittensor Subnet · May 2026</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/money/families" className="font-mono text-xs text-gray-500 hover:text-[#E11D2E] transition-colors">For Families →</Link>
            <Link href="/money/investors" className="font-mono text-xs text-gray-500 hover:text-[#E11D2E] transition-colors">For Investors →</Link>
            <Link href="/disclaimers" className="font-mono text-xs text-gray-500 hover:text-[#E11D2E] transition-colors">Disclaimers →</Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-400 leading-relaxed">
          Macro8 is financial education and open-source research. Nothing in this document constitutes investment advice, a securities offering, or a recommendation to buy or sell any asset. All investing involves risk. See full disclaimers at evolve8enterprises.com/disclaimers.
        </p>
      </div>
    </div>
  );
}
