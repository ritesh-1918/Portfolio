"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Calendar,
  Clock,
  Share2,
  Twitter,
  Github,
  Linkedin,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { NewsletterBox } from "@/components/NewsletterBox";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { ContentBlock } from "@/types/blog";
import { blogPosts } from "@/data/blog-posts";

const ContentRenderer = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "heading":
      return block.level === 1 ? (
        <h1 className="text-3xl font-bold font-grotesk mt-8 mb-4">
          {block.content}
        </h1>
      ) : (
        <h2 className="text-2xl font-bold font-grotesk mt-6 mb-3">
          {block.content}
        </h2>
      );

    case "paragraph":
      return (
        <p className="text-white/80 leading-relaxed mb-4">{block.content}</p>
      );

    case "image":
      return (
        <figure className="my-8">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              fill
              alt={block.caption || ""}
              className="object-cover"
              src={block.url}
            />
          </div>
          {block.caption && (
            <figcaption className="text-center text-sm text-white/60 mt-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "code":
      return (
        <div className="my-6">
          <SyntaxHighlighter
            className="rounded-xl !bg-white/5 !p-4"
            language={block.language || "javascript"}
            style={atomDark}
          >
            {block.content}
          </SyntaxHighlighter>
        </div>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-white/70">
          {block.content}
        </blockquote>
      );

    case "list":
      return (
        <ul className="list-disc list-inside space-y-2 my-4 text-white/80">
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );

    case "video":
      return (
        <div className="relative aspect-video rounded-xl overflow-hidden my-8">
          <iframe
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            src={block.url}
            title={block.caption || "Video"}
          />
          {block.caption && (
            <figcaption className="text-center text-sm text-white/60 mt-2">
              {block.caption}
            </figcaption>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default function Page() {
  const params = useParams();
  const [copied, setCopied] = useState(false);
  const post = blogPosts.find((post) => post.slug === params.slug);
  const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-white/60 mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link className="text-primary" href="/blog">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] mb-12">
        <div className="absolute inset-0">
          <Image
            fill
            priority
            alt={post.title}
            className="object-cover brightness-50"
            src={post.image}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
                href="/blog"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
              >
                <Chip className=" text-white bg-zinc-900/70 mb-4">
                  {post.category}
                </Chip>
                <h1 className="text-4xl md:text-5xl font-bold font-grotesk text-white mb-4">
                  {post.title}
                </h1>
                <p className="text-xl text-white/70 mb-6">{post.description}</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        fill
                        alt={post.author.name}
                        className="object-cover"
                        src={post.author.image}
                      />
                    </div>
                    <div>
                      <div className="font-medium">{post.author.name}</div>
                      <div className="text-sm text-white/60">
                        {post.author.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/50 backdrop-blur-xl border-white/10 p-8">
            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              {post.content.map((block: ContentBlock, index: number) => (
                <ContentRenderer key={index} block={block} />
              ))}
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-white/10">
              {post.tags.map((tag: string) => (
                <Chip key={tag} className="bg-zinc-900/70 text-white/70">
                  {tag}
                </Chip>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    fill
                    alt={post.author.name}
                    className="object-cover"
                    src={post.author.image}
                  />
                </div>
                <div>
                  <h3 className="font-bold font-grotesk text-lg mb-2">
                    {post.author.name}
                  </h3>
                  <p className="text-white/70 mb-4">{post.author.bio}</p>
                  <div className="flex gap-3">
                    <Link
                      className="text-white/60 hover:text-primary transition-colors"
                      href={post.author.social.twitter}
                      target="_blank"
                    >
                      <Twitter className="w-5 h-5" />
                    </Link>
                    <Link
                      className="text-white/60 hover:text-primary transition-colors"
                      href={post.author.social.github}
                      target="_blank"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      className="text-white/60 hover:text-primary transition-colors"
                      href={post.author.social.linkedin}
                      target="_blank"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8 pt-8 border-t border-white/10">
              {/* Medium Button */}
              {post.demoUrl && (
                <a
                  href={post.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-white transition-all group"
                >
                  {/* Medium "M" SVG logo */}
                  <svg viewBox="0 0 195 195" className="w-5 h-5 flex-shrink-0 fill-white opacity-70 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h195v195H0z" fill="none"/>
                    <ellipse cx="55" cy="97.5" rx="35" ry="42.5"/>
                    <ellipse cx="130" cy="97.5" rx="20" ry="40"/>
                    <ellipse cx="175" cy="97.5" rx="10" ry="35"/>
                  </svg>
                  <span className="font-semibold text-base">Read on Medium</span>
                </a>
              )}

              {/* Share Button */}
              <button
                onClick={async () => {
                  const url = typeof window !== "undefined" ? window.location.href : "";
                  const shareData = {
                    title: post.title,
                    text: post.description,
                    url,
                  };
                  if (typeof navigator !== "undefined" && navigator.share) {
                    try { await navigator.share(shareData); } catch {}
                  } else {
                    await navigator.clipboard.writeText(url);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2500);
                  }
                }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 text-white/70 hover:text-white transition-all"
              >
                {copied ? <Check className="w-5 h-5 text-primary" /> : <Share2 className="w-5 h-5" />}
                <span className="font-medium">{copied ? "Link Copied!" : "Share Article"}</span>
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <NewsletterBox />
        </div>
      </div>

      {/* Navigation */}
      <section className="container mx-auto px-4 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevPost && (
              <Link className="group" href={`/blog/${prevPost.slug}`}>
                <Card className="bg-black/50 backdrop-blur-xl border-white/10 h-full hover:border-primary/20 transition-all">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-white/60 font-mono text-sm mb-4">
                      <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      Previous Post
                    </div>
                    <h3 className="font-grotesk font-bold group-hover:text-primary transition-colors">
                      {prevPost.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            )}

            {nextPost && (
              <Link className="group" href={`/blog/${nextPost.slug}`}>
                <Card className="bg-black/50 backdrop-blur-xl border-white/10 h-full hover:border-primary/20 transition-all">
                  <div className="p-6">
                    <div className="flex items-center justify-end gap-2 text-white/60 font-mono text-sm mb-4">
                      Next Post
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="font-grotesk font-bold text-right group-hover:text-primary transition-colors">
                      {nextPost.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
