export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  gradient: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Vahid Shirazi",
    role: "Co-founder & CEO",
    initials: "VS",
    gradient: "from-navy to-navy-light",
  },
  {
    name: "Ali Kashfipour",
    role: "Co-founder & CTO",
    initials: "AK",
    gradient: "from-teal-dark to-teal",
  },
  {
    name: "Coming Soon",
    role: "VP of Operations",
    initials: "++",
    gradient: "from-coral to-[#d45a30]",
  },
];
