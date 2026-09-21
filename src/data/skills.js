import { Code2, GitBranch, Lightbulb, MessageCircle, Palette, ScanSearch, UsersRound } from "lucide-react";

export const skillGroups = [
  {
    icon: Code2,
    title: "Front-End Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    icon: Palette,
    title: "UI/UX & Design",
    skills: ["UI/UX Design", "Wireframing", "Visual Hierarchy", "Design Systems", "Responsive Layouts", "Canva"],
  },
  {
    icon: GitBranch,
    title: "Development Tools",
    skills: ["VS Code", "Git", "GitHub"],
  },
  {
    icon: ScanSearch,
    title: "Research & Iteration",
    skills: ["Research", "User Flows", "Iteration"],
  },
];

export const professionalStrengths = [
  { icon: MessageCircle, title: "Communication", description: "I value clear and open communication when working with others." },
  { icon: UsersRound, title: "Teamwork", description: "I enjoy collaborating, learning, and contributing to shared goals." },
  { icon: Lightbulb, title: "Problem Solving", description: "I approach challenges with a practical and thoughtful mindset." },
  { icon: ScanSearch, title: "Critical Thinking", description: "I consider user needs and details before shaping a solution." },
  { icon: Palette, title: "Design Thinking", description: "I use structure and visual hierarchy to keep interfaces clear." },
  { icon: GitBranch, title: "Continuous Learning", description: "I grow through feedback, hands-on practice, and iteration." },
];
