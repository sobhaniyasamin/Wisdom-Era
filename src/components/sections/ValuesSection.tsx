import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { values } from "@/data/values";

export function ValuesSection() {
  return (
    <section id="values" className="py-24 md:py-36 px-[5%] md:px-[8%]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionHeader
            label="What We Believe"
            title="Principles that <em>guide</em> us"
            subtitle="The operating principles behind every company we back and build."
          />
        </ScrollReveal>

        <div className="border-t border-ink-line">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={Math.min(i * 0.05, 0.3)}>
              <div className="group grid grid-cols-1 md:grid-cols-[3rem_1fr_1.4fr] gap-2 md:gap-8 items-baseline py-7 border-b border-ink-line transition-colors duration-300 hover:bg-ink-raised/40 md:px-3 md:-mx-3 rounded-lg">
                <span className="font-mono text-[0.78rem] text-paper-faint group-hover:text-accent transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-[1.3rem] text-paper tracking-[-0.01em]">{value.title}</h4>
                <p className="text-paper-muted text-[0.96rem] leading-[1.7]">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
