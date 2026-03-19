import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { TeamMember } from "@/data/team";

export function TeamCard({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="text-center p-8 bg-white rounded-2xl border border-navy/[0.05] transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(46,62,111,0.08)]">
        <div
          className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-5`}
        >
          <span className="font-serif text-xl font-bold text-white">{member.initials}</span>
        </div>
        <h4 className="text-lg text-navy mb-1">{member.name}</h4>
        <p className="text-text-muted text-sm">{member.role}</p>
      </div>
    </ScrollReveal>
  );
}
