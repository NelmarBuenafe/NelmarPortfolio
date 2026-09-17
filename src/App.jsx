import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="app-shell min-h-screen">
      <ScrollToTop />
      <Sidebar />

      <main className="portfolio-main min-h-screen">
        <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-14">
          <div key={pathname} className="portfolio-route-enter">
            <Outlet />
          </div>
        </div>
      </main>

      <div className="portfolio-footer-wrap">
        <Footer />
      </div>
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
