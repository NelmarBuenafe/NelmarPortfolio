import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";

const education = [
  {
    year: "Present",
    degree: "Bachelor of Science in Information Technology",
    school: "PHINMA University of Iloilo",
    description:
      "Studying programming, web development, databases, networking, cybersecurity, software development, and information technology concepts.",
  },
  {
    year: "Completed",
    degree: "Senior High School",
    school: "Sara National High School",
    description:
      "Completed senior high school education before pursuing Information Technology.",
  },
];

function Education() {
  return (
    <section>
      <SectionHeader
        label="Academic Background"
        title="Education"
        description="My academic path and the foundation behind my technical development."
      />

      <div className="space-y-5">
        {education.map((item) => (
          <article
            key={item.degree}
            className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm"
          >
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-stone-900 text-white">
                <GraduationCap size={24} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-stone-950">
                    {item.degree}
                  </h3>

                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-500">
                    <Calendar size={12} />
                    {item.year}
                  </span>
                </div>

                <p className="mt-2 font-medium text-stone-500">{item.school}</p>

                <div className="mt-4 flex items-start gap-2">
                  <BookOpen size={16} className="mt-1 shrink-0 text-stone-400" />
                  <p className="text-sm leading-7 text-stone-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
