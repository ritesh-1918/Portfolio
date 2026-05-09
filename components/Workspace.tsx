import { motion } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const workspaceItems = [
  {
    title: "Lenovo ThinkPad T14",
    description: "Primary workstation for VLSI design, AI development, and embedded systems.",
    specs: "Intel i5-10210U, 16GB RAM, Touch Support",
    image: "/images/thinkpad-t14.png",
    link: "https://amzn.in/d/0gBr1Ydn",
  },
  {
    title: "boAt Airdopes - Thor Edition",
    description: "Special Marvel edition earbuds for high-quality audio and immersive focus.",
    specs: "Bluetooth 5.3, IWP Technology, Marvel Aesthetics",
    image: "/images/boat-thor-buds.png",
    link: "https://dl.flipkart.com/s/MFS2x0NNNN",
  },
  {
    title: "Multipurpose Bed Desk",
    description: "Ergonomic foldable desk for comfortable long-hour coding and design sessions.",
    specs: "Cup Holder, Tablet Slot, Anti-slip Legs",
    image: "/images/workspace-table.png",
    link: "https://amzn.in/d/0hNuB3J5",
  },
];

const developmentTools = [
  {
    name: "VS Code",
    logo: "vscode",
    description: "Primary IDE for all things code",
    category: "IDE",
  },
  {
    name: "Windows Terminal",
    logo: "powershell",
    description: "Advanced shell experience",
    category: "Terminal",
  },
  {
    name: "Arduino IDE",
    logo: "arduino",
    description: "Embedded systems development",
    category: "Hardware",
  },
  {
    name: "Docker",
    logo: "docker",
    description: "Containerized environments",
    category: "DevOps",
  },
  {
    name: "Figma",
    logo: "figma",
    description: "UI/UX & hardware prototyping",
    category: "Design",
  },
  {
    name: "GitHub",
    logo: "github",
    description: "Collaborative version control",
    category: "Development",
  },
  {
    name: "Postman",
    logo: "postman",
    description: "API testing & documentation",
    category: "Development",
  },
  {
    name: "Notion",
    logo: "notion",
    description: "Project management & docs",
    category: "Productivity",
  },
  {
    name: "MongoDB",
    logo: "mongodb",
    description: "NoSQL database management",
    category: "Database",
  },
  {
    name: "MySQL",
    logo: "mysql",
    description: "Relational database systems",
    category: "Database",
  },
  {
    name: "Python",
    logo: "py",
    description: "AI/ML & scripting",
    category: "AI/ML",
  },
  {
    name: "Linux",
    logo: "linux",
    description: "Embedded OS & server management",
    category: "Systems",
  },
];

export const Workspace = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Workspace Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk text-white/90 mb-4">
            Workspace
          </h2>
          <p className="text-white/60 font-mono max-w-2xl mx-auto">
            The tools and equipment I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-[#111111] border-0 rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {workspaceItems.map((item) => (
                  <a 
                    key={item.title} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group space-y-4 block hover:opacity-90 transition-opacity"
                  >
                    <div className="aspect-square relative bg-gradient-to-br from-black to-zinc-900 rounded-lg p-8 flex items-center justify-center group-hover:from-zinc-900 group-hover:to-black transition-all duration-300">
                      <Image
                        alt={item.title}
                        className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                        height={300}
                        src={item.image}
                        width={300}
                      />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-grotesk text-white/90 mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/50 mb-2">
                        {item.description}
                      </p>
                      <p className="text-xs font-mono text-white/30">
                        {item.specs}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Development Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-grotesk text-white/90 mb-4">
              Apps & Software
            </h2>
            <p className="text-white/60 font-mono">
              Essential tools that power my development workflow
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {developmentTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden p-2">
                        <Image 
                          src={`https://skillicons.dev/icons?i=${tool.logo}`}
                          alt={tool.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-bold font-grotesk mb-2">
                        {tool.name}
                      </h3>
                      <p className="text-sm font-mono text-white/50">
                        {tool.description}
                      </p>
                      <span className="inline-block text-xs font-mono text-primary/60 mt-2 bg-primary/5 px-2 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
