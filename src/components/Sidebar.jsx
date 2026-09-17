import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowRight, House, UserRound, BriefcaseBusiness, Code2, FolderGit2, Sparkles, Mail, Menu, X,
} from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import AppearanceMenu, { ThemeToggle } from "./AppearanceMenu";

const menu = [
  { path: "/", label: "Home", icon: House, end: true },
  { path: "/about", label: "About Me", icon: UserRound },
  { path: "/experience", label: "Experience", icon: BriefcaseBusiness },
  { path: "/skills", label: "Skills", icon: Code2 },
  { path: "/projects", label: "Projects", icon: FolderGit2 },
  { path: "/services", label: "Services", icon: Sparkles },
  { path: "/contact", label: "Contact", icon: Mail },
];

function NavItems({ onNavigate, mobile = false }) {
  return (
    <nav className={mobile ? "space-y-1" : "portfolio-rail-links"} aria-label="Main navigation">
      {menu.map(({ path, label, icon: Icon, end }) => (
        <NavLink
          key={path}
          to={path}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) => mobile
            ? `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive ? "bg-teal-50 text-teal-800" : "text-stone-600 hover:bg-stone-100"}`
            : `portfolio-rail-link ${isActive ? "is-active" : ""}`}
          aria-label={!mobile ? label : undefined}
          title={!mobile ? label : undefined}
        >
          <Icon size={19} strokeWidth={1.8} />
          {mobile && <span>{label}</span>}
          {!mobile && <span className="portfolio-tooltip">{label}</span>}
        </NavLink>
      ))}
    </nav>
  );
}

function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="portfolio-mobile-header flex w-full flex-nowrap items-center justify-between gap-2 px-3 py-2 md:hidden">
        <NavLink to="/" className="flex min-w-0 flex-1 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="portfolio-monogram shrink-0">NB</span>
          <span className="min-w-0">
            <strong className="block text-sm leading-tight text-stone-950">Nelmar Buenafe</strong>
            <small className="mt-0.5 block text-[11px] leading-tight text-stone-500">BS Information Technology</small>
          </span>
        </NavLink>
        <div className="portfolio-mobile-controls flex shrink-0 flex-nowrap items-center gap-1.5">
          <AppearanceMenu accentOnly />
          <ThemeToggle />
          <button type="button" onClick={() => setOpen((value) => !value)} className="portfolio-menu-button shrink-0" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={20} /> : <Menu size={21} />}</button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-slate-950/25 backdrop-blur-sm transition md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <aside className={`portfolio-mobile-drawer md:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-8 flex items-start justify-between"><div className="flex items-center gap-3"><span className="portfolio-monogram">NB</span><span><strong className="block text-sm leading-tight text-stone-950">Nelmar Buenafe</strong><small className="text-xs text-stone-500">BS Information Technology</small></span></div><button type="button" onClick={() => setOpen(false)} className="portfolio-menu-button" aria-label="Close navigation"><X size={20} /></button></div>
        <NavItems mobile onNavigate={() => setOpen(false)} />
        <div className="portfolio-drawer-actions">
          <div className="flex shrink-0 items-center gap-2"><AppearanceMenu accentOnly /><ThemeToggle /></div>
          <NavLink to="/contact" onClick={() => setOpen(false)} className="portfolio-hire-button">Hire Me <ArrowRight size={16} /></NavLink>
        </div>
        <div className="portfolio-drawer-connect"><p>Connect</p><div><a href="https://www.facebook.com/nelmar.buenafe" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a><a href="mailto:buenafenelmar7@gmail.com" aria-label="Email"><Mail size={18} /></a><a href="https://github.com/NelmarBuenafe" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a></div></div>
      </aside>

      <aside className="portfolio-rail hidden md:flex" aria-label="Portfolio navigation">
        <NavLink to="/" className="portfolio-monogram" aria-label="Nelmar Buenafe home" title="Nelmar Buenafe">NB</NavLink>
        <div className="portfolio-rail-appearance"><AppearanceMenu compact /></div>
        <NavItems />
      </aside>
    </>
  );
}

export default Sidebar;
