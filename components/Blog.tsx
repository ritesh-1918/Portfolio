"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: "future-of-web-development",
    title: "The Future of Web Development",
    excerpt:
      "Exploring the latest trends and technologies shaping the future of web development.",
    category: "Development",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "/blog/future-web.jpg",
    author: {
      name: "John Doe",
      avatar: "/blog/authors/john.jpg",
      role: "Senior Developer",
    },
  },
  {
    id: "mastering-typescript",
    title: "Mastering TypeScript",
    excerpt: "A comprehensive guide to TypeScript features and best practices.",
    category: "Tutorial",
    date: "Mar 12, 2024",
    readTime: "8 min read",
    image: "/blog/typescript.jpg",
    author: {
      name: "Jane Smith",
      avatar: "/blog/authors/jane.jpg",
      role: "Tech Lead",
    },
  },
  {
    id: "ui-design-principles",
    title: "UI Design Principles",
    excerpt:
      "Essential principles for creating beautiful and functional user interfaces.",
    category: "Design",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    image: "/blog/ui-design.jpg",
    author: {
      name: "Mike Johnson",
      avatar: "/blog/authors/mike.jpg",
      role: "UI Designer",
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const Blog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
      {blogPosts.map((post, i) => (
        <motion.article
          key={post.id}
          className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
          custom={i}
          initial="hidden"
          variants={cardVariants}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <Link className="block" href={`/blog/${post.id}`}>
            <div className="relative aspect-video">
              <Image
                fill
                alt={post.title}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                src={post.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 text-sm font-mono text-gray-400">
                <span className="px-2 py-1 bg-white/10 rounded-full">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-2xl font-bold font-grotesk group-hover:text-white transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-400 font-mono text-sm line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    fill
                    alt={post.author.name}
                    className="object-cover"
                    src={post.author.avatar}
                  />
                </div>
                <div>
                  <div className="text-sm font-grotesk font-bold">
                    {post.author.name}
                  </div>
                  <div className="text-xs font-mono text-gray-400">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <motion.div
                className="flex items-center gap-2 text-sm font-mono text-white/60 group-hover:text-white transition-colors"
                initial={{ opacity: 0, x: -10 }}
                transition={{ delay: 0.2 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <span>Read More</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </motion.div>
            </div>
          </Link>

          {/* Background glow effect */}
          <motion.div
            className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
          />
        </motion.article>
      ))}
    </div>
  );
};
