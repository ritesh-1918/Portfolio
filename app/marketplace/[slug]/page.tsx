"use client";

import { Badge } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface MarketplaceItem {
  slug: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  tags: string[];
  seller: {
    name: string;
    image: string;
    rating: number;
  };
}

const marketplaceItems: MarketplaceItem[] = [
  {
    slug: "premium-wordpress-theme",
    title: "Premium WordPress Theme",
    description:
      "A modern and responsive WordPress theme perfect for business websites.",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    category: "WordPress",
    tags: ["WordPress", "Theme", "Business"],
    seller: {
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 4.8,
    },
  },
];

export default function Page() {
  const params = useParams();
  const item = marketplaceItems.find((item) => item.slug === params.slug);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="space-y-8 mb-12">
          <Link
            className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
            href="/marketplace"
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
            Back to Marketplace
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge
                className="bg-primary/90 text-primary-foreground"
                variant="flat"
              >
                {item.category}
              </Badge>
              <span className="text-sm text-muted-foreground font-mono">
                {item.price}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-grotesk">
              {item.title}
            </h1>

            <p className="text-xl text-muted-foreground">{item.description}</p>

            <div className="flex items-center gap-4 pt-4">
              <Image
                alt={item.seller.name}
                className="rounded-full"
                height={48}
                src={item.seller.image}
                width={48}
              />
              <div>
                <div className="font-grotesk font-bold">{item.seller.name}</div>
                <div className="text-sm text-muted-foreground font-mono">
                  Rating: {item.seller.rating}/5
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
            alt={item.title}
            className="object-cover"
            src={item.image}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-secondary/50 text-foreground border border-border"
                variant="flat"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
