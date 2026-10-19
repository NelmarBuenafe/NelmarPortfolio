import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, CircleCheck, Clock, Copy, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { serviceOptions } from "../data/services";
import Reveal from "./Reveal";

const contactEmail = "buenafenelmar7@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/NelmarBuenafe",
    href: "https://github.com/NelmarBuenafe",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nelmar-buenafe-14468829b",
    href: "https://www.linkedin.com/in/nelmar-buenafe-14468829b",
  },
];

function getServiceFromQuery(value) {
  if (value === null) return "";
  return serviceOptions.some((service) => service.value === value) ? value : "other";
}

function Contact() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(() => ({
    name: "",
    email: "",
    service: getServiceFromQuery(searchParams.get("service")),
    description: "",
    deadline: "",
  }));
  const [errors, setErrors] = useState({});
  const [isOpeningEmail, setIsOpeningEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const [preparedDetails, setPreparedDetails] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.service) nextErrors.service = "Please select a service.";
    if (!form.description.trim()) nextErrors.description = "Please describe your project.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const selectedService = serviceOptions.find((service) => service.value === form.service)?.name ?? "Other";
    const deadlineValue = form.deadline.trim() || "Not specified";

    const formattedBody =
      `Name: ${encodeURIComponent(form.name)}` +
      `%0D%0AEmail: ${encodeURIComponent(form.email)}` +
      `%0D%0ASelected service: ${encodeURIComponent(selectedService)}` +
      `%0D%0APreferred deadline: ${encodeURIComponent(deadlineValue)}` +
      `%0D%0A%0D%0AProject description:%0D%0A${encodeURIComponent(form.description)}`;

    const subject = `${selectedService} inquiry`;
    const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${formattedBody}`;

    setIsOpeningEmail(true);
    setPreparedDetails(
      `To: ${contactEmail}\nSubject: ${subject}\n\nName: ${form.name}\nEmail: ${form.email}\nSelected service: ${selectedService}\nPreferred deadline: ${deadlineValue}\n\nProject description:\n${form.description}`
    );
    window.location.href = mailtoLink;
  }
  const handleCopyDetails = async () => {
    try {
      await navigator.clipboard.writeText(preparedDetails);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Ignore clipboard write failure
    }
  };

  return (
    <section>
      <SectionHeader
        label="Get In Touch"
        title="Let’s Discuss Your Project"
        description="Interested in working together? Select a service and tell me about your project. I’ll respond as soon as possible."
      />

      <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="self-start" direction="left">
        <div className="h-auto self-start rounded-2xl sm:rounded-3xl bg-[#10201f] p-5 sm:p-8 lg:p-10 text-white shadow-xl shadow-teal-950/10">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1.5 text-xs font-semibold text-teal-300">
            <CircleCheck size={14} aria-hidden="true" />
            Open to internships and projects
          </div>

          <p className="mt-5 sm:mt-7 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-stone-400">
            Let&apos;s make something useful
          </p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold">Start a conversation.</h2>
          <p className="mt-3.5 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-7 text-stone-300">
            I am looking to learn, contribute, and grow through practical UI/UX and technology projects.
          </p>

          <div className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-4 border-t border-white/10 pt-5 sm:pt-6 text-xs sm:text-sm text-stone-300">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Clock size={16} className="shrink-0 text-teal-300" aria-hidden="true" />
              <span>Usually reply within 24 hours</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <MapPin size={16} className="shrink-0 text-teal-300" aria-hidden="true" />
              <span>Based in Iloilo, Philippines · Open to remote</span>
            </div>
          </div>

          <a
            href={`mailto:${contactEmail}`}
            className="mt-6 sm:mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10201f]"
          >
            Send me an email <ArrowUpRight size={16} />
          </a>
        </div>
        </Reveal>

        <Reveal className="space-y-4" delay={100} direction="right">
          {contactLinks.map(({ icon: Icon, label, value, href }, index) => (
            <Reveal key={label} delay={index * 60}>
              <ContactCard icon={Icon} label={label} value={value} href={href} />
            </Reveal>
          ))}

          <Reveal delay={180}>
          <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-stone-200 bg-white p-4 sm:p-6 lg:p-7 shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-stone-950">Tell me about your project</h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-500">
              This form opens your email app with the inquiry details. No backend is configured on this portfolio yet.
            </p>

            <div className="mt-4 sm:mt-5 grid gap-3.5 sm:gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} error={errors.name} onChange={handleChange} />
              <Field label="Email Address" name="email" type="email" value={form.email} error={errors.email} onChange={handleChange} />
            </div>

            <div className="mt-3.5 sm:mt-4">
              <span id="service-select-label" className="block text-xs sm:text-sm font-semibold text-stone-700">
                Selected Service
              </span>
              <ServiceSelect
                value={form.service}
                onChange={handleChange}
                error={errors.service}
              />
              <FieldError message={errors.service} />
            </div>

            <label className="mt-3.5 sm:mt-4 block">
              <span className="text-xs sm:text-sm font-semibold text-stone-700">Project Description</span>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                className={`mt-1.5 sm:mt-2 w-full resize-y rounded-xl border bg-stone-50 px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 ${errors.description ? "border-red-400" : "border-stone-200"}`}
              />
              <FieldError message={errors.description} />
            </label>

            <Field label="Preferred Deadline (Optional)" name="deadline" value={form.deadline} error={errors.deadline} onChange={handleChange} />

            <button
              type="submit"
              disabled={isOpeningEmail}
              className="mt-5 inline-flex min-h-11 sm:min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} aria-hidden="true" />
              {isOpeningEmail ? "Opening Email..." : "Submit Inquiry"}
            </button>

            {preparedDetails && (
              <div className="mt-4 rounded-xl border border-teal-200 bg-teal-50/70 p-3.5 sm:p-4 text-xs sm:text-sm text-stone-800">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <p className="font-semibold text-teal-900">Email client triggered!</p>
                    <p className="text-xs text-stone-600">
                      If your email app didn&apos;t open automatically, copy your inquiry below to send directly to{" "}
                      <span className="font-medium text-stone-900">{contactEmail}</span>.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyDetails}
                    className="inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-1.5 rounded-lg border border-teal-300 bg-white px-3.5 py-2 sm:py-1.5 text-xs font-semibold text-teal-800 shadow-sm transition hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-teal-700" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        Copy Inquiry
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, error, onChange }) {
  return (
    <label className="block">
      <span className="text-xs sm:text-sm font-semibold text-stone-700">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`mt-1.5 sm:mt-2 min-h-11 sm:min-h-12 w-full rounded-xl border bg-stone-50 px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 ${error ? "border-red-400" : "border-stone-200"}`}
      />
      <FieldError message={error} />
    </label>
  );
}

function FieldError({ message }) {
  return message ? <p className="mt-1 text-xs font-medium text-red-600">{message}</p> : null;
}

function ServiceSelect({ value, onChange, error }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedService = serviceOptions.find((service) => service.value === value);

  useEffect(() => {
    if (!isOpen) return undefined;

    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleSelect(serviceValue) {
    onChange({ target: { name: "service", value: serviceValue } });
    setIsOpen(false);
  }

  return (
    <div ref={containerRef} className="relative mt-1.5 sm:mt-2">
      <select
        name="service"
        value={value}
        onChange={onChange}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      >
        <option value="">Select a service</option>
        {serviceOptions.map((service) => (
          <option key={service.value} value={service.value}>
            {service.name}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="service-select-label"
        className={`flex min-h-11 sm:min-h-12 w-full items-center justify-between rounded-xl border bg-stone-50 px-3.5 py-2.5 sm:px-4 sm:py-3 text-left text-sm transition outline-none focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 ${
          error ? "border-red-400" : "border-stone-200"
        } ${selectedService ? "text-stone-800" : "text-stone-400"}`}
      >
        <span className="truncate">
          {selectedService ? selectedService.name : "Select a service"}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-stone-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-teal-600" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby="service-select-label"
          className="absolute left-0 right-0 top-[calc(100%+4px)] z-30 max-h-60 overflow-y-auto rounded-xl border border-stone-200 bg-white p-1.5 shadow-xl shadow-stone-900/10 outline-none backdrop-blur-md"
        >
          <li
            role="option"
            aria-selected={value === ""}
            onClick={() => handleSelect("")}
            className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium transition ${
              value === ""
                ? "bg-teal-50 font-semibold text-teal-800"
                : "text-stone-500 hover:bg-stone-100 hover:text-stone-900"
            }`}
          >
            <span>Select a service</span>
            {value === "" && <Check size={16} className="text-teal-700" />}
          </li>
          {serviceOptions.map((service) => {
            const isSelected = value === service.value;
            return (
              <li
                key={service.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(service.value)}
                className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium transition ${
                  isSelected
                    ? "bg-teal-50 font-semibold text-teal-800"
                    : "text-stone-700 hover:bg-stone-100 hover:text-stone-950"
                }`}
              >
                <span>{service.name}</span>
                {isSelected && <Check size={16} className="text-teal-700" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="group flex items-center gap-3 sm:gap-4 rounded-xl border border-stone-200 bg-white p-3.5 sm:p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
    >
      <div className="contact-method-icon inline-flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border transition">
        <Icon size={18} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-400">{label}</p>
        <p className="mt-0.5 sm:mt-1 truncate text-xs sm:text-sm font-medium text-stone-700">{value}</p>
      </div>
    </a>
  );
}

export default Contact;
