"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Chip } from "@heroui/react";

const awards = [
  {
    id: 1,
    title: "1st Prize — Project Expo",
    subtitle: "₹10,000 Cash Prize",
    description:
      "Won first place at the college project exposition for the RaceXplorer IoT Athlete Performance Tracker — awarded ₹10,000 for innovative hardware design and real-world application.",
    category: "Award",
    year: "2024",
    icon: "🏆",
    tags: ["Hardware", "IoT", "Innovation"],
    highlight: true,
  },
  {
    id: 2,
    title: "NEC 2025 — Advanced Track",
    subtitle: "Rank 120 / 4000+ registrations",
    description:
      "Achieved 120th rank in the National Entrepreneurship Challenge (NEC 2025), Advanced Track — organised by E-Cell, IIT Bombay. Represented Sanketika Polytechnic College nationally.",
    category: "National Competition",
    year: "2025",
    icon: "🎖️",
    tags: ["Entrepreneurship", "IIT Bombay", "National"],
    highlight: true,
  },
  {
    id: 3,
    title: "Viksit Bharat Young Leaders Dialogue 2026",
    subtitle: "Selected by Govt. of India",
    description:
      "Selected to represent youth at the national dialogue organised by the Ministry of Youth Affairs & Sports, Government of India — recognising leadership and innovation potential.",
    category: "National Recognition",
    year: "2026",
    icon: "🇮🇳",
    tags: ["Government", "Leadership", "National"],
    highlight: true,
  },
  {
    id: 4,
    title: "NASA International Space Apps Challenge",
    subtitle: "National-level Participant",
    description:
      "Participated in NASA's global hackathon as a national-level representative in October 2025 — collaborating on technology solutions for real-world space and Earth challenges.",
    category: "International",
    year: "2025",
    icon: "🚀",
    tags: ["NASA", "Hackathon", "Space Tech"],
    highlight: false,
  },
  {
    id: 5,
    title: "AINCAT 2025",
    subtitle: "AIR 1,435 — Top 0.4% Nationally",
    description:
      "Achieved All India Rank 1,435 in the NCAT 2025 engineering aptitude test among 3.6 lakh+ participants — placing in the top 0.4% of students nationwide.",
    category: "National Rank",
    year: "2025",
    icon: "📊",
    tags: ["Engineering", "Aptitude", "National Rank"],
    highlight: false,
  },
  {
    id: 6,
    title: "State Level Buildathon",
    subtitle: "State Representative",
    description:
      "Selected as a state-level representative for the national buildathon competition — one of a handful of students chosen to represent Andhra Pradesh.",
    category: "Competition",
    year: "2025",
    icon: "🏗️",
    tags: ["Buildathon", "State Level", "Innovation"],
    highlight: false,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="awards">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* ── HONORS & AWARDS ─────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Recognition
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-grotesk mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Honors & Awards
            </motion.h2>
            <motion.p
              className="text-muted-foreground/80 font-mono max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              National-level recognitions, competition wins, and milestones
              across entrepreneurship, hardware, and engineering.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Card
                  className={`h-full border transition-all duration-300 group ${
                    award.highlight
                      ? "bg-[#0e0e0e] border-primary/20 hover:border-primary/40"
                      : "bg-[#111111] border-white/5 hover:border-primary/20"
                  }`}
                >
                  <CardBody className="p-6 flex flex-col gap-4">
                    {/* Icon + Category */}
                    <div className="flex items-start justify-between">
                      <span className="text-4xl">{award.icon}</span>
                      <Chip
                        className="bg-white/5 text-white/60 text-xs font-mono"
                        size="sm"
                        variant="flat"
                      >
                        {award.year}
                      </Chip>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-lg font-bold font-grotesk text-white leading-snug mb-1">
                        {award.title}
                      </h3>
                      <p className="text-sm text-primary/80 font-mono">
                        {award.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed flex-1">
                      {award.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                      {award.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-mono rounded-full bg-white/5 text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
