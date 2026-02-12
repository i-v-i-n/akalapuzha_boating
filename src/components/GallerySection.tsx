"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const initialImages = [
  { src: "/a1.png", span: "col-span-2 row-span-2" },
  { src: "/boats.png", span: "col-span-1 row-span-1" },
  { src: "/canoe.png", span: "col-span-1 row-span-1" },
  { src: "/canoe2.png", span: "col-span-1 row-span-2 hidden sm:block" },
  { src: "/island.png", span: "col-span-1 row-span-1" },
];

const expandedImages = [
  { src: "/kaayal.png", span: "col-span-1 row-span-1" },
  { src: "/piller.png", span: "col-span-1 row-span-1" },
  { src: "/road.png",  span: "col-span-1 row-span-1" },
  { src: "/thoni.png", span: "col-span-1 row-span-1" },
];

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const galleryImages = isExpanded ? [...initialImages, ...expandedImages] : initialImages;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <section
      ref={containerRef}
      id="gallery"
      className="relative py-16 sm:py-24 lg:py-32 xl:py-48 bg-[#051923] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a2a3d] to-transparent" />
      </div>
      
      <div className="absolute top-1/3 left-1/4 w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-[#00A8E8]/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-[#007EA7]/15 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#00A8E8] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6"
            >
              Visual Journey
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-white"
            >
              Capture The <span className="text-gradient">Moments</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#7ab8d4] text-base sm:text-lg max-w-md lg:text-right"
          >
            Every frame tells a story of serenity, adventure, and the timeless beauty 
            of Kerala&apos;s backwaters.
          </motion.p>
        </div>

        <motion.div layout style={{ x }} className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className={`${image.span} relative overflow-hidden group cursor-pointer submerged-glow aspect-square sm:aspect-auto`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051923]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-serif text-sm sm:text-base lg:text-lg">{image.alt}</p>
              </div>
              <div className="absolute inset-0 border border-[#00A8E8]/0 group-hover:border-[#00A8E8]/30 group-hover:shadow-[inset_0_0_30px_rgba(0,168,232,0.2)] transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-10 sm:mt-12 lg:mt-16"
        >
<motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border border-[#00A8E8] text-[#00A8E8] font-medium tracking-wider hover:bg-[#00A8E8] hover:text-[#051923] hover:shadow-[0_0_30px_rgba(0,168,232,0.4)] transition-all duration-300 touch-manipulation text-sm sm:text-base"
            >
              {isExpanded ? "Show Less" : "View Full Gallery"}
            </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-px water-shimmer"
      />
    </section>
  );
}
