import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Target, ShoppingCart, Globe, Sprout } from "lucide-react";

const visionGoals = [
  {
    icon: Target,
    title: "Build 10–15 AI-Powered Companies that Reach Product-Market Fit",
    description:
      "We will help founders shorten the path from MVP to real revenue by providing complete support from day one: technology, growth, sales, and operational infrastructure — all delivered in a co-founder style.",
  },
  {
    icon: ShoppingCart,
    title: "Lead Applied AI in E-Commerce",
    description:
      "Through our portfolio companies, we will develop and deploy AI systems that boost seller conversion with deep personalization, create AI-native user experiences for smarter commerce, and automate operations with real-time AI for pricing, inventory, and demand.",
  },
  {
    icon: Globe,
    title: "Build a Cross-Border Operating Presence",
    description:
      "We will operate seamlessly across the broader MENA region, enabling our portfolio companies to scale beyond local boundaries and access global capital and opportunities.",
  },
  {
    icon: Sprout,
    title: "Lead Applied AI in Agriculture",
    description:
      "Through our portfolio companies, we will design and deploy AI systems that use predictive AI to plan crops, anticipate risks, and increase yields — and deploy AI-driven monitoring to detect crop stress, disease, and soil issues in real time.",
  },
];

export function VisionSection() {
  return (
    <section id="vision" className="bg-navy py-20 md:py-28 px-[5%] md:px-[8%] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(104,197,178,0.06)_0%,transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(104,197,178,0.04)_0%,transparent_50%)]" />

      <div className="max-w-[1100px] mx-auto relative z-[1]">
        <ScrollReveal>
          <SectionHeader
            label="Wisdom Era 2028"
            title="Vision for the Future"
            dark
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              By 2028, our tech holding company will be recognized as a builder
              of real tech companies, unlocking exceptional teams and bringing AI
              into industries where it drives measurable economic impact. Over
              the next three years, we will evolve into the leading early-stage
              AI partner for founders in MENA — not just an investor, but a
              hands-on team that turns ideas into operating companies.
            </p>
            <p className="text-teal/80 font-serif text-xl italic leading-relaxed">
              We focus on sectors where AI fundamentally improves efficiency and
              margins — e-commerce and agriculture — and we aim to be known as
              the firm that converts complex market problems into scalable,
              revenue-generating businesses.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {visionGoals.map((goal, i) => (
            <ScrollReveal key={goal.title} delay={i * 0.1}>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 h-full hover:bg-white/[0.07] transition-colors duration-300">
                <goal.icon className="w-10 h-10 text-teal mb-5" strokeWidth={1.5} />
                <h3 className="text-white text-xl font-serif mb-3 leading-snug">
                  {goal.title}
                </h3>
                <p className="text-white/55 leading-relaxed text-[0.95rem]">
                  {goal.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
