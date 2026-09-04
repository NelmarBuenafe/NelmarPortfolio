import { useState } from "react";
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

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-stone-200 bg-white/95 px-5 shadow-sm backdrop-blur md:hidden">
        <div>
          <p className="text-sm font-bold text-stone-900">Nelmar Buenafe</p>
          <p className="text-xs text-stone-500">UI/UX Design Student</p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg p-2 text-stone-700 transition hover:bg-stone-100"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {open && (
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          aria-label="Close navigation"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 transform bg-[#10201f] text-white shadow-2xl transition-all duration-300 md:translate-x-0 ${collapsed ? "md:w-20 md:p-3" : "md:w-72 md:p-6"} ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className={`relative mb-7 text-center ${collapsed ? "pt-12" : ""}`}>
            <button
              type="button"
              onClick={onToggle}
              className={`absolute top-0 p-2 text-stone-400 transition hover:text-teal-300 ${collapsed ? "left-1/2 -translate-x-1/2" : "right-0"}`}
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
                <UserRound size={collapsed ? 24 : 52} strokeWidth={1.5} />
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

          <div className={`mt-auto space-y-3 ${collapsed ? "md:hidden" : ""}`}>
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
