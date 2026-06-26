/* eslint-disable @next/next/no-img-element */
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Linkedin } from "lucide-react";
import type { TeamMember } from "@/data/team";

export function TeamCard({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group flex items-center gap-6 rounded-2xl border border-ink-line bg-ink-raised p-7 transition-colors duration-300 hover:border-accent/35">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-20 h-20 rounded-full object-cover flex-shrink-0 ring-1 ring-ink-line"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-ink border border-ink-line flex items-center justify-center flex-shrink-0">
            <span className="font-display text-lg font-bold text-accent">{member.initials}</span>
          </div>
        )}
        <div className="min-w-0">
          <h4 className="text-[1.2rem] text-paper tracking-[-0.01em]">{member.name}</h4>
          <p className="text-accent text-[0.85rem] font-medium mt-0.5">{member.role}</p>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-paper-faint hover:text-accent transition-colors text-[0.8rem]"
              aria-label={`${member.name} on LinkedIn`}
            >
              <Linkedin size={15} /> Connect
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
