"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { Card } from "@/components/ui/card";
import { educationData } from "@/data/education";
import { siteConfig } from "@/data/config";

export const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-20 relative overflow-hidden bg-black" id="education">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {siteConfig.education.badge}
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-grotesk mb-4"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {siteConfig.education.title}
          </motion.h2>
          <motion.p
            className="text-muted-foreground font-mono max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {siteConfig.education.description}
          </motion.p>
        </div>

        {/* Timeline Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 origin-[0%] z-50"
          style={{ scaleX: progress }}
        />

        {/* Education Timeline */}
        <div ref={containerRef} className="relative max-w-7xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
            <div className="w-px h-full bg-white/10" />
            <motion.div
              className="absolute top-0 left-0 w-px bg-gradient-to-b from-primary via-primary to-primary/20"
              style={{ height: progress }}
            />
          </div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.school}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 top-12 transform -translate-x-1/2 hidden md:block z-10">
                <motion.div
                  className="w-6 h-6 rounded-full bg-primary relative"
                  initial={{ scale: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ scale: 1 }}
                >
                  <div className="absolute inset-0 w-full h-full rounded-full bg-primary animate-ping opacity-20" />
                  <div className="absolute inset-0 w-full h-full rounded-full bg-primary/50 animate-pulse" />
                </motion.div>
              </div>

              {/* Content */}
              <div
                className={`relative ${index % 2 === 0 ? "md:text-right md:order-1" : "md:order-2"}`}
              >
                <Card
                  className={`${edu.color} border border-white/5 hover:border-primary/20 transition-all duration-300 backdrop-blur-sm group`}
                >
                  <div className="p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90 group-hover:from-primary group-hover:to-primary/90 transition-all duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary/90">{edu.school}</p>
                      <p className="text-sm font-mono text-white/50">
                        {edu.period}
                      </p>
                    </div>

                    <div className="h-px bg-white/10 group-hover:bg-primary/20 transition-all duration-300" />

                    <p className="text-white/70 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/60 group-hover:bg-primary/10 group-hover:text-primary/90 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </Card>

                {/* Connecting Line */}
                <div
                  className={`absolute top-16 hidden md:block w-8 h-px bg-primary ${
                    index % 2 === 0 ? "left-0" : "right-0"
                  }`}
                />
              </div>

              <div
                className={`hidden md:block ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
