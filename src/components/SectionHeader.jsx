function SectionHeader({ label, title, description }) {
  return (
    <header className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
        {label}
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl">
        {title}
      </h2>

      <div className="mt-5 h-1 w-12 rounded-full bg-teal-600" />

      {description && (
        <p className="mt-5 max-w-2xl leading-7 text-stone-600">
          {description}
        </p>
      )}
    </header>
  );
}

export default SectionHeader;
