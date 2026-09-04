import { Trophy, Award, Star, Medal } from "lucide-react";
import SectionHeader from "./SectionHeader";

const achievements = [
  {
    icon: Trophy,
    year: "2026",
    title: "Academic Project Development",
    description:
      "Developed academic software projects involving web development, databases, REST APIs, system design, and user interfaces.",
    image: null,
  },
  {
    icon: Award,
    year: "2025",
    title: "Capstone Project",
    description:
      "Participated in the development of SmartBreed, a livestock artificial insemination management application.",
    image: null,
  },
  {
    icon: Star,
    year: "2025",
    title: "Programming Projects",
    description:
      "Built applications and exercises using Java, Python, JavaScript, React, PHP, Flask, and MySQL.",
    image: null,
  },
  {
    icon: Medal,
    year: "Ongoing",
    title: "Continuous Learning",
    description:
      "Continuing to strengthen skills in web development, cybersecurity, networking, databases, and software development.",
    image: null,
  },
];

function Achievements() {
  return (
    <section>
      <SectionHeader
        label="Milestones"
        title="Achievements"
        description="Selected academic milestones and areas of continuous growth."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map(({ icon: Icon, year, title, description, image }) => (
          <article
            key={title}
            className="group rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {image ? (
              <img
                src={image}
                alt=""
                className="mb-6 h-auto max-h-64 min-h-40 w-full rounded-xl bg-stone-100 p-2 object-contain"
              />
            ) : (
              <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 via-stone-50 to-teal-100 text-teal-700">
                <Icon size={38} strokeWidth={1.5} />
              </div>
            )}
            <div className="flex items-start justify-between gap-5">
              <div className="rounded-xl bg-stone-100 p-3 transition group-hover:bg-stone-900 group-hover:text-white">
                <Icon size={22} />
              </div>
              <span className="text-xs font-semibold text-stone-400">{year}</span>
            </div>

            <h3 className="mt-6 text-lg font-bold">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-500">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
