import Reveal from "./Reveal";
import { professionalStrengths } from "../data/skills";

function ProfessionalStrengths() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {professionalStrengths.map(({ icon: Icon, title, description }, index) => (
        <Reveal key={title} delay={index * 55}>
          <article className="h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <Icon size={18} aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-sm font-bold text-stone-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export default ProfessionalStrengths;
