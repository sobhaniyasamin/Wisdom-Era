/* eslint-disable @next/next/no-img-element */
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Linkedin } from "lucide-react";
import type { TeamMember } from "@/data/team";

export function TeamCard({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="text-center p-8 bg-white rounded-2xl border border-navy/[0.05] transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(46,62,111,0.08)]">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-24 h-24 rounded-full object-cover mx-auto mb-5"
          />
        ) : (
          <div
            className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-5`}
          >
            <span className="font-serif text-xl font-bold text-white">{member.initials}</span>
          </div>
        )}
        <h4 className="text-lg text-navy mb-1">{member.name}</h4>
        <p className="text-text-muted text-sm">{member.role}</p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-3 text-navy/30 hover:text-teal transition-colors"
            aria-label={`${member.name} on LinkedIn`}
          >
            <Linkedin size={18} />
          </a>
        )}
      </div>
    </ScrollReveal>
  );
}
