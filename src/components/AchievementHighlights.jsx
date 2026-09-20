import { Link } from "react-router-dom";
import { ArrowRight, Award, Trophy, UsersRound } from "lucide-react";
import Reveal from "./Reveal";
import { certificates } from "../data/certificates";

const highlights = [
  {
    icon: Trophy,
    title: "Competition Winner",
    detail: "Frostweavers · Web Design UI/UX Competition",
  },
  {
    icon: UsersRound,
    title: "UIPC Member",
    detail: "University of Iloilo Programming Circle",
  },
  {
    icon: Award,
    title: certificates[0].title,
    detail: "Certification Highlight",
  },
];

function AchievementHighlights() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map(({ icon: Icon, title, detail }, index) => (
          <Reveal key={title} delay={index * 70}>
            <article className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900 text-white">
                <Icon size={19} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold text-stone-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">{detail}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Link
        to="/experience#training-certifications"
        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
      >
        View Experience &amp; Involvement
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </>
  );
}

export default AchievementHighlights;
