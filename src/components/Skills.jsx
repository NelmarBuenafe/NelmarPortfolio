import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

function SkillsContent() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {skillGroups.map(({ icon: Icon, title, skills }, index) => (
        <Reveal key={title} delay={index * 70}>
          <article
            className="h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-teal-50 p-2.5 text-teal-700">
                <Icon size={19} aria-hidden="true" />
              </div>
              <h3 className="text-sm font-bold text-stone-950">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="portfolio-tech-tag rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1.5 text-xs font-medium text-stone-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export default SkillsContent;
