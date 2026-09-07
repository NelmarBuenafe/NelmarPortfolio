import { useMemo, useState } from "react";
import { ExternalLink, Layers3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import BreedSmartImage from "../assets/BreedSmart.png";
import ParkourGameImage from "../assets/ParkourGame.png";

const projects = [
  {
    id: "breedsmart",
    title: "BreedSmart",
    category: "Web & Mobile",
    projectType: "Capstone Project",
    shortDescription:
      "A livestock management app for organizing breeding records and farmer workflows.",
    technologies: ["React", "React Native", "Expo", "JavaScript", "TypeScript", "Node.js", "Express", "MongoDB"],
    image: BreedSmartImage,
    imageAlt: "BreedSmart livestock management dashboard preview",
    liveUrl: "https://www.breedsmartoton.site/",
    repositoryUrl: "",
    featured: true,
  },
  {
    id: "shinobi-gamedev",
    title: "Shinobi GameDev",
    category: "Game Development",
    projectType: "2D Game Development",
    shortDescription:
      "A pixel-art action platformer featuring combat, shield mechanics, collectibles, hazards, and exploration across industrial levels.",
    technologies: ["Game Development", "2D Platformer", "Pixel Art"],
    image: ParkourGameImage,
    imageAlt: "Shinobi GameDev pixel-art platformer preview",
    liveUrl: "",
    repositoryUrl: "https://github.com/NelmarBuenafe/Shinobi-GameDev",
    featured: true,
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [],
  );
  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section aria-label="Projects">
      <SectionHeader
        label="Selected Work"
        title="Projects I’ve Designed and Built"
        description="A collection of academic and personal projects where I applied UI/UX design, front-end development, problem-solving, and teamwork."
      />

      <div className="mb-8 overflow-x-auto pb-1" role="group" aria-label="Filter projects by category">
        <div className="flex min-w-max gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-teal-700 bg-teal-700 text-white shadow-sm"
                    : "border-stone-200 bg-white text-stone-600 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
                }`}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {visibleProjects.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-stone-300 bg-white p-8 text-center text-stone-600">
          No projects match this category yet.
        </p>
      )}
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-safe:animate-[serviceReveal_500ms_ease-out_both] ${
        project.featured ? "border-teal-200 shadow-md" : "border-stone-200"
      }`}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <ProjectMedia project={project} index={index} />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
            {project.projectType}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-[11px] font-semibold text-amber-800">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
              Featured
            </span>
          )}
        </div>

        <h3 className="mt-3 text-2xl font-bold tracking-tight text-stone-950">{project.title}</h3>
        <p className="mt-3 leading-7 text-stone-600">{project.shortDescription}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700"
            >
              {technology}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.repositoryUrl) && (
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
            {project.liveUrl && <ProjectLink href={project.liveUrl} label="Live Demo" icon={ExternalLink} primary />}
            {project.repositoryUrl && <ProjectLink href={project.repositoryUrl} label="GitHub" icon={FaGithub} />}
          </div>
        )}
      </div>
    </article>
  );
}

function ProjectMedia({ project, index }) {
  if (project.image) {
    return (
      <div className="aspect-[16/9] overflow-hidden bg-stone-100 p-3">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading={index === 0 ? "eager" : "lazy"}
          className="h-full w-full rounded-2xl object-contain transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-stone-50 to-teal-50 p-6 text-center">
      <div>
        <Layers3 className="mx-auto mb-3 text-teal-700/70" size={34} strokeWidth={1.5} aria-hidden="true" />
        <p className="text-sm font-semibold text-stone-600">Project preview unavailable</p>
        <p className="mt-1 text-xs text-stone-400">More project details can be added when screenshots are available.</p>
      </div>
    </div>
  );
}

function ProjectLink({ href, label, icon: Icon, primary = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 ${
        primary
          ? "bg-teal-600 text-white hover:bg-teal-700"
          : "border border-stone-200 text-stone-700 hover:bg-stone-100"
      }`}
    >
      {label}
      <Icon size={15} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default Projects;
