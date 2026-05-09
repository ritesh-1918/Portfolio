"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ExternalLink, Send } from "lucide-react";

import { siteConfig } from "@/data/config";

const FooterNewsletter = () => {
  return (
    <div className="relative z-10 border-b border-white/5 bg-white/[0.01] backdrop-blur-sm">
      <div className="container py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary/80">Pulse · Official Newsletter</p>
            </div>
            <h3 className="text-2xl font-bold font-grotesk text-white mb-2">
              Stay wired into the supercycle.
            </h3>
            <p className="text-white/40 text-sm font-mono leading-relaxed">
              Real-time insights on AI, Silicon engineering, and the physical reality. Hosted on Substack.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <a
              href={siteConfig.socials.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-primary text-black font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Subscribe on Substack
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


const MarqueeText = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex overflow-x-hidden bg-[#111111] border-y border-white/5">
    <div className="animate-marquee whitespace-nowrap py-12">
      <span className="mx-4 text-4xl md:text-6xl font-bold font-grotesk">
        {children}
      </span>
      <span className="mx-4 text-4xl md:text-6xl font-bold font-grotesk">
        {children}
      </span>
      <span className="mx-4 text-4xl md:text-6xl font-bold font-grotesk">
        {children}
      </span>
      <span className="mx-4 text-4xl md:text-6xl font-bold font-grotesk">
        {children}
      </span>
    </div>
    <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
      <span className="mx-4 text-4xl md:text-6xl font-bold font-grotesk">
        {children}
      </span>
      <span className="mx-4 text-4xl md:text-6xl font-bold font-grotesk">
        {children}
      </span>
      <span className="mx-4 text-4xl md:text-6xl font-bold font-grotesk">
        {children}
      </span>
      <span className="mx-4 text-4xl md:text-6xl font-bold font-grotesk">
        {children}
      </span>
    </div>
  </div>
);

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ritesh-1918",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/ritesh_191800",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ritesh1908",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Marquee Section */}
      <MarqueeText>
        LET&apos;S WORK TOGETHER — LET&apos;S CREATE SOMETHING AMAZING —
      </MarqueeText>

      {/* Newsletter Strip */}
      <FooterNewsletter />

      {/* Main Footer Content */}
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column */}
          <div className="space-y-10">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-grotesk">
                Ready to bring your
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                  ideas to life?
                </span>
              </h2>
              <p className="text-muted-foreground font-mono text-lg max-w-md leading-relaxed">
                Let&apos;s collaborate and create something extraordinary
                together. I&apos;m always open to new projects and
                opportunities.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Link
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                href="/contact"
              >
                Get in Touch
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </Link>
              <Link
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                href="/projects"
              >
                View Projects
              </Link>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16">
            {/* Navigation Links */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-sm font-medium text-white/40 font-mono uppercase tracking-wider">
                Navigation
              </h3>
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="text-xl hover:text-primary transition-colors"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-sm font-medium text-white/40 font-mono uppercase tracking-wider">
                Social
              </h3>
              <ul className="space-y-6">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      className="inline-flex items-center gap-4 text-xl hover:text-primary transition-colors group"
                      href={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-white/60 group-hover:text-primary transition-colors">
                        {link.icon}
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image 
                src="/images/logo-tech.png" 
                alt="Logo" 
                width={32} 
                height={32} 
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
              <p className="text-sm text-white/40 font-mono">
                {siteConfig.footer.copyright}
              </p>
            </div>
            <div className="flex items-center gap-8">
              <Link
                className="text-sm text-white/40 hover:text-white transition-colors"
                href="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-sm text-white/40 hover:text-white transition-colors"
                href="/terms"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>
    </footer>
  );
};
