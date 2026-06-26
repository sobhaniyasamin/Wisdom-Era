import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatCard } from "@/components/cards/StatCard";
import { stats } from "@/data/stats";

export function StatsSection() {
  return (
    <section
      id="stats"
      className="bg-navy py-20 md:py-28 px-[5%] md:px-[8%] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(104,197,178,0.06)_0%,transparent_55%)]" />
      <div className="max-w-[1200px] mx-auto relative z-[1]">
        <ScrollReveal>
          <SectionHeader
            label="By the Numbers"
            title="Building With Conviction"
            subtitle="A snapshot of where Wisdom Era invests its focus and capital."
            dark
          />
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
