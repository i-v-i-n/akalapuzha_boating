"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const initialImages = [
  { src: "/a1.png", alt: "Backwaters View" },
  { src: "/boats.png", alt: "Traditional Boats" },
  { src: "/canoe.png", alt: "Canoe Ride" },
  { src: "/canoe2.png", alt: "Canoe Adventure" },
  { src: "/houseboat.png", alt: "Houseboat" },
  { src: "/island.png", alt: "Island View" },
];

const expandedImages = [
  { src: "/kaayal.png", alt: "Kaayal Waters" },
  { src: "/piller.png", alt: "Heritage Pillar" },
  { src: "/road.png", alt: "Scenic Road" },
  { src: "/thoni.png", alt: "Traditional Thoni" },
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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={containerRef}
      id="gallery"
      className="relative py-16 sm:py-24 lg:py-48 bg-[#051923] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a2a3d] to-transparent" />
      </div>
      
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00A8E8]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#007EA7]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-8 mb-8 sm:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#00A8E8] text-xs tracking-[0.3em] uppercase mb-6"
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
            className="text-[#7ab8d4] text-base sm:text-lg max-w-md lg:text-right hidden sm:block"
          >
            Every frame tells a story of serenity, adventure, and the timeless beauty 
            of Kerala&apos;s backwaters.
          </motion.p>
        </div>

        <motion.div layout style={{ x }} className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.05 * index }}
                className="relative aspect-square overflow-hidden group cursor-pointer submerged-glow"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border border-[#00A8E8]/0 group-hover:border-[#00A8E8]/30 group-hover:shadow-[inset_0_0_30px_rgba(0,168,232,0.2)] transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-8 sm:mt-16"
        >
<motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 sm:px-10 py-3 sm:py-4 border border-[#00A8E8] text-[#00A8E8] text-sm sm:text-base font-medium tracking-wider hover:bg-[#00A8E8] hover:text-[#051923] hover:shadow-[0_0_30px_rgba(0,168,232,0.4)] transition-all duration-300"
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
