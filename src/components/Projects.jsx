import { ExternalLink, FolderGit2, ArrowUpRight, Smartphone } from "lucide-react";
import SectionHeader from "./SectionHeader";
import BreedSmartImage from "../assets/BreedSmart.png";

const projects = [
  {
    name: "BreedSmart",
    type: "Capstone Project",
    featured: true,
    description: "A livestock management app for organizing breeding records and farmer workflows.",
    technologies: ["React", "PHP", "MySQL", "JavaScript"],
    image: BreedSmartImage,
    github: "",
    demo: "https://www.breedsmartoton.site/",
  },
  {
    name: "ParkLink",
    type: "Web Application",
    featured: true,
    description: "A parking management system with reservations, dashboards, maps, and analytics.",
    technologies: ["React", "Tailwind CSS", "Leaflet", "Node.js"],
    image: null,
    github: "",
    demo: "",
  },
  {
    name: "SLAMS",
    type: "Academic System",
    featured: false,
    description: "A student assistance system for recording attendance and grades.",
    technologies: ["Java", "MySQL", "Desktop Application"],
    image: null,
    github: "",
    demo: "",
  },
  {
    name: "Flask REST APIs",
    type: "Backend Development",
    featured: false,
    description: "Flask API exercises covering validation, JSON responses, and client-server communication.",
    technologies: ["Python", "Flask", "REST API", "JSON"],
    image: null,
    github: "",
    demo: "",
  },
];

function Projects() {
  return (
    <section>
      <SectionHeader
        label="Selected Work"
        title="Projects"
        description="A selection of academic and personal projects that demonstrate my development experience and technical interests."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8 ${
              project.featured
                ? "border-stone-300"
                : "border-stone-200"
            }`}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="mb-7 h-auto max-h-[32rem] min-h-48 w-full rounded-2xl bg-stone-100 p-2 object-contain transition duration-300 group-hover:bg-teal-50 sm:min-h-64"
              />
            ) : (
              <div className="relative mb-7 flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-stone-200 bg-gradient-to-br from-stone-50 to-teal-50 text-center transition group-hover:border-teal-300 sm:h-64">
                <div>
                  <Smartphone className="mx-auto mb-3 text-stone-400" size={34} strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-stone-500">Add project screenshot</p>
                  <p className="mt-1 text-xs text-stone-400">Preview image coming soon</p>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-7 lg:flex-row lg:justify-between">
              <div className="flex min-w-0 gap-5">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-900 text-white sm:flex">
                  <FolderGit2 size={22} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                      {project.type}
                    </span>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-[11px] font-semibold text-amber-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-stone-950">
                    {project.name}
                  </h3>

                  <p className="mt-3 max-w-3xl leading-7 text-stone-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                      className="rounded-xl border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 items-start gap-2 lg:pt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-stone-200 px-3 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
                  >
                    GitHub
                    <ArrowUpRight size={15} />
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
                  >
                    Live Demo
                    <ExternalLink size={15} />
                  </a>
                )}

              </div>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
