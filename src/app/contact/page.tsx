import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Wisdom Era. Whether you're a founder, investor, or partner, we'd love to hear from you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="pt-36 pb-28 px-[5%] md:px-[8%]">
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal>
          <div className="eyebrow">Contact</div>
          <h1 className="mt-5 text-[clamp(2.4rem,5vw,3.6rem)] text-paper leading-[1.05] tracking-[-0.02em] max-w-[16ch] text-balance">
            Let&rsquo;s start a <em className="not-italic text-accent font-medium">conversation</em>.
          </h1>
          <p className="mt-5 text-paper-muted text-[1.05rem] leading-[1.7] max-w-[52ch]">
            Whether you&rsquo;re a founder with an ambitious idea, an investor, or a potential
            partner, we&rsquo;d love to hear from you.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-20">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="lg:border-l lg:border-ink-line lg:pl-12">
              <h2 className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-paper-faint mb-7">
                Other ways to reach us
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.7} />
                  <div>
                    <div className="text-paper font-medium mb-1">Email</div>
                    <a
                      href="mailto:info@wisdomera.net"
                      className="text-paper-muted text-[0.95rem] hover:text-accent transition-colors"
                    >
                      info@wisdomera.net
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.7} />
                  <div>
                    <div className="text-paper font-medium mb-1">Region</div>
                    <p className="text-paper-muted text-[0.95rem]">MENA &amp; Global</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
