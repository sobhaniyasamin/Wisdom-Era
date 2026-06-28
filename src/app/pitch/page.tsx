import type { Metadata } from "next";
import { Rocket, Handshake, Zap } from "lucide-react";
import { PitchForm } from "@/components/ui/PitchForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Pitch Us",
  description:
    "Building an AI-native startup in e-commerce or agriculture? Pitch Wisdom Era. We back early-stage founders with capital and hands-on, co-founder-style support.",
  alternates: { canonical: "/pitch" },
};

const points = [
  {
    icon: Rocket,
    title: "Early is welcome",
    description: "We back founders from the idea and pre-seed stage. You don't need traction to talk to us.",
  },
  {
    icon: Handshake,
    title: "Co-founder style",
    description: "Beyond capital: product, technology, talent, and go-to-market support from day one.",
  },
  {
    icon: Zap,
    title: "Applied AI focus",
    description: "We're most excited about AI applied to e-commerce and agriculture across emerging markets.",
  },
];

export default function PitchPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 px-[5%] md:px-[8%] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(104,197,178,0.1)_0%,transparent_55%)]" />
        <div className="max-w-[820px] mx-auto text-center relative z-[1]">
          <div className="inline-flex items-center gap-2.5 text-teal text-[0.78rem] font-semibold tracking-[3px] uppercase mb-5 before:content-[''] before:w-[30px] before:h-[2px] before:bg-teal">
            For Founders
          </div>
          <h1 className="text-[clamp(2.5rem,4.5vw,3.6rem)] text-white leading-tight mb-4">
            Pitch <em className="font-serif text-teal">Wisdom Era</em>
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-[620px] mx-auto">
            If you&rsquo;re building an AI-native company in e-commerce or agriculture, we&rsquo;d love to
            hear from you. Tell us what you&rsquo;re working on.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-[5%] md:px-[8%]">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {points.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div className="w-12 h-12 rounded-xl bg-teal/[0.12] flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <p.icon className="w-5 h-5 text-teal-dark" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-navy text-[1.1rem] mb-2">{p.title}</h3>
                  <p className="text-text-muted text-[0.92rem] leading-[1.7]">{p.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="max-w-[760px] mx-auto bg-white rounded-2xl border border-navy/[0.06] p-8 md:p-10">
              <h2 className="text-2xl text-navy mb-6">Tell us about your startup</h2>
              <PitchForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
