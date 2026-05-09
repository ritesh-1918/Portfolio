"use client";

import { motion } from "framer-motion";
import { Zap, Send, Users, BookOpen, Network, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/config";

export const NewsletterBox = () => {
  const perks = [
    { icon: BookOpen, text: "Weekly deep-dives on AI, IoT & embedded systems" },
    { icon: Network, text: "Curated networking opportunities & community access" },
    { icon: Zap,      text: "Early access to new projects & open-source releases" },
    { icon: Users,    text: "Exclusive insights from the engineering trenches" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative my-16 rounded-3xl overflow-hidden border border-white/10"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-blue-900/10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.02])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.02])_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary/80">
                Pulse by Ritesh
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-grotesk text-white mb-3 mt-4">
              Stay ahead of the curve.
            </h2>
            <p className="text-white/60 text-base mb-8 max-w-xl leading-relaxed">
              Join engineers, builders, and students who get weekly breakdowns on AI, embedded hardware, and the
              opportunities that matter — straight from the field.
            </p>

            {/* Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {perks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-white/70">
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <a
              href={siteConfig.socials.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Join the Circle on Substack
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>

            <p className="text-white/30 text-xs font-mono mt-6">
              Hosted on Substack. No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
