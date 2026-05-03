import { ProgramHub } from "@/components/ProgramHub";

export const metadata = { title: "Skills · Resilience Academy — Evolve8 Enterprises" };

export default function SkillsPage() {
  return (
    <ProgramHub
      programName="Skills · Resilience Academy"
      crumbHref="/skills"
      hero="Practical skills. Real people. Resilience Points."
      lede="The Skills Academy is the teaching layer across all eight Silent Apocalypse programs. Short courses, live workshops, and a Resilience Points credit system that recognizes time, teaching, and showing up."
      whatItIs="Resilience Academy is a free-to-low-cost school of practical skills — growing food, basic repair, first aid, financial literacy, off-platform community building, and AI literacy. Students earn Resilience Points for participation, completion, and teaching. Points are non-cash internal credits, never currency, securities, or wages."
      modules={[
        { name: "Survive", bullets: ["First aid", "Water purification", "14-day food buffer", "Power-out playbook"] },
        { name: "Build", bullets: ["Container & raised-bed gardening", "Basic home repair", "Sewing & mending", "Bike & small-engine basics"] },
        { name: "Provide", bullets: ["Cook from scratch", "Childcare & elder care", "Cash & barter literacy", "Off-platform marketing"] },
        { name: "Think", bullets: ["AI literacy for families", "Document & paper-trail building", "Public Action Network 101", "Macro8 financial literacy"] },
      ]}
      ctas={[
        { label: "Join the waitlist", href: "/contact", primary: true },
        { label: "Sponsor a course", href: "/sponsor" },
      ]}
      disclaimer="Resilience Points are non-cash internal participation credits. They are not currency, securities, or wages."
    />
  );
}
