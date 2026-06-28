import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ApproachStep } from "@/data/approach";

export function ApproachCard({ step, delay }: { step: ApproachStep; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="text-center p-8 md:p-10 bg-white rounded-2xl border border-navy/[0.05] transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(46,62,111,0.08)]">
        <div className="font-serif text-[3.5rem] font-bold text-teal/20 leading-none mb-4">
          {step.number}
        </div>
        <h4 className="text-[1.15rem] text-navy mb-3">{step.title}</h4>
        <p className="text-text-muted text-[0.9rem] leading-[1.7]">{step.description}</p>
      </div>
    </ScrollReveal>
  );
}
