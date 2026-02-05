"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Compass, Waves, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  { src: "/a1.png", alt: "Kerala Backwaters" },
  { src: "/boats.png", alt: "Traditional Boats" },
  { src: "/canoe.png", alt: "Canoe Experience" },
  { src: "/canoe2.png", alt: "Canoe Adventure" },
  { src: "/houseboat.png", alt: "Houseboat" },
  { src: "/island.png", alt: "Island View" },
  { src: "/kaayal.png", alt: "Kaayal Waters" },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "10K+", label: "Happy Travelers" },
  { value: "50+", label: "Boats & Shikaras" },
  { value: "100%", label: "Satisfaction" },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
<section
        ref={containerRef}
        id="experience"
        className="relative py-16 sm:py-24 lg:py-32 xl:py-48 bg-[#051923] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#00A8E8]/20 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#007EA7]/20 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
<motion.div
              style={{ y: y1 }}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden submerged-glow"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={carouselImages[currentIndex].src}
                    alt={carouselImages[currentIndex].alt}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#051923] via-transparent to-transparent" />
                
                {/* Carousel Controls */}
                <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 z-10">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#051923]/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-[#00A8E8]/40 transition-all touch-manipulation"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#051923]/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-[#00A8E8]/40 transition-all touch-manipulation"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all touch-manipulation ${
                        index === currentIndex
                          ? "bg-[#00A8E8] w-6"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-2 sm:-right-4 lg:-right-16 w-28 sm:w-40 lg:w-64 aspect-square overflow-hidden border-4 sm:border-6 lg:border-8 border-[#051923] submerged-glow"
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
              className="absolute -top-4 sm:-top-6 lg:-top-8 -left-2 sm:-left-4 lg:-left-8 p-3 sm:p-4 lg:p-6 glass-card"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-[#00A8E8]/20 flex items-center justify-center">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#00A8E8]" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-serif text-white">Since 1998</p>
                  <p className="text-[10px] sm:text-xs text-[#7ab8d4] tracking-wider uppercase">Trusted Service</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-[#00A8E8] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6"
            >
              About Akalappuzha Tourism
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6 sm:mb-8"
            >
              Where Nature Meets
              <br />
              <span className="text-gradient">Timeless Tradition</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#7ab8d4] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
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
              className="text-[#7ab8d4] text-base sm:text-lg leading-relaxed mb-8 sm:mb-12"
            >
              Watch fishermen cast their nets, children playing on the banks, and 
              experience the rhythm of life that has remained unchanged for centuries. 
              Every journey is a story waiting to unfold.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 sm:gap-6 mb-8 sm:mb-12"
            >
              {[
                { icon: Waves, text: "Serene Waters" },
                { icon: Sparkles, text: "Authentic Experience" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#00A8E8]/30 flex items-center justify-center">
                    <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#00A8E8]" />
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#00A8E8] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#7ab8d4] tracking-wider uppercase">
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
