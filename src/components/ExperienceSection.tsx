"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Compass, Waves, Sparkles } from "lucide-react";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "10K+", label: "Happy Travelers" },
  { value: "50+", label: "Boats & Shikaras" },
  { value: "100%", label: "Satisfaction" },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-32 lg:py-48 bg-[#051923] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A8E8]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#007EA7]/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            style={{ y: y1 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden submerged-glow"
            >
              <img
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop"
                alt="Kerala Backwaters Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051923] via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-8 -right-8 lg:-right-16 w-48 lg:w-64 aspect-square overflow-hidden border-8 border-[#051923] submerged-glow"
            >
              <img
                src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1169&auto=format&fit=crop"
                alt="Traditional Shikara"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-8 -left-4 lg:-left-8 p-6 glass-card"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#00A8E8]/20 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-[#00A8E8]" />
                </div>
                <div>
                  <p className="text-2xl font-serif text-white">Since 1998</p>
                  <p className="text-xs text-[#7ab8d4] tracking-wider uppercase">Trusted Service</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: y2 }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-[#00A8E8] text-xs tracking-[0.3em] uppercase mb-6"
            >
              About Akalappuzha Tourism
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8"
            >
              Where Nature Meets
              <br />
              <span className="text-gradient">Timeless Tradition</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#7ab8d4] text-lg leading-relaxed mb-8"
            >
              Nestled in the heart of Kerala&apos;s Venice of the East, Akalappuzha Tourism 
              offers an unparalleled journey through the mystical backwaters. Our fleet of 
              traditional houseboats, elegant shikaras, and modern speedboats provide the 
              perfect vessel for your adventure.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#7ab8d4] text-lg leading-relaxed mb-12"
            >
              Watch fishermen cast their nets, children playing on the banks, and 
              experience the rhythm of life that has remained unchanged for centuries. 
              Every journey is a story waiting to unfold.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-6 mb-12"
            >
              {[
                { icon: Waves, text: "Serene Waters" },
                { icon: Sparkles, text: "Authentic Experience" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#00A8E8]/30 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-[#00A8E8]" />
                  </div>
                  <span className="text-white/80 text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <p className="font-serif text-3xl lg:text-4xl text-[#00A8E8] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#7ab8d4] tracking-wider uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
