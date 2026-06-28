/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioCompanies } from "@/data/portfolio";

export function LogoStrip() {
  return (
    <section className="py-12 md:py-16 px-[5%] md:px-[8%] border-y border-navy/[0.06]">
      <ScrollReveal>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-center font-sans text-[0.72rem] font-semibold tracking-[2.5px] uppercase text-text-muted mb-9">
            Companies we&rsquo;ve backed
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {portfolioCompanies.map((c) => (
              <Link
                key={c.slug}
                href={`/portfolio/${c.slug}`}
                className="group flex items-center gap-3 no-underline opacity-70 hover:opacity-100 transition-opacity duration-300"
                aria-label={`${c.name} — ${c.tagline}`}
              >
                <img
                  src={c.logoSrc}
                  alt={`${c.name} logo`}
                  className="w-9 h-9 object-contain"
                />
                <span className="font-serif text-lg font-bold text-navy">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
