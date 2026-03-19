import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectorCard } from "@/components/cards/SectorCard";
import { sectors } from "@/data/sectors";

export function SectorsSection() {
  return (
    <section
      id="sectors"
      className="bg-navy py-20 md:py-28 px-[5%] md:px-[8%] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(104,197,178,0.06)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(104,197,178,0.04)_0%,transparent_50%)]" />
      <ScrollReveal>
        <SectionHeader
          label="Our Focus"
          title="Where AI Creates<br>Real Disruption"
          subtitle="We focus on sectors where AI fundamentally improves efficiency and margins, converting complex market problems into scalable businesses."
          dark
        />
      </ScrollReveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto relative z-[1]">
        {sectors.map((sector, i) => (
          <SectorCard key={sector.title} sector={sector} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
