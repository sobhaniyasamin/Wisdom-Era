export interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  initials: string;
  gradient: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Vahid Shirazi",
    role: "Co-founder & CEO",
    photo: "/vahid.JPG",
    initials: "VS",
    gradient: "from-navy to-navy-light",
  },
];
