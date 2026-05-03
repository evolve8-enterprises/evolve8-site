import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";

export const metadata = {
  title: "Medical — Evolve8 Enterprises",
  description: "Food Prescription Campaign and Way Stations. Find Your Way. Find Your Station.",
};

export default function MedicalHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Medical + Vivinate Farms"
        title="Find Your Way. Find Your Station."
        accent="Find Your Station."
        lede="Two programs working together: a Food Prescription Campaign that puts doctor-issued food access into the healthcare system, and a Way Station network that puts food, water, and AI-guided medical support along highways and community corridors across America."
        crumbs={[{ href: "/", label: "Home" }, { href: "/medical", label: "Medical" }]}
      />

      <Section>
        <p className="eyebrow mb-4">Two programs</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/medical/food-prescription" className="card group block border-l-2 border-accent">
            <p className="eyebrow mb-2">Program 1</p>
            <h3 className="h-display text-bone text-2xl mb-3 group-hover:text-accent transition-colors">Food Prescription Campaign</h3>
            <p className="text-bone/80 leading-relaxed mb-4">
              Working with doctors and policymakers to make medically prescribed food a covered benefit.
              A doctor prescribes your diet. Insurance helps cover it. What you pay out of pocket
              is less than the grocery store.
            </p>
            <div className="text-accent text-sm font-mono">Open program →</div>
          </Link>

          <Link href="/medical/way-stations" className="card group block">
            <p className="eyebrow mb-2">Program 2</p>
            <h3 className="h-display text-bone text-2xl mb-3 group-hover:text-accent transition-colors">Way Stations</h3>
            <p className="text-bone/80 leading-relaxed mb-4">
              Shipping-container-based food, water, and medical-aid access points deployed along
              highways and community corridors. With live AI support inside every station — not a
              chatbot, a voice-guided companion that can answer questions, suggest what is on hand,
              and call 911 if needed.
            </p>
            <div className="text-accent text-sm font-mono">Find a station →</div>
          </Link>
        </div>
      </Section>

      <Section bordered={false}>
        <div className="flex flex-wrap gap-3">
          <Link href="/medical/food-prescription" className="btn-primary">Food Prescription Campaign →</Link>
          <Link href="/medical/way-stations" className="btn-secondary">Way Stations</Link>
          <Link href="/food" className="btn-secondary">Vivinate Farms</Link>
          <Link href="/disclaimers" className="btn-secondary text-sm">View Disclaimers</Link>
        </div>
      </Section>
    </>
  );
}
