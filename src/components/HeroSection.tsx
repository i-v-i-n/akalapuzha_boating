"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import dynamic from "next/dynamic";

const Hero3D = dynamic(
  () => import("./Hero3D").then((mod) => ({ default: mod.Hero3D })),
  { ssr: false }
);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const scrollToExperience = () => {
    const element = document.querySelector("#experience");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#051923]"
    >
      <div className="absolute inset-0 surface-light pointer-events-none" />
      
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#007EA7]/20 via-transparent to-[#051923] z-10" />
        <img
          src="/houseboat.png"
          alt="Kerala Backwaters"
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>

      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00A8E8]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#007EA7]/15 rounded-full blur-[120px] pointer-events-none" />

      <Hero3D />

      <div className="absolute inset-0 z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#051923]/80 via-transparent to-[#051923]/60" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-30 min-h-screen flex items-center"
      >
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-4 sm:mb-6"
              >
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 glass-card text-[#CFFFFF] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                  Kerala&apos;s Premier Backwater Experience
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-medium leading-[0.9] text-white mb-6 sm:mb-8"
              >
                Drift Into
                <br />
                <span className="text-gradient">Tranquility</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-base sm:text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-8 sm:mb-12"
              >
                Experience the timeless beauty of Akalappuzha&apos;s enchanting backwaters. 
                Glide through serene canals on traditional houseboats, shikaras, and more.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
<motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                    className="group px-6 sm:px-8 py-3 sm:py-4 bg-[#00A8E8] text-[#051923] font-medium tracking-wider flex items-center justify-center gap-3 hover:bg-[#CFFFFF] hover:shadow-[0_0_40px_rgba(0,168,232,0.5)] transition-all duration-300 text-sm sm:text-base"
                  >
                    Explore Services
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-6 sm:px-8 py-3 sm:py-4 glass-card text-white font-medium tracking-wider flex items-center justify-center gap-3 hover:border-[#00A8E8]/50 transition-all duration-300 text-sm sm:text-base"
                >
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-[#00A8E8]/50 flex items-center justify-center group-hover:border-[#CFFFFF] group-hover:shadow-[0_0_20px_rgba(0,168,232,0.3)] transition-all duration-300">
                    <Play className="w-3 sm:w-4 h-3 sm:h-4 ml-0.5 text-[#00A8E8]" />
                  </div>
                  Watch Journey
                </motion.button>
              </motion.div>
            </div>
          </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] text-[#00A8E8]/70 uppercase rotate-90 origin-center mb-8">
              Scroll
            </span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-[#00A8E8]/50 to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.button
          onClick={scrollToExperience}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-[#CFFFFF] transition-colors"
        >
          <span className="text-xs tracking-[0.2em] uppercase">Discover</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>

      <div className="grain-overlay" />
    </section>
  );
}
