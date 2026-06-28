import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { StatsSection } from "@/components/sections/StatsSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { MilestonesSection } from "@/components/sections/MilestonesSection";
import { CeoQuoteSection } from "@/components/sections/CeoQuoteSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <LogoStrip />
      <StatsSection />
      <SectorsSection />
      <PortfolioSection />
      <ApproachSection />
      <ValuesSection />
      <TeamSection />
      <MilestonesSection />
      <CeoQuoteSection />
      <VisionSection />
      <CtaSection />
    </>
  );
}
