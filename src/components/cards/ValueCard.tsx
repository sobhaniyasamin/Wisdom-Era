import { Handshake, TrendingUp, Cpu, Wrench, Compass, Eye } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Value } from "@/data/values";

const iconMap = {
  handshake: Handshake,
  "trending-up": TrendingUp,
  cpu: Cpu,
  wrench: Wrench,
  compass: Compass,
  eye: Eye,
};

export function ValueCard({ value, delay }: { value: Value; delay: number }) {
  const Icon = iconMap[value.icon];

  return (
    <ScrollReveal delay={delay}>
      <div className="p-8 md:p-10 bg-white rounded-2xl border border-navy/[0.05] h-full transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(46,62,111,0.08)]">
        <div className="w-[56px] h-[56px] rounded-[14px] bg-teal/[0.12] flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-teal-dark" strokeWidth={1.8} />
        </div>
        <h4 className="text-[1.15rem] text-navy mb-3">{value.title}</h4>
        <p className="text-text-muted text-[0.9rem] leading-[1.7]">{value.description}</p>
      </div>
    </ScrollReveal>
  );
}
