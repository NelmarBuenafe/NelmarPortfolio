import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebook,
  },
];

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <p className="font-bold text-stone-900">Nelmar Buenafe</p>
          <p className="mt-1 text-sm text-stone-500">
            Information Technology Student
          </p>
          <p className="mt-2 text-xs text-teal-700">Usually replies within a day</p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg p-2.5 text-stone-500 transition hover:bg-stone-100 hover:text-stone-900"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-xs text-stone-400">
          © {new Date().getFullYear()} Nelmar Buenafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
