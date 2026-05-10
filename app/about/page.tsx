"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Brain,
  Blocks,
  Palette,
  Cloud,
  Smartphone,
  Shield,
  GitBranch,
  Cpu,
  LucideIcon,
} from "lucide-react";

import { About } from "@/components/About";
import { Workspace } from "@/components/Workspace";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/ui/grid-background";

const achievements = [
  {
    number: "20+",
    label: "Hackathons",
    description: "Competed & won nationally",
  },
  {
    number: "25+",
    label: "Projects",
    description: "Hardware & Software solutions",
  },
  {
    number: "5+",
    label: "Teams Led",
    description: "Successful collaborations",
  },
  {
    number: "15+",
    label: "Certifications",
    description: "From IITB, Infosys & more",
  },
];

interface Interest {
  name: string;
  icon: LucideIcon;
  description: string;
}

const interests: Interest[] = [
  {
    name: "VLSI Design",
    icon: Cpu,
    description: "Semiconductor & Circuit Design",
  },
  {
    name: "AI & ML",
    icon: Brain,
    description: "Neural Networks & Edge AI",
  },
  {
    name: "IoT Systems",
    icon: Smartphone,
    description: "Connected Hardware Solutions",
  },
  {
    name: "Quantum Computing",
    icon: Blocks,
    description: "Next-gen Computing Paradigms",
  },
  {
    name: "Robotics",
    icon: GitBranch,
    description: "Autonomous Systems",
  },
  {
    name: "Entrepreneurship",
    icon: Shield,
    description: "Building Startups",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <GridBackground>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
            >
              <span className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4">
                About Me
              </span>
              <h1 className="text-5xl md:text-6xl font-bold font-grotesk mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                Bridging Silicon & Intelligence
              </h1>
              <p className="text-lg text-muted-foreground font-mono">
                Electronics & Communication Engineer architecting the next generation of 
                intelligent systems—bridging the gap between complex circuits and advanced AI.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-4xl font-bold font-grotesk text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                        {achievement.number}
                      </h3>
                      <p className="font-grotesk font-bold mb-1">
                        {achievement.label}
                      </p>
                      <p className="text-sm text-muted-foreground font-mono">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </GridBackground>

      {/* About Section */}
      <About 
        imageSrc="/about-me.jpg" 
        objectFit="contain" 
        zoom={false} 
        imageAspect="aspect-[1/2] md:aspect-[9/16] lg:aspect-[3/4] min-h-[500px]"
      />

      {/* Interests Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4">
              Interests & Focus
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">
              Areas of Interest
            </h2>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              Technologies and domains that excite me and drive my continuous
              learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                {/* Card Background with Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                
                <Card className="relative bg-[#0A0A0A]/80 backdrop-blur-2xl border-white/5 group-hover:border-primary/30 transition-all duration-500 rounded-2xl overflow-hidden h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                        <interest.icon className="w-7 h-7 text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
                      </div>
                      {/* Decorative Background Icon */}
                      <interest.icon className="absolute top-0 right-0 w-24 h-24 text-white/[0.02] -mr-8 -mt-8 rotate-12 transition-transform duration-700 group-hover:rotate-0" />
                    </div>

                    <div className="space-y-4 flex-grow">
                      <h3 className="text-2xl font-bold font-grotesk tracking-tight text-white group-hover:text-primary transition-colors">
                        {interest.name}
                      </h3>
                      <p className="text-muted-foreground font-sans leading-relaxed">
                        {interest.description}
                      </p>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-8 pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-8 bg-primary rounded-full transition-all duration-500 group-hover:w-16" />
                        <div className="h-1 w-1 bg-primary/30 rounded-full" />
                        <div className="h-1 w-1 bg-primary/20 rounded-full" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Industries Section */}
      <section className="py-20 relative overflow-hidden bg-zinc-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4">
              Career Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">
              Targeting the Semiconductor Frontier
            </h2>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              My ultimate goal is to contribute to the next generation of computing at world-leading semiconductor companies.
            </p>
          </motion.div>

          <div 
            className="relative flex overflow-hidden py-12"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          >
            {/* Scrolling Content */}
            <div className="flex whitespace-nowrap animate-marquee items-center">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-16 md:gap-24 items-center px-12 md:px-24">
                    {[
                      { name: "NVIDIA", logo: "/Nvidia New.png", style: { filter: 'invert(1) hue-rotate(180deg) brightness(1.2)' } },
                      { name: "Qualcomm", logo: "/Qualcomm new.png" },
                      { name: "AMD", logo: "/AMD new.png", style: { filter: 'invert(1) hue-rotate(180deg) brightness(1.2)' } },
                      { name: "Intel", logo: "/Intel logo new.png" },
                    ].map((company, idx) => (
                      <div
                        key={`${i}-${idx}`}
                        className="relative h-20 md:h-28 w-56 md:w-80"
                        style={company.style}
                      >
                        <Image 
                          src={company.logo}
                          alt={company.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33%); }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* Workspace Section */}
      <Workspace />

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <Card className="bg-primary/5 backdrop-blur-xl border-primary/20 overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <motion.div
                className="space-y-6 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold font-grotesk">
                  Let&apos;s Work Together
                </h2>
                <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                  Have a project in mind? Let&apos;s create something amazing
                  together.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="bg-primary/90 hover:bg-primary" size="lg">
                    Get in Touch
                  </Button>
                  <Button
                    className="border-primary/20 hover:bg-primary/10"
                    size="lg"
                    variant="secondary"
                  >
                    View Portfolio
                  </Button>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
