"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Ship, Sailboat, Zap, Users, Clock, IndianRupee, ArrowRight } from "lucide-react";

const services = [
  {
    id: "houseboat",
    icon: Ship,
    name: "Houseboats",
    tagline: "Floating Luxury",
    description:
      "Experience the ultimate backwater journey aboard our traditional kettuvallams. Complete with modern amenities, private bedrooms, and authentic Kerala cuisine prepared by onboard chefs.",
    features: ["Overnight Stays", "Traditional Cuisine", "AC Rooms", "Sundeck Views"],
    pricing: "From ₹8,000/day",
    capacity: "2-14 Guests",
    duration: "12-21 Hours",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "shikara",
    icon: Sailboat,
    name: "Shikara Boats",
    tagline: "Intimate Discovery",
    description:
      "Navigate through narrow canals and village waterways that larger boats cannot reach. Perfect for photography enthusiasts and those seeking authentic local experiences.",
    features: ["Village Tours", "Bird Watching", "Sunset Rides", "Flexible Timing"],
    pricing: "From ₹500/hour",
    capacity: "4-15 Guests",
    duration: "1-4 Hours",
    image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "speedboat",
    icon: Zap,
    name: "Speedboats",
    tagline: "Thrilling Adventure",
    description:
      "For those who crave excitement, our speedboats offer exhilarating rides across the expansive backwaters. Feel the wind and spray as you race through Kerala's waterways.",
    features: ["Quick Transfers", "Water Sports", "Group Events", "Island Hopping"],
    pricing: "From ₹900/20min",
    capacity: "3-6 Guests",
    duration: "20-60 Minutes",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop",
  },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState<string>("houseboat");

  const activeData = services.find((s) => s.id === activeService) || services[0];

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative py-32 lg:py-48 bg-[#111916] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23c4a86c%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-[#c4a86c] text-xs tracking-[0.3em] uppercase mb-6"
          >
            Our Fleet
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-light text-[#f5f2eb] mb-6"
          >
            Choose Your <span className="text-gradient">Voyage</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#8a9a8f] text-lg max-w-2xl mx-auto"
          >
            From luxurious overnight houseboat experiences to intimate shikara rides 
            through hidden canals, we have the perfect vessel for every journey.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onClick={() => setActiveService(service.id)}
              className={`group flex-1 p-6 lg:p-8 text-left transition-all duration-500 border ${
                activeService === service.id
                  ? "bg-[#c4a86c]/10 border-[#c4a86c]/50"
                  : "bg-transparent border-[#c4a86c]/10 hover:border-[#c4a86c]/30"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                    activeService === service.id
                      ? "bg-[#c4a86c] text-[#0a0f0d]"
                      : "bg-[#c4a86c]/10 text-[#c4a86c]"
                  }`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <ArrowRight
                  className={`w-5 h-5 transition-all ${
                    activeService === service.id
                      ? "text-[#c4a86c] translate-x-0 opacity-100"
                      : "text-[#8a9a8f] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                />
              </div>

              <h3 className="font-serif text-2xl text-[#f5f2eb] mb-2">{service.name}</h3>
              <p className="text-[#c4a86c] text-sm tracking-wider">{service.tagline}</p>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.img
              key={activeData.image}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={activeData.image}
              alt={activeData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111916] via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex gap-4">
              <div className="flex-1 p-4 bg-[#0a0f0d]/90 backdrop-blur-sm border border-[#c4a86c]/20">
                <div className="flex items-center gap-2 mb-1">
                  <IndianRupee className="w-4 h-4 text-[#c4a86c]" />
                  <span className="text-xs text-[#8a9a8f] uppercase tracking-wider">Pricing</span>
                </div>
                <p className="text-[#f5f2eb] font-medium">{activeData.pricing}</p>
              </div>
              <div className="flex-1 p-4 bg-[#0a0f0d]/90 backdrop-blur-sm border border-[#c4a86c]/20">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-[#c4a86c]" />
                  <span className="text-xs text-[#8a9a8f] uppercase tracking-wider">Capacity</span>
                </div>
                <p className="text-[#f5f2eb] font-medium">{activeData.capacity}</p>
              </div>
              <div className="flex-1 p-4 bg-[#0a0f0d]/90 backdrop-blur-sm border border-[#c4a86c]/20">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-[#c4a86c]" />
                  <span className="text-xs text-[#8a9a8f] uppercase tracking-wider">Duration</span>
                </div>
                <p className="text-[#f5f2eb] font-medium">{activeData.duration}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-3xl lg:text-4xl text-[#f5f2eb] mb-6">
              {activeData.name}
            </h3>

            <p className="text-[#8a9a8f] text-lg leading-relaxed mb-8">
              {activeData.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {activeData.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#c4a86c] rounded-full" />
                  <span className="text-[#f5f2eb]/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#c4a86c] text-[#0a0f0d] font-medium tracking-wider hover:bg-[#d4b87c] transition-colors"
              >
                Book {activeData.name}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-[#c4a86c]/50 text-[#c4a86c] font-medium tracking-wider hover:border-[#c4a86c] transition-colors"
              >
                View Details
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
