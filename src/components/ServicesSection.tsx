"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Ship, Sailboat, Users, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: "houseboat",
    icon: Ship,
    name: "Houseboats",
    tagline: "Floating Luxury",
    description:
      "Experience the ultimate backwater journey aboard our traditional kettuvallams. Complete with modern amenities, private bedrooms, and authentic Kerala cuisine prepared by onboard chefs.",
    features: ["Overnight Stays", "Traditional Cuisine", "AC Rooms", "Sundeck Views"],
    capacity: "2-14 Guests",
    duration: "12-21 Hours",
    images: ["/boat.jpeg", "/inside.png"],
  },
  {
    id: "shikara",
    icon: Sailboat,
    name: "Shikara Boats",
    tagline: "Intimate Discovery",
    description:
      "Navigate through narrow canals and village waterways that larger boats cannot reach. Perfect for photography enthusiasts and those seeking authentic local experiences.",
    features: ["Village Tours", "Bird Watching", "Sunset Rides", "Flexible Timing"],
    capacity: "4-15 Guests",
    duration: "1-4 Hours",
    images: ["/ext.png", "/color.png"],
  },
];

function ImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          src={images[current]}
          alt={`${name} ${current + 1}`}
          className="w-full h-full object-cover absolute inset-0"
        />
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 touch-manipulation z-10"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 touch-manipulation z-10"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
              i === current ? "bg-[#00A8E8] w-4 sm:w-5" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState<string>("houseboat");

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const activeData = services.find((s) => s.id === activeService) || services[0];

  return (
<section
        ref={containerRef}
        id="services"
        className="relative py-16 sm:py-24 lg:py-32 xl:py-48 bg-[#0a2a3d] overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300A8E8%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        </div>
        
        <div className="absolute top-0 left-0 w-full h-16 sm:h-24 lg:h-32 bg-gradient-to-b from-[#051923] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-[#051923] to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center mb-10 sm:mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#00A8E8] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6"
            >
              Our Fleet
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-white mb-4 sm:mb-6"
            >
              Choose Your <span className="text-gradient">Voyage</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#7ab8d4] text-base sm:text-lg max-w-2xl mx-auto px-4"
            >
              From luxurious overnight houseboat experiences to intimate shikara rides 
              through hidden canals, we have the perfect vessel for every journey.
            </motion.p>
          </div>

        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onClick={() => handleServiceClick(service.id)}
              className={`group flex-1 p-4 sm:p-6 lg:p-8 text-left transition-all duration-500 touch-manipulation ${
                activeService === service.id
                  ? "glass-card border-[#00A8E8]/50 shadow-[0_0_30px_rgba(0,168,232,0.2)]"
                  : "glass-card hover:border-[#00A8E8]/30"
              }`}
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeService === service.id
                      ? "bg-[#00A8E8] text-[#051923] shadow-[0_0_20px_rgba(0,168,232,0.4)]"
                      : "bg-[#00A8E8]/10 text-[#00A8E8]"
                  }`}
                >
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <ArrowRight
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
                    activeService === service.id
                      ? "text-[#00A8E8] translate-x-0 opacity-100"
                      : "text-[#7ab8d4] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-white mb-1 sm:mb-2">{service.name}</h3>
              <p className="text-[#00A8E8] text-xs sm:text-sm tracking-wider">{service.tagline}</p>
            </motion.button>
          ))}
        </div>

<motion.div
              ref={detailsRef}
              key={activeService}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden submerged-glow">
                <ImageCarousel images={activeData.images} name={activeData.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a3d] via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">
                {activeData.name}
              </h3>

              <p className="text-[#7ab8d4] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                {activeData.description}
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {activeData.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00A8E8] rounded-full shadow-[0_0_10px_rgba(0,168,232,0.5)]" />
                    <span className="text-white/80 text-xs sm:text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
<motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-[#00A8E8] text-[#051923] font-medium tracking-wider hover:bg-[#CFFFFF] hover:shadow-[0_0_30px_rgba(0,168,232,0.4)] transition-all duration-300 touch-manipulation text-sm sm:text-base"
                  >
                    Book {activeData.name}
                  </motion.button>
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
