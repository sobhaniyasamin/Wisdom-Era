import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 px-[5%] md:px-[8%] text-center">
      <ScrollReveal>
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] text-navy mb-4">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-text-muted text-[1.05rem] leading-[1.7] mb-8">
            Whether you&apos;re a founder with an ambitious idea or an investor looking for
            AI-native opportunities in emerging markets — we&apos;d love to connect.
          </p>
          <Button href="/contact" variant="cta">
            Start a Conversation
            <ArrowRight size={18} />
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
