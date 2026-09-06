import { useState } from "react";
import { ArrowUpRight, CircleCheck, Clock, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { serviceOptions } from "../data/services";

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
    value: "linkedin.com/in/yourusername",
    href: "https://www.linkedin.com/",
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
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Selected service: ${selectedService}`,
      `Preferred deadline: ${form.deadline || "Not specified"}`,
      "",
      "Project description:",
      form.description,
    ].join("\n");

    setIsOpeningEmail(true);
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(`${selectedService} inquiry`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section>
      <SectionHeader
        label="Get In Touch"
        title="Let’s Discuss Your Project"
        description="Interested in working together? Select a service and tell me about your project. I’ll respond as soon as possible."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="h-full rounded-3xl bg-[#10201f] p-8 text-white shadow-xl shadow-teal-950/10 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1.5 text-xs font-semibold text-teal-300">
            <CircleCheck size={14} aria-hidden="true" />
            Open to internships and projects
          </div>

          <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-stone-400">
            Let&apos;s make something useful
          </p>
          <h2 className="mt-4 text-3xl font-bold">Start a conversation.</h2>
          <p className="mt-5 leading-7 text-stone-300">
            I am looking to learn, contribute, and grow through practical UI/UX and technology projects.
          </p>

          <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm text-stone-300">
            <div className="flex items-center gap-3">
              <Clock size={17} className="text-teal-300" aria-hidden="true" />
              Usually reply within 24 hours
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={17} className="text-teal-300" aria-hidden="true" />
              Based in Iloilo, Philippines · Open to remote
            </div>
          </div>

          <a
            href={`mailto:${contactEmail}`}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10201f]"
          >
            Send me an email <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="space-y-4">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <ContactCard key={label} icon={Icon} label={label} value={value} href={href} />
          ))}

          <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-lg font-bold text-stone-950">Tell me about your project</h2>
            <p className="mt-1 text-sm text-stone-500">
              This form opens your email app with the inquiry details. No backend is configured on this portfolio yet.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} error={errors.name} onChange={handleChange} />
              <Field label="Email Address" name="email" type="email" value={form.email} error={errors.email} onChange={handleChange} />
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-semibold text-stone-700">Selected Service</span>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`mt-2 min-h-12 w-full rounded-xl border bg-stone-50 px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 ${errors.service ? "border-red-400" : "border-stone-200"}`}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service.value} value={service.value}>{service.name}</option>
                ))}
              </select>
              <FieldError message={errors.service} />
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-semibold text-stone-700">Project Description</span>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                className={`mt-2 w-full resize-y rounded-xl border bg-stone-50 px-4 py-3 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 ${errors.description ? "border-red-400" : "border-stone-200"}`}
              />
              <FieldError message={errors.description} />
            </label>

            <Field label="Preferred Deadline (Optional)" name="deadline" value={form.deadline} error={errors.deadline} onChange={handleChange} />

            <button
              type="submit"
              disabled={isOpeningEmail}
              className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} aria-hidden="true" />
              {isOpeningEmail ? "Opening Email..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, error, onChange }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-stone-700">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`mt-2 min-h-12 w-full rounded-xl border bg-stone-50 px-4 py-3 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20 ${error ? "border-red-400" : "border-stone-200"}`}
      />
      <FieldError message={error} />
    </label>
  );
}

function FieldError({ message }) {
  return message ? <p className="mt-1 text-xs font-medium text-red-600">{message}</p> : null;
}

function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="group flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
    >
      <div className="rounded-lg bg-stone-100 p-3 text-stone-900 transition group-hover:bg-stone-900 group-hover:text-white">
        <Icon size={20} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">{label}</p>
        <p className="mt-1 truncate text-sm font-medium text-stone-700">{value}</p>
      </div>
    </a>
  );
}

export default Contact;
