import { useState } from "react";
import { Trophy, UsersRound } from "lucide-react";
import Reveal from "./Reveal";
import frostweaversAwardTeam from "../assets/frostweavers-award-team.jpg";
import frostweaversCertificate from "../assets/frostweavers-certificate.jpg";
import frostweaversPoster from "../assets/frostweavers-web-design-poster.jpg";

const competitionImages = [
  {
    src: frostweaversAwardTeam,
    alt: "Frostweavers team after the web design competition",
  },
  {
    src: frostweaversCertificate,
    alt: "Frostweavers holding the competition certificate",
  },
  {
    src: frostweaversPoster,
    alt: "Frostweavers Web Design UI/UX competition poster",
  },
];

const competitionTags = ["Web Design", "UI/UX", "Teamwork", "Creativity", "Problem Solving"];

function CompetitionHeading({ className = "" }) {
  return (
    <header className={className}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
        Competition &amp; Recognition
      </p>
      <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-teal-800">
        <Trophy size={15} aria-hidden="true" />
        Winner
      </span>
      <h3 className="mt-4 text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">
        Web Design UI/UX Competition
      </h3>
      <p className="mt-2 text-sm font-semibold text-stone-600">Frostweavers</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-stone-500">
        <UsersRound size={16} className="text-teal-700" aria-hidden="true" />
        Team Member
      </span>
    </header>
  );
}

function CompetitionDetails({ className = "" }) {
  return (
    <div className={className}>
      <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
        I joined a web design competition as part of the Frostweavers team. The experience let us
        apply creativity, design skills, teamwork, and problem-solving in a competitive environment.
        Winning gave me more confidence in presenting ideas and working collaboratively on design
        challenges.
      </p>

      <div className="mt-6 flex flex-wrap gap-2" aria-label="Competition skills">
        {competitionTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCompetitionSection() {
  const [activeImage, setActiveImage] = useState(competitionImages[0]);

  return (
    <Reveal className="mb-16" direction="up">
      <article className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="grid gap-7 lg:grid-cols-[minmax(20rem,1.05fr)_minmax(0,0.95fr)] lg:gap-x-10">
          <CompetitionHeading className="lg:hidden" />

          <div className="lg:col-start-2 lg:row-start-1">
            <div
              className="flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden"
              aria-label="Frostweavers competition photo gallery"
            >
              {competitionImages.map((image) => (
                <figure
                  key={image.src}
                  className="w-[88%] shrink-0 snap-center overflow-hidden rounded-2xl border border-stone-200 bg-stone-100"
                >
                  <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" />
                </figure>
              ))}
            </div>

            <div className="hidden lg:block">
              <button
                type="button"
                onClick={() => setActiveImage(competitionImages[0])}
                className="block w-full cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                aria-label="Show the main Frostweavers award photo"
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                />
              </button>

              <div className="mt-3 grid grid-cols-2 gap-3">
                {competitionImages.slice(1).map((image) => {
                  const isActive = activeImage.src === image.src;

                  return (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImage(image)}
                      className={`group relative overflow-hidden rounded-xl border bg-stone-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 ${
                        isActive ? "border-teal-600 ring-2 ring-teal-200" : "border-stone-200"
                      }`}
                      aria-label={`Show ${image.alt.toLowerCase()}`}
                      aria-pressed={isActive}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <CompetitionDetails className="lg:hidden" />

          <aside className="hidden self-start lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col lg:justify-start">
            <CompetitionHeading />
            <CompetitionDetails className="mt-6" />
          </aside>
        </div>
      </article>
    </Reveal>
  );
}

export default ExperienceCompetitionSection;
