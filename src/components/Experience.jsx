import { Briefcase, Server, LayoutTemplate } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    year: "2026",
    icon: LayoutTemplate,
    title: "UI/UX and Interface Practice",
    company: "Academic & Personal Learning",
    description:
      "Practiced creating clearer layouts, user flows, and responsive interface ideas while learning the foundations of frontend development.",
  },
  {
    year: "2026",
    icon: Server,
    title: "Problem-Solving Exercises",
    company: "Academic Activities",
    description:
      "Worked through programming activities that strengthened my ability to understand requirements, break down tasks, and test possible solutions.",
  },
  {
    year: "2025",
    icon: Briefcase,
    title: "Collaborative Project Work",
    company: "Academic Projects",
    description:
      "Contributed ideas and design work to academic projects while learning how teamwork, feedback, and iteration improve a digital product.",
  },
];

function Experience() {
  return (
    <section>
      <SectionHeader
        label="Background"
        title="Experience"
        description="Hands-on development experience gained through academic and personal projects."
      />

      <div className="relative ml-3 border-l border-stone-300 pl-8">
        {experiences.map(({ year, icon: Icon, title, company, description }) => (
          <article key={title} className="relative mb-10 last:mb-0">
            <div className="absolute -left-[45px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-4 border-stone-100 bg-stone-900 text-white">
              <Icon size={13} />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {year}
            </span>

            <h3 className="mt-2 text-xl font-bold">{title}</h3>

            <p className="mt-1 text-sm font-medium text-stone-500">{company}</p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-500">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
