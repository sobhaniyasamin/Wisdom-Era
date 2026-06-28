import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ValueCard } from "@/components/cards/ValueCard";
import { values } from "@/data/values";

export function ValuesSection() {
  return (
    <section id="values" className="bg-white py-20 md:py-28 px-[5%] md:px-[8%]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionHeader
            label="What We Believe"
            title="Principles That Guide Us"
            subtitle="The operating principles behind every company we back and build."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <ValueCard key={value.title} value={value} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
