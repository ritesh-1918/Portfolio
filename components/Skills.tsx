"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Cpu,
  Globe,
  Wrench,
  Sparkles,
} from "lucide-react";

import { skills } from "@/data/skills";
import { siteConfig } from "@/data/config";

const categoryIcons: Record<string, React.ElementType> = {
  "AI / ML": Brain,
  "Embedded & IoT": Cpu,
  "Full-Stack Web": Globe,
  "Tools & DevOps": Wrench,
};

const categoryGradients: Record<string, string> = {
  "AI / ML": "from-violet-500/20 to-purple-600/10",
  "Embedded & IoT": "from-cyan-500/20 to-blue-600/10",
  "Full-Stack Web": "from-emerald-500/20 to-green-600/10",
  "Tools & DevOps": "from-amber-500/20 to-orange-600/10",
};

const categoryAccents: Record<string, string> = {
  "AI / ML": "text-violet-400 border-violet-500/30 bg-violet-500/10",
  "Embedded & IoT": "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  "Full-Stack Web": "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  "Tools & DevOps": "text-amber-400 border-amber-500/30 bg-amber-500/10",
};

const categoryGlow: Record<string, string> = {
  "AI / ML": "bg-violet-500/20",
  "Embedded & IoT": "bg-cyan-500/20",
  "Full-Stack Web": "bg-emerald-500/20",
  "Tools & DevOps": "bg-amber-500/20",
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = skills[activeTab];
  const Icon = categoryIcons[activeCategory.category] || Sparkles;
  const accentClass = categoryAccents[activeCategory.category] || "";
  const gradientClass = categoryGradients[activeCategory.category] || "";
  const glowClass = categoryGlow[activeCategory.category] || "";

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="skills">
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          key={activeTab}
          animate={{ opacity: 0.6 }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] ${glowClass} transition-colors duration-1000`}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.span
              className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {siteConfig.skills.badge}
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {siteConfig.skills.title}
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {siteConfig.skills.description}
            </motion.p>
          </div>

          {/* Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-3"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {skills.map((category, index) => {
              const TabIcon = categoryIcons[category.category] || Sparkles;
              const isActive = activeTab === index;

              return (
                <button
                  key={category.category}
                  className={`relative flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-lg"
                      : "text-white/50 hover:text-white/80 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {isActive && (
                    <motion.span
                      className={`absolute inset-0 bg-gradient-to-r ${gradientClass} rounded-full border border-white/10 -z-10`}
                      layoutId="skills-tab-active"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <TabIcon className="w-4 h-4" />
                  <span>{category.category}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Main Bento Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Category Info Card */}
                <div className="lg:col-span-4">
                  <div className={`relative h-full rounded-3xl bg-gradient-to-br ${gradientClass} border border-white/10 backdrop-blur-xl p-8 flex flex-col justify-between min-h-[280px] overflow-hidden group`}>
                    {/* Decorative Background Icon */}
                    <Icon className="absolute -bottom-6 -right-6 w-40 h-40 text-white/[0.03] rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110" />

                    <div className="space-y-4 relative z-10">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono tracking-wider uppercase ${accentClass}`}>
                        <Icon className="w-3.5 h-3.5" />
                        <span>{activeCategory.category}</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold font-grotesk text-white leading-tight">
                        {activeCategory.description}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 mt-6 relative z-10">
                      <div className="space-y-1">
                        <p className="text-3xl font-bold text-white font-grotesk">
                          {(activeCategory.items as string[]).length}
                        </p>
                        <p className="text-xs font-mono text-white/40 uppercase tracking-wider">
                          Technologies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Skills Grid */}
                <div className="lg:col-span-8">
                  <div className="rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl p-6 md:p-8 h-full">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                      {(activeCategory.items as string[]).map(
                        (skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            animate={{ opacity: 1, scale: 1 }}
                            className="group/skill relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            transition={{
                              duration: 0.3,
                              delay: skillIndex * 0.05,
                            }}
                          >
                            <div className="relative flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 cursor-default group-hover/skill:shadow-lg">
                              {/* Skill Indicator Dot */}
                              <div
                                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                  activeTab === 0
                                    ? "bg-violet-400"
                                    : activeTab === 1
                                      ? "bg-cyan-400"
                                      : activeTab === 2
                                        ? "bg-emerald-400"
                                        : "bg-amber-400"
                                }`}
                              />
                              <span className="text-sm md:text-base font-medium text-white/70 group-hover/skill:text-white transition-colors">
                                {skill}
                              </span>
                            </div>
                          </motion.div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom: Quick Overview Bar */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {skills.map((category, index) => {
              const BarIcon = categoryIcons[category.category] || Sparkles;
              const isActive = activeTab === index;

              return (
                <button
                  key={`bar-${category.category}`}
                  className={`flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 text-left ${
                    isActive
                      ? "bg-white/[0.05] border-white/15"
                      : "bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <BarIcon
                    className={`w-5 h-5 flex-shrink-0 ${
                      isActive ? "text-white" : "text-white/30"
                    }`}
                  />
                  <div className="min-w-0">
                    <p
                      className={`text-xs font-mono truncate ${
                        isActive ? "text-white/80" : "text-white/30"
                      }`}
                    >
                      {category.category}
                    </p>
                    <p
                      className={`text-lg font-bold font-grotesk ${
                        isActive ? "text-white" : "text-white/40"
                      }`}
                    >
                      {(category.items as string[]).length}{" "}
                      <span className="text-xs font-normal">skills</span>
                    </p>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
