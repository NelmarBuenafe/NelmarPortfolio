import { useState } from "react";
import { Mail, ArrowUpRight, Send, CircleCheck, Clock, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "buenafenelmar7@gmail.com",
    href: "mailto:buenafenelmar7@gmail.com",
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

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    setSent(true);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <section>
      <SectionHeader
        label="Get In Touch"
        title="Contact"
        description="Choose the channel that works best for you. I am open to thoughtful conversations and new learning opportunities."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="h-full rounded-3xl bg-[#10201f] p-8 text-white shadow-xl shadow-teal-950/10 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1.5 text-xs font-semibold text-teal-300">
            <CircleCheck size={14} />
            Open to internships
          </div>

          <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-stone-400">
            Let's make something useful
          </p>

          <h3 className="mt-4 text-3xl font-bold">
            Start a conversation.
          </h3>

          <p className="mt-5 leading-7 text-stone-300">
            I am looking to learn, contribute, and grow through practical
            UI/UX and technology projects.
          </p>

          <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm text-stone-300">
            <div className="flex items-center gap-3"><Clock size={17} className="text-teal-300" />Usually reply within 24 hours</div>
            <div className="flex items-center gap-3"><MapPin size={17} className="text-teal-300" />Based in Iloilo, Philippines · Open to remote</div>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Currently exploring</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["UI/UX Design", "Figma", "Problem Solving"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-stone-300">{item}</span>
            ))}
          </div>

          <a
            href="mailto:your.email@example.com"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
          >
            Send me an email
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="space-y-4">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <ContactCard
              key={label}
              icon={Icon}
              label={label}
              value={value}
              href={href}
            />
          ))}

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <h3 className="text-lg font-bold">Send a message</h3>
            <p className="mt-1 text-sm text-stone-500">
              This form opens your default email application.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-semibold text-stone-700">
                Message
              </span>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                className="mt-2 w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:bg-white"
              />
            </label>

            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              <Send size={16} />
              {sent ? "Opening Email..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-stone-700">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:bg-white"
      />
    </label>
  );
}

function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="group flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="rounded-lg bg-stone-100 p-3 text-stone-900 transition group-hover:bg-stone-900 group-hover:text-white">
        <Icon size={20} />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          {label}
        </p>
        <p className="mt-1 truncate text-sm font-medium text-stone-700">
          {value}
        </p>
      </div>
    </a>
  );
}

export default Contact;
