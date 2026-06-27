/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { portfolioCompanies } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return portfolioCompanies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const company = portfolioCompanies.find((c) => c.slug === params.slug);
  if (!company) return {};
  return {
    title: `${company.name} · ${company.tagline}`,
    description: company.description,
    alternates: { canonical: `/portfolio/${company.slug}` },
  };
}

export default function PortfolioDetailPage({ params }: Props) {
  const company = portfolioCompanies.find((c) => c.slug === params.slug);
  if (!company) notFound();

  const others = portfolioCompanies.filter((c) => c.slug !== company.slug);

  return (
    <section className="pt-36 pb-28 px-[5%] md:px-[8%]">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 font-mono text-[0.78rem] tracking-tight text-paper-muted mb-10 hover:text-accent transition-colors"
        >
          <ArrowLeft size={15} /> Back to portfolio
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-10 border-b border-ink-line">
          <img
            src={company.logoSrc}
            alt={`${company.name} logo`}
            className="w-16 h-16 rounded-2xl flex-shrink-0 object-contain bg-ink-raised border border-ink-line p-2"
          />
          <div className="flex-1">
            <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] text-paper leading-[1.05] tracking-[-0.02em]">
              {company.name}
            </h1>
            <p className="text-accent text-[1.05rem] font-medium mt-1">{company.tagline}</p>
          </div>
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-accent text-accent-ink px-5 py-2.5 rounded-full text-[0.85rem] font-semibold transition-all duration-300 hover:bg-accent-bright hover:shadow-[0_0_30px_-6px_rgba(92,200,189,0.5)] self-start sm:self-auto"
          >
            Visit website <ExternalLink size={14} />
          </a>
        </div>

        {/* Highlights */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-line border border-ink-line rounded-xl overflow-hidden mt-12">
            {company.highlights.map((h) => (
              <div key={h.label} className="bg-ink px-5 py-7">
                <div className="font-display text-[1.4rem] font-bold text-paper leading-tight tracking-[-0.01em]">
                  {h.value}
                </div>
                <div className="mt-2 font-mono text-[0.66rem] tracking-[0.12em] uppercase text-paper-faint">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* About */}
        <ScrollReveal>
          <div className="max-w-[760px] mt-20">
            <div className="eyebrow">Overview</div>
            <h2 className="mt-5 text-[1.8rem] text-paper tracking-[-0.01em] mb-6">
              About {company.name}
            </h2>
            <div className="space-y-5">
              {company.fullDescription.split("\n\n").map((para, i) => (
                <p key={i} className="text-paper-muted leading-[1.85]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Features */}
        <ScrollReveal>
          <div className="max-w-[820px] mt-20">
            <div className="eyebrow">Capabilities</div>
            <h2 className="mt-5 text-[1.8rem] text-paper tracking-[-0.01em] mb-8">Key features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              {company.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 py-3 border-b border-ink-line">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                  <span className="text-paper-muted text-[0.94rem] leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-20 rounded-2xl border border-ink-line bg-ink-raised bg-grid p-10 md:p-14 text-center">
            <h3 className="text-[1.6rem] text-paper tracking-[-0.01em] mb-3">
              Interested in {company.name}?
            </h3>
            <p className="text-paper-muted mb-7 max-w-[480px] mx-auto leading-relaxed">
              Get in touch to learn more about this company and explore partnership opportunities.
            </p>
            <div className="flex justify-center">
              <Button href="/contact" variant="primary">
                Contact us <ArrowRight size={17} />
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Other companies */}
        <ScrollReveal>
          <div className="mt-24">
            <div className="eyebrow mb-8">More from the portfolio</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  href={`/portfolio/${c.slug}`}
                  className="group block rounded-2xl p-6 border border-ink-line bg-ink-raised no-underline transition-colors duration-300 hover:border-accent/35"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={c.logoSrc}
                      alt={`${c.name} logo`}
                      className="w-9 h-9 rounded-lg object-contain bg-ink border border-ink-line p-1"
                    />
                    <h4 className="text-paper font-semibold">{c.name}</h4>
                  </div>
                  <p className="text-paper-muted text-[0.88rem] leading-relaxed">{c.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
