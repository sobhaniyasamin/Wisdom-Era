import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MilestoneCard } from "@/components/cards/MilestoneCard";
import { milestones } from "@/data/milestones";

export function MilestonesSection() {
  return (
    <section id="milestones" className="py-24 md:py-36 px-[5%] md:px-[8%] bg-ink-deep border-y border-ink-line">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
        <ScrollReveal>
          <SectionHeader
            label="Our Journey"
            title="Milestones"
            subtitle="Key moments on the path from a thesis to a group of operating companies."
            className="mb-0 lg:sticky lg:top-28"
          />
        </ScrollReveal>
        <div>
          {milestones.map((milestone, i) => (
            <MilestoneCard
              key={milestone.year}
              milestone={milestone}
              delay={i * 0.06}
              last={i === milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
