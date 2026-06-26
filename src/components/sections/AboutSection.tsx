import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-36 px-[5%] md:px-[8%]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
        <ScrollReveal>
          <div className="eyebrow">About Wisdom Era</div>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-paper tracking-[-0.02em] text-balance">
            Not just investors.
            <br />
            True <em className="not-italic text-accent font-medium">co-founders</em>.
          </h2>
          <div className="mt-7 space-y-5 text-paper-muted text-[1.02rem] leading-[1.8] max-w-[52ch]">
            <p>
              Wisdom Era is a tech holding company that invests in and backs early-stage startups
              applying AI to real-world industries, especially e-commerce and agriculture.
            </p>
            <p>
              We partner with founders from day one and stay deeply involved long term, across
              product, technology, talent, and strategy. Our role goes beyond capital: we actively
              engage with companies, share infrastructure and insights, and compound experience
              across the group.
            </p>
            <p className="text-paper">
              What sets us apart is focus. We back practical innovation where it compounds in the
              real economy.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <figure className="relative rounded-2xl border border-ink-line bg-ink-raised p-9 md:p-11 bg-grid">
            <div className="font-mono text-[5rem] leading-[0.4] text-accent/40 select-none">&ldquo;</div>
            <blockquote className="mt-2 font-display text-[1.35rem] md:text-[1.5rem] leading-[1.4] text-paper tracking-[-0.01em]">
              Wisdom Era is designed with a unique structure that lets us operate not just as
              investors, but as true co-founders to the startups we back.
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3 pt-6 border-t border-ink-line">
              <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-accent">
                Operating principle
              </span>
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
