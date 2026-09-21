import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Award, ExternalLink, X } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { certificates } from "../data/certificates";

function TrainingCertifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const triggerRef = useRef(null);
  const certificatesByYear = useMemo(() => {
    const groups = certificates.reduce((yearGroups, certificate) => {
      (yearGroups[certificate.year] ??= []).push(certificate);
      return yearGroups;
    }, {});

    return Object.entries(groups).sort(([firstYear], [secondYear]) => Number(secondYear) - Number(firstYear));
  }, []);

  const closeModal = useCallback(() => {
    setSelectedCertificate(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const openModal = useCallback((certificate, event) => {
    triggerRef.current = event.currentTarget;
    setSelectedCertificate(certificate);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && selectedCertificate) closeModal();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeModal, selectedCertificate]);

  useEffect(() => {
    if (!selectedCertificate) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedCertificate]);

  return (
    <section id="training-certifications" className="scroll-mt-24">
      <SectionHeader
        label="Continuous Learning"
        title="Training & Certifications"
        description="Courses, seminars, and certifications that support my continuous learning and technical development."
      />

      <div className="relative ml-3 border-l border-stone-300 pl-7 sm:pl-9">
        {certificatesByYear.map(([year, yearCertificates]) => (
          <div key={year} className="relative pb-8 last:pb-0">
            <div className="absolute -left-[39px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-4 border-stone-100 bg-stone-900 text-white sm:-left-[47px]">
              <Award size={13} aria-hidden="true" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">{year}</p>

            <div className="mt-4 space-y-6">
              {yearCertificates.map((certificate, index) => (
                <Reveal key={certificate.id} delay={index * 70} direction="left">
                  <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md lg:grid lg:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.3fr)]">
                    <button
                      type="button"
                      onClick={(event) => openModal(certificate, event)}
                      className="m-4 mb-0 block overflow-hidden rounded-xl border border-stone-200 bg-stone-100 p-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 lg:m-5 lg:mr-0"
                      aria-label={`Preview ${certificate.title}`}
                    >
                      <img
                        src={certificate.image}
                        alt={`${certificate.title} certificate`}
                        className="aspect-[16/10] w-full object-contain"
                      />
                    </button>

                    <div className="p-5 lg:p-7">
                      <h3 className="text-xl font-bold text-stone-950">{certificate.title}</h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
                        {certificate.description}
                      </p>
                      <button
                        type="button"
                        onClick={(event) => openModal(certificate, event)}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                      >
                        View Certificate
                        <ExternalLink size={15} aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedCertificate &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/80 p-3 backdrop-blur-sm sm:p-6"
            role="presentation"
            onClick={closeModal}
          >
            <div
              className="relative max-h-[90dvh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-stone-200 bg-white p-4 shadow-2xl sm:max-h-[90vh] sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 pr-10">
                <h2 id="certificate-modal-title" className="text-lg font-bold text-stone-900">
                  {selectedCertificate.title}
                </h2>
              </div>
              <button
                autoFocus
                type="button"
                onClick={closeModal}
                aria-label="Close certificate preview"
                className="absolute right-3 top-3 z-10 rounded-lg p-2 text-stone-500 transition hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 sm:right-4 sm:top-4"
              >
                <X size={20} />
              </button>

              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate`}
                className="mx-auto max-h-[70vh] w-full rounded-xl bg-stone-100 object-contain"
              />

              {selectedCertificate.document && (
                <a
                  href={selectedCertificate.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"
                >
                  Open PDF certificate
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}

export default TrainingCertifications;
