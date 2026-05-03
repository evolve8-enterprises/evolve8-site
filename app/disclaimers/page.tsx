import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";

export const metadata = {
  title: "Disclaimers — Evolve8 Enterprises",
  description: "Full disclaimers for all Evolve8 Enterprises programs: legal, medical, financial, simulator, and general.",
};

export default function DisclaimersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Disclaimers"
        title="What Evolve8 Enterprises is — and is not."
        accent="is not."
        lede="Evolve8 Enterprises is a private public-interest company providing education, research, documentation, simulation, and community infrastructure programs. The following disclaimers apply across all programs. Read the section relevant to the program you are using."
        crumbs={[{ href: "/", label: "Home" }, { href: "/disclaimers", label: "Disclaimers" }]}
      />

      {/* General */}
      <Section>
        <p className="eyebrow mb-4">General — applies to all programs</p>
        <div className="max-w-4xl space-y-4 text-bone/80 leading-relaxed">
          <p>Evolve8 Enterprises, Inc. is a private company. It is not a government agency, public benefit corporation, nonprofit, or registered charity. It does not provide legal advice, medical advice, investment advice, financial planning, therapy, clinical services, or professional consulting of any kind.</p>
          <p>Nothing on the Evolve8 Enterprises website, in any program, document, tool, simulation, or communication constitutes a professional service relationship of any kind. Information provided is for educational and research purposes only.</p>
          <p>Results, outcomes, placements, opportunities, Resilience Points, and program access described on this site are not guaranteed. All programs are subject to availability, eligibility requirements, and operational capacity.</p>
          <p>Evolve8 Enterprises reserves the right to modify, pause, or discontinue any program at any time without notice.</p>
        </div>
      </Section>

      {/* Legal / Public Action */}
      <Section>
        <p className="eyebrow mb-4">Legal · Public Action & Legal Help Platform</p>
        <div className="max-w-4xl space-y-4 text-bone/80 leading-relaxed">
          <div className="card border-l-2 border-accent">
            <p className="font-mono text-accent text-sm mb-2">NOT LEGAL ADVICE</p>
            <p className="text-bone/80 text-sm leading-relaxed">The Public Action & Legal Education Network, the Legal Help Platform, the Evidence Vault, harm category documentation, case reviewer services, and all related tools and content are <strong className="text-bone">educational and informational only</strong>. They do not constitute legal advice. No attorney-client relationship is formed by using any Evolve8 legal program, submitting a report, or communicating with Evolve8 staff or reviewers.</p>
          </div>
          <p>Evolve8 Enterprises is not a law firm and does not employ attorneys in a legal representation capacity. No Evolve8 program guarantees eligibility for class action participation, settlements, lawsuit outcomes, government benefits, or any legal remedy.</p>
          <p>The Legal Help Platform connects users with information about third-party legal resources, attorneys, legal aid organizations, and self-help tools. Evolve8 does not control and is not responsible for the quality, accuracy, or outcome of services provided by any third party.</p>
          <p>If you need legal advice, consult a licensed attorney in your jurisdiction. For emergencies involving safety or immediate legal rights, contact law enforcement or emergency services.</p>
          <p>The Evidence Vault stores documentation submitted by users for educational and aggregation purposes. Submission does not initiate a legal proceeding, guarantee review by an attorney, or preserve legal rights. Consult an attorney about preservation of legal claims and statutes of limitations.</p>
        </div>
        <div className="mt-6">
          <Link href="/legal" className="text-accent text-sm font-mono">Public Action Network →</Link>
        </div>
      </Section>

      {/* Medical */}
      <Section>
        <p className="eyebrow mb-4">Medical · Way Stations & Food Prescription Campaign</p>
        <div className="max-w-4xl space-y-4 text-bone/80 leading-relaxed">
          <div className="card border-l-2 border-accent">
            <p className="font-mono text-accent text-sm mb-2">NOT MEDICAL ADVICE</p>
            <p className="text-bone/80 text-sm leading-relaxed">Evolve8 Enterprises is <strong className="text-bone">not a healthcare provider</strong>. Way Stations, the Food Prescription Campaign, AI companion guidance in Way Stations, and all related content, tools, and programs are <strong className="text-bone">educational and non-diagnostic</strong>. Nothing provided by Evolve8 or its AI systems constitutes medical advice, diagnosis, or treatment.</p>
          </div>
          <p><strong className="text-bone">Way Stations:</strong> AI guidance provided inside Way Stations is for education, product identification, and general health information only. It does not replace a licensed physician, nurse practitioner, or other healthcare professional. The AI companion may call 911 in situations it assesses as life-threatening emergencies — this is a safety feature, not a medical diagnosis. For any medical emergency, call 911 immediately without waiting for AI guidance.</p>
          <p><strong className="text-bone">Food Prescription Campaign:</strong> The Food Prescription Campaign advocates for policy changes that would allow licensed physicians and dietitians to issue food as a covered medical benefit. This is a policy and advocacy program. Evolve8 does not issue food prescriptions, does not provide clinical nutrition services, and does not guarantee that any insurance plan covers food as a benefit. Food prescriptions must be issued by a licensed physician or registered dietitian. Coverage pathways are in development and vary by state, plan, and insurer.</p>
          <p>Supplies, food, and materials available at Way Stations are provided for general wellness and emergency preparedness. They are not medical treatments and have not been evaluated by the FDA for any specific medical condition.</p>
          <p>If you are experiencing a medical emergency, call 911 immediately. Do not rely on Way Station AI support as a substitute for emergency services.</p>
        </div>
        <div className="mt-6 flex gap-4">
          <Link href="/medical/way-stations" className="text-accent text-sm font-mono">Way Stations →</Link>
          <Link href="/medical/food-prescription" className="text-accent text-sm font-mono">Food Prescription Campaign →</Link>
        </div>
      </Section>

      {/* Money / Macro8 */}
      <Section>
        <p className="eyebrow mb-4">Money · Macro8 Financial Intelligence</p>
        <div className="max-w-4xl space-y-4 text-bone/80 leading-relaxed">
          <div className="card border-l-2 border-accent">
            <p className="font-mono text-accent text-sm mb-2">NOT INVESTMENT ADVICE</p>
            <p className="text-bone/80 text-sm leading-relaxed">Macro8 and all Evolve8 financial content, tools, regime signals, scenario tools, and educational materials are <strong className="text-bone">financial education only</strong>. Nothing constitutes investment advice, a securities recommendation, a solicitation to buy or sell any security or digital asset, or financial planning services.</p>
          </div>
          <p>Evolve8 Enterprises is not a registered investment advisor (RIA), broker-dealer, commodity trading advisor, futures commission merchant, or licensed financial planner. Macro8 is an open-source research and education project. Its outputs are not trading signals.</p>
          <p>Macroeconomic regime classifications, five-mode descriptions, historical pattern analysis, and scenario tools are educational frameworks based on historical data. Historical patterns do not guarantee future results. All investing involves risk of loss, including the possible loss of principal.</p>
          <p><strong className="text-bone">TAO and Bittensor:</strong> TAO is a cryptocurrency token. Staking, donating, mining, or validating on the Bittensor network involves substantial technical and market risk, including the risk of total loss of funds. This is not an offer to sell securities. Nothing on this site should be construed as legal or tax advice regarding cryptocurrency transactions. Consult a licensed financial advisor and tax professional.</p>
          <p>For personalized financial advice, consult a licensed financial advisor, RIA, or certified financial planner (CFP) in your jurisdiction.</p>
        </div>
        <div className="mt-6 flex gap-4">
          <Link href="/money/whitepaper" className="text-accent text-sm font-mono">Macro8 White Paper →</Link>
          <Link href="/money/families" className="text-accent text-sm font-mono">For Families →</Link>
        </div>
      </Section>

      {/* Simulator */}
      <Section>
        <p className="eyebrow mb-4">Silent Apocalypse Simulator</p>
        <div className="max-w-4xl space-y-4 text-bone/80 leading-relaxed">
          <div className="card border-l-2 border-accent">
            <p className="font-mono text-accent text-sm mb-2">EDUCATIONAL SIMULATION — NOT A FORECAST</p>
            <p className="text-bone/80 text-sm leading-relaxed">The Silent Apocalypse Simulator is an <strong className="text-bone">educational tool</strong>. It estimates household exposure to systemic risk based on self-reported inputs. It does not predict specific events, collapse dates, or personal outcomes. It is not a financial risk assessment, clinical screening tool, or legal filing.</p>
          </div>
          <p>The Silent Apocalypse Index score is a relative educational metric based on user-reported answers and publicly available macroeconomic pattern data. It is not peer-reviewed research, a credit score, an insurance underwriting tool, or a government assessment.</p>
          <p>"First seven moves" suggestions are educational starting points based on general patterns. They are not tailored professional advice. For decisions involving significant financial, legal, health, or safety implications, consult appropriate licensed professionals.</p>
          <p>Email addresses submitted through the simulator are used to send the educational report and related program information. They are not sold to third parties. See our <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.</p>
        </div>
        <div className="mt-6">
          <Link href="/simulator" className="text-accent text-sm font-mono">Run the Simulator →</Link>
        </div>
      </Section>

      {/* Work8 */}
      <Section>
        <p className="eyebrow mb-4">Work · Work8</p>
        <div className="max-w-4xl space-y-4 text-bone/80 leading-relaxed">
          <p>Work8 is a workforce matching and education program. It is not a licensed staffing agency, employment agency, or recruiter. Evolve8 Enterprises does not guarantee job placements, wage rates, employment duration, or income outcomes of any kind.</p>
          <p>Employer and opportunity listings connected through Work8 are third-party partners. Evolve8 does not control, verify, or guarantee the accuracy of third-party job listings, employer conduct, wage claims, or working conditions. Verify all employment terms independently before accepting any offer.</p>
          <p>Resilience Points are non-cash internal credits with no guaranteed monetary value. They are not wages, compensation, or currency. Their use is subject to program terms and availability.</p>
          <p>Campus employment availability depends on campus build-out status and operational funding. Campus job listings are aspirational and subject to change.</p>
        </div>
        <div className="mt-6">
          <Link href="/work" className="text-accent text-sm font-mono">Work8 →</Link>
        </div>
      </Section>

      {/* Land & Skills */}
      <Section>
        <p className="eyebrow mb-4">Land Competition & Skills Academy</p>
        <div className="max-y-4xl space-y-4 text-bone/80 leading-relaxed">
          <p>The Land Competition is a merit-based access program, not a lottery, raffle, sweepstakes, or guaranteed award. No participation in Evolve8 programs guarantees Land Competition eligibility, selection, or land access. Competition rules, criteria, and timelines are subject to change.</p>
          <p>Skills Academy content is educational. Certifications, credentials, or designations issued by the Skills Academy are internal program recognitions and are not accredited by government bodies, accreditation organizations, or professional licensing boards unless explicitly stated otherwise.</p>
          <p>Evolve8 Enterprises does not guarantee that Skills Academy training leads to employment, licensing, certification recognition, or income. Employment outcomes depend on individual circumstances, market conditions, and employer decisions.</p>
        </div>
        <div className="mt-6 flex gap-4">
          <Link href="/land" className="text-accent text-sm font-mono">Land Competition →</Link>
          <Link href="/skills" className="text-accent text-sm font-mono">Skills Academy →</Link>
        </div>
      </Section>

      {/* Food / Vivinate Farms */}
      <Section>
        <p className="eyebrow mb-4">Food · Vivinate Farms</p>
        <div className="max-w-4xl space-y-4 text-bone/80 leading-relaxed">
          <p>Vivinate Farms is a fiscally sponsored nonprofit arm of Evolve8 Enterprises providing food production, education, and distribution programs. Food availability, delivery, and access depend on campus and Way Station operational status, geographic coverage, and program capacity.</p>
          <p>Food programs are educational and community-focused. They are not a substitute for a qualified dietitian or physician's guidance for medical nutrition therapy. For clinical nutrition services, consult a registered dietitian or licensed healthcare provider.</p>
        </div>
        <div className="mt-6">
          <Link href="/food" className="text-accent text-sm font-mono">Vivinate Farms →</Link>
        </div>
      </Section>

      {/* Third-Party Links */}
      <Section bordered={false}>
        <p className="eyebrow mb-4">Third-party links & external resources</p>
        <div className="max-w-4xl space-y-4 text-bone/80 leading-relaxed">
          <p>Evolve8 Enterprises may link to third-party websites, tools, organizations, attorneys, platforms, and resources. These links are provided for informational purposes only. Evolve8 does not endorse, control, verify, or take responsibility for the content, accuracy, or practices of any third-party resource.</p>
          <p>For questions about specific program terms, contact us at <Link href="/contact" className="text-accent hover:underline">the contact page</Link>. For full Terms of Service and Privacy Policy, see the links in the footer.</p>
        </div>
      </Section>
    </>
  );
}
