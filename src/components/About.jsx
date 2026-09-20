import { MessageCircle } from "lucide-react";
import AchievementHighlights from "./AchievementHighlights";
import GitHubContributions from "./GitHubContributions";
import Education from "./Education";
import SkillsContent from "./Skills";
import ProfileImage from "../assets/formal.jpg";
import Reveal from "./Reveal";

function About() {
  return (
    <div className="space-y-20 pb-8 sm:space-y-28">
      <section aria-labelledby="about-introduction-heading">
        <Reveal>
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
        </Reveal>
      </section>

      <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24">
        <SectionIntro
          label="Technical"
          title="Skills & Tools"
          description="Technologies and tools I use for design, development, and academic projects."
          id="skills-heading"
        />
        <SkillsContent />
      </section>

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
          label="Highlights"
          title="Achievement Highlights"
          description="A few meaningful milestones from my involvement, competition, and continuous learning."
          id="achievements-heading"
        />
        <AchievementHighlights />
      </section>

      <GitHubContributions />

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

function SectionIntro({ label, title, description, id }) {
  return (
    <Reveal className="mb-8">
      <header>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">{label}</p>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl leading-7 text-stone-600">{description}</p>
      </header>
    </Reveal>
  );
}

export default About;
