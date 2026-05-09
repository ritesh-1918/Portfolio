"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Card } from "@heroui/react";
import { Snippet } from "@heroui/snippet";
import { Badge } from "@heroui/react";
import { Link } from "@heroui/link";
import {
  Book,
  Code2,
  FileText,
  Layers,
  Settings,
  Terminal,
  Search,
  ChevronRight,
} from "lucide-react";

const docsCategories = [
  {
    title: "Getting Started",
    icon: Book,
    description: "Learn the basics and get up and running quickly",
    links: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Core Concepts",
    icon: Layers,
    description: "Understanding fundamental concepts and architecture",
    links: [
      { title: "Project Structure", href: "/docs/project-structure" },
      { title: "Routing", href: "/docs/routing" },
      { title: "State Management", href: "/docs/state-management" },
    ],
  },
  {
    title: "Components",
    icon: Code2,
    description: "Explore our library of reusable components",
    links: [
      { title: "UI Components", href: "/docs/ui-components" },
      { title: "Layout Components", href: "/docs/layout-components" },
      { title: "Form Components", href: "/docs/form-components" },
    ],
  },
  {
    title: "API Reference",
    icon: FileText,
    description: "Detailed API documentation and examples",
    links: [
      { title: "REST API", href: "/docs/rest-api" },
      { title: "GraphQL API", href: "/docs/graphql-api" },
      { title: "Webhooks", href: "/docs/webhooks" },
    ],
  },
  {
    title: "Configuration",
    icon: Settings,
    description: "Configure and customize your application",
    links: [
      { title: "Environment Variables", href: "/docs/env-variables" },
      { title: "Build Settings", href: "/docs/build-settings" },
      { title: "Deployment", href: "/docs/deployment" },
    ],
  },
  {
    title: "CLI Tools",
    icon: Terminal,
    description: "Command-line tools and utilities",
    links: [
      { title: "CLI Commands", href: "/docs/cli-commands" },
      { title: "Development Tools", href: "/docs/dev-tools" },
      { title: "Build Tools", href: "/docs/build-tools" },
    ],
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
            >
              <Badge
                className="bg-primary/10 text-primary border-primary/20"
                size="lg"
              >
                Documentation v2.0
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-primary">
                Documentation
              </h1>

              <p className="text-xl text-white/70 font-mono max-w-2xl mx-auto">
                Everything you need to build amazing applications with our
                platform. From getting started guides to detailed API
                references.
              </p>

              <div className="flex items-center justify-center gap-4 pt-6">
                <Button
                  color="primary"
                  size="lg"
                  startContent={<Book className="w-5 h-5" />}
                  variant="solid"
                >
                  Get Started
                </Button>
                <Button
                  color="default"
                  size="lg"
                  startContent={<Search className="w-5 h-5" />}
                  variant="ghost"
                >
                  Search Docs
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Start Example */}
      <section className="py-20 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold font-grotesk">
                  Quick Start Example
                </h2>
                <p className="text-white/70 font-mono">
                  Get started quickly with our components. Copy and paste this
                  code to see it in action.
                </p>
                <Button
                  className="bg-white text-black hover:bg-gray-200"
                  endContent={<ChevronRight className="w-4 h-4" />}
                  variant="solid"
                >
                  View More Examples
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <Card className="bg-black/50 backdrop-blur-xl border-white/10">
                  <div className="p-6">
                    <Snippet>
                      <span>npm install @heroui/react</span>
                      <span>yarn add @heroui/react</span>
                      <span>pnpm add @heroui/react</span>
                    </Snippet>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docsCategories.map((category, index) => {
                const Icon = category.icon;

                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <Card className="h-full bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/20 transition-all group">
                      <div className="p-6 space-y-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold font-grotesk mb-2 group-hover:text-primary transition-colors">
                            {category.title}
                          </h3>
                          <p className="text-white/60 font-mono text-sm">
                            {category.description}
                          </p>
                        </div>

                        <div className="space-y-2">
                          {category.links.map((link) => (
                            <Link
                              key={link.title}
                              className="flex items-center gap-2 text-sm font-mono text-white/70 hover:text-primary transition-colors"
                              href={link.href}
                            >
                              <ChevronRight className="w-4 h-4" />
                              {link.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
