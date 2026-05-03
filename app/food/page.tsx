import { ProgramHub } from "@/components/ProgramHub";

export const metadata = { title: "Food — Vivinate Farms" };

export default function FoodPage() {
  return (
    <ProgramHub
      programName="Food · Vivinate Farms"
      crumbHref="/food"
      hero="Grow it. Store it. Share it. Trade it."
      lede="Vivinate Farms is the food and agriculture arm of Evolve8 — a regenerative growing and food-sovereignty project building a 14-day household food buffer for every family that wants one, starting in the Dallas-Fort Worth Metroplex."
      whatItIs="Vivinate Farms operates three interlocking modules: family-scale food production (containers and small plots), neighborhood-scale food storage (rolling 14-day buffer), and a regional cooperative network for trade and resilience. Vivinate Farms is a fiscally sponsored project of Far Away Projects (501(c)(3), EIN 82-1917723) building toward its own 501(c)(3) determination."
      modules={[
        { name: "Family Module 1 · Starter four", bullets: ["Kale, tomatoes, peppers, herbs", "Container & raised-bed kits", "First-season grow guide", "Weekly check-in Q&A"] },
        { name: "Family Module 2 · 14-day food buffer", bullets: ["Rolling pantry plan", "Storage protocols", "Bulk-buying co-op", "Power-out food tree"] },
        { name: "Family Module 3 · Trade & teach", bullets: ["Neighborhood swap nights", "Skills classes", "Resilience Points credit", "Mentor-a-family program"] },
      ]}
      ctas={[
        { label: "Run the simulator", href: "/simulator", primary: true },
        { label: "Apply for Land Track", href: "/land" },
        { label: "Donate", href: "/donate" },
      ]}
      disclaimer="Vivinate Farms is a fiscally sponsored project of Far Away Projects. We are not a USDA-certified producer; we are a community resilience program."
    />
  );
}
