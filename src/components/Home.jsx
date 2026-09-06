import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Code2,
  Download,
  ExternalLink,
  FolderKanban,
  Lightbulb,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import BreedSmartImage from "../assets/BreedSmart.png";
import ParkourGameImage from "../assets/ParkourGame.png";
import ProfileImage from "../assets/formal.jpg";

const projects = [
  {
    name: "BreedSmart",
    type: "Capstone project",
    description:
      "A livestock management app for organizing breeding records and farmer workflows.",
    technologies: ["React", "React Native", "MongoDB"],
    image: BreedSmartImage,
    imageAlt: "BreedSmart cattle care dashboard preview",
    demo: "https://www.breedsmartoton.site/",
  },
  {
    name: "Shinobi GameDev",
    type: "2D game development",
    description:
      "A pixel-art action platformer featuring combat, shield mechanics, collectibles, hazards, and exploration across industrial levels.",
    technologies: ["Game Development", "2D Platformer", "Pixel Art"],
    image: ParkourGameImage,
    imageAlt: "Shinobi GameDev pixel-art platformer preview",
    github: "https://github.com/NelmarBuenafe/Shinobi-GameDev",
  },
];

const services = [
  {
    icon: MousePointer2,
    title: "UI/UX Design",
    text: "Exploring user flows, wireframes, visual hierarchy, and interfaces that feel clear and easy to use.",
  },
  {
    icon: Code2,
    title: "Front-End Development",
    text: "Turning thoughtful layouts into responsive, accessible interfaces with modern web technologies.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    text: "Breaking down challenges, asking better questions, and finding practical steps toward a solution.",
  },
];

const processSteps = [
  ["01", "Understand", "Identify users, goals, and the main problem."],
  ["02", "Plan", "Organize content, user flows, and requirements."],
  ["03", "Design", "Create wireframes and clear visual layouts."],
  ["04", "Improve", "Review feedback and refine the experience."],
];

const GITHUB_USERNAME = "NelmarBuenafe";
const GITHUB_EARLIEST_YEAR = 2022;

function Home() {
  const [typedName, setTypedName] = useState("Nelmar Buenafe");
  const [reducedMotion, setReducedMotion] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    const fullName = "Nelmar Buenafe";
    let index = fullName.length;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      if (!deleting && index < fullName.length) {
        index += 1;
        setTypedName(fullName.slice(0, index));
        timeoutId = window.setTimeout(tick, 95);
        return;
      }

      if (!deleting) {
        deleting = true;
        timeoutId = window.setTimeout(tick, 2000);
        return;
      }

      if (index > 0) {
        index -= 1;
        setTypedName(fullName.slice(0, index));
        timeoutId = window.setTimeout(tick, 58);
        return;
      }

      deleting = false;
      timeoutId = window.setTimeout(tick, 550);
    };

    timeoutId = window.setTimeout(tick, 450);

    return () => window.clearTimeout(timeoutId);
  }, [reducedMotion]);

  return (
    <div className="space-y-24 pb-8 sm:space-y-32">
      <section className="relative isolate flex min-h-[calc(100vh-8rem)] items-center overflow-hidden py-8 sm:py-12">
        <div className="pointer-events-none absolute -right-28 top-16 -z-10 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-32 w-32 rounded-full border border-teal-200/70" aria-hidden="true" />

        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
          <div className="max-w-2xl">
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-teal-600" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 sm:text-sm">
                  IT student · UI/UX designer · front-end developer
                </p>
              </div>
            </Reveal>

            <Reveal delay="delay-75">
              <h1 className="text-5xl font-bold leading-[1.04] tracking-[-0.04em] text-stone-950 sm:text-6xl lg:text-7xl">
                Hi, I&apos;m{" "}
                <span className="block min-h-[1.08em] text-teal-700 sm:inline-block sm:min-w-[14ch]">
                  <span className="sr-only">Nelmar Buenafe</span>
                  <span aria-hidden="true">
                    {typedName}
                    <span className="ml-1 inline-block h-[0.8em] w-0.5 translate-y-1 bg-teal-500 motion-safe:animate-pulse" />
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay="delay-150">
              <p className="mt-7 text-xl font-semibold text-stone-800 sm:text-2xl">
                UI/UX Designer &amp; Front-End Developer
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
                I design simple, user-friendly interfaces and turn them into
                responsive digital experiences. I enjoy solving practical
                problems through thoughtful design and development.
              </p>
            </Reveal>

            <Reveal delay="delay-200">
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#10201f] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 active:translate-y-0"
                >
                  View My Work
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 active:translate-y-0"
                >
                  <Download size={17} />
                  Download Resume
                </a>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center px-2 text-sm font-semibold text-teal-700 underline decoration-teal-300 decoration-2 underline-offset-4 transition hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                >
                  Contact Me
                </Link>
              </div>
            </Reveal>

            <Reveal delay="delay-300">
              <div className="mt-12 grid max-w-xl gap-4 border-t border-stone-200 pt-6 sm:grid-cols-3 sm:gap-6">
                <CredibilityItem text="BS Information Technology Student" />
                <CredibilityItem text="UI/UX and Front-End Focus" />
                <CredibilityItem text="Available for OJT and Internships" />
              </div>
            </Reveal>
          </div>

          <Reveal className="mx-auto w-full max-w-md lg:max-w-none" delay="delay-150">
            <div className="relative px-3 pb-8 pt-14 sm:px-5">
              <div className="absolute -right-1 top-1 h-24 w-24 rounded-3xl border border-teal-200 sm:-right-2" aria-hidden="true" />
              <div className="absolute -bottom-1 left-0 h-24 w-24 rounded-3xl border border-stone-300" aria-hidden="true" />

              <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-3 shadow-xl shadow-stone-900/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="overflow-hidden rounded-[1.5rem] bg-stone-100">
                  <img
                    src={ProfileImage}
                    alt="Nelmar Buenafe in a formal black suit"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>

              <InfoCard
                className="-bottom-1 left-0 sm:-left-5"
                icon={Sparkles}
                label="Focus"
                value="UI/UX Design"
              />
              <InfoCard
                className="right-0 top-0 hidden sm:block"
                icon={FolderKanban}
                label="Currently building"
                value="Digital experiences"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="selected-work-heading">
        <SectionIntro
          label="Selected Work"
          title="A few things I&apos;ve built."
          description="Academic and personal projects where design thinking meets practical development."
          id="selected-work-heading"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index === 0 ? "delay-75" : "delay-150"}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white/70 px-5 py-4">
          <p className="text-sm text-stone-600">
            Looking for the parking management system and other academic work?
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            View all projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section aria-labelledby="github-contributions-heading">
        <GitHubContributions />
      </section>

      <section aria-labelledby="what-i-do-heading">
        <SectionIntro
          label="What I Do"
          title="Designing with purpose."
          description="I am building a strong foundation in design and development through practice, feedback, and continuous learning."
          id="what-i-do-heading"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index === 0 ? "delay-75" : index === 1 ? "delay-150" : "delay-200"}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="process-heading">
        <div className="rounded-[2rem] bg-[#10201f] p-7 text-white shadow-xl shadow-teal-950/10 sm:p-10 lg:p-12">
          <SectionIntro
            label="Design Process"
            title="Thoughtful from first question to final detail."
            description="A simple process keeps the work focused, useful, and open to improvement."
            id="process-heading"
            dark
          />
          <div className="grid gap-5 md:grid-cols-4">
            {processSteps.map(([number, title, text], index) => (
              <Reveal key={title} delay={index === 0 ? "delay-75" : index === 1 ? "delay-150" : index === 2 ? "delay-200" : "delay-300"}>
                <div className="relative border-l border-teal-700/70 pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-5">
                  <span className="text-xs font-bold tracking-[0.2em] text-teal-300">{number}</span>
                  <h3 className="mt-3 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-300">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 pt-8" aria-labelledby="contact-heading">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Let&apos;s connect</p>
            <h2 id="contact-heading" className="mt-2 max-w-xl text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">
              Have an opportunity or project in mind?
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#10201f] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 active:translate-y-px"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function GitHubContributions() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [calendarKey, setCalendarKey] = useState(0);
  const years = Array.from(
    { length: currentYear - GITHUB_EARLIEST_YEAR + 1 },
    (_, index) => currentYear - index,
  );

  return (
    <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm sm:p-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10201f] text-white">
            <FaGithub size={21} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Open source activity
            </p>
            <h2 id="github-contributions-heading" className="mt-2 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
              GitHub Contributions
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-stone-600">
              A look at my coding activity and continuous learning through the years.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-end gap-3 sm:justify-end">
          <div>
            <label htmlFor="github-year" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-stone-500">
              Contribution year
            </label>
            <select
              id="github-year"
              value={selectedYear}
              onChange={(event) => setSelectedYear(Number(event.target.value))}
              className="min-h-11 rounded-xl border border-stone-300 bg-white px-3 text-sm font-semibold text-stone-800 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => setCalendarKey((value) => value + 1)}
            className="min-h-11 rounded-xl border border-stone-300 px-4 text-sm font-semibold text-stone-700 transition hover:border-teal-300 hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            Retry
          </button>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-100 bg-stone-50/70 p-4 pb-5 sm:p-6">
        <div className="min-w-[720px]">
          <GitHubCalendar
            key={`${selectedYear}-${calendarKey}`}
            username={GITHUB_USERNAME}
            year={selectedYear}
            theme={{
              light: ["#e8f2ef", "#bfe3d7", "#73c9b2", "#159a82", "#0b5c4d"],
              dark: ["#243b38", "#1d6b5c", "#159a82", "#43bda3", "#a6ead9"],
            }}
            colorScheme="light"
            blockSize={13}
            blockMargin={4}
            fontSize={12}
            showTotalCount
            showColorLegend
            showMonthLabels
            errorMessage={`GitHub contributions for ${selectedYear} could not be loaded. Try again.`}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="sm:hidden">Scroll sideways to view the full contribution calendar.</p>
        <p>Contribution data comes from the public GitHub profile.</p>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-teal-700 transition hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
        >
          View My GitHub Profile <ExternalLink size={15} />
        </a>
      </div>
    </div>
  );
}

function Reveal({ children, className = "", delay = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} motion-safe:transition motion-safe:duration-700 motion-safe:ease-out motion-safe:will-change-transform motion-safe:opacity-0 motion-safe:translate-y-4 ${visible ? "motion-safe:translate-y-0 motion-safe:opacity-100" : ""} ${delay}`}
    >
      {children}
    </div>
  );
}

function CredibilityItem({ text }) {
  return (
    <div className="flex items-start gap-2 text-sm leading-6 text-stone-600">
      <Check size={16} className="mt-1 shrink-0 text-teal-600" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}

function InfoCard({ className, icon: Icon, label, value }) {
  return (
    <div className={`absolute rounded-2xl border border-stone-200 bg-white p-3 shadow-lg shadow-stone-900/10 transition duration-200 hover:-translate-y-1 sm:p-4 ${className}`}>
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="rounded-xl bg-teal-600 p-2 text-white">
          <Icon size={17} aria-hidden="true" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 sm:text-xs">{label}</p>
          <p className="mt-0.5 text-xs font-bold text-stone-900 sm:text-sm">{value}</p>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden border-b border-stone-100 bg-stone-100 p-2">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="aspect-[16/9] w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">{project.type}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-stone-950">{project.name}</h3>
        <p className="mt-3 leading-7 text-stone-600">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700">
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-[#10201f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            Project details <ArrowRight size={15} />
          </Link>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-stone-200 px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-teal-300 hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              Live demo <ExternalLink size={15} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-stone-200 px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-teal-300 hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              GitHub <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ServiceCard({ icon: Icon, title, text }) {
  return (
    <article className="h-full rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 text-white">
        <Icon size={20} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-stone-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-500">{text}</p>
    </article>
  );
}

function SectionIntro({ label, title, description, id, dark = false }) {
  return (
    <header className="mb-8">
      <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${dark ? "text-teal-300" : "text-teal-700"}`}>{label}</p>
      <h2 id={id} className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-stone-950"}`}>{title}</h2>
      <p className={`mt-4 max-w-2xl leading-7 ${dark ? "text-stone-300" : "text-stone-600"}`}>{description}</p>
    </header>
  );
}

export default Home;
