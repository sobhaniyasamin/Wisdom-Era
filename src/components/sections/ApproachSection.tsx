import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ApproachCard } from "@/components/cards/ApproachCard";
import { approachSteps } from "@/data/approach";

export function ApproachSection() {
  return (
    <section id="approach" className="py-24 md:py-36 px-[5%] md:px-[8%] bg-ink-deep border-y border-ink-line">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionHeader
            label="Our Approach"
            title="The compounding <em>ecosystem</em>"
            subtitle="We invest where value can compound over time, across products, teams, and insights."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {approachSteps.map((step, i) => (
            <ApproachCard key={step.number} step={step} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
