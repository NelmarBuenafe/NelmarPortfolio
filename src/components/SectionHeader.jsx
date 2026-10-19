import Reveal from "./Reveal";

function SectionHeader({ label, title, description }) {
  return (
    <Reveal className="mb-7 sm:mb-10">
      <header>
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
          {label}
        </p>

        <h2 className="mt-2.5 sm:mt-3 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <div className="mt-4 sm:mt-5 h-1 w-12 rounded-full bg-teal-600" />

        {description && (
          <p className="mt-3.5 sm:mt-5 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-stone-600">
            {description}
          </p>
        )}
      </header>
    </Reveal>
  );
}

export default SectionHeader;
