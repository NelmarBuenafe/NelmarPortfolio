import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { education } from "../data/education";

function Education({ embedded = false }) {
  return (
    <div>
      {!embedded && (
        <SectionHeader
          label="Academic Background"
          title="Education Journey"
          description="My academic path and the foundation behind my technical development."
        />
      )}

      <div className="relative space-y-5 before:absolute before:bottom-7 before:left-[1.125rem] before:top-7 before:w-px before:bg-teal-200 sm:before:left-[8.25rem]">
        {education.map((item, index) => (
          <Reveal key={item.degree} delay={index * 70}>
          <div className="relative grid gap-3 sm:grid-cols-[8.25rem_1fr] sm:gap-5">
              <div className="flex items-center gap-3 sm:justify-end">
                <span className="text-xs font-bold uppercase tracking-[0.13em] text-teal-700">{item.year}</span>
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-[var(--color-background)] bg-teal-600 text-white">
                  <GraduationCap size={16} aria-hidden="true" />
                </span>
              </div>

              <article className={`rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6 ${index === 0 ? "sm:ring-1 sm:ring-teal-100" : ""}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                  <h3 className="text-lg font-bold text-stone-950">
                    {item.degree}
                  </h3>
                  <p className="mt-1.5 font-medium text-stone-500">{item.school}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                    <Calendar size={12} />
                    {item.year === "Present" ? "Present" : "Completed"}
                  </span>
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <BookOpen size={16} className="mt-1 shrink-0 text-teal-700" />
                  <p className="text-sm leading-6 text-stone-600">
                    {item.description}
                  </p>
                </div>
              </article>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Education;
