import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TeamCard } from "@/components/cards/TeamCard";
import { teamMembers } from "@/data/team";

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 px-[5%] md:px-[8%]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionHeader
            label="Our Team"
            title="The People Behind<br>Wisdom Era"
            subtitle="A lean, focused leadership team with deep expertise in AI, technology, and venture building."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
