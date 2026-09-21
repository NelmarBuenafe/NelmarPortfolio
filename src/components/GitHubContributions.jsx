import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import { useAppearance } from "../theme/AppearanceProvider";

const GITHUB_USERNAME = "NelmarBuenafe";
const GITHUB_PROFILE_URL = "https://github.com/NelmarBuenafe";
const GITHUB_EARLIEST_YEAR = 2022;

function GitHubContributions() {
  const { resolvedTheme } = useAppearance();
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [calendarKey, setCalendarKey] = useState(0);
  const years = Array.from(
    { length: currentYear - GITHUB_EARLIEST_YEAR + 1 },
    (_, index) => currentYear - index,
  );

  return (
    <Reveal>
      <section
        aria-labelledby="about-github-contributions-heading"
        className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10201f] text-white">
              <FaGithub size={21} aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                Open source activity
              </p>
              <h2
                id="about-github-contributions-heading"
                className="mt-2 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl"
              >
                GitHub Contributions
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-stone-600">
                A look at my coding activity and continuous learning through the years.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-end gap-3 sm:justify-end">
            <div>
              <label
                htmlFor="about-github-year"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-stone-500"
              >
                Contribution year
              </label>
              <select
                id="about-github-year"
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

        <div className="mt-8 overflow-x-auto rounded-2xl border border-teal-100 bg-stone-50/70 p-4 pb-5 sm:p-6">
          <div className="min-w-[720px]">
            <GitHubCalendar
              key={`${selectedYear}-${calendarKey}`}
              username={GITHUB_USERNAME}
              year={selectedYear}
              theme={{
                light: ["#E4EFEC", "#B7DED5", "#70C6B4", "#27A88D", "#087763"],
                dark: ["#122824", "#1B473E", "#23705F", "#1FA185", "#31D5AF"],
              }}
              colorScheme={resolvedTheme}
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
          <p className="sm:hidden">Scroll to view more of the contribution calendar.</p>
          <p>
            Years without public activity appear as an empty calendar. Data comes from the public GitHub profile.
          </p>
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-teal-700 transition hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            View My GitHub Profile <ExternalLink size={15} />
          </a>
        </div>
      </section>
    </Reveal>
  );
}

export default GitHubContributions;
