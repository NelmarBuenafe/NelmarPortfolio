import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowRight, ChevronLeft, ChevronsRight, House, UserRound, BriefcaseBusiness, Code2, FolderGit2, Sparkles, Mail, Menu, X,
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

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/nelmar.buenafe", Icon: FaFacebookF, external: true },
  { label: "Email", href: "mailto:buenafenelmar7@gmail.com", Icon: Mail },
  { label: "GitHub", href: "https://github.com/NelmarBuenafe", Icon: FaGithub, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: FaLinkedin, external: true },
];

const DESKTOP_SIDEBAR_KEY = "portfolio-sidebar-expanded";

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
        >
          <Icon size={19} strokeWidth={1.8} />
          {mobile && <span>{label}</span>}
          {!mobile && <span className="portfolio-rail-label">{label}</span>}
        </NavLink>
      ))}
    </nav>
  );
}

function DesktopSocialLinks({ iconOnly = false, tabIndex }) {
  return socialLinks.map(({ label, href, Icon, external }) => (
    <a
      key={label}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`portfolio-social-link ${iconOnly ? "portfolio-social-link--icon" : ""}`}
      aria-label={label}
      title={iconOnly ? label : undefined}
      tabIndex={tabIndex}
    >
      <Icon size={18} />
      {!iconOnly && <span>{label}</span>}
    </a>
  ));
}

function Sidebar({ onDesktopExpandedChange }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(() => {
    try {
      return window.localStorage.getItem(DESKTOP_SIDEBAR_KEY) === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onDesktopExpandedChange?.(expanded);
    try {
      window.localStorage.setItem(DESKTOP_SIDEBAR_KEY, String(expanded));
    } catch {
      // The sidebar remains usable when local storage is unavailable.
    }
  }, [expanded, onDesktopExpandedChange]);

  return (
    <>
      <header className="portfolio-mobile-header flex w-full flex-nowrap items-center justify-between gap-2 px-3 py-2 lg:hidden">
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
          {!open && (
            <button type="button" onClick={() => setOpen(true)} className="portfolio-menu-button shrink-0" aria-label="Open navigation">
              <Menu size={21} />
            </button>
          )}
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-slate-950/25 backdrop-blur-sm transition lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <aside className={`portfolio-mobile-drawer lg:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-8 flex items-start justify-between"><div className="flex items-center gap-3"><span className="portfolio-monogram">NB</span><span><strong className="block text-sm leading-tight text-stone-950">Nelmar Buenafe</strong><small className="text-xs text-stone-500">BS Information Technology</small></span></div><button type="button" onClick={() => setOpen(false)} className="portfolio-menu-button" aria-label="Close navigation"><X size={20} /></button></div>
        <NavItems mobile onNavigate={() => setOpen(false)} />
        <div className="portfolio-drawer-actions">
          <div className="flex shrink-0 items-center gap-2"><AppearanceMenu accentOnly /><ThemeToggle /></div>
          <NavLink to="/contact" onClick={() => setOpen(false)} className="portfolio-hire-button">Hire Me <ArrowRight size={16} /></NavLink>
        </div>
        <div className="portfolio-drawer-connect"><p>Connect</p><div><a href="https://www.facebook.com/nelmar.buenafe" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a><a href="mailto:buenafenelmar7@gmail.com" aria-label="Email"><Mail size={18} /></a><a href="https://github.com/NelmarBuenafe" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a></div></div>
      </aside>

      <aside className={`portfolio-rail hidden lg:flex ${expanded ? "is-expanded" : ""}`} aria-label="Portfolio navigation">
        <header className="portfolio-sidebar-top">
          {expanded && (
            <div className="portfolio-identity">
              <NavLink to="/" className="portfolio-monogram" aria-label="Nelmar Buenafe home" title="Nelmar Buenafe">NB</NavLink>
              <span className="portfolio-identity-copy">
                <strong>Nelmar Buenafe</strong>
                <small>BS Information Technology</small>
              </span>
            </div>
          )}
          <button
            type="button"
            className="portfolio-sidebar-toggle"
            onClick={() => setExpanded((value) => !value)}
            aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
            aria-expanded={expanded}
            title={expanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {expanded ? <ChevronLeft size={19} /> : <ChevronsRight size={19} />}
          </button>
        </header>

        <div className="portfolio-quick-controls">
          <AppearanceMenu accentOnly />
          <ThemeToggle />
        </div>
        <div className="portfolio-controls-divider" />
        <NavItems />

        <div className="portfolio-collapsed-socials" aria-label="Connect">
          <div className="portfolio-collapsed-divider" />
          <DesktopSocialLinks iconOnly tabIndex={expanded ? -1 : 0} />
        </div>

        <div className="portfolio-rail-extra" aria-hidden={!expanded}>
          <div className="portfolio-rail-divider" />
          <NavLink to="/contact" className="portfolio-hire-button portfolio-rail-hire" tabIndex={expanded ? 0 : -1}>
            Hire Me <ArrowRight size={16} aria-hidden="true" />
          </NavLink>
          <div className="portfolio-rail-connect">
            <p>Connect</p>
            <DesktopSocialLinks tabIndex={expanded ? 0 : -1} />
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
