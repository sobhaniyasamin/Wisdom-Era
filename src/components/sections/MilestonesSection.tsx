import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MilestoneCard } from "@/components/cards/MilestoneCard";
import { milestones } from "@/data/milestones";

export function MilestonesSection() {
  return (
    <section
      id="milestones"
      className="bg-gradient-to-br from-cream to-[#eef6f3] py-20 md:py-28 px-[5%] md:px-[8%]"
    >
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal>
          <SectionHeader
            label="Our Journey"
            title="Milestones"
            subtitle="Key moments on the path from a thesis to a group of operating companies."
          />
        </ScrollReveal>
        {/* Continuous timeline line behind the dotted milestones */}
        <div className="relative">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-teal/20 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 relative">
            {milestones.map((milestone, i) => (
              <MilestoneCard key={milestone.year} milestone={milestone} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
