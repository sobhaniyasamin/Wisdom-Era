import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts, readingTime, formatDate } from "@/data/insights";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives from Wisdom Era on applied AI, company building, e-commerce, and agriculture across emerging markets.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="pt-32 pb-24 px-[5%] md:px-[8%]">
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal>
          <SectionHeader
            label="Insights"
            title="Notes on Building<br>the Future"
            subtitle="Perspectives on applied AI, company building, and the sectors we invest in."
          />
        </ScrollReveal>

        <div className="divide-y divide-navy/[0.08] border-t border-navy/[0.08]">
          {sorted.map((post, i) => (
            <ScrollReveal key={post.slug} delay={Math.min(i * 0.06, 0.3)}>
              <Link
                href={`/insights/${post.slug}`}
                className="group block py-8 no-underline"
              >
                <div className="flex items-center gap-3 text-[0.78rem] mb-3">
                  <span className="text-teal-dark font-semibold tracking-wide uppercase">
                    {post.tag}
                  </span>
                  <span className="text-text-muted">
                    {formatDate(post.date)} · {readingTime(post.content)} min read
                  </span>
                </div>
                <h2 className="text-[1.6rem] md:text-[1.9rem] text-navy leading-tight mb-2 flex items-start gap-2">
                  {post.title}
                  <ArrowUpRight
                    size={22}
                    className="text-teal mt-1.5 flex-shrink-0 opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
                  />
                </h2>
                <p className="text-text-muted leading-[1.7] max-w-[680px]">{post.excerpt}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
