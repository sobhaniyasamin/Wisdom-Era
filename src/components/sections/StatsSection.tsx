import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { stats } from "@/data/stats";

export function StatsSection() {
  return (
    <section id="stats" className="px-[5%] md:px-[8%] pb-4">
      <ScrollReveal>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 border-y border-ink-line">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-9 md:py-11 ${
                i !== 0 ? "border-l border-ink-line" : ""
              } ${i === 2 ? "border-l lg:border-l border-ink-line" : ""}`}
            >
              <div className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-bold leading-none text-paper tracking-[-0.03em]">
                {stat.value}
              </div>
              <div className="mt-3 font-mono text-[0.7rem] tracking-[0.14em] uppercase text-paper-faint">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
