import { useEffect, useState } from "react";
import { Trophy, Award, ExternalLink, X } from "lucide-react";
import SectionHeader from "./SectionHeader";
import CiscoCert from "../assets/CiscoCert.png";
import BasicJSCert from "../assets/BasicJSCert.jpg";
import WebDesignCert from "../assets/WebDesignCert.jpg";
import NelmarCert from "../assets/NelmarCert.jpg";

const achievements = [
  {
    icon: Award,
    year: "2026",
    title: "Introduction to Data Science",
    description:
      "Completed an introduction to data science course and strengthened my foundation in working with data and analytical thinking.",
    image: CiscoCert,
    certificate: "/achievements/introduction-to-data-science.pdf",
  },
  {
    icon: Award,
    year: "2026",
    title: "Basic JavaScript",
    description:
      "Completed a foundational JavaScript certificate and strengthened my understanding of core programming concepts for web development.",
    image: BasicJSCert,
  },
  {
    icon: Award,
    year: "2026",
    title: "CITE Week UI/UX Competition Champion",
    description:
      "Earned this web design certificate during CITE Week and contributed to our team’s championship win in the UI/UX competition.",
    image: WebDesignCert,
  },
  {
    icon: Trophy,
    year: "2026",
    title: "Well-Performing Student",
    description:
      "Recognized for commendable academic performance, dedication, perseverance, and commitment to learning during the first semester of Academic Year 2026–2027.",
    image: NelmarCert,
  },
];

function Achievements({ embedded = false }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setSelectedCertificate(null);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section>
      {!embedded && (
        <SectionHeader
          label="Milestones"
          title="Achievements"
          description="Selected academic milestones and areas of continuous growth."
        />
      )}

      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map(({ icon: Icon, year, title, description, image, certificate }) => (
          <article
            key={title}
            className="group rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {image ? (
              <img
                src={image}
                alt=""
                className="mb-6 h-auto max-h-64 min-h-40 w-full rounded-xl bg-stone-100 p-2 object-contain"
              />
            ) : (
              <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 via-stone-50 to-teal-100 text-teal-700">
                <Icon size={38} strokeWidth={1.5} />
              </div>
            )}
            <div className="flex items-start justify-between gap-5">
              <div className="rounded-xl bg-stone-100 p-3 transition group-hover:bg-stone-900 group-hover:text-white">
                <Icon size={22} />
              </div>
              <span className="text-xs font-semibold text-stone-400">{year}</span>
            </div>

            <h3 className="mt-6 text-lg font-bold">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-500">{description}</p>
            {image && (
              <button
                type="button"
                onClick={() => setSelectedCertificate({ title, image, certificate })}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                View Certificate
                <ExternalLink size={15} />
              </button>
            )}
          </article>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 id="certificate-modal-title" className="text-lg font-bold text-stone-900">
                {selectedCertificate.title}
              </h2>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
                className="rounded-lg p-2 text-stone-500 transition hover:bg-stone-100 hover:text-stone-900"
              >
                <X size={20} />
              </button>
            </div>

            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} certificate`}
              className="mx-auto max-h-[70vh] w-full rounded-xl bg-stone-100 object-contain"
            />

            {selectedCertificate.certificate && (
              <a
                href={selectedCertificate.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"
              >
                Open PDF certificate
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Achievements;
