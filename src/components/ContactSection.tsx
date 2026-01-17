"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Calendar,
  Users,
  Ship,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Finishing Point, Alappuzha, Kerala 688012",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 477 225 3308",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@akalappuzhatourism.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "6:00 AM - 9:00 PM (All Days)",
  },
];

const boatTypes = [
  { value: "houseboat", label: "Houseboat" },
  { value: "shikara", label: "Shikara Boat" },
  { value: "speedboat", label: "Speedboat" },
  { value: "canoe", label: "Canoe" },
];

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    boatType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-32 lg:py-48 bg-[#111916] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111916] via-[#111916] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#c4a86c] text-xs tracking-[0.3em] uppercase mb-6"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#f5f2eb] leading-tight mb-8"
            >
              Begin Your
              <br />
              <span className="text-gradient">Journey Today</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#8a9a8f] text-lg leading-relaxed mb-12"
            >
              Ready to experience the magic of Kerala&apos;s backwaters? Contact us to 
              book your voyage or inquire about our services. Our team is here to 
              help you plan the perfect backwater adventure.
            </motion.p>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-[#c4a86c]/30 flex items-center justify-center group-hover:border-[#c4a86c] transition-colors">
                    <item.icon className="w-5 h-5 text-[#c4a86c]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8a9a8f] uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-[#f5f2eb]">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="p-6 bg-[#0a0f0d] border border-[#c4a86c]/20"
            >
              <h4 className="font-serif text-xl text-[#f5f2eb] mb-3">
                House Boat Pre-paid Counter
              </h4>
              <p className="text-[#8a9a8f] text-sm leading-relaxed">
                Visit our DTPC Pre-paid Counter at Finishing Point for trusted rates 
                and reliable service. Government-regulated pricing ensures you get 
                the best value.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 lg:p-10 bg-[#0a0f0d] border border-[#c4a86c]/20"
            >
              <h3 className="font-serif text-2xl text-[#f5f2eb] mb-8">
                Book Your Experience
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs text-[#8a9a8f] uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-[#c4a86c]/20 text-[#f5f2eb] focus:border-[#c4a86c] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#8a9a8f] uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-[#c4a86c]/20 text-[#f5f2eb] focus:border-[#c4a86c] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs text-[#8a9a8f] uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a9a8f]" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-transparent border border-[#c4a86c]/20 text-[#f5f2eb] focus:border-[#c4a86c] focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#8a9a8f] uppercase tracking-wider mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a9a8f]" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-transparent border border-[#c4a86c]/20 text-[#f5f2eb] focus:border-[#c4a86c] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs text-[#8a9a8f] uppercase tracking-wider mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a9a8f]" />
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      className="w-full pl-12 pr-4 py-3 bg-transparent border border-[#c4a86c]/20 text-[#f5f2eb] focus:border-[#c4a86c] focus:outline-none transition-colors"
                      placeholder="2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#8a9a8f] uppercase tracking-wider mb-2">
                    Boat Type
                  </label>
                  <div className="relative">
                    <Ship className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a9a8f]" />
                    <select
                      name="boatType"
                      value={formData.boatType}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-transparent border border-[#c4a86c]/20 text-[#f5f2eb] focus:border-[#c4a86c] focus:outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0a0f0d]">
                        Select boat type
                      </option>
                      {boatTypes.map((type) => (
                        <option
                          key={type.value}
                          value={type.value}
                          className="bg-[#0a0f0d]"
                        >
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs text-[#8a9a8f] uppercase tracking-wider mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-[#c4a86c]/20 text-[#f5f2eb] focus:border-[#c4a86c] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-[#c4a86c] text-[#0a0f0d] font-medium tracking-wider flex items-center justify-center gap-3 hover:bg-[#d4b87c] transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
