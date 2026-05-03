import Link from "next/link";
import { PageHeader, Section, CalloutBand } from "@/components/PageHeader";

export const metadata = {
  title: "Way Stations — Evolve8 Enterprises",
  description: "Shipping-container food, water, and medical-aid access points with live AI support along highways and community corridors. Find Your Way. Find Your Station.",
};

export default function WayStationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Medical · Way Stations"
        title="Find Your Way. Find Your Station."
        accent="Find Your Station."
        lede="Way Stations are shipping-container-based food, water, and medical-aid access points deployed along highways and community corridors across America. Each station has live AI-guided support — a voice companion that answers questions, identifies what is available on hand, escalates to 911 when needed, and connects you to the full Evolve8 network."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/medical", label: "Medical" },
          { href: "/medical/way-stations", label: "Way Stations" },
        ]}
      />

      {/* The AI Companion */}
      <Section>
        <p className="eyebrow mb-4">Live AI in every station</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          Not a chatbot. A companion inside the station.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-bone/80 leading-relaxed">
            <p>Every Way Station includes a live AI voice system you can speak to directly. It is designed to function like having a knowledgeable, calm person inside the container with you — one who knows exactly what is available on the shelves, can walk you through basic first aid, and can take action if something is seriously wrong.</p>
            <p>The AI companion does not diagnose. It does not prescribe. It educates, guides, and routes — and if it hears or detects a true emergency, it calls 911 on your behalf with your location.</p>
          </div>
          <div className="card">
            <p className="eyebrow mb-4">What the AI can do</p>
            <ul className="space-y-2 text-bone/70 text-sm">
              <li>· Answer questions about symptoms in plain language</li>
              <li>· Tell you exactly what food, water, and supplies are in stock</li>
              <li>· Suggest what to take and how to use it</li>
              <li>· Guide you through basic first aid procedures</li>
              <li>· Call 911 and relay your location in an emergency</li>
              <li>· Connect you to nearby clinics, shelters, and programs</li>
              <li>· Walk you through food prescription options</li>
              <li>· Answer questions about Evolve8 programs</li>
              <li>· Support in multiple languages</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* What Is In a Way Station */}
      <Section>
        <p className="eyebrow mb-4">What is inside</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Food Access", items: ["Container farms and pick-your-own produce", "Non-perishable food and canned goods", "Mushroom MREs and standard MREs", "Bulk cooperative food from Vivinate Farms", "Food prescription distribution pickup"] },
            { name: "Water & Emergency", items: ["Emergency water access (potable, filtered)", "Basic medical aid supplies and first aid kits", "OTC medications and health essentials", "Wound care and hygiene supplies", "Tourniquets and emergency bleed control"] },
            { name: "AI Voice Support", items: ["Live AI voice companion (on-site)", "Non-emergency health education", "Product identification and usage guidance", "911 emergency calling with location relay", "Multi-language support"] },
            { name: "Referral Network", items: ["Nearby clinic and urgent care routing", "Food bank and hunger relief connections", "Shelter and housing navigation", "Evolve8 program enrollment", "Legal help referrals"] },
            { name: "Community & Work", items: ["Volunteer opportunities to maintain stations", "Resilience Points for contributors", "Work8 labor network connection", "Skills Academy integration", "Local growing and food education"] },
            { name: "Education & Connectivity", items: ["Offline education content (no internet required)", "Education Library access via QR", "Silent Apocalypse awareness materials", "Land Competition information", "Family preparedness resources"] },
          ].map((m) => (
            <div key={m.name} className="card">
              <h3 className="h-display text-bone text-xl mb-3">{m.name}</h3>
              <ul className="space-y-1.5 text-bone/70 text-sm">
                {m.items.map((b) => <li key={b}>· {b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Medical Transport */}
      <Section>
        <p className="eyebrow mb-4">Medical Transport — Planned Expansion</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          Medical Ubers and Lyfts — transport that does not require an ambulance.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-bone/80 leading-relaxed">
            <p>Not every medical situation requires a $3,000 ambulance ride. Many emergency department visits — sprains, minor infections, controlled chronic conditions, mental health episodes, follow-up care — could be safely handled with a vetted transport to the right facility.</p>
            <p>Evolve8 Enterprises is exploring a partnership model for medical-grade rideshare transport — think Uber or Lyft but with trained medical transport drivers, a direct connection to Way Station AI support, and pre-vetted routing to the right level of care at the right cost.</p>
          </div>
          <div className="card">
            <p className="eyebrow mb-3">When it applies</p>
            <ul className="space-y-2 text-bone/70 text-sm">
              <li>· Non-emergency transport to urgent care or clinic</li>
              <li>· Follow-up appointments for discharged patients</li>
              <li>· Mental health and behavioral health transport</li>
              <li>· Dialysis and routine treatment transport</li>
              <li>· Elderly and disabled mobility assistance</li>
              <li>· Post-surgical recovery transport</li>
            </ul>
            <p className="mt-4 text-bone/40 text-xs">This is a planned expansion. For life-threatening emergencies, always call 911.</p>
          </div>
        </div>
      </Section>

      <CalloutBand
        title="Find Your Way Station."
        body="We are building the first stations now. Join the waitlist to be notified when a station near you opens, or to volunteer and help build one."
        ctaHref="/contact"
        ctaLabel="Join the Waitlist"
      />

      <Section bordered={false}>
        <p className="text-bone/50 text-sm max-w-3xl">
          AI guidance in Way Stations is educational and non-diagnostic. It does not replace a licensed physician. For life-threatening emergencies, call 911 immediately. Evolve8 Enterprises does not provide medical treatment. See <Link href="/disclaimers" className="text-accent hover:underline">full disclaimers</Link>.
        </p>
      </Section>
    </>
  );
}
