"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop",
    alt: "Kerala Backwaters at Sunset",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1169&auto=format&fit=crop",
    alt: "Traditional Shikara Boat",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    alt: "Luxury Houseboat",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    alt: "Scenic Waters",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=2070&auto=format&fit=crop",
    alt: "Village Life",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop",
    alt: "Speedboat Adventure",
    span: "col-span-1 row-span-1",
  },
];

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={containerRef}
      id="gallery"
      className="relative py-32 lg:py-48 bg-[#051923] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a2a3d] to-transparent" />
      </div>
      
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00A8E8]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#007EA7]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
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
              className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-white"
            >
              Capture The <span className="text-gradient">Moments</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#7ab8d4] text-lg max-w-md lg:text-right"
          >
            Every frame tells a story of serenity, adventure, and the timeless beauty 
            of Kerala&apos;s backwaters.
          </motion.p>
        </div>

        <motion.div style={{ x }} className="grid grid-cols-3 grid-rows-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className={`${image.span} relative overflow-hidden group cursor-pointer submerged-glow`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051923]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-serif text-lg">{image.alt}</p>
              </div>
              <div className="absolute inset-0 border border-[#00A8E8]/0 group-hover:border-[#00A8E8]/30 group-hover:shadow-[inset_0_0_30px_rgba(0,168,232,0.2)] transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border border-[#00A8E8] text-[#00A8E8] font-medium tracking-wider hover:bg-[#00A8E8] hover:text-[#051923] hover:shadow-[0_0_30px_rgba(0,168,232,0.4)] transition-all duration-300"
          >
            View Full Gallery
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
