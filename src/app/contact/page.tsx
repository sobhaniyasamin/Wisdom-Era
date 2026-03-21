import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Wisdom Era. Whether you're a founder, investor, or partner — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 px-[5%] md:px-[8%] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(104,197,178,0.08)_0%,transparent_50%)]" />
        <div className="max-w-[800px] mx-auto text-center relative z-[1]">
          <div className="inline-flex items-center gap-2.5 text-teal text-[0.78rem] font-semibold tracking-[3px] uppercase mb-5 before:content-[''] before:w-[30px] before:h-[2px] before:bg-teal">
            Contact
          </div>
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] text-white leading-tight mb-4">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Whether you&apos;re a founder with an ambitious idea, an investor, or a potential
            partner — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 px-[5%] md:px-[8%]">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl text-navy mb-6">Send us a message</h2>
                <ContactForm />
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={0.2}>
                <h3 className="text-lg text-navy mb-6">Other ways to reach us</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy mb-1">Email</div>
                      <a
                        href="mailto:info@wisdomera.net"
                        className="text-text-muted text-sm hover:text-teal transition-colors"
                      >
                        info@wisdomera.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy mb-1">Region</div>
                      <p className="text-text-muted text-sm">
                        MENA &amp; Global
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
