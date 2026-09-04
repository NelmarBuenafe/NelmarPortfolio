import { MapPin, Code2, ShieldCheck, Laptop, Heart } from "lucide-react";
import SectionHeader from "./SectionHeader";

function About() {
  return (
    <section>
      <SectionHeader
        label="Profile"
        title="About Me"
        description="A little about my background, interests, and the direction I am taking as a college student."
      />

      <div className="grid gap-8 lg:grid-cols-[1.45fr_1fr]">
        <div className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm sm:p-9">
          <p className="text-lg leading-8 text-stone-700">
            I'm <span className="font-semibold text-stone-950">Nelmar Buenafe</span>,
            an Information Technology student interested
            in technology, UI/UX design, problem-solving, and learning how
            digital products can become clearer and more useful.
          </p>

          <p className="mt-6 leading-7 text-stone-600">
            I am currently improving my design thinking, user-interface skills,
            and ability to break down complex problems into simple steps. I am
            still learning the foundations of web development through projects.
          </p>

          <p className="mt-6 leading-7 text-stone-600">
            My goal is to grow into a thoughtful UI/UX designer and problem
            solver who creates simple, functional, and user-friendly digital
            experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Problem Solving", "Continuous Learning", "Team Collaboration"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="space-y-4">
          <InfoCard icon={MapPin} title="Location" text="Iloilo, Philippines" />
          <InfoCard
            icon={Code2}
            title="Development"
            text="UI/UX Design, Figma, HTML, CSS"
          />
          <InfoCard
            icon={ShieldCheck}
            title="Focus"
            text="UI/UX Design & Problem Solving"
          />
          <InfoCard
            icon={Laptop}
            title="Education"
            text="BS Information Technology"
          />
          <InfoCard
            icon={Heart}
            title="Approach"
            text="Simple, functional, user-friendly"
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="rounded-lg bg-stone-100 p-3">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          {title}
        </p>
        <p className="mt-1 text-sm font-medium text-stone-800">{text}</p>
      </div>
    </div>
  );
}

export default About;
