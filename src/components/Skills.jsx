import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

function SkillsContent() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {skillGroups.map(({ icon: Icon, title, skills }, index) => (
        <Reveal key={title} delay={index * 70}>
          <article
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
                  className="portfolio-tech-tag rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600"
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
