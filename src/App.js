import { createContext, useState } from "react";
import ContactSection from "./components/Contact_section/Contact_section.jsx";
import IntroductorySection from "./components/Introductory_section/Introductory_section.jsx";
import ProjectsSection from "./components/Projects_section/Projects_section.jsx";
import SkillsSection from "./components/Skills_section/Skills_section.jsx";

export const themeContext = createContext({});
export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      className={` ${theme === "light" ? "bg-white text-lightText" : "bg-darkAppBG text-white"} flex flex-col gap-10   `}
    >

        <themeContext.Provider value={{ theme, toggleTheme }}>
        <IntroductorySection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </themeContext.Provider>

    </div>
  );
}
