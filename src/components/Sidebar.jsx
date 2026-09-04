import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  UserRound,
  BriefcaseBusiness,
  Code2,
  FolderGit2,
  GraduationCap,
  Mail,
  Menu,
  X,
  Download,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import ProfileImage from "../assets/formal.jpg";

const menu = [
  { path: "/", label: "Home", icon: House, end: true },
  { path: "/about", label: "About Me", icon: UserRound },
  { path: "/experience", label: "Experience", icon: BriefcaseBusiness },
  { path: "/skills", label: "Skills", icon: Code2 },
  { path: "/projects", label: "Projects", icon: FolderGit2 },
  { path: "/education", label: "Education", icon: GraduationCap },
  { path: "/contact", label: "Contact", icon: Mail },
];

function Sidebar({ collapsed, onToggle }) {
  const [open, setOpen] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex h-[4.5rem] items-center justify-between border-b border-stone-200/80 bg-white/95 px-4 shadow-sm shadow-stone-900/5 backdrop-blur md:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-white shadow-sm shadow-teal-900/20">
            <UserRound size={18} strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-sm font-bold leading-tight text-stone-900">Nelmar Buenafe</p>
            <p className="mt-0.5 text-[11px] font-medium text-stone-500">UI/UX Design Student</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-700 shadow-sm transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800 ${
            open ? "pointer-events-none invisible" : ""
          }`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-stone-950/45 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 box-border w-[min(86vw,21rem)] transform overflow-hidden border-r border-teal-900/70 bg-[#10201f] p-4 text-white shadow-2xl shadow-black/30 transition-transform duration-300 ease-out md:translate-x-0 ${collapsed ? "md:w-20 md:p-3" : "md:w-72 md:p-6"} ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-5 flex items-center justify-between md:hidden">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-stone-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex min-h-full flex-col pb-2">
          <div className={`relative mb-7 text-center ${collapsed ? "pt-12" : ""}`}>
            <button
              type="button"
              onClick={onToggle}
              className={`absolute right-0 top-0 hidden p-2 text-stone-400 transition hover:text-teal-300 md:block ${collapsed ? "left-1/2 -translate-x-1/2" : ""}`}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setShowPhoto((value) => !value)}
              className={`group relative mx-auto mb-4 block overflow-hidden rounded-full border-4 border-teal-700/70 bg-gradient-to-br from-teal-400 to-teal-800 shadow-lg shadow-teal-950/30 ${collapsed ? "h-12 w-12" : "h-28 w-28"}`}
              title="Hover or click to see my photo"
              aria-label="Toggle profile photo"
              aria-pressed={showPhoto}
            >
              <div className={`flex h-full w-full items-center justify-center text-[#10201f] transition-opacity duration-200 ${showPhoto ? "opacity-0" : "group-hover:opacity-0"}`}>
                <UserRound size={collapsed ? 24 : 50} strokeWidth={1.5} />
              </div>
              <img
                src={ProfileImage}
                alt="Nelmar Buenafe"
                className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${showPhoto ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              />
            </button>

            <h1 className={`${collapsed ? "md:hidden" : ""} text-xl font-bold`}>Nelmar Buenafe</h1>

            <p className={`${collapsed ? "md:hidden" : ""} mt-1 text-sm text-stone-400`}>
              BS Information Technology
            </p>
          </div>

          <nav className="space-y-1" aria-label="Main navigation">
            {menu.map(({ path, label, icon: Icon, end }) => (
              <NavLink
                key={path}
                to={path}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${collapsed ? "md:justify-center md:px-2" : ""} ${
                    isActive
                      ? "bg-teal-400 text-[#10201f] shadow-lg shadow-teal-950/20"
                      : "text-stone-300 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <Icon size={18} strokeWidth={1.8} />
                <span className={collapsed ? "md:hidden" : ""}>{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className={`mt-6 space-y-3 md:mt-auto ${collapsed ? "md:hidden" : ""}`}>
            <div className="rounded-2xl border border-teal-900/80 bg-[#172d2b] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Available for</p>
              <p className="mt-2 text-sm leading-6 text-stone-200">UI/UX internships, design projects, and learning opportunities</p>
            </div>

            <a href="/resume.pdf" download className="flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-4 py-3 text-sm font-semibold text-[#10201f] transition hover:bg-teal-300">
              <Download size={17} />
              Download Resume
            </a>
          </div>
        </div>
      </aside>

    </>
  );
}

export default Sidebar;
