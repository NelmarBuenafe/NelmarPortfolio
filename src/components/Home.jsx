import {
  ArrowRight,
  Code2,
  Download,
  ShieldCheck,
  Database,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import ProfileImage from "../assets/formal.jpg";

function Home() {
  return (
    <div className="space-y-28">
      {/* Hero */}
      <section className="flex min-h-[calc(100vh-7rem)] items-center py-8">
        <div className="w-full">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-teal-600" />
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                  IT student · builder · learner
                </p>
              </div>

              <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
                Hi, I'm
                <br />
                <span className="text-teal-700">Nelmar Buenafe.</span>
              </h1>

              <p className="mt-7 text-xl font-semibold text-stone-800 sm:text-2xl">
                College Student &amp; Aspiring UI/UX Designer
              </p>

              <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
                I am focused on improving my UI/UX design and problem-solving
                skills. I enjoy learning how thoughtful layouts, clear flows,
                and simple interactions can make digital experiences better.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#10201f] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-950/10 transition hover:-translate-y-0.5 hover:bg-teal-800"
                >
                  Explore My Projects
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-sm font-semibold text-stone-800 transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50"
                >
                  Contact Me
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-sm font-semibold text-stone-800 transition hover:-translate-y-0.5 hover:bg-stone-100"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-stone-200 pt-6">
                <Stat value="BSIT" label="Student" />
                <Stat value="UI/UX" label="Design" />
                <Stat value="Solve" label="Problems" />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-3xl border border-stone-300" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-3xl border border-stone-300" />

              <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-3 shadow-xl">
                <div className="overflow-hidden rounded-[1.5rem] bg-stone-100">
                  <img
                    src={ProfileImage}
                    alt="Nelmar Buenafe"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-7 -left-5 rounded-2xl border border-stone-200 bg-white p-4 shadow-lg sm:-left-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-teal-600 p-2.5 text-white">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                      Focus
                    </p>
                    <p className="text-sm font-bold text-stone-900">
                      UI/UX Design
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-5 top-8 hidden rounded-2xl border border-stone-200 bg-white p-4 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-stone-100 p-2.5 text-stone-900">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                      Interest
                    </p>
                    <p className="text-sm font-bold text-stone-900">
                      Problem Solving
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section>
        <SectionIntro
          label="What I Do"
          title="Designing with purpose."
          description="I am building a strong foundation in UI/UX design and problem-solving through practice, feedback, and continuous learning."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <ServiceCard
            icon={Code2}
            title="UI/UX Design"
            text="Exploring user flows, wireframes, visual hierarchy, and interfaces that feel clear and easy to use."
          />
          <ServiceCard
            icon={Database}
            title="Problem Solving"
            text="Breaking down challenges, asking better questions, and finding practical steps toward a solution."
          />
          <ServiceCard
            icon={ShieldCheck}
            title="Continuous Learning"
            text="Growing my skills through academic projects, design practice, and learning from every iteration."
          />
        </div>
      </section>

      {/* Featured Project */}
      <section className="rounded-[2rem] bg-[#10201f] p-7 text-white shadow-xl shadow-teal-950/10 sm:p-10 lg:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-400">
              Featured Project
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              SmartBreed
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-stone-300">
              A livestock artificial insemination management application
              designed to help farmers and vendors organize breeding
              information and support more efficient livestock management.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "PHP", "MySQL", "JavaScript"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-700 px-3 py-1.5 text-xs font-medium text-stone-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
            >
              View Project Details
              <ExternalLink size={17} />
            </Link>
          </div>

          <div className="hidden rounded-2xl border border-stone-700 p-6 lg:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Project Type
            </p>
            <p className="mt-2 text-lg font-bold">Capstone Project</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-200 py-4">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Let's connect
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              Have an opportunity or project in mind?
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#10201f] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-xl font-bold text-stone-900">{value}</p>
      <p className="mt-1 text-xs text-stone-500 sm:text-sm">{label}</p>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, text }) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 text-white">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-500">{text}</p>
    </article>
  );
}

function SectionIntro({ label, title, description }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl leading-7 text-stone-600">{description}</p>
    </div>
  );
}

export default Home;
