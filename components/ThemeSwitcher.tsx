"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      animate={{ opacity: 1, scale: 1 }}
      aria-label="Toggle theme"
      className="fixed bottom-8 right-8 p-3 rounded-full bg-primary/10 backdrop-blur-lg border border-primary/20 hover:bg-primary/20 transition-colors z-50 hidden md:flex"
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <AnimatePresence mode="wait">
        {resolvedTheme === "dark" ? (
          <motion.svg
            key="sun"
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            className="w-6 h-6 text-primary"
            exit={{ scale: 0.5, opacity: 0, rotate: 180 }}
            fill="none"
            initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            className="w-6 h-6 text-primary"
            exit={{ scale: 0.5, opacity: 0, rotate: -180 }}
            fill="none"
            initial={{ scale: 0.5, opacity: 0, rotate: 180 }}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
