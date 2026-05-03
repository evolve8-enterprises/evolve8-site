import Link from "next/link";
import { PageHeader, Section, CalloutBand } from "@/components/PageHeader";

export const metadata = {
  title: "For Families & Beginners — Macro8 · Evolve8 Enterprises",
  description: "Plain language financial education. What inflation, dollar stress, and AI disruption mean for your household. Five modes. No jargon.",
};

export default function FamiliesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Money · For Families & Beginners"
        title="What is happening to your money — in plain language."
        accent="in plain language."
        lede="You do not need to be an economist to understand that something is wrong. Groceries cost more. Your paycheck buys less. You hear about interest rates, inflation, and the national debt — but nobody explains what it means for your family. This page does."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/money", label: "Money · Macro8" },
          { href: "/money/families", label: "For Families & Beginners" },
        ]}
      />

      {/* What Is Happening Right Now */}
      <Section>
        <p className="eyebrow mb-4">What is happening right now</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-8 max-w-4xl">
          Five things squeezing your household — and why they are connected.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Inflation",
              simple: "Your money buys less than it used to.",
              detail: "When the price of groceries, rent, and gas goes up faster than your paycheck, you are experiencing inflation. The government prints money to cover debts — and more money chasing the same goods means each dollar is worth less. The U.S. dollar has lost over 97% of its purchasing power since 1913.",
            },
            {
              title: "Interest Rates",
              simple: "Borrowing money now costs much more.",
              detail: "When the Federal Reserve raises interest rates to fight inflation, it becomes more expensive to borrow. Your mortgage, car loan, and credit card payments all go up. Businesses borrow less and hire less. It is a tradeoff — and regular families usually pay the cost on both ends.",
            },
            {
              title: "National Debt",
              simple: "The government owes $35 trillion. Someone will pay it.",
              detail: "The U.S. national debt is over $35 trillion — and growing. The interest alone now costs more per year than the entire military budget. When governments owe too much, they either raise taxes, cut services, inflate the currency, or default. Your family is downstream from all four options.",
            },
            {
              title: "AI Disruption",
              simple: "AI is replacing jobs faster than new ones are being created.",
              detail: "An estimated 300 million jobs globally are at high risk of automation in the next decade. This is not a distant threat — it is already hitting white-collar work: accounting, legal research, customer service, data entry, writing, and coding. Wages for displaced workers don't automatically recover.",
            },
            {
              title: "Dollar Stress",
              simple: "Other countries are starting to trade without the dollar.",
              detail: "The U.S. dollar's status as the world's reserve currency is what allows America to run large deficits. Countries like China, Russia, Saudi Arabia, and Brazil are building trade networks that bypass the dollar. If the dollar loses reserve status, the cost of everything Americans import rises sharply.",
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="h-display text-bone text-xl mb-2">{item.title}</h3>
              <p className="text-accent text-sm font-mono mb-3">{item.simple}</p>
              <p className="text-bone/70 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The Five Modes — Family Version */}
      <Section>
        <p className="eyebrow mb-4">The five economic modes — for families</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          The economy runs in cycles. Where you are in the cycle matters.
        </h2>
        <p className="text-bone/80 max-w-3xl leading-relaxed mb-8">
          Macro8 identifies five economic regimes — like weather patterns for the economy. Knowing which mode you are in helps you make better decisions about your job, your savings, your debt, and your family's resilience. This is not a prediction. It is pattern recognition — the same thing a good financial advisor uses, made free and open.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              mode: "Expansion",
              what: "Economy is growing. Jobs are available. Credit is easy to get.",
              familyMeaning: "Good time to build skills, grow income, pay down debt, and build emergency savings. Do not assume it lasts.",
              color: "border-green-400/30",
            },
            {
              mode: "Contraction",
              what: "Economy is shrinking. Jobs are harder to find. Lending tightens.",
              familyMeaning: "Protect your income. Cut unnecessary subscriptions. Build cash reserves. Avoid new variable-rate debt. Job security matters more than raises right now.",
              color: "border-red-400/30",
            },
            {
              mode: "Stagflation",
              what: "Prices keep rising but the economy is not growing. The worst combination.",
              familyMeaning: "Your paycheck buys less while job security weakens. Reduce fixed expenses where possible. Learn practical skills that hold value regardless of the economy.",
              color: "border-yellow-400/30",
            },
            {
              mode: "Debt Stress",
              what: "Major financial institutions and governments are straining under debt.",
              familyMeaning: "Banks may restrict credit. Government programs may be cut. Keep cash accessible. Understand which of your debts are at variable rates.",
              color: "border-blue-400/30",
            },
            {
              mode: "Transition",
              what: "The regime is changing. Nobody is sure what comes next.",
              familyMeaning: "This is a time for caution, not bold moves. Diversify across multiple types of assets and income sources. Avoid concentrating everything in one bet.",
              color: "border-accent/30",
            },
          ].map((m) => (
            <div key={m.mode} className={`card border-l-2 ${m.color}`}>
              <h3 className="h-display text-bone text-xl mb-2">{m.mode}</h3>
              <p className="text-bone/60 text-sm mb-3">{m.what}</p>
              <p className="eyebrow text-xs mb-1">What this means for your family</p>
              <p className="text-bone/80 text-sm leading-relaxed">{m.familyMeaning}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Family Investment Scenario Tool */}
      <Section>
        <p className="eyebrow mb-4">Family investment scenario tool</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          See how different economic modes affect a family like yours.
        </h2>
        <p className="text-bone/80 max-w-3xl leading-relaxed mb-8">
          This tool is not a calculator and it is not advice. It is a scenario explorer — enter your rough household situation and see how each of the five economic modes would affect a family in your position, based on historical patterns.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <p className="eyebrow mb-4">What you can explore</p>
            <ul className="space-y-2 text-bone/80 text-sm">
              <li>· How much does inflation typically cost a household at your income level per year?</li>
              <li>· How would a recession historically affect your job category?</li>
              <li>· If rates stay high, what does that mean for your mortgage or rent?</li>
              <li>· What asset types have historically held value in stagflation?</li>
              <li>· How would a 20% dollar devaluation affect your grocery bill?</li>
              <li>· What does building a 6-month emergency fund actually require at your income?</li>
            </ul>
          </div>
          <div className="card bg-muted">
            <p className="eyebrow mb-3">Tool coming soon</p>
            <p className="text-bone/70 text-sm leading-relaxed mb-4">
              The Family Investment Scenario Tool is in development. It will be free, no login required, and open-source. It connects to live Macro8 regime signals so the scenarios reflect current conditions — not just historical averages.
            </p>
            <Link href="/contact" className="btn-secondary text-sm">Get notified when it launches →</Link>
          </div>
        </div>
      </Section>

      {/* Practical Actions */}
      <Section>
        <p className="eyebrow mb-4">Practical starting points</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          What can a family actually do?
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="eyebrow mb-3 text-xs">Foundation (any regime)</p>
            <ul className="space-y-2 text-bone/80 text-sm mb-6">
              <li>· 3-6 months of expenses in accessible cash savings</li>
              <li>· No high-interest variable-rate debt (pay it down in expansion)</li>
              <li>· Practical skills that earn income outside your primary job</li>
              <li>· Food and water resilience (Way Stations, Vivinate Farms)</li>
              <li>· At least one income earner in the household with recession-resistant skills</li>
            </ul>
            <p className="eyebrow mb-3 text-xs">Financial literacy resources</p>
            <ul className="space-y-2 text-bone/80 text-sm">
              <li>· <span className="text-accent">Education Library</span> — free financial education content</li>
              <li>· Macro8 Regime Signals — open-source, updated continuously</li>
              <li>· Skills Academy — earn income outside traditional employment</li>
            </ul>
          </div>
          <div className="card">
            <p className="eyebrow mb-3">A note on investing</p>
            <p className="text-bone/80 text-sm leading-relaxed mb-3">
              Macro8 does not tell you what to buy or sell. A licensed financial advisor, registered investment advisor (RIA), or fiduciary is the right resource for that. What Macro8 does is help you understand the economic environment so that conversation with your advisor is better informed.
            </p>
            <p className="text-bone/80 text-sm leading-relaxed mb-4">
              If you cannot afford a financial advisor, the Education Library and Macro8 open outputs are a place to start building your own understanding.
            </p>
            <Link href="/education-library" className="text-accent text-sm font-mono">Education Library →</Link>
          </div>
        </div>
      </Section>

      {/* Related Programs */}
      <Section>
        <p className="eyebrow mb-4">Related Evolve8 programs</p>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/medical/way-stations" className="card group block">
            <h3 className="h-display text-bone text-lg mb-2 group-hover:text-accent transition-colors">Way Stations</h3>
            <p className="text-bone/70 text-sm">Food, water, and medical support along highways. Free access, no login required.</p>
          </Link>
          <Link href="/food" className="card group block">
            <h3 className="h-display text-bone text-lg mb-2 group-hover:text-accent transition-colors">Vivinate Farms</h3>
            <p className="text-bone/70 text-sm">Food production and distribution. Campus farms, container farms, bulk cooperative food.</p>
          </Link>
          <Link href="/skills" className="card group block">
            <h3 className="h-display text-bone text-lg mb-2 group-hover:text-accent transition-colors">Skills Academy</h3>
            <p className="text-bone/70 text-sm">Learn practical skills that translate to income. Earn Resilience Points. Build financial independence.</p>
          </Link>
        </div>
      </Section>

      <CalloutBand
        title="Start with the Silent Apocalypse Simulator."
        body="Understand where you are in the economic cycle before making any financial decisions. Free, no login required."
        ctaHref="/simulator"
        ctaLabel="Run the Simulator →"
      />

      <Section bordered={false}>
        <p className="text-bone/50 text-sm max-w-3xl">
          Macro8 is financial education only. Nothing on this page is investment advice or a recommendation to buy, sell, or hold any asset. Historical patterns do not guarantee future outcomes. All investing involves risk of loss. Consult a licensed financial advisor for personalized advice. See <Link href="/disclaimers" className="text-accent hover:underline">full disclaimers</Link>.
        </p>
      </Section>
    </>
  );
}
