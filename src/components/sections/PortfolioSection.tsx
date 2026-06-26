import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { portfolioCompanies } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-36 px-[5%] md:px-[8%]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionHeader
            label="Portfolio"
            title="Companies we&rsquo;re <em>building</em>"
            subtitle="Each company in our ecosystem strengthens the next, creating a compounding effect across the group."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {portfolioCompanies.map((company, i) => (
            <PortfolioCard key={company.slug} company={company} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
