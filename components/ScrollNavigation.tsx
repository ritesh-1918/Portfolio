"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "certificates", label: "Certificates" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    } else if (id === "hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[60] hidden sm:flex flex-col gap-4">
      {sections.map((section, index) => {
        const isActive = activeSection === section.id;
        return (
          <div key={section.id} className="relative group flex items-center justify-end">
            {/* Tooltip */}
            <div className="absolute right-8 px-2 py-1 rounded bg-white/10 backdrop-blur-md border border-white/10 text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {section.label}
            </div>

            {/* Dot */}
            <button
              onClick={() => scrollTo(section.id)}
              className="w-8 h-8 flex items-center justify-center focus:outline-none"
              aria-label={`Scroll to ${section.label}`}
            >
              <motion.div
                className={`rounded-full transition-colors duration-300 ${
                  isActive ? "bg-primary" : "bg-white/20 group-hover:bg-white/50"
                }`}
                animate={{
                  width: isActive ? 12 : 8,
                  height: isActive ? 12 : 8,
                }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};
