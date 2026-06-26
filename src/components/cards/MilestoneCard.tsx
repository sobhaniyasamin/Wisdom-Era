import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Milestone } from "@/data/milestones";

export function MilestoneCard({ milestone, delay }: { milestone: Milestone; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="relative pl-8 pb-2">
        {/* Timeline dot */}
        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-teal ring-4 ring-teal/15" />
        <div className="font-serif text-2xl font-bold text-teal-dark leading-none mb-2">
          {milestone.year}
        </div>
        <h4 className="text-[1.1rem] text-navy mb-2">{milestone.title}</h4>
        <p className="text-text-muted text-[0.9rem] leading-[1.7]">{milestone.description}</p>
      </div>
    </ScrollReveal>
  );
}
