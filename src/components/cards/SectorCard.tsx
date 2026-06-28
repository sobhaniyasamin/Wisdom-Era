import { ShoppingBag, Sprout } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Sector } from "@/data/sectors";

const iconMap = {
  "shopping-bag": ShoppingBag,
  sprout: Sprout,
};

export function SectorCard({ sector, delay }: { sector: Sector; delay: number }) {
  const Icon = iconMap[sector.icon];

  return (
    <ScrollReveal delay={delay}>
      <div className="group bg-white/[0.04] border border-white/[0.08] rounded-2xl p-12 transition-all duration-400 ease-out-expo relative overflow-hidden hover:bg-white/[0.07] hover:-translate-y-1 hover:border-teal/20 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:bg-gradient-to-r before:from-teal before:to-teal-light before:scale-x-0 before:transition-transform before:duration-400 before:ease-out-expo hover:before:scale-x-100">
        <div className="w-[60px] h-[60px] rounded-[14px] bg-teal/[0.12] flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-teal" strokeWidth={1.8} />
        </div>
        <h3 className="text-white text-2xl mb-3">{sector.title}</h3>
        <p className="text-white/55 leading-[1.7] text-[0.95rem]">{sector.description}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {sector.tags.map((tag) => (
            <Badge key={tag} variant="dark">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
