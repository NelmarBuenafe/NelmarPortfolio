import { Outlet, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";

const routeTitles = {
  "/": "Nelmar Buenafe | UI/UX Designer & Front-End Developer",
  "/about": "About | Nelmar Buenafe",
  "/projects": "Projects | Nelmar Buenafe",
  "/experience": "Experience & Involvements | Nelmar Buenafe",
  "/services": "Services | Nelmar Buenafe",
  "/contact": "Contact | Nelmar Buenafe",
};

function getPageTitle(pathname, hash) {
  if (pathname === "/about" && hash) {
    const sectionName = hash.replace("#", "");
    const formatted = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
    return `${formatted} · About | Nelmar Buenafe`;
  }
  return routeTitles[pathname] || "Nelmar Buenafe | UI/UX Designer & Front-End Developer";
}

function App() {
  const { pathname, hash } = useLocation();
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const handleSidebarChange = useCallback((expanded) => setSidebarExpanded(expanded), []);

  useEffect(() => {
    document.title = getPageTitle(pathname, hash);
  }, [pathname, hash]);

  return (
    <div className={`app-shell min-h-screen ${sidebarExpanded ? "is-sidebar-expanded" : ""}`}>
      <ScrollToTop />
      <Sidebar onDesktopExpandedChange={handleSidebarChange} />

      <main className="portfolio-main min-h-screen">
        <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-14">
          <div key={pathname} className="portfolio-route-enter">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let frameId;

    if (hash) {
      frameId = window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      });
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [pathname, hash]);

  return null;
}

export default App;
