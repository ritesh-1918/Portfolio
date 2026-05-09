"use client";

import { Badge } from "@heroui/react";
import { Card } from "@heroui/react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Edit, Github, Star } from "lucide-react";

import { CodeBlock } from "@/components/ui/CodeBlock";

interface DocSection {
  title: string;
  content: string;
  code?: {
    language: string;
    content: string;
  }[];
}

interface DocPage {
  slug: string;
  title: string;
  description: string;
  category: string;
  sections: DocSection[];
  lastUpdated: string;
  contributors: {
    name: string;
    image: string;
    github: string;
  }[];
  githubUrl: string;
  stars: number;
}

const docPages: DocPage[] = [
  {
    slug: "getting-started",
    title: "Getting Started with Hero UI",
    description:
      "Learn how to install and set up Hero UI in your Next.js project.",
    category: "Introduction",
    sections: [
      {
        title: "Installation",
        content: "Install Hero UI using your preferred package manager:",
        code: [
          {
            language: "bash",
            content: "npm install @heroui/react",
          },
          {
            language: "bash",
            content: "yarn add @heroui/react",
          },
          {
            language: "bash",
            content: "pnpm add @heroui/react",
          },
        ],
      },
      {
        title: "Configuration",
        content:
          "Configure Hero UI in your project by adding the following to your tailwind.config.js:",
        code: [
          {
            language: "javascript",
            content: `module.exports = {
  content: [
    './node_modules/@heroui/react/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
      },
    },
  },
  plugins: [
    require('@heroui/plugin'),
  ],
}`,
          },
        ],
      },
      {
        title: "Basic Usage",
        content: "Import and use Hero UI components in your React components:",
        code: [
          {
            language: "typescript",
            content: `import { Button } from '@heroui/button';
import { Card } from '@heroui/react';

export default function Example() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to Hero UI
      </h2>
      <Button color="primary">
        Get Started
      </Button>
    </Card>
  );
}`,
          },
        ],
      },
    ],
    lastUpdated: "2024-03-15",
    contributors: [
      {
        name: "Andrew Paulson",
        image: "https://github.com/andrewpaulson.png",
        github: "https://github.com/andrewpaulson",
      },
    ],
    githubUrl: "https://github.com/heroui/react",
    stars: 1234,
  },
];

export default function DocPage() {
  const params = useParams();
  const doc = docPages.find((doc) => doc.slug === params.slug);

  if (!doc) {
    return <div>Documentation not found</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-12">
            {/* Left Sidebar - Navigation */}
            <motion.aside
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
            >
              <div className="sticky top-20 space-y-6">
                <Link
                  className="inline-flex items-center gap-2 text-sm font-mono hover:text-primary transition-colors mb-6"
                  color="foreground"
                  href="/docs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Docs
                </Link>

                <nav className="space-y-1">
                  {docPages.map((page) => (
                    <Link
                      key={page.slug}
                      className={`block px-4 py-2 rounded-lg text-sm font-mono transition-colors ${
                        page.slug === params.slug
                          ? "bg-primary/10 text-primary"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                      href={`/docs/${page.slug}`}
                    >
                      {page.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="min-w-0"
              initial={{ opacity: 0, y: 20 }}
            >
              {/* Header */}
              <div className="mb-12">
                <Badge className="bg-primary/90 text-white mb-4" size="sm">
                  {doc.category}
                </Badge>

                <h1 className="text-4xl font-bold font-grotesk mb-4">
                  {doc.title}
                </h1>

                <p className="text-lg text-white/70 font-mono">
                  {doc.description}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {doc.sections.map((section, index) => (
                  <motion.section
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="text-2xl font-bold font-grotesk mb-4">
                      {section.title}
                    </h2>
                    <p className="text-lg text-white/70 font-mono mb-6">
                      {section.content}
                    </p>
                    {section.code?.map((code, codeIndex) => (
                      <CodeBlock
                        key={codeIndex}
                        code={code.content}
                        language={code.language}
                        showLineNumbers={true}
                      />
                    ))}
                  </motion.section>
                ))}
              </div>
            </motion.div>

            {/* Right Sidebar - Meta */}
            <motion.aside
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
            >
              <div className="sticky top-20 space-y-6">
                {/* On this page */}
                <Card className="bg-black/50 backdrop-blur-xl border-white/10">
                  <div className="p-6">
                    <h3 className="text-lg font-grotesk font-bold mb-4">
                      On this page
                    </h3>
                    <nav className="space-y-2">
                      {doc.sections.map((section) => (
                        <a
                          key={section.title}
                          className="block text-sm font-mono text-white/60 hover:text-primary transition-colors"
                          href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Card>

                {/* Contributors */}
                <Card className="bg-black/50 backdrop-blur-xl border-white/10">
                  <div className="p-6">
                    <h3 className="text-lg font-grotesk font-bold mb-4">
                      Contributors
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {doc.contributors.map((contributor) => (
                        <a
                          key={contributor.name}
                          className="block"
                          href={contributor.github}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <Image
                            alt={contributor.name}
                            className="rounded-full hover:ring-2 ring-primary/50 transition-all"
                            height={32}
                            src={contributor.image}
                            width={32}
                          />
                        </a>
                      ))}
                    </div>
                    <div className="text-sm font-mono text-white/60">
                      Last updated: {doc.lastUpdated}
                    </div>
                  </div>
                </Card>

                {/* Actions */}
                <div className="space-y-3">
                  <Button
                    className="w-full border border-white/10 hover:bg-white/5"
                    color="default"
                    href={`${doc.githubUrl}/edit/main/docs/${doc.slug}.md`}
                    size="lg"
                    startContent={<Edit className="w-4 h-4" />}
                    target="_blank"
                    variant="ghost"
                  >
                    Edit this page
                  </Button>
                  <Button
                    className="w-full border border-white/10 hover:bg-white/5"
                    color="default"
                    endContent={<Star className="w-4 h-4" />}
                    href={doc.githubUrl}
                    size="lg"
                    startContent={<Github className="w-4 h-4" />}
                    target="_blank"
                    variant="ghost"
                  >
                    {doc.stars} stars on GitHub
                  </Button>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </main>
  );
}
