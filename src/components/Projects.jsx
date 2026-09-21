import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ExternalLink, Layers3, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import BreedSmartImage from "../assets/BreedSmart.png";
import ParkourGameImage from "../assets/ParkourGame.png";
import TicTacToeImage from "../assets/TicTakToe.png";
import Reveal from "./Reveal";

const phinmaHubImage = "/phinmahub-landing-page.png";

const projects = [
  {
    id: "breedsmart",
    title: "BreedSmart",
    category: "Web & Mobile",
    projectType: "Capstone Project",
    shortDescription: "A livestock management app for organizing breeding records and farmer workflows.",
    features: [
      { title: "Breeding Records", description: "Organizes breeding records." },
      { title: "Farmer Workflows", description: "Supports farmer workflows." },
    ],
    technologies: ["React", "React Native", "Expo", "JavaScript", "TypeScript", "Node.js", "Express", "MongoDB"],
    cardTechnologies: ["React", "Node.js", "MongoDB"],
    image: BreedSmartImage,
    imageAlt: "BreedSmart livestock management dashboard preview",
    liveUrl: "https://www.breedsmartoton.site/",
    githubUrl: "",
    featured: true,
  },
  {
    id: "shinobi-gamedev",
    title: "Shinobi GameDev",
    category: "Game Development",
    projectType: "2D Game Development",
    shortDescription:
      "A pixel-art action platformer featuring combat, shield mechanics, collectibles, hazards, and exploration across industrial levels.",
    features: [
      { title: "Combat", description: "Action-platformer combat across industrial levels." },
      { title: "Shield Mechanics", description: "A shield mechanic is part of the gameplay." },
      { title: "Collectibles & Hazards", description: "Levels include collectibles and hazards to navigate." },
      { title: "Exploration", description: "Industrial levels are designed for exploration." },
    ],
    technologies: ["Game Development", "2D Platformer", "Pixel Art"],
    image: ParkourGameImage,
    imageAlt: "Shinobi GameDev pixel-art platformer preview",
    liveUrl: "",
    githubUrl: "https://github.com/NelmarBuenafe/Shinobi-GameDev",
    featured: true,
  },
  {
    id: "tictactoe",
    title: "Tic-Tac-Toe",
    category: "Game Development",
    projectType: "Java Desktop Game",
    shortDescription:
      "A two-player Tic-Tac-Toe game with a modern Java Swing interface, score tracking, round controls, and winning-cell highlights.",
    features: [
      { title: "Two-Player Play", description: "A two-player Tic-Tac-Toe experience." },
      { title: "Score Tracking", description: "Tracks the score across rounds." },
      { title: "Round Controls", description: "Includes controls for each round." },
      { title: "Winning Highlights", description: "Highlights winning cells." },
    ],
    technologies: ["Java", "Swing", "Desktop Application", "Game Development"],
    image: TicTacToeImage,
    imageAlt: "Tic-Tac-Toe Java Swing game preview",
    imageFit: "contain",
    liveUrl: "",
    githubUrl: "https://github.com/NelmarBuenafe/TicTacToe",
    featured: false,
  },
  {
    id: "phinmahub",
    title: "PhinmaHub",
    category: "Web & Mobile",
    projectType: "Web & Mobile",
    shortDescription:
      "A PHINMA-exclusive learning platform where teachers manage modules, lessons, activities, and assignments while students access learning materials, submit coursework, and track their progress.",
    overview: [
      "PhinmaHub is a centralized learning management system designed for authorized PHINMA students and teachers.",
      "Teachers can create and organize courses, modules, lessons, learning materials, activities, assignments, and announcements.",
      "Students can access the learning content provided by their teachers, continue lessons, complete activities, submit assignments, and track their academic progress in one organized platform.",
      "The project focuses on creating a simple and structured digital learning environment that helps students and teachers stay connected through course content and academic activities.",
    ],
    features: [
      { title: "Role-Based Access", description: "Dedicated Student and Teacher experiences." },
      { title: "Course Management", description: "Teachers can organize and manage course content." },
      { title: "Learning Modules", description: "Teachers can provide modules, lessons, and learning resources." },
      { title: "Activities & Assignments", description: "Students can view, complete, and submit assigned coursework." },
      { title: "Learning Progress", description: "Students can continue lessons and monitor their progress." },
      { title: "Announcements", description: "Teachers can provide class and course announcements." },
      { title: "PHINMA-Only Access", description: "Designed for authorized PHINMA students and teachers." },
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Node.js", "Express", "Supabase"],
    cardTechnologies: ["React", "Node.js", "Supabase"],
    image: phinmaHubImage,
    imageAlt: "PhinmaHub learning management system landing page",
    liveUrl: "",
    githubUrl: "https://github.com/NelmarBuenafe/PhinmaHub",
    featured: false,
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const projectTriggerRef = useRef(null);
  const categories = useMemo(() => ["All", ...new Set(projects.map((project) => project.category))], []);
  const visibleProjects = useMemo(
    () => (activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)),
    [activeCategory],
  );

  const openProject = (project, trigger) => {
    projectTriggerRef.current = trigger;
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
    projectTriggerRef.current?.focus();
  };

  return (
    <section aria-label="Projects">
      <SectionHeader
        label="Selected Work"
        title="Projects"
        description="A selection of projects that represent learning experiences, development challenges, and practical applications of my skills."
      />

      <div className="mb-6 overflow-x-auto pb-1" role="group" aria-label="Filter projects by category">
        <div className="flex min-w-max gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`min-h-10 rounded-full border px-3.5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
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

      <div
        key={activeCategory}
        className="relative space-y-5 before:absolute before:bottom-6 before:left-5 before:top-6 before:w-px before:bg-teal-200 sm:before:left-[22px]"
        aria-live="polite"
      >
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onViewProject={openProject} />
        ))}
      </div>

      {selectedProject && createPortal(<ProjectModal project={selectedProject} onClose={closeProject} />, document.body)}
    </section>
  );
}

function ProjectCard({ project, index, onViewProject }) {
  return (
    <Reveal className="h-full" delay={index * 70}>
      <div className="relative pl-14 sm:pl-16">
        <div
          className="absolute left-0 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-200 bg-teal-50 text-xs font-bold tracking-wide text-teal-700 sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        <article
          className={`group flex min-h-[220px] h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:min-h-[244px] lg:flex-row ${
            project.featured ? "border-teal-200 shadow-md" : "border-stone-200"
          }`}
        >
          <button
            type="button"
            onClick={(event) => onViewProject(project, event.currentTarget)}
            className="block aspect-video w-full shrink-0 overflow-hidden border-b border-stone-200 bg-stone-100 p-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-600 lg:h-[220px] lg:w-[390px] lg:self-center lg:border-b-0 lg:border-r"
            aria-label={`View ${project.title} project details`}
          >
            <ProjectMedia project={project} index={index} />
          </button>
          <div className="flex flex-1 flex-col justify-start p-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">{project.projectType}</span>
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold text-amber-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                  Featured
                </span>
              )}
            </div>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-stone-950 sm:text-2xl">{project.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-600 sm:text-base">{project.shortDescription}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(project.cardTechnologies || project.technologies).slice(0, 3).map((technology) => (
                <span key={technology} className="portfolio-tech-tag rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700">
                  {technology}
                </span>
              ))}
            </div>
            <div className="pt-5">
              <button
                type="button"
                onClick={(event) => onViewProject(project, event.currentTarget)}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                View Project
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={15} aria-hidden="true" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </Reveal>
  );
}

function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);
  const images = project.images || [{ src: project.image, alt: project.imageAlt }];

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="project-modal-overlay fixed inset-0 z-[200] flex items-center justify-center bg-stone-950/60 p-3 backdrop-blur-sm sm:p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="project-modal-panel max-h-[92dvh] w-[min(94vw,1100px)] overflow-y-auto rounded-3xl border border-stone-200 bg-white shadow-2xl sm:max-h-[90dvh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-details-title"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-stone-200 bg-white/95 px-6 py-5 backdrop-blur sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">{project.projectType}</p>
            <h2 id="project-details-title" className="mt-2 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
              {project.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 text-stone-700 transition hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            aria-label="Close project details"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-9 p-6 sm:p-8">
          <p className="max-w-3xl text-lg leading-8 text-stone-600">{project.shortDescription}</p>
          <div className={images.length > 1 ? "grid gap-3 sm:grid-cols-2" : ""}>
            {images.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-2 sm:p-3">
                <img src={image.src} alt={image.alt} className="mx-auto h-auto max-h-[440px] w-full rounded-xl object-contain" />
              </figure>
            ))}
          </div>

          <DetailSection title="Overview">
            <div className="space-y-4 leading-7 text-stone-600">
              {(project.overview || [project.shortDescription]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </DetailSection>

          {project.features?.length > 0 && (
            <DetailSection title="Key Features">
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <h4 className="font-semibold text-stone-950">{feature.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-stone-600">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          <DetailSection title="Technology Stack">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="portfolio-tech-tag rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700">
                  {technology}
                </span>
              ))}
            </div>
          </DetailSection>

          {project.contribution?.length > 0 && (
            <DetailSection title="My Contribution">
              <div className="flex flex-wrap gap-2">
                {project.contribution.map((item) => (
                  <span key={item} className="portfolio-tech-tag rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700">
                    {item}
                  </span>
                ))}
              </div>
            </DetailSection>
          )}

          {(project.githubUrl || project.liveUrl) && (
            <DetailSection title="Project Links">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {project.githubUrl && <ProjectLink href={project.githubUrl} label="View Source" icon={FaGithub} primary />}
                {project.liveUrl && <ProjectLink href={project.liveUrl} label="Live Demo" icon={ExternalLink} />}
              </div>
            </DetailSection>
          )}
        </div>
      </section>
    </div>
  );
}

function DetailSection({ title, children }) {
  return (
    <section aria-label={title}>
      <h3 className="text-xl font-bold tracking-tight text-stone-950">{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ProjectMedia({ project, index }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt}
        loading={index === 0 ? "eager" : "lazy"}
        className={`h-full w-full rounded-xl transition duration-500 group-hover:scale-[1.02] ${
          project.imageFit === "cover" ? "object-cover" : "object-contain"
        }`}
      />
    );
  }

  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-stone-50 to-teal-50 p-6 text-center">
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
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 ${
        primary ? "bg-teal-600 text-white hover:bg-teal-700" : "border border-stone-200 text-stone-700 hover:bg-stone-100"
      }`}
    >
      <Icon size={15} aria-hidden="true" />
      {label}
      <ExternalLink size={14} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default Projects;
