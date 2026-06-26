import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectorCard } from "@/components/cards/SectorCard";
import { sectors } from "@/data/sectors";

export function SectorsSection() {
  return (
    <section id="sectors" data-section="sectors" className="py-24 md:py-36 px-[5%] md:px-[8%]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionHeader
            label="Our Focus"
            title="Where AI creates <em>real</em> disruption"
            subtitle="We focus on sectors where AI fundamentally improves efficiency and margins, converting complex market problems into scalable businesses."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sectors.map((sector, i) => (
            <SectorCard key={sector.title} sector={sector} delay={i * 0.1} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
