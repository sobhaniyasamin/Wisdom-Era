import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CtaSection() {
  return (
    <section className="py-28 md:py-40 px-[5%] md:px-[8%]">
      <ScrollReveal>
        <div className="max-w-[820px] mx-auto text-center">
          <h2 className="text-[clamp(2.2rem,5vw,3.6rem)] text-paper leading-[1.05] tracking-[-0.02em] text-balance">
            Let&rsquo;s build the future <em className="not-italic text-accent font-medium">together</em>.
          </h2>
          <p className="mt-6 text-paper-muted text-[1.08rem] leading-[1.7] max-w-[56ch] mx-auto text-pretty">
            Whether you&rsquo;re a founder with an ambitious idea or an investor looking for AI-native
            opportunities in emerging markets, we&rsquo;d love to connect.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="primary">
              Start a conversation
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
