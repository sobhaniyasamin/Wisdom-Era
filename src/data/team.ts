export interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  initials: string;
  gradient: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Vahid Shirazi",
    role: "Co-founder & CEO",
    photo: "/vahid.JPG",
    initials: "VS",
    gradient: "from-navy to-navy-light",
    linkedin: "https://www.linkedin.com/in/vahid-shirazi-55493536",
  },
];
