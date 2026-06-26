/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { PortfolioCompany } from "@/data/portfolio";

export function PortfolioCard({
  company,
  delay,
}: {
  company: PortfolioCompany;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <div className="group h-full flex flex-col rounded-2xl border border-ink-line bg-ink-raised overflow-hidden transition-colors duration-400 hover:border-accent/35">
        <Link href={`/portfolio/${company.slug}`} className="block no-underline flex-1 p-8">
          <div className="flex items-start gap-4">
            <img
              src={company.logoSrc}
              alt={`${company.name} logo`}
              className="w-12 h-12 rounded-xl flex-shrink-0 object-contain bg-ink border border-ink-line p-1.5"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className="text-[1.35rem] text-paper font-semibold tracking-[-0.01em]">
                  {company.name}
                </h3>
                <ArrowUpRight
                  size={17}
                  className="text-accent opacity-0 -translate-y-0.5 translate-x-0.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
                />
              </div>
              <div className="text-[0.82rem] text-accent font-medium mt-0.5">{company.tagline}</div>
            </div>
          </div>
          <p className="mt-5 text-paper-muted text-[0.92rem] leading-[1.75]">{company.description}</p>
        </Link>
        <div className="px-8 py-4 border-t border-ink-line flex items-center justify-between gap-3">
          <div className="flex gap-1.5 flex-wrap">
            {company.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="light">
                {tag}
              </Badge>
            ))}
          </div>
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-paper-muted text-[0.82rem] font-medium hover:text-accent transition-colors shrink-0"
          >
            Visit <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
