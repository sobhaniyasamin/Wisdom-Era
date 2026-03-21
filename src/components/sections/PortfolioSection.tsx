import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { portfolioCompanies } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-[5%] md:px-[8%] max-w-[1400px] mx-auto">
      <ScrollReveal>
        <SectionHeader
          label="Portfolio"
          title="Companies We&rsquo;re Building"
          subtitle="Each company in our ecosystem strengthens the next — creating a compounding effect across the group."
        />
      </ScrollReveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {portfolioCompanies.map((company, i) => (
          <PortfolioCard key={company.slug} company={company} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
