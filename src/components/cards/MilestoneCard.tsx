import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Milestone } from "@/data/milestones";

export function MilestoneCard({
  milestone,
  delay,
  last,
}: {
  milestone: Milestone;
  delay: number;
  last?: boolean;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className={`group relative pl-10 ${last ? "" : "pb-12"}`}>
        {/* spine */}
        {!last && <div className="absolute left-[5px] top-3 bottom-0 w-px bg-ink-line" />}
        {/* node */}
        <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full bg-ink border-2 border-accent transition-colors duration-300 group-hover:bg-accent" />
        <div className="font-mono text-[0.78rem] tracking-[0.14em] text-accent">{milestone.year}</div>
        <h4 className="mt-2 text-[1.25rem] text-paper tracking-[-0.01em]">{milestone.title}</h4>
        <p className="mt-2 text-paper-muted text-[0.94rem] leading-[1.7] max-w-[46ch]">
          {milestone.description}
        </p>
      </div>
    </ScrollReveal>
  );
}
