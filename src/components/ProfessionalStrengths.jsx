import Reveal from "./Reveal";
import { professionalStrengths } from "../data/skills";

function ProfessionalStrengths() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {professionalStrengths.map(({ icon: Icon, title, tag, description }, index) => (
        <Reveal key={title} delay={index * 55}>
          <article className="group h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-transform duration-200 group-hover:scale-110">
                <Icon size={18} aria-hidden="true" />
              </div>
              {tag && (
                <span className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-[11px] font-medium text-stone-600 transition-colors duration-200 group-hover:border-teal-200 group-hover:text-teal-700">
                  {tag}
                </span>
              )}
            </div>
            <h3 className="mt-4 text-sm font-bold text-stone-950 transition-colors duration-200 group-hover:text-teal-700">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export default ProfessionalStrengths;
