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
import { Link } from "react-router-dom";
import BreedSmartImage from "../assets/BreedSmart.png";
import ProfileImage from "../assets/formal.jpg";

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

          <Reveal className="mx-auto w-full max-w-md" delay="delay-150">
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

      <section aria-labelledby="featured-project-heading">
        <SectionIntro
          label="Featured Project"
          title="BreedSmart"
          description="A capstone project built around practical tools for livestock and breeding management."
          id="featured-project-heading"
        />

        <article className="grid overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="flex min-h-72 items-center bg-stone-100 p-4 sm:p-6 lg:min-h-full" delay="delay-75">
            <div className="group w-full overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white p-3 shadow-md transition duration-500 hover:shadow-xl">
              <img
                src={BreedSmartImage}
                alt="BreedSmart livestock and breeding management system preview"
                className="aspect-[16/10] w-full rounded-xl object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </Reveal>

          <Reveal className="flex flex-col justify-center p-6 sm:p-8 lg:p-10" delay="delay-150">
            <span className="w-fit rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
              Capstone Project
            </span>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
              BreedSmart
            </h3>
            <p className="mt-4 leading-7 text-stone-600">
              BreedSmart is a multi-platform livestock and breeding management system created for the Iloilo Agriculture&apos;s Office. It connects an offline-capable mobile application for farmers and field technicians with a web dashboard for breeding records, animal health, scheduling, reports, and analytics.
            </p>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="BreedSmart technologies">
              {["React", "React Native", "Tailwind CSS", "Node.js", "Express", "MongoDB"].map((technology, index) => (
                <span
                  key={technology}
                  className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700 motion-safe:animate-[serviceReveal_400ms_ease-out_both]"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.breedsmartoton.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                View BreedSmart <ExternalLink size={16} aria-hidden="true" />
              </a>
              <Link
                to="/projects"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-stone-200 px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-teal-300 hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                View Project Details <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </article>
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
