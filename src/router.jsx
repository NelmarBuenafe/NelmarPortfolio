import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "achievements", element: <Navigate to="/about#achievements" replace /> },
      { path: "experience", element: <Experience /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
      { path: "education", element: <Navigate to="/about#education" replace /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
