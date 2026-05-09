"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export const GithubActivity = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="github">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary/80 font-mono text-[10px] sm:text-sm"
            >
              <Github size={14} className="sm:w-4 sm:h-4" />
              <span>Open Source & Activity</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-grotesk text-white"
            >
              Code Contribution Graph
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto px-4"
            >
              Tracking my daily commitment to building, learning, and contributing to the global tech ecosystem.
            </motion.p>
          </div>

          {/* Calendar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl overflow-x-auto custom-scrollbar"
          >
            <div className="min-w-[800px] md:min-w-0 flex justify-center min-h-[160px] items-center">
              {isMounted ? (
                <GitHubCalendar
                  username="ritesh-1918"
                  blockSize={12}
                  blockMargin={5}
                  fontSize={14}
                  theme={{
                    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                  }}
                  labels={{
                    totalCount: '{{count}} contributions in the last year',
                  }}
                />
              ) : (
                <div className="w-full h-32 animate-pulse bg-white/5 rounded-lg" />
              )}
            </div>
            
            {/* Legend/Info */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/5">
              <div className="flex gap-8">
                <div className="space-y-1">
                  <p className="text-xs font-mono text-white/30 uppercase tracking-wider">Consistency</p>
                  <p className="text-sm font-bold text-white/80">Daily Commits</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono text-white/30 uppercase tracking-wider">Environment</p>
                  <p className="text-sm font-bold text-white/80">Git Hub / CI-CD</p>
                </div>
              </div>
              
              <a 
                href="https://github.com/ritesh-1918" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 group"
              >
                <span>Follow on GitHub</span>
                <Github size={16} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
