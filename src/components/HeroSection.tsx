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
      className="relative min-h-screen overflow-hidden bg-[#0a0f0d]"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d] via-transparent to-[#0a0f0d] z-10" />
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
          alt="Kerala Backwaters"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      <Hero3D />

      <div className="absolute inset-0 z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0d]/80 via-transparent to-[#0a0f0d]/60" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-30 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 border border-[#c4a86c]/30 text-[#c4a86c] text-xs tracking-[0.3em] uppercase">
                Kerala&apos;s Premier Backwater Experience
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] text-[#f5f2eb] mb-8"
            >
              Drift Into
              <br />
              <span className="text-gradient">Tranquility</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-[#f5f2eb]/60 max-w-xl leading-relaxed mb-12"
            >
              Experience the timeless beauty of Alappuzha&apos;s enchanting backwaters. 
              Glide through serene canals on traditional houseboats, shikaras, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-[#c4a86c] text-[#0a0f0d] font-medium tracking-wider flex items-center justify-center gap-3 hover:bg-[#d4b87c] transition-colors"
              >
                Explore Services
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 border border-[#f5f2eb]/30 text-[#f5f2eb] font-medium tracking-wider flex items-center justify-center gap-3 hover:border-[#f5f2eb] transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-[#f5f2eb]/50 flex items-center justify-center group-hover:border-[#f5f2eb] transition-colors">
                  <Play className="w-4 h-4 ml-0.5" />
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
            <span className="text-[10px] tracking-[0.2em] text-[#c4a86c]/70 uppercase rotate-90 origin-center mb-8">
              Scroll
            </span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-[#c4a86c]/50 to-transparent" />
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
          className="flex flex-col items-center gap-2 text-[#f5f2eb]/50 hover:text-[#f5f2eb] transition-colors"
        >
          <span className="text-xs tracking-[0.2em] uppercase">Discover</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>

      <div className="grain-overlay" />
    </section>
  );
}
