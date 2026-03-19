import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CeoQuoteSection } from "@/components/sections/CeoQuoteSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SectorsSection />
      <PortfolioSection />
      <ApproachSection />
      <TeamSection />
      <CeoQuoteSection />
      <CtaSection />
    </>
  );
}
