import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Target, ShoppingCart, Globe, Sprout } from "lucide-react";

const visionGoals = [
  {
    icon: Target,
    title: "Build 10–15 AI-powered companies to product-market fit",
    description:
      "We help founders shorten the path from MVP to real revenue with complete support from day one: technology, growth, sales, and operational infrastructure, delivered co-founder style.",
  },
  {
    icon: ShoppingCart,
    title: "Lead applied AI in e-commerce",
    description:
      "Through our portfolio, we deploy AI that boosts seller conversion with deep personalization, builds AI-native shopping experiences, and automates pricing, inventory, and demand in real time.",
  },
  {
    icon: Globe,
    title: "Build a cross-border operating presence",
    description:
      "We operate seamlessly across the broader MENA region, enabling portfolio companies to scale beyond local boundaries and access global capital and opportunity.",
  },
  {
    icon: Sprout,
    title: "Lead applied AI in agriculture",
    description:
      "We design AI that uses prediction to plan crops, anticipate risk, and increase yields, with real-time monitoring that detects crop stress, disease, and soil issues in the field.",
  },
];

export function VisionSection() {
  return (
    <section id="vision" className="py-24 md:py-36 px-[5%] md:px-[8%] bg-ink-deep border-y border-ink-line bg-grid">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionHeader label="Wisdom Era 2028" title="Vision for the <em>future</em>" align="center" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-[760px] mx-auto text-center mb-16 space-y-6">
            <p className="text-paper-muted text-[1.05rem] leading-[1.8]">
              By 2028, our tech holding company will be recognized as a builder of real tech
              companies, unlocking exceptional teams and bringing AI into industries where it drives
              measurable economic impact. Over the next three years, we will evolve into the leading
              early-stage AI partner for founders in MENA, a hands-on team that turns ideas into
              operating companies.
            </p>
            <p className="font-display text-[1.15rem] italic text-accent/90 leading-relaxed">
              We focus on sectors where AI fundamentally improves efficiency and margins, and we aim
              to be known as the firm that converts complex market problems into scalable,
              revenue-generating businesses.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-line border border-ink-line rounded-2xl overflow-hidden">
          {visionGoals.map((goal, i) => (
            <ScrollReveal key={goal.title} delay={i * 0.08}>
              <div className="h-full bg-ink p-8 md:p-10 transition-colors duration-300 hover:bg-ink-raised">
                <goal.icon className="w-7 h-7 text-accent mb-5" strokeWidth={1.6} />
                <h3 className="text-paper text-[1.2rem] font-display font-semibold leading-snug tracking-[-0.01em]">
                  {goal.title}
                </h3>
                <p className="mt-3 text-paper-muted leading-[1.7] text-[0.94rem]">{goal.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
