import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Stat } from "@/data/stats";

export function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="text-center p-8 bg-white/[0.04] border border-white/[0.08] rounded-2xl h-full transition-colors duration-300 hover:bg-white/[0.07]">
        <div className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-teal leading-none mb-3">
          {stat.value}
        </div>
        <div className="text-white/55 text-[0.9rem] tracking-wide uppercase">
          {stat.label}
        </div>
      </div>
    </ScrollReveal>
  );
}
