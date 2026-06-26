import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TeamCard } from "@/components/cards/TeamCard";
import { teamMembers } from "@/data/team";

export function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-36 px-[5%] md:px-[8%]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
        <ScrollReveal>
          <SectionHeader
            label="Our Team"
            title="The people behind <em>Wisdom Era</em>"
            subtitle="A lean, focused leadership team with deep expertise in AI, technology, and venture building."
            className="mb-0"
          />
        </ScrollReveal>
        <div className="space-y-5">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
