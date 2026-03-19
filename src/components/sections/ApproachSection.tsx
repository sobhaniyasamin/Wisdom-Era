import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ApproachCard } from "@/components/cards/ApproachCard";
import { approachSteps } from "@/data/approach";

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="bg-gradient-to-br from-cream to-[#eef6f3] py-20 md:py-28 px-[5%] md:px-[8%]"
    >
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionHeader
            label="Our Approach"
            title="The Compounding Ecosystem"
            subtitle="We invest where value can compound over time, across products, teams, and insights."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachSteps.map((step, i) => (
            <ApproachCard key={step.number} step={step} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
