import { ShoppingBag, Sprout } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Sector } from "@/data/sectors";

const iconMap = {
  "shopping-bag": ShoppingBag,
  sprout: Sprout,
};

export function SectorCard({ sector, delay, index }: { sector: Sector; delay: number; index: number }) {
  const Icon = iconMap[sector.icon];

  return (
    <ScrollReveal delay={delay}>
      <article className="group relative h-full rounded-2xl border border-ink-line bg-ink-raised p-9 md:p-11 overflow-hidden transition-colors duration-400 hover:border-accent/35">
        <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-transparent transition-[width] duration-500 ease-out-quint group-hover:w-full" />
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl border border-ink-line bg-ink flex items-center justify-center">
            <Icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
          </div>
          <span className="font-mono text-[0.72rem] tracking-[0.16em] text-paper-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-7 text-[1.65rem] text-paper tracking-[-0.01em]">{sector.title}</h3>
        <p className="mt-3 text-paper-muted leading-[1.75] text-[0.96rem]">{sector.description}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {sector.tags.map((tag) => (
            <Badge key={tag} variant="dark">
              {tag}
            </Badge>
          ))}
        </div>
      </article>
    </ScrollReveal>
  );
}
