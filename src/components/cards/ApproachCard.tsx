import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ApproachStep } from "@/data/approach";

export function ApproachCard({ step, delay }: { step: ApproachStep; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="relative pt-7 border-t border-ink-line h-full">
        <div className="absolute -top-px left-0 h-px w-12 bg-accent" />
        <div className="font-mono text-[0.8rem] tracking-[0.16em] text-accent">{step.number}</div>
        <h4 className="mt-5 text-[1.4rem] text-paper tracking-[-0.01em]">{step.title}</h4>
        <p className="mt-3 text-paper-muted text-[0.95rem] leading-[1.75]">{step.description}</p>
      </div>
    </ScrollReveal>
  );
}
