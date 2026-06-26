import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      data-section="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-[5%] md:px-[8%] pt-32 pb-16"
    >
      <div className="relative z-[2] max-w-[1000px]">
        <div className="eyebrow opacity-0 animate-fade-up animation-delay-200">
          AI-Focused Tech Holding
        </div>

        <h1 className="mt-7 text-[clamp(3rem,8vw,6.5rem)] leading-[0.98] font-extrabold tracking-[-0.03em] text-paper opacity-0 animate-fade-up animation-delay-500 text-balance">
          Keep up with
          <br />
          the <em className="not-italic font-medium text-accent">future</em>.
        </h1>

        <p className="mt-8 text-[1.12rem] md:text-[1.2rem] text-paper-muted leading-[1.65] max-w-[540px] opacity-0 animate-fade-up animation-delay-700 text-pretty">
          We invest in and co-build early-stage startups applying AI to real-world industries,
          turning complex market problems into scalable, revenue-generating businesses.
        </p>

        <div className="mt-11 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-900">
          <Button href="/#portfolio" variant="primary">
            Explore portfolio
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
          <Button href="/#about" variant="outline">
            Our story
          </Button>
        </div>
      </div>
    </section>
  );
}
