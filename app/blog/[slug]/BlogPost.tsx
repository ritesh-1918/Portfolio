"use client";

import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

interface Author {
  name: string;
  image: string;
  role: string;
}

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: Author;
}

const blogPosts: BlogPost[] = [
  // ... other blog posts ...
];

interface Props {
  slug: string;
}

export default function BlogPost({ slug }: Props) {
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="space-y-8 mb-12">
          <Link
            className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
            href="/blog"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            Back to Blog
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Chip className=" text-primary-foreground" variant="flat">
                {post.category}
              </Chip>
              <span className="text-sm text-muted-foreground font-mono">
                {post.date}
              </span>
              <span className="text-sm text-muted-foreground font-mono">•</span>
              <span className="text-sm text-muted-foreground font-mono">
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-grotesk">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground">{post.description}</p>

            <div className="flex items-center gap-4 pt-4">
              <Image
                alt={post.author.name}
                className="rounded-full"
                height={48}
                src={post.author.image}
                width={48}
              />
              <div>
                <div className="font-grotesk font-bold">{post.author.name}</div>
                <div className="text-sm text-muted-foreground font-mono">
                  {post.author.role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden mb-12">
          <Image
            fill
            priority
            alt={post.title}
            className="object-cover"
            src={post.image}
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {post.content.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Chip
                key={tag}
                className=" text-foreground border border-border"
                variant="flat"
              >
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
