"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NetworkAnimation } from "@/components/canvas/NetworkAnimation";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      <NetworkAnimation />

      <div className="relative z-[2] px-[5%] md:px-[8%] max-w-[800px]">
        <div className="inline-flex items-center gap-2.5 text-teal text-[0.82rem] font-semibold tracking-[3px] uppercase mb-7 opacity-0 animate-fade-up animation-delay-200 before:content-[''] before:w-10 before:h-[2px] before:bg-teal">
          AI-Focused Tech Holding
        </div>
        <h1 className="text-[clamp(3rem,6vw,5.5rem)] text-white leading-[1.05] font-extrabold mb-6 opacity-0 animate-fade-up animation-delay-500">
          Keep Up<br />
          with the <em className="italic text-teal font-medium">Future</em>
        </h1>
        <p className="text-[1.15rem] text-white/65 leading-[1.7] max-w-[520px] mb-10 opacity-0 animate-fade-up animation-delay-700">
          We invest in and co-build early-stage startups applying AI to real-world industries
          — turning complex market problems into scalable, revenue-generating businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-900">
          <Button href="/#portfolio" variant="primary">
            Explore Portfolio
            <ArrowRight size={18} />
          </Button>
          <Button href="/#about" variant="outline">
            Our Story
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 opacity-0 animate-fade-up animation-delay-1200">
        <div className="w-[1px] h-10 bg-gradient-to-b from-teal to-transparent animate-scroll-pulse" />
      </div>
    </section>
  );
}
