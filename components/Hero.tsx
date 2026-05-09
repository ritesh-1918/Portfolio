"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, Chip, Progress, CardBody } from "@heroui/react";
import { useEffect, useState } from "react";

import { GridBackground } from "./ui/grid-background";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("hasVisitedBefore");

    if (!hasVisited) {
      // First visit - apply the delay
      const timer = setTimeout(() => {
        setShouldAnimate(true);
        localStorage.setItem("hasVisitedBefore", "true");
      }, 3700);

      return () => clearTimeout(timer);
    } else {
      // Not first visit - animate immediately
      setShouldAnimate(true);
    }
  }, []);

  return (
    <GridBackground>
      <section
        ref={ref}
        className="relative min-h-screen flex items-start py-10 justify-center overflow-hidden"
      >
        <div className="container z-50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Status Badge */}
            <motion.div
              animate={inView && shouldAnimate ? { opacity: 1, y: 0 } : {}}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <Chip
                className="py-2 px-4"
                color="default"
                startContent={
                  <span className="relative flex h-3 w-3">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${siteConfig.hero.status.color === "emerald" ? "bg-emerald-400" : siteConfig.hero.status.color === "blue" ? "bg-blue-400" : siteConfig.hero.status.color === "red" ? "bg-red-400" : "bg-emerald-400"}`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-3 w-3 ${siteConfig.hero.status.color === "emerald" ? "bg-emerald-500" : siteConfig.hero.status.color === "blue" ? "bg-blue-500" : siteConfig.hero.status.color === "red" ? "bg-red-500" : "bg-emerald-500"}`}
                    />
                  </span>
                }
                variant="flat"
              >
                {siteConfig.hero.status.text}
              </Chip>
            </motion.div>

            {/* Main Title */}
            <motion.div
              animate={inView && shouldAnimate ? { opacity: 1, y: 0 } : {}}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-grotesk leading-[1.1] md:leading-tight">
                {siteConfig.hero.title.first}
                <br className="hidden md:block" />{" "}
                <span className="text-primary">
                  {siteConfig.hero.title.second}
                </span>
                <br className="hidden md:block" />{" "}
                {siteConfig.hero.title.third}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono px-4 leading-relaxed">
                <span className="text-white/90">Electronics & Communication student</span> crafting{" "}
                <span className="text-primary/90">AI-powered embedded systems</span>,{" "}
                <span className="text-primary/90">IoT pipelines</span>, and{" "}
                <span className="text-primary/90">full-stack applications</span>
                <span className="md:block mt-2 text-white/40 text-sm md:text-base italic">
                  — from hardware to deployment
                </span>
              </p>
            </motion.div>

            {/* Project Status Cards */}
            <motion.div
              animate={inView && shouldAnimate ? { opacity: 1, y: 0 } : {}}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {siteConfig.hero.stats.map((stat, index) => (
                <Card key={index}>
                  <CardBody className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-secondary">
                        {/* 
                          Note: Icons are currently hardcoded below because dynamic import or mapping 
                          purely strings to SVGs here might be complex without an icon library map.
                          However, for the purpose of this template, preserving the existing SVGs 
                          and just mapping the text is what requested "don't change styles".
                          If the user wants to change icons they might need to touch code or we use a map.
                          Given the instruction "make it proper template without touching any styles or anything",
                          I will try to keep the icons as they were but map the text.
                          Ideally, we'd have an icon map or the SVGs in the data file too, but Config is .ts.
                          
                          I'll map based on index or just re-inline them to match the original visual loop if possible.
                          Wait, the original code had 3 specific cards with specific SVGs. 
                          The config has an array of 3 stats. 
                          I will use the index to select the SVG to be safe and simple, or just inline them if they are static decoration.
                        */}
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {index === 0 && (
                            <path
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                            />
                          )}
                          {index === 1 && (
                            <path
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                            />
                          )}
                          {index === 2 && (
                            <path
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                            />
                          )}
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-mono text-sm text-muted-foreground">
                          {stat.label}
                        </h3>
                        <p className="font-grotesk">{stat.value}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              animate={inView && shouldAnimate ? { opacity: 1, y: 0 } : {}}
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                variant="primary"
                onClick={() =>
                  document
                    .getElementById(
                      siteConfig.hero.cta.primary.link.replace("#", ""),
                    )
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {siteConfig.hero.cta.primary.text}
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() =>
                  document
                    .getElementById(
                      siteConfig.hero.cta.secondary.link.replace("#", ""),
                    )
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {siteConfig.hero.cta.secondary.text}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </GridBackground>
  );
};
