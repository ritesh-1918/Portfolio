"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"] });

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] ${
        scrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : ""
      } transition-all duration-300`}
      initial={{ y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4 relative">
          {/* Left Side: Logo */}
          <div className="flex-shrink-0 min-w-[200px] lg:min-w-[280px]">
            <Link
              className={`text-xl md:text-2xl lg:text-3xl font-bold hover:text-primary transition-colors whitespace-nowrap ${dancing.className}`}
              href="/"
            >
              <span className="md:hidden lg:inline">Ritesh Bonthalakoti</span>
              <span className="hidden md:inline lg:hidden">Ritesh B.</span>
            </Link>
          </div>

          {/* Center: Navigation Links - Centered on Desktop */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-0.5 lg:gap-1 bg-background/50 backdrop-blur-md border border-white/5 py-1.5 px-1.5 rounded-full shadow-2xl mx-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    className={`px-3 lg:px-4 py-2 rounded-full text-[11px] lg:text-sm font-medium transition-all relative group ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    href={link.href}
                  >
                    {isActive && (
                      <motion.span
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        layoutId="navbar-active"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                    {!isActive && (
                      <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors -z-10" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side: Mobile menu trigger / Placeholder */}
          <div className="flex-shrink-0 min-w-[40px] lg:min-w-[280px] flex justify-end items-center">
            <button
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
              className="p-2 md:hidden rounded-full hover:bg-primary/10 transition-colors relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              animate={{ opacity: 1, height: "100vh" }}
              className="fixed inset-x-0 top-0 bg-background/95 backdrop-blur-2xl z-40 md:hidden flex flex-col pt-24 px-8"
              exit={{ opacity: 0, height: 0 }}
              initial={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;

                  return (
                    <motion.div
                      key={link.name}
                      animate={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        className={`text-3xl font-bold font-grotesk transition-colors ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Socials */}
              <div className="mt-auto pb-12 flex gap-6">
                 {/* Social icons could go here */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
