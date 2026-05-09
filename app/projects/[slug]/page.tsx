"use client";

import { useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button } from "@heroui/button";
import { Card } from "@heroui/react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
  Code2,
  Smartphone,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Star,
  Cog,
  Server,
  Blocks,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react";
import { Chip } from "@heroui/react";
import { AnimatePresence, useTime } from "framer-motion";

import { projects } from "@/data/projects";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);
  const heroRef = useRef<HTMLDivElement>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showAllImages, setShowAllImages] = useState(false);

  // Mouse position as motion values for smooth parallax
  const mouseX = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 30 });

  // Auto-motion time
  const time = useTime();

  // Row 1 moves opposite to mouse + auto drift
  const row1X = useTransform([smoothX, time], ([x, t]) => {
    const mouseShift = (Number(x) - 0.5) * 50;
    const autoShift = (Number(t) / 150) % 100;
    return `${-10 + mouseShift - autoShift}%`;
  });

  const row2X = useTransform([smoothX, time], ([x, t]) => {
    const mouseShift = (Number(x) - 0.5) * -50;
    const autoShift = (Number(t) / 200) % 100;
    return `${-20 + mouseShift + autoShift}%`;
  });

  const row3X = useTransform([smoothX, time], ([x, t]) => {
    const mouseShift = (Number(x) - 0.5) * 30;
    const autoShift = (Number(t) / 180) % 100;
    return `${-15 + mouseShift - autoShift}%`;
  });

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 to 1
    mouseX.set((x - 0.5) * 2); // -1 to 1
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-white/60 mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button color="primary" as={Link} href="/projects">
            View All Projects
          </Button>
        </div>
      </div>
    );
  }

  // Build image strips – repeat screenshots to fill the strips
  const imgs = project.screenshots.length > 0 ? project.screenshots : [project.image];
  const strip = [...imgs, ...imgs, ...imgs, ...imgs]; // repeat to fill width

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Back button */}
        <Link
          href="/projects"
          className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>

        {/* ── Image strips ────────────────────────────────────────── */}
        <div className="absolute inset-0 flex flex-col gap-3 opacity-60">
          {/* Row 1 – moves LEFT when mouse goes right */}
          <motion.div
            style={{ x: row1X }}
            className="flex gap-3 flex-shrink-0 h-[33%]"
          >
            {strip.map((src, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[360px] h-full rounded-xl overflow-hidden"
              >
                <Image fill src={src} alt="" className="object-cover" />
              </div>
            ))}
          </motion.div>

          {/* Row 2 – moves RIGHT when mouse goes right */}
          <motion.div
            style={{ x: row2X }}
            className="flex gap-3 flex-shrink-0 h-[33%]"
          >
            {[...strip].reverse().map((src, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[360px] h-full rounded-xl overflow-hidden"
              >
                <Image fill src={src} alt="" className="object-cover" />
              </div>
            ))}
          </motion.div>

          {/* Row 3 – moves LEFT (same as row 1, offset) */}
          <motion.div
            style={{ x: row3X }}
            className="flex gap-3 flex-shrink-0 h-[33%]"
          >
            {strip.map((src, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[360px] h-full rounded-xl overflow-hidden"
              >
                <Image fill src={src} alt="" className="object-cover" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

        {/* ── Info card overlaid on images ─────────────────────────── */}
        <div className="absolute inset-0 flex items-end pb-16 px-12 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 max-w-lg border border-white/10 pointer-events-auto"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/40 font-mono mb-3">
              <span>{project.category}</span>
              <span className="text-white/20">·</span>
              <span>{project.title} Project</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold font-grotesk mb-3 text-white">
              {project.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/60 text-lg mb-5 leading-relaxed">
              {project.description}
            </p>

            {/* Meta row */}
            <div className="flex items-center gap-6 text-sm text-white/40 font-mono mb-6">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                Lead Developer
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                {project.techStack.length} technologies
              </span>
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 bg-white/5 text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/90 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center gap-2 bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/15 transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT BELOW HERO ──────────────────────────────────── */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* ── Main column ─────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-20">

              {/* Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </span>
                  <h2 className="text-2xl font-bold font-grotesk">Project Overview</h2>
                </div>
                <p className="text-white/70 text-lg leading-relaxed">
                  {project.content.overview}
                </p>
              </motion.section>

              {/* Challenges & Solutions */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Server className="w-5 h-5 text-primary" />
                  </span>
                  <h2 className="text-2xl font-bold font-grotesk">Development Process</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-white/[0.03] border-white/10 p-6">
                    <h3 className="font-bold text-white mb-3">Challenges</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{project.content.challenges}</p>
                  </Card>
                  <Card className="bg-white/[0.03] border-white/10 p-6">
                    <h3 className="font-bold text-white mb-3">Solutions</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{project.content.solutions}</p>
                  </Card>
                </div>
                <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-white">Results & Impact</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{project.content.results}</p>
                </Card>
              </motion.section>

              {/* Key Features */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </span>
                  <h2 className="text-2xl font-bold font-grotesk">Key Features</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-white/[0.03] rounded-xl border border-white/5 hover:border-primary/20 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Gallery */}
              {project.screenshots.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Blocks className="w-5 h-5 text-primary" />
                      </span>
                      <h2 className="text-2xl font-bold font-grotesk">Project Gallery</h2>
                    </div>
                    {project.screenshots.length > 2 && (
                      <Button
                        variant="light"
                        size="sm"
                        className="text-primary font-mono text-xs uppercase tracking-widest"
                        onClick={() => setShowAllImages(!showAllImages)}
                      >
                        {showAllImages ? "Show Less" : `View All (${project.screenshots.length})`}
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(showAllImages ? project.screenshots : project.screenshots.slice(0, 2)).map((src, i) => (
                      <motion.div
                        key={i}
                        layoutId={`img-${src}`}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => {
                          setSelectedImage(src);
                          setZoomLevel(1);
                        }}
                        className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 cursor-zoom-in"
                      >
                        <Image
                          fill
                          src={src}
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                            <Maximize2 className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* YouTube Embed */}
              {project.youtubeId && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold font-grotesk mb-6">Video Walkthrough</h2>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=0&mute=1`}
                      title={`${project.title} Demo`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.section>
              )}

              {/* Google Drive Video Embed */}
              {project.driveVideoId && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold font-grotesk mb-6">Project Demo</h2>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://drive.google.com/file/d/${project.driveVideoId}/preview`}
                      title={`${project.title} Demo Video`}
                      allow="autoplay"
                      allowFullScreen
                    />
                  </div>
                </motion.section>
              )}
            </div>

            {/* ── Sidebar ─────────────────────────────────────── */}
            <aside className="space-y-6">
              <div className="sticky top-8 space-y-6">

                {/* Tech Stack */}
                <Card className="bg-white/[0.03] border-white/10 p-6">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Cog className="w-4 h-4 text-primary" /> Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        className="bg-white/5 text-white/70 border border-white/10 text-xs"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </Card>

                {/* Project Links */}
                <Card className="bg-white/[0.03] border-white/10 p-6">
                  <h3 className="font-bold text-white mb-4">Project Links</h3>
                  <div className="space-y-2">
                    {project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all text-white/70 hover:text-white text-sm"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                        Live Application
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all text-white/70 hover:text-white text-sm"
                      >
                        <Github className="w-4 h-4 text-primary" />
                        View Repository
                      </Link>
                    )}
                    {project.links?.presentation && (
                      <Link
                        href={project.links.presentation}
                        target="_blank"
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all text-white/70 hover:text-white text-sm"
                      >
                        <Layers className="w-4 h-4 text-primary" />
                        System Presentation
                      </Link>
                    )}
                    {project.links?.apk && (
                      <Link
                        href={project.links.apk}
                        target="_blank"
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all text-white/70 hover:text-white text-sm"
                      >
                        <Smartphone className="w-4 h-4 text-primary" />
                        Download Android APK
                      </Link>
                    )}
                  </div>
                </Card>

              </div>
            </aside>
          </div>
        </div>

        {/* ── Project Navigation ──────────────────────────────── */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevProject && (
                <Link href={`/projects/${prevProject.slug}`} className="group">
                  <Card className="bg-white/[0.02] border-white/10 hover:border-primary/20 transition-all p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 relative rounded-lg overflow-hidden flex-shrink-0">
                        <Image fill alt={prevProject.title} className="object-cover" src={prevProject.image} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-white/30 font-mono text-[10px] uppercase tracking-widest mb-1">
                          <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                          Previous
                        </div>
                        <h3 className="font-grotesk font-bold text-white group-hover:text-primary transition-colors text-sm">
                          {prevProject.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              )}
              {nextProject && (
                <Link href={`/projects/${nextProject.slug}`} className="group md:ml-auto w-full">
                  <Card className="bg-white/[0.02] border-white/10 hover:border-primary/20 transition-all p-5">
                    <div className="flex items-center justify-end gap-4">
                      <div className="text-right">
                        <div className="flex items-center justify-end gap-1.5 text-white/30 font-mono text-[10px] uppercase tracking-widest mb-1">
                          Next
                          <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <h3 className="font-grotesk font-bold text-white group-hover:text-primary transition-colors text-sm">
                          {nextProject.title}
                        </h3>
                      </div>
                      <div className="w-14 h-14 relative rounded-lg overflow-hidden flex-shrink-0">
                        <Image fill alt={nextProject.title} className="object-cover" src={nextProject.image} />
                      </div>
                    </div>
                  </Card>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ── Lightbox Modal ────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Controls */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-[110]">
                <div className="flex items-center gap-2">
                  <Button
                    isIconOnly
                    variant="flat"
                    className="bg-white/10 hover:bg-white/20 text-white rounded-full"
                    onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.5))}
                  >
                    <ZoomOut className="w-5 h-5" />
                  </Button>
                  <Button
                    isIconOnly
                    variant="flat"
                    className="bg-white/10 hover:bg-white/20 text-white rounded-full"
                    onClick={() => setZoomLevel(Math.min(3, zoomLevel + 0.5))}
                  >
                    <ZoomIn className="w-5 h-5" />
                  </Button>
                  <span className="text-white/50 font-mono text-xs ml-2">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                </div>
                <Button
                  isIconOnly
                  variant="flat"
                  className="bg-white/10 hover:bg-white/20 text-white rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Image */}
              <div className="relative w-full h-full flex items-center justify-center overflow-auto custom-scrollbar">
                <motion.div
                  animate={{ scale: zoomLevel }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative w-full h-full max-w-5xl max-h-[80vh]"
                >
                  <Image
                    src={selectedImage}
                    alt="Gallery expanded"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-white/50 text-sm font-mono">
                <button
                  onClick={() => {
                    const idx = project.screenshots.indexOf(selectedImage);
                    const prev = project.screenshots[(idx - 1 + project.screenshots.length) % project.screenshots.length];
                    setSelectedImage(prev);
                    setZoomLevel(1);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Prev
                </button>
                <span className="text-white/20">|</span>
                <span className="text-white">
                  {project.screenshots.indexOf(selectedImage) + 1} / {project.screenshots.length}
                </span>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => {
                    const idx = project.screenshots.indexOf(selectedImage);
                    const next = project.screenshots[(idx + 1) % project.screenshots.length];
                    setSelectedImage(next);
                    setZoomLevel(1);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
