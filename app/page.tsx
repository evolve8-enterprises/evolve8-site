import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { InheritedCollapses } from "@/components/InheritedCollapses";
import { SimulatorTeaser } from "@/components/SimulatorTeaser";
import { ProgramsGrid } from "@/components/ProgramsGrid";
import { LandCompetitionSection } from "@/components/LandCompetitionSection";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SupportTriple } from "@/components/SupportTriple";
import { ContactBlock } from "@/components/ContactBlock";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <InheritedCollapses />
      <SimulatorTeaser />
      <ProgramsGrid />
      <LandCompetitionSection />
      <QuoteBlock />
      <SupportTriple />
      <ContactBlock />
    </>
  );
}
