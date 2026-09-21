import { ArrowRight, Award, BriefcaseBusiness, GraduationCap, Palette, Trophy, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import AchievementHighlights from "./AchievementHighlights";
import GitHubContributions from "./GitHubContributions";
import Education from "./Education";
import SkillsContent from "./Skills";
import ProfessionalStrengths from "./ProfessionalStrengths";
import Reveal from "./Reveal";
import { certificates } from "../data/certificates";

const quickProfileItems = [
  { icon: GraduationCap, title: "BS Information Technology", detail: "PHINMA University of Iloilo" },
  { icon: UsersRound, title: "UIPC Member", detail: "University of Iloilo Programming Circle" },
  { icon: Trophy, title: "Competition Winner", detail: "Frostweavers · Web Design / UI/UX" },
  { icon: Palette, title: "UI/UX & Front-End", detail: "Current technical and design focus" },
  { icon: Award, title: `${certificates.length} Certifications`, detail: "Training and continuous learning" },
  { icon: BriefcaseBusiness, title: "OJT Ready", detail: "Open to internship opportunities" },
];

function About() {
  return (
    <div className="space-y-16 pb-8 sm:space-y-20 lg:space-y-24">
      <section aria-labelledby="about-introduction-heading">
        <div className="grid items-start gap-8 lg:grid-cols-[1.28fr_0.92fr] lg:gap-12">
        <Reveal>
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
              I&apos;m Nelmar Buenafe, a BS Information Technology student interested in UI/UX design and front-end development. I enjoy creating clear, functional, and user-friendly interfaces that solve practical problems.
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-stone-600">
              I continue improving through academic projects, community involvement, competitions, training, and hands-on learning.
            </p>
          </div>

          </Reveal>
          <Reveal delay={130} direction="right">
            <aside className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-sm sm:p-6" aria-labelledby="quick-profile-heading">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Quick Profile</p>
                  <h2 id="quick-profile-heading" className="mt-2 text-xl font-bold text-stone-950">At a glance</h2>
                </div>
                <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">Student</span>
              </div>

              <div className="mt-5 grid gap-2.5 min-[390px]:grid-cols-2">
                {quickProfileItems.map(({ icon: Icon, title, detail }) => (
                  <div key={title} className="rounded-xl border border-stone-200 bg-stone-50 p-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      <Icon size={15} aria-hidden="true" />
                    </div>
                    <h3 className="mt-2.5 text-xs font-bold leading-5 text-stone-950">{title}</h3>
                    <p className="mt-0.5 text-[11px] leading-4 text-stone-600">{detail}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                Let&apos;s create something meaningful.
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </aside>
          </Reveal>
        </div>
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

      <section aria-labelledby="strengths-heading">
        <SectionIntro
          label="Professional Strengths"
          title="More Than Just Code"
          description="Key strengths I bring to teamwork, learning, and collaboration."
          id="strengths-heading"
        />
        <ProfessionalStrengths />
      </section>

      <section id="education" aria-labelledby="education-heading" className="scroll-mt-24">
        <SectionIntro
          label="Academic Background"
          title="Education Journey"
          description="My academic path and the foundation behind my technical development."
          id="education-heading"
        />
        <Education embedded />
      </section>

      <section id="achievements" aria-labelledby="achievements-heading" className="scroll-mt-24">
        <SectionIntro
          label="Achievement Highlights"
          title="Selected Highlights"
          description="A quick look at some of my key achievements and involvements. View the full details in my Experience page."
          id="achievements-heading"
        />
        <AchievementHighlights />
      </section>

      <GitHubContributions />

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
