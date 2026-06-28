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
      <div className="bg-white rounded-[20px] overflow-hidden border border-navy/[0.06] transition-all duration-400 ease-out-expo hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(46,62,111,0.1)] h-full flex flex-col">
        <Link href={`/portfolio/${company.slug}`} className="block no-underline group flex-1">
          <div className="px-8 pt-8 pb-5 flex items-start gap-5">
            <img
              src={company.logoSrc}
              alt={`${company.name} logo`}
              className="w-14 h-14 rounded-[14px] flex-shrink-0 object-contain"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-[1.4rem] text-navy font-bold">
                  {company.name}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="text-teal opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
                />
              </div>
              <div className="text-[0.85rem] text-teal-dark font-medium">{company.tagline}</div>
            </div>
          </div>
          <div className="px-8 pb-6">
            <p className="text-text-muted text-[0.93rem] leading-[1.75]">{company.description}</p>
          </div>
        </Link>
        <div className="px-8 py-4 border-t border-navy/[0.06] flex items-center justify-between mt-auto">
          <div className="flex gap-2 flex-wrap">
            {company.tags.map((tag) => (
              <Badge key={tag} variant="light">
                {tag}
              </Badge>
            ))}
          </div>
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:text-teal-dark transition-colors shrink-0 ml-3"
          >
            Visit <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
