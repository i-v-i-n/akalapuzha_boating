"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
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
      className="relative h-screen w-full overflow-hidden bg-[#051923]"
    >
      <div className="absolute inset-0 surface-light pointer-events-none" />

      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#007EA7]/20 via-transparent to-[#051923] z-10" />
        <img
          src="/houseboat.png"
          alt="Kerala Backwaters"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-[#00A8E8]/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-[#007EA7]/15 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <Hero3D />

<div className="absolute inset-0 z-20 pointer-events-none">
  <div className="absolute inset-0 bg-gradient-to-r from-[#051923]/80 via-transparent to-[#051923]/60" />
</div>

      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6 lg:px-12"
      >
        <div className="flex flex-col items-center text-center gap-5 md:gap-0 md:items-start md:text-left md:max-w-7xl md:w-full">
          <div className="md:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 md:mb-6"
            >
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 glass-card text-[#CFFFFF] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Kerala&apos;s Premier Backwater Experience
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl leading-[1.1] md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-medium md:leading-[0.9] text-white mb-5 md:mb-8"
            >
              Drift Into
              <br />
              <span className="text-gradient">Tranquility</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg lg:text-xl text-white/60 max-w-[85%] mx-auto md:mx-0 md:max-w-xl leading-relaxed mb-6 md:mb-12"
            >
              Experience the timeless beauty of Akalapuzha&apos;s enchanting backwaters. 
              Glide through serene canals on traditional houseboats, shikaras, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-[#00A8E8] text-[#051923] font-medium tracking-wider flex items-center justify-center gap-3 hover:bg-[#CFFFFF] hover:shadow-[0_0_40px_rgba(0,168,232,0.5)] transition-all duration-300 active:scale-95 hover:scale-102 touch-manipulation text-sm sm:text-base cursor-pointer"
              >
                Explore Services
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  console.log("Download button clicked");
                  try {
                    const link = document.createElement("a");
                      link.href = "/Kairali-Cruise.pdf";
                      link.download = "Kairali-Cruise.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    console.log("Download initiated");
                  } catch (error) {
                    console.error("Download failed:", error);
                      window.open("/Kairali-Cruise.pdf", "_blank");
                  }
                }}
                className="group px-6 sm:px-8 py-3 sm:py-4 glass-card text-white font-medium tracking-wider flex items-center justify-center gap-3 hover:border-[#00A8E8]/50 transition-all duration-300 active:scale-95 hover:scale-102 touch-manipulation text-sm sm:text-base cursor-pointer"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A8E8]" />
                Download Brochure
              </button>
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
        className="absolute bottom-8 w-full z-20 flex justify-center"
      >
        <motion.button
          onClick={scrollToExperience}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 sm:gap-2 text-white/50 hover:text-[#CFFFFF] transition-colors touch-manipulation cursor-pointer"
        >
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase">Discover</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </motion.div>

      <div className="grain-overlay" />
    </section>
  );
}