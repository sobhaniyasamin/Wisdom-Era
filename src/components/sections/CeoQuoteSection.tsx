import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CeoQuoteSection() {
  return (
    <section className="bg-navy py-20 md:py-24 px-[5%] md:px-[8%] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(104,197,178,0.08)_0%,transparent_50%),radial-gradient(circle_at_90%_50%,rgba(104,197,178,0.05)_0%,transparent_50%)]" />
      <ScrollReveal>
        <div className="max-w-[900px] mx-auto text-center relative z-[1]">
          <div className="font-serif text-[6rem] text-teal opacity-30 leading-[0.5] mb-4">
            &ldquo;
          </div>
          <p className="font-serif text-[clamp(1.3rem,2.5vw,1.8rem)] text-white/90 leading-relaxed italic mb-8">
            You don&apos;t win by waiting for perfect conditions; you win by learning fast, acting
            decisively, and letting insight compound over time. Wisdom Era is designed around that
            compounding effect.
          </p>
          <div className="text-teal font-semibold text-base tracking-wide">Vahid Shirazi</div>
          <div className="text-white/45 text-[0.85rem] mt-1">Co-founder &amp; CEO, Wisdom Era</div>
        </div>
      </ScrollReveal>
    </section>
  );
}
