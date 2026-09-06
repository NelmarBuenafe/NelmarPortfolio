import {
  Code2,
  Lightbulb,
  MessageCircle,
  MousePointer2,
  RefreshCw,
  UsersRound,
} from "lucide-react";
import GitHubContributions from "./GitHubContributions";
import Education from "./Education";
import Achievements from "./Achievements";
import ProfileImage from "../assets/formal.jpg";

const interests = [
  {
    icon: MousePointer2,
    title: "UI/UX Design",
    description: "Creating interfaces that feel clear, useful, and easy to navigate.",
  },
  {
    icon: Code2,
    title: "Front-End Development",
    description: "Turning thoughtful layouts into responsive React experiences.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Breaking complex challenges into practical and understandable steps.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Building skills through projects, feedback, and hands-on practice.",
  },
  {
    icon: UsersRound,
    title: "Team Collaboration",
    description: "Communicating ideas clearly and contributing thoughtfully to shared work.",
  },
];

const approach = [
  ["01", "Understand", "Identify the users, goals, and main problem."],
  ["02", "Plan", "Organize the content, user flows, and requirements."],
  ["03", "Design", "Create wireframes and clear visual layouts."],
  ["04", "Improve", "Review feedback, test the interface, and refine the result."],
];

function About() {
  return (
    <div className="space-y-20 pb-8 sm:space-y-28">
      <section aria-labelledby="about-introduction-heading">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              About Me
            </p>
            <h1
              id="about-introduction-heading"
              className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-stone-950 sm:text-5xl"
            >
              Designing and building with purpose.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              I&apos;m Nelmar Buenafe, a BS Information Technology student interested in UI/UX design and front-end development. I enjoy creating clear and practical interfaces for systems that solve real problems in schools, local offices, and communities.
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-stone-600">
              I am continuously improving my design thinking, front-end development, problem-solving, and collaboration skills through academic projects and hands-on practice.
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-stone-200 bg-white p-3 shadow-xl shadow-stone-900/10">
            <div className="overflow-hidden rounded-[1.5rem] bg-stone-100">
              <img
                src={ProfileImage}
                alt="Nelmar Buenafe in a formal black suit"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="professional-interests-heading">
        <SectionIntro
          label="Professional Interests"
          title="What I am growing into."
          description="Areas that guide the projects I choose and the skills I continue to develop."
          id="professional-interests-heading"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {interests.map((interest, index) => (
            <InterestCard key={interest.title} interest={interest} index={index} />
          ))}
        </div>
      </section>

      <section aria-labelledby="approach-heading">
        <SectionIntro
          label="Design and Development Approach"
          title="A simple process for useful work."
          description="I use a focused, iterative process to keep decisions connected to people and their needs."
          id="approach-heading"
        />
        <div className="grid gap-5 md:grid-cols-4">
          {approach.map(([number, title, description]) => (
            <article
              key={title}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-md"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-teal-700">{number}</span>
              <h3 className="mt-4 text-lg font-bold text-stone-950">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-stone-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <GitHubContributions />

      <section id="education" aria-labelledby="education-heading" className="scroll-mt-24">
        <SectionIntro
          label="Academic Background"
          title="Education"
          description="My academic path and the foundation behind my technical development."
          id="education-heading"
        />
        <Education embedded />
      </section>

      <section id="achievements" aria-labelledby="achievements-heading" className="scroll-mt-24">
        <SectionIntro
          label="Milestones"
          title="Achievements"
          description="Selected academic milestones and areas of continuous growth."
          id="achievements-heading"
        />
        <Achievements embedded />
      </section>

      <section className="rounded-[2rem] bg-[#10201f] p-7 text-white shadow-xl shadow-teal-950/10 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Keep exploring</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Want to know more about my background?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-stone-300">
            A resume file is not available in the project yet. Add one to the public folder when you are ready to share it.
          </p>
        </div>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-400 sm:mt-0">
          <MessageCircle size={18} aria-hidden="true" />
          Open to conversations
        </div>
      </section>
    </div>
  );
}

function InterestCard({ interest, index }) {
  const Icon = interest.icon;

  return (
    <article
      className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-md motion-safe:animate-[serviceReveal_500ms_ease-out_both]"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900 text-white">
        <Icon size={19} aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-bold text-stone-950">{interest.title}</h3>
      <p className="mt-2 text-sm leading-6 text-stone-600">{interest.description}</p>
    </article>
  );
}

function SectionIntro({ label, title, description, id }) {
  return (
    <header className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">{label}</p>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl leading-7 text-stone-600">{description}</p>
    </header>
  );
}

export default About;
