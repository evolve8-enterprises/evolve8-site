import Link from "next/link";
import { PageHeader, Section, CalloutBand } from "@/components/PageHeader";

export const metadata = {
  title: "Work · Work8 — Evolve8 Enterprises",
  description: "Three tracks into AI-resistant work, independent income, and AI-adjacent reskilling. Campus jobs. Work for yourself.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work · Work8"
        title="Work for yourself. In an economy that no longer works for you."
        accent="no longer works for you."
        lede="Work8 is a placement engine built for the AI-displacement era. Three tracks, one mission: get people into work that AI cannot take, income they do not need a boss to earn, and skills that hold value through the transition. Pick your track below."
        crumbs={[{ href: "/", label: "Home" }, { href: "/work", label: "Work · Work8" }]}
      />

      {/* Three Tracks */}
      <Section>
        <p className="eyebrow mb-4">Three tracks</p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/work/apply?track=a" className="card group block border-l-2 border-accent">
            <p className="eyebrow mb-2">Track A</p>
            <h3 className="h-display text-bone text-2xl mb-3 group-hover:text-accent transition-colors">
              AI-Resistant Work
            </h3>
            <p className="text-bone/75 leading-relaxed mb-4 text-sm">
              Care, trades, agriculture, food production, and physical labor. These are roles AI
              cannot automate in the next decade. Local employer partnerships, wage transparency,
              and trial-week placements.
            </p>
            <ul className="space-y-1 text-bone/60 text-xs mb-4">
              <li>· Healthcare aide, home care, and childcare</li>
              <li>· Electrical, plumbing, HVAC, carpentry</li>
              <li>· Agriculture, food production, Vivinate Farms</li>
              <li>· Logistics, transport, and physical operations</li>
            </ul>
            <div className="text-accent text-sm font-mono">Apply for Track A →</div>
          </Link>

          <Link href="/work/apply?track=b" className="card group block">
            <p className="eyebrow mb-2">Track B</p>
            <h3 className="h-display text-bone text-2xl mb-3 group-hover:text-accent transition-colors">
              Independent & Off-Platform Income
            </h3>
            <p className="text-bone/75 leading-relaxed mb-4 text-sm">
              Services, repair, teaching, growing, and local trade — income you control, that does
              not run through a platform. Cash and barter literacy. Local marketplace integration.
              Resilience Points for every contribution.
            </p>
            <ul className="space-y-1 text-bone/60 text-xs mb-4">
              <li>· Repair, tutoring, cooking, and local services</li>
              <li>· Side income alongside existing employment</li>
              <li>· Local marketplace connections</li>
              <li>· Resilience Points integration</li>
            </ul>
            <div className="text-accent text-sm font-mono">Apply for Track B →</div>
          </Link>

          <Link href="/work/apply?track=c" className="card group block">
            <p className="eyebrow mb-2">Track C</p>
            <h3 className="h-display text-bone text-2xl mb-3 group-hover:text-accent transition-colors">
              AI-Adjacent Reskilling
            </h3>
            <p className="text-bone/75 leading-relaxed mb-4 text-sm">
              For people who want to stay in knowledge work. Prompting, AI operations, data labeling,
              workflow automation, and model evaluation. Apprenticeship structure with mentor pairing
              and a project-based portfolio.
            </p>
            <ul className="space-y-1 text-bone/60 text-xs mb-4">
              <li>· AI prompting and operations</li>
              <li>· Data labeling and model evaluation</li>
              <li>· Workflow automation (no-code and low-code)</li>
              <li>· Project portfolio with mentor pairing</li>
            </ul>
            <div className="text-accent text-sm font-mono">Apply for Track C →</div>
          </Link>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <p className="eyebrow mb-4">How it works</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-8 max-w-4xl">
          Apply once. Get matched. Start earning.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Tell us about yourself",
              body: "Fill out the Work8 intake survey — your skills, your situation, what kind of work you want, and what is keeping you from it. This data helps us match you to real placements and build the case for more partners in your area.",
            },
            {
              step: "02",
              title: "Get matched",
              body: "We route you to live opportunities in your track. Track A is direct employer placement. Track B is a local marketplace match. Track C is an apprenticeship cohort. Every match comes with wage information and no recruitment fees.",
            },
            {
              step: "03",
              title: "Earn and build",
              body: "As you work, contribute, or teach — you accumulate Resilience Points. Points open access to Skills Academy courses, Land Competition eligibility, and priority placement in Evolve8 programs.",
            },
          ].map((s) => (
            <div key={s.step} className="card">
              <span className="text-accent font-mono text-sm mb-3 block">{s.step}</span>
              <h3 className="h-display text-bone text-xl mb-3">{s.title}</h3>
              <p className="text-bone/75 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Campus Jobs */}
      <Section>
        <p className="eyebrow mb-4">Campus employment</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          Work on an Evolve8 campus.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-bone/80 leading-relaxed">
            <p>Evolve8 campuses are being built as living and working environments — not just housing. Campus employment includes Vivinate Farms growing and operations, Way Station maintenance and support, Skills Academy facilitation, administrative and logistics roles, and construction and build-out work as campuses expand.</p>
            <p>Campus jobs pay in a combination of wages and Resilience Points. Some roles include room-and-board access on campus as part of compensation. Priority access to campus employment is given to Land Competition applicants and Track A Work8 participants.</p>
          </div>
          <div className="card">
            <p className="eyebrow mb-4">Open campus roles</p>
            <ul className="space-y-2 text-bone/70 text-sm mb-4">
              <li>· Vivinate Farms growing and production crew</li>
              <li>· Way Station build-out and operations</li>
              <li>· Skills Academy facilitator and assistant</li>
              <li>· Campus logistics and supply coordination</li>
              <li>· Administrative support and intake coordination</li>
              <li>· Content creation and documentation</li>
            </ul>
            <Link href="/work/apply?track=campus" className="btn-primary text-sm">Apply for Campus Work →</Link>
          </div>
        </div>
      </Section>

      {/* Why Work8 Exists */}
      <Section>
        <p className="eyebrow mb-4">The context</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          AI is removing the rungs from the ladder — not just the top.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-bone/80 leading-relaxed">
            <p>The conventional advice for AI displacement is "reskill and upgrade." That advice assumes you have the time, money, and safety net to spend 12-24 months in training before you need income. Most families do not.</p>
            <p>Work8 was built for the gap between "your job is going away" and "you can afford to train for a new one." It is a placement engine for people who need income now, and a reskilling path for people who can build toward the transition.</p>
          </div>
          <div className="card">
            <p className="eyebrow mb-3">Why data collection matters</p>
            <p className="text-bone/75 text-sm leading-relaxed mb-3">
              Every Work8 intake form builds a regional dataset on who needs what kind of work, where, and why they cannot access it. That data drives partner recruitment — employers, unions, cooperatives, and vocational programs. The more people who fill out the intake, the faster we can bring real opportunities to their area.
            </p>
            <p className="text-bone/60 text-xs">Your intake data is not sold. It is used to match you to opportunities and to aggregate workforce gap reporting.</p>
          </div>
        </div>
      </Section>

      <CalloutBand
        title="Pick your track. Fill out the intake."
        body="We match you to live opportunities — no recruiter fees, no platform middleman. Tell us what you need."
        ctaHref="/work/apply"
        ctaLabel="Start Intake →"
      />

      <Section bordered={false}>
        <p className="text-bone/50 text-sm max-w-3xl">
          Work8 is not a staffing agency or licensed recruiter. We do not guarantee placements, wages, or outcomes. Resilience Points are non-cash internal credits with no guaranteed monetary value. Campus employment availability depends on campus build-out status.
        </p>
      </Section>
    </>
  );
}
