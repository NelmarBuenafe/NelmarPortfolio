import { useState } from "react";
import { CalendarDays, UsersRound } from "lucide-react";
import Reveal from "./Reveal";
import uipcGroupPhoto from "../assets/uipc-group.jpg";
import uipcCommunityEventPhoto from "../assets/uipc-community-event.jpg";
import uipcOrganizationActivityPhoto from "../assets/uipc-organization-activity.jpg";
import uipcCelebrationPhoto from "../assets/uipc-celebration.jpg";

const photos = [
  {
    src: uipcGroupPhoto,
    alt: "University of Iloilo Programming Circle group photo with UIPC letters",
  },
  {
    src: uipcCommunityEventPhoto,
    alt: "UIPC community event photo",
  },
  {
    src: uipcOrganizationActivityPhoto,
    alt: "UIPC organization activity photo",
  },
  {
    src: uipcCelebrationPhoto,
    alt: "UIPC community celebration photo",
  },
];

const tags = ["Teamwork", "Community", "Collaboration", "Technology"];

function CommunityHeading({ className = "" }) {
  return (
    <header className={className}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
        Community Involvement
      </p>
      <h3 className="mt-3 text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">
        University of Iloilo Programming Circle
      </h3>
      <p className="mt-2 text-sm font-semibold text-stone-600">UIPC</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-stone-500">
        <span className="inline-flex items-center gap-2">
          <UsersRound size={16} className="text-teal-700" aria-hidden="true" />
          Member
        </span>
        <span className="inline-flex items-center gap-2">
          <CalendarDays size={16} className="text-teal-700" aria-hidden="true" />
          2024 – Present
        </span>
      </div>
    </header>
  );
}

function CommunityDetails({ className = "" }) {
  return (
    <div className={className}>
      <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
        I am a member of the University of Iloilo Programming Circle, where I take part in student
        activities and technology-focused community events. The organization helps me strengthen my
        teamwork, communication, and involvement in the IT community.
      </p>

      <div className="mt-6 flex flex-wrap gap-2" aria-label="Community involvement skills">
        {tags.map((tag) => (
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

function ExperienceCommunitySection() {
  const [activePhoto, setActivePhoto] = useState(photos[0]);

  return (
    <Reveal className="mb-16" direction="up">
      <article className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,1.05fr)] lg:gap-x-10 lg:gap-y-7">
          <CommunityHeading className="lg:hidden" />

          <div className="lg:col-start-1 lg:row-start-1">
            <div
              className="flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden"
              aria-label="UIPC photo gallery"
            >
              {photos.map((photo) => (
                <figure
                  key={photo.src}
                  className="w-[88%] shrink-0 snap-center overflow-hidden rounded-2xl border border-stone-200 bg-stone-100"
                >
                  <img src={photo.src} alt={photo.alt} className="aspect-[4/3] w-full object-cover" />
                </figure>
              ))}
            </div>

            <div className="hidden lg:block">
              <button
                type="button"
                onClick={() => setActivePhoto(photos[0])}
                className="block w-full cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                aria-label="Show the primary UIPC group photo"
              >
                <img
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                />
              </button>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {photos.slice(1).map((photo) => {
                  const isActive = activePhoto.src === photo.src;

                  return (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setActivePhoto(photo)}
                      className={`group relative overflow-hidden rounded-xl border bg-stone-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 ${
                        isActive ? "border-teal-600 ring-2 ring-teal-200" : "border-stone-200"
                      }`}
                      aria-label={`Show ${photo.alt.toLowerCase()}`}
                      aria-pressed={isActive}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <CommunityDetails className="lg:hidden" />

          <aside className="hidden self-start lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:justify-start">
            <CommunityHeading />
            <CommunityDetails className="mt-6" />
          </aside>
        </div>
      </article>
    </Reveal>
  );
}

export default ExperienceCommunitySection;
