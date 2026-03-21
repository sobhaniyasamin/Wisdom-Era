/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { portfolioCompanies } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
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
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
  };
}

export default function PortfolioDetailPage({ params }: Props) {
  const company = portfolioCompanies.find((c) => c.slug === params.slug);
  if (!company) notFound();

  const others = portfolioCompanies.filter((c) => c.slug !== company.slug);

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy pt-32 pb-20 px-[5%] md:px-[8%] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(104,197,178,0.08)_0%,transparent_50%)]" />
        <div className="max-w-[1100px] mx-auto relative z-[1]">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-teal text-sm font-medium mb-8 hover:underline"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <div className="flex items-start gap-6 mb-8">
            <img
              src={company.logoSrc}
              alt={`${company.name} logo`}
              className="w-20 h-20 rounded-2xl flex-shrink-0 object-contain"
            />
            <div>
              <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] text-white leading-tight mb-2">
                {company.name}
              </h1>
              <p className="text-teal text-lg font-medium">{company.tagline}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {company.tags.map((tag) => (
              <Badge key={tag} variant="dark">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 px-[5%] md:px-[8%]">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {company.highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-white rounded-2xl p-6 border border-navy/[0.06] text-center"
                >
                  <div className="font-serif text-2xl font-bold text-navy mb-1">{h.value}</div>
                  <div className="text-text-muted text-sm">{h.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Full Description */}
          <ScrollReveal>
            <div className="max-w-[800px] mx-auto mb-16">
              <h2 className="text-2xl text-navy mb-6">About {company.name}</h2>
              {company.fullDescription.split("\n\n").map((para, i) => (
                <p key={i} className="text-text-muted leading-[1.8] mb-5">
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal>
            <div className="max-w-[800px] mx-auto mb-16">
              <h2 className="text-2xl text-navy mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {company.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted text-[0.95rem] leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="bg-navy rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(104,197,178,0.08)_0%,transparent_50%)]" />
              <div className="relative z-[1]">
                <h3 className="text-2xl text-white mb-3">
                  Interested in {company.name}?
                </h3>
                <p className="text-white/60 mb-6 max-w-[500px] mx-auto">
                  Get in touch to learn more about this company and explore partnership
                  opportunities.
                </p>
                <Button href="/contact" variant="primary">
                  Contact Us <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Other Companies */}
          <ScrollReveal>
            <div className="mt-20">
              <h3 className="text-xl text-navy mb-8 text-center">Explore More Companies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {others.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/portfolio/${c.slug}`}
                    className="group block bg-white rounded-2xl p-6 border border-navy/[0.06] no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(46,62,111,0.08)]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={c.logoSrc}
                        alt={`${c.name} logo`}
                        className="w-10 h-10 rounded-xl object-contain"
                      />
                      <h4 className="text-navy font-bold">{c.name}</h4>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">{c.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
