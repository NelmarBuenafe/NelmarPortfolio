import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f9f8] text-[#17211f]">
      <ScrollToTop />
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((value) => !value)} />

      <main className={`min-h-screen transition-[margin] duration-300 ${sidebarCollapsed ? "md:ml-20" : "md:ml-72"}`}>
        <div className={`mx-auto px-5 pb-20 pt-24 sm:px-8 sm:pt-24 lg:px-12 lg:pt-14 ${sidebarCollapsed ? "max-w-none" : "max-w-6xl"}`}>
          <Outlet />
        </div>
      </main>

      <div className={`transition-[margin] duration-300 ${sidebarCollapsed ? "md:ml-20" : "md:ml-72"}`}>
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
