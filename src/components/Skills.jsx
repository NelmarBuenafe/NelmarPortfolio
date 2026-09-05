import {
  Code2,
  Database,
  Globe,
  Terminal,
  Shield,
  Wrench,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    icon: Code2,
    title: "Design Foundations",
    skills: ["UI/UX Design", "Wireframing", "Visual Hierarchy", "Canva"],
  },
  {
    icon: Globe,
    title: "Interface Skills",
    skills: ["HTML", "CSS", "Responsive Layouts", "Design Systems"],
  },
  {
    icon: Terminal,
    title: "Problem Solving",
    skills: ["Research", "User Flows", "Critical Thinking", "Iteration"],
  },
  {
    icon: Database,
    title: "Learning Tools",
    skills: ["Canva", "VS Code", "Git"],
  },
  {
    icon: Shield,
    title: "Development Basics",
    skills: ["JavaScript", "React", "Tailwind CSS", "GitHub"],
  },
  {
    icon: Wrench,
    title: "Growth Mindset",
    skills: ["Continuous Learning", "Feedback", "Teamwork", "Communication"],
  },
];

function Skills() {
  return (
    <section>
      <SectionHeader
        label="Technical"
        title="Skills"
        description="Technologies and tools I have used across academic, personal, and development projects."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ icon: Icon, title, skills }) => (
          <article
            key={title}
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-lg bg-stone-100 p-3">
                <Icon size={20} />
              </div>
              <h3 className="font-bold">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
