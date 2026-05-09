"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Tag as TagIcon,
  Cpu,
  Code2,
  Filter,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import { GridBackground } from "@/components/ui/grid-background";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

// Simplified categories
const categories = [
  {
    name: "Software Solutions",
    icon: Code2,
    description: "Cloud, AI & Web Orchestration",
  },
  {
    name: "Hardware Solutions",
    icon: Cpu,
    description: "Embedded & IoT Engineering",
  },
];

// Curated tech tags: 60% Hardware, 40% Software
const techTags = [
  // Hardware (60%)
  "ESP32-C6", "Embedded C", "MQTT", "I2C", "SPI", "PCB Design", "Arduino", "RTOS", "STM32", "MicroPython",
  // Software (40%)
  "Next.js", "FastAPI", "Supabase", "Gemini AI", "PostgreSQL", "TailwindCSS", "TypeScript"
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory || project.category === selectedCategory;

      const matchesTags =
        selectedTags.length === 0 ||
        project.techStack.some((tech) => selectedTags.includes(tech));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedTags]);

  // Split into Pinned and Regular
  const pinnedProjects = useMemo(() => 
    filteredProjects.filter(p => p.pinned), 
  [filteredProjects]);
  
  const regularProjects = useMemo(() => 
    filteredProjects.filter(p => !p.pinned), 
  [filteredProjects]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <GridBackground height="min-h-[70vh]">
        <section className="relative py-24 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto mb-20"
            >
              
              <h1 className="text-6xl md:text-7xl font-bold font-grotesk mb-8 tracking-tight">
                Building the Future across <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white/50">
                  Bytes and Boards
                </span>
              </h1>
              
              <p className="text-xl text-white/50 font-mono leading-relaxed max-w-2xl mx-auto">
                Where high-level software orchestration meets precise embedded hardware engineering.
              </p>
            </motion.div>

            {/* ── Search & Filter Hub ─────────────────────────────── */}
            <Card className="bg-white/[0.02] border-white/10 backdrop-blur-2xl mb-20 shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  {/* Search bar */}
                  <div className="relative w-full lg:w-auto flex-grow">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                    <Input
                      className="w-full pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 transition-all rounded-2xl"
                      placeholder="Search architecture, hardware or software..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Reset filters */}
                  {(selectedCategory || selectedTags.length > 0 || searchQuery) && (
                    <Button 
                      variant="ghost" 
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedTags([]);
                        setSearchQuery("");
                      }}
                      className="text-white/40 hover:text-white hover:bg-white/5"
                    >
                      <X className="w-4 h-4 mr-2" /> Reset
                    </Button>
                  )}
                </div>

                {/* Categories Switcher */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                      className={`
                        relative group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-500
                        ${selectedCategory === cat.name 
                          ? "bg-primary/20 border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]" 
                          : "bg-white/5 border-white/5 hover:border-white/20"}
                      `}
                    >
                      <div className={`
                        w-12 h-12 rounded-xl flex items-center justify-center transition-colors
                        ${selectedCategory === cat.name ? "bg-primary text-black" : "bg-white/5 text-white/40 group-hover:text-white"}
                      `}>
                        <cat.icon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-white group-hover:text-primary transition-colors">{cat.name}</h3>
                        <p className="text-xs text-white/30 font-mono">{cat.description}</p>
                      </div>
                      <ChevronRight className={`
                        ml-auto w-5 h-5 transition-transform duration-500
                        ${selectedCategory === cat.name ? "rotate-90 text-primary" : "text-white/10 group-hover:translate-x-1"}
                      `} />
                    </button>
                  ))}
                </div>

                {/* Technical Tags */}
                <div className="mt-10 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3 mb-6">
                    <TagIcon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono uppercase tracking-widest text-white/40">Technical Expertise</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`
                          px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border
                          ${selectedTags.includes(tag)
                            ? "bg-primary text-black border-primary font-bold shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
                            : "bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white"}
                        `}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </GridBackground>

      {/* ── PROJECTS GRID ───────────────────────────────────── */}
      <section className="pb-32 -mt-10">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="popLayout">
            
            {/* Featured Section */}
            {pinnedProjects.length > 0 && (
              <motion.div 
                key="pinned-projects-section"
                layout
                className="mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center gap-3 mb-10">
                  <div className="h-px bg-white/10 flex-grow" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">Pinned Projects</span>
                  <div className="h-px bg-white/10 flex-grow" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {pinnedProjects.map((project, i) => (
                    <motion.div
                      layout
                      key={project.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <ProjectCard project={project} variant="featured" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Other Projects */}
            {regularProjects.length > 0 && (
              <motion.div 
                key="regular-projects-section"
                layout>
                <div className="flex items-center gap-3 mb-10">
                  <div className="h-px bg-white/10 flex-grow" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">All Projects</span>
                  <div className="h-px bg-white/10 flex-grow" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {regularProjects.map((project, i) => (
                    <motion.div
                      layout
                      key={project.slug}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <ProjectCard project={project} variant="default" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div 
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-40 text-center"
              >
                <div className="inline-block p-6 rounded-full bg-white/5 border border-white/10 mb-6">
                  <Search className="w-10 h-10 text-white/20" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                <p className="text-white/40 font-mono">Try adjusting your filters or search terms.</p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
