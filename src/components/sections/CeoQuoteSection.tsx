import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CeoQuoteSection() {
  return (
    <section data-section="ceo-quote" className="py-24 md:py-36 px-[5%] md:px-[8%]">
      <ScrollReveal>
        <figure className="max-w-[920px] mx-auto">
          <div className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-accent mb-8">
            From the CEO
          </div>
          <blockquote className="font-display text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.25] text-paper tracking-[-0.02em] text-balance">
            You don&rsquo;t win by waiting for perfect conditions. You win by learning fast, acting
            decisively, and letting insight <em className="not-italic text-accent">compound</em> over
            time. Wisdom Era is designed around that compounding effect.
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-4">
            <div className="h-px w-10 bg-accent" />
            <div>
              <div className="text-paper font-semibold">Vahid Shirazi</div>
              <div className="text-paper-faint text-[0.85rem] font-mono tracking-tight mt-0.5">
                Co-founder &amp; CEO, Wisdom Era
              </div>
            </div>
          </figcaption>
        </figure>
      </ScrollReveal>
    </section>
  );
}
