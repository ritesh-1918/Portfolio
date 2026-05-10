import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownToLine, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";

export const About = ({ 
  imageSrc, 
  objectFit = "cover",
  zoom = false,
  imageAspect = "aspect-[4/5] md:aspect-[3/4]"
}: { 
  imageSrc?: string;
  objectFit?: "cover" | "contain";
  zoom?: boolean;
  imageAspect?: string;
}) => {
  const displayImage = imageSrc || siteConfig.about.image.src;

  return (
    <section className="py-20 relative overflow-hidden bg-black" id="about">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-6 space-y-10"
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="text-xs font-mono tracking-widest uppercase text-primary/80 bg-primary/5 border border-primary/20 px-4 py-1.5 rounded-full">
                  {siteConfig.about.badge}
                </span>
              </motion.div>
              
              <motion.h2
                className="text-3xl md:text-5xl font-bold font-grotesk tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                {siteConfig.about.title}
              </motion.h2>
            </div>

            <div className="space-y-6 max-w-2xl">
              {siteConfig.about.description.map((text, index) => (
                <motion.p
                  key={index}
                  className="text-base md:text-lg text-white/70 leading-relaxed font-sans"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Technical Datasheet Style Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl w-full">
              {siteConfig.about.quickInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="bg-[#0A0A0A]/80 p-5 md:p-7 hover:bg-primary/[0.05] transition-colors duration-500 flex flex-col justify-center min-h-[130px] md:min-h-[140px] relative group/item"
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover/item:h-full transition-all duration-500" />
                  <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-primary/60 mb-2">
                    {info.label}
                  </p>
                  <p className="text-base md:text-lg font-grotesk font-bold text-white/90 leading-snug break-words">
                    {info.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <a
                className="flex-1 group"
                download={siteConfig.about.actions.primary.downloadName}
                href={siteConfig.about.actions.primary.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  className="w-full h-14 rounded-xl bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                  size="lg"
                >
                  <span className="font-bold tracking-tight">{siteConfig.about.actions.primary.text}</span>
                  <ArrowDownToLine className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </a>
              <Link className="flex-1 group" href={siteConfig.about.actions.secondary.url}>
                <Button
                  className="w-full h-14 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3"
                  size="lg"
                  variant="secondary"
                >
                  <span className="font-bold tracking-tight text-white">{siteConfig.about.actions.secondary.text}</span>
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Component */}
          <motion.div
            className="lg:col-span-6 relative lg:sticky lg:top-32"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className={`relative ${imageAspect} rounded-3xl overflow-hidden group shadow-2xl border border-white/10 bg-[#0A0A0A]`}>
              {/* Corner Accents - subtle and elegant */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/40 z-30" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/40 z-30" />

              <Image
                priority
                alt={siteConfig.about.image.alt}
                className={`${
                  objectFit === "cover" ? "object-cover" : "object-contain p-4"
                } ${zoom ? "scale-125 group-hover:scale-110" : "scale-100 group-hover:scale-[1.02]"} object-center w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out`}
                height={1200}
                src={displayImage}
                width={1000}
              />
              
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl z-20 pointer-events-none" />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-700" />
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-primary/20 rounded-[40px] blur-3xl -z-10 group-hover:bg-primary/30 transition-all duration-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
