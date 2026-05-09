"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Tag as TagIcon,
  TrendingUp,
  Clock,
  Filter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Chip } from "@heroui/react";

import { GridBackground } from "@/components/ui/grid-background";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/blog-posts";
import { NewsletterBox } from "@/components/NewsletterBox";

// Sample tags - replace with your actual tags
const tags = [
  "Web Development",
  "UI/UX",
  "AI/ML",
  "DevOps",
  "Cloud Computing",
  "Cybersecurity",
  "Mobile Development",
  "Blockchain",
];

export default function BlogPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  // Filter posts based on search and tags
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      post.tags.some((tag) => selectedTags.includes(tag));

    return matchesSearch && matchesTags;
  });

  // Featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <main className="min-h-screen bg-black text-white">
      <GridBackground height="min-h-[60vh]">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
            >
              <span className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4">
                Insights & Thoughts
              </span>
              <h1 className="text-5xl md:text-6xl font-bold font-grotesk mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                Exploring Ideas Through Words
              </h1>
              <p className="text-lg text-muted-foreground font-mono">
                Dive into articles about technology, design, and development.
                Sharing knowledge and experiences from the digital frontier.
              </p>
            </motion.div>

            {/* Search and Filter Section */}
            <Card className="bg-black/50 backdrop-blur-xl border-white/10 mb-12">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      className="pl-10 bg-black/30 border-white/10 text-white placeholder:text-muted-foreground"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Filter Buttons */}
                  <div className="flex gap-2">
                    <Button
                      className="border-white/10 hover:border-primary/50"
                      variant="secondary"
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Trending
                    </Button>
                    <Button
                      className="border-white/10 hover:border-primary/50"
                      variant="secondary"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Latest
                    </Button>
                    <Button
                      className="border-white/10 hover:border-primary/50"
                      variant="secondary"
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TagIcon className="w-4 h-4 text-primary/80" />
                    <span className="text-sm font-medium text-white/80">
                      Popular Tags
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Button
                        key={tag}
                        className={`
                          rounded-full border-white/10 hover:border-primary/50
                          transition-all duration-300
                          ${
                            selectedTags.includes(tag)
                              ? "bg-primary/20 border-primary text-white"
                              : "text-white/70 hover:text-white"
                          }
                        `}
                        size="sm"
                        variant="secondary"
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </GridBackground>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-grotesk flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Featured Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    className="block group" 
                    href={`/blog/${post.slug}`}
                  >
                    <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/20 transition-all h-full overflow-hidden">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          fill
                          alt={post.title}
                          className="object-cover brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                          src={post.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Chip className="bg-zinc-900/70 text-white mb-2">
                            {post.category}
                          </Chip>
                          <h3 className="text-xl font-bold font-grotesk text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-white/70 text-sm line-clamp-2">
                            {post.description}
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                              <Image
                                fill
                                alt={post.author.name}
                                className="object-cover"
                                src={post.author.image}
                              />
                            </div>
                            <div>
                              <span className="text-sm font-medium text-white/90">
                                {post.author.name}
                              </span>
                              <div className="text-xs text-white/60">
                                {post.date}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <motion.div
                  key={post.slug}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    className="block group h-full"
                    href={`/blog/${post.slug}`}
                  >
                    <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/20 transition-all h-full">
                      <div className="relative aspect-video overflow-hidden rounded-t-xl">
                        <Image
                          fill
                          alt={post.title}
                          className="object-cover brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                          src={post.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <Chip className="absolute top-4 left-4 bg-zinc-900/70 text-white">
                          {post.category}
                        </Chip>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="relative w-6 h-6 rounded-full overflow-hidden">
                            <Image
                              fill
                              alt={post.author.name}
                              className="object-cover"
                              src={post.author.image}
                            />
                          </div>
                          <span className="text-sm text-white/70">
                            {post.author.name}
                          </span>
                          <span className="text-white/40">•</span>
                          <span className="text-sm text-white/40">
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold font-grotesk text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-3 text-white/40">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <NewsletterBox />
        </div>
      </section>
    </main>
  );
}
