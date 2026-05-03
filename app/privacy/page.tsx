import { PageHeader, Section } from "@/components/PageHeader";

export const metadata = { title: "Privacy Policy — Evolve8 Enterprises" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy Policy"
        crumbs={[{ href: "/", label: "Home" }, { href: "/privacy", label: "Privacy" }]}
      />
      <Section>
        <div className="max-w-3xl space-y-6 text-bone/85 leading-relaxed">
          <p>Last updated: May 2026.</p>
          <p>
            Evolve8 Enterprises ("we", "us") respects your privacy. This Privacy Policy describes what we
            collect, why, and what your choices are when you visit evolve8enterprises.com or use the
            Silent Apocalypse Simulator and Public Action Network.
          </p>
          <h2 className="h-display text-bone text-2xl mt-6">What we collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Information you provide directly (name, email, narrative, location) when you contact us, file a Public Action Network report, or join a waitlist.</li>
            <li>Anonymous Simulator inputs (timeline, ZIP, answers) — stored locally in your browser by default; not associated with an identity unless you enter an email.</li>
            <li>Standard server logs (IP, user agent, timestamps) for security and abuse prevention.</li>
          </ul>
          <h2 className="h-display text-bone text-2xl mt-6">What we do with it</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Public Action reports: triage, anonymized pattern publication, and (with your consent) routing to legal partners.</li>
            <li>Email: replying to you and, if you opt in, sending newsletter or campaign updates. You can unsubscribe at any time.</li>
            <li>Aggregated, anonymized analytics to improve the simulator and the site.</li>
          </ul>
          <h2 className="h-display text-bone text-2xl mt-6">What we do not do</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We do not sell your data.</li>
            <li>We do not share identifiable Public Action Network reports with third parties without your consent.</li>
            <li>We do not run third-party advertising trackers.</li>
          </ul>
          <h2 className="h-display text-bone text-2xl mt-6">Your rights</h2>
          <p>
            Email hello@evolve8enterprises.com to access, correct, or delete the information we hold about
            you. We will respond within 30 days.
          </p>
        </div>
      </Section>
    </>
  );
}
