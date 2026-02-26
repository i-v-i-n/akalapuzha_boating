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
    value: "Finishing Point, Akalappuzha, Kerala 688012",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9846 474 400",
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
    
    const message = `*New Booking Inquiry*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Date:* ${formData.date}
*Guests:* ${formData.guests}
*Boat Type:* ${formData.boatType}
*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    // Using the phone number from contactInfo, cleaned for WhatsApp URL
    const whatsappNumber = "+919846474400"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
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
        className="relative py-16 sm:py-24 lg:py-32 xl:py-48 bg-[#0a2a3d] overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2a3d] via-[#0a2a3d] to-transparent" />
        </div>
        
        <div className="absolute top-0 left-0 w-full h-16 sm:h-24 lg:h-32 bg-gradient-to-b from-[#051923] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-[#051923] to-transparent" />
        
        <div className="absolute top-1/4 right-1/4 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-[#00A8E8]/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-block text-[#00A8E8] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6"
              >
                Get In Touch
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6 sm:mb-8"
              >
                Begin Your
                <br />
                <span className="text-gradient">Journey Today</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#7ab8d4] text-base sm:text-lg leading-relaxed mb-8 sm:mb-12"
              >
                Ready to experience the magic of Kerala&apos;s backwaters? Contact us to 
                book your voyage or inquire about our services. Our team is here to 
                help you plan the perfect backwater adventure.
              </motion.p>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#00A8E8]/30 flex items-center justify-center group-hover:border-[#00A8E8] group-hover:shadow-[0_0_20px_rgba(0,168,232,0.3)] transition-all duration-300 flex-shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A8E8]" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-[#7ab8d4] uppercase tracking-wider mb-0.5 sm:mb-1">
                        {item.label}
                      </p>
                      <p className="text-white text-sm sm:text-base">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="p-4 sm:p-6 glass-card"
              >
                <h4 className="font-serif text-lg sm:text-xl text-white mb-2 sm:mb-3">
                  House Boat Pre-paid Counter
                </h4>
                <p className="text-[#7ab8d4] text-xs sm:text-sm leading-relaxed">
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
              className="p-4 sm:p-6 lg:p-8 xl:p-10 glass-card"
            >
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-6 sm:mb-8">
                Book Your Experience
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block text-[10px] sm:text-xs text-[#7ab8d4] uppercase tracking-wider mb-1.5 sm:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#051923]/50 border border-[#00A8E8]/20 text-white text-sm sm:text-base placeholder-[#7ab8d4]/50 focus:border-[#00A8E8] focus:outline-none focus:shadow-[0_0_10px_rgba(0,168,232,0.2)] transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs text-[#7ab8d4] uppercase tracking-wider mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#051923]/50 border border-[#00A8E8]/20 text-white text-sm sm:text-base placeholder-[#7ab8d4]/50 focus:border-[#00A8E8] focus:outline-none focus:shadow-[0_0_10px_rgba(0,168,232,0.2)] transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block text-[10px] sm:text-xs text-[#7ab8d4] uppercase tracking-wider mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7ab8d4]" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-[#051923]/50 border border-[#00A8E8]/20 text-white text-sm sm:text-base placeholder-[#7ab8d4]/50 focus:border-[#00A8E8] focus:outline-none focus:shadow-[0_0_10px_rgba(0,168,232,0.2)] transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs text-[#7ab8d4] uppercase tracking-wider mb-1.5 sm:mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7ab8d4]" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-[#051923]/50 border border-[#00A8E8]/20 text-white text-sm sm:text-base focus:border-[#00A8E8] focus:outline-none focus:shadow-[0_0_10px_rgba(0,168,232,0.2)] transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block text-[10px] sm:text-xs text-[#7ab8d4] uppercase tracking-wider mb-1.5 sm:mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7ab8d4]" />
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-[#051923]/50 border border-[#00A8E8]/20 text-white text-sm sm:text-base placeholder-[#7ab8d4]/50 focus:border-[#00A8E8] focus:outline-none focus:shadow-[0_0_10px_rgba(0,168,232,0.2)] transition-all"
                      placeholder="2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs text-[#7ab8d4] uppercase tracking-wider mb-1.5 sm:mb-2">
                    Boat Type
                  </label>
                  <div className="relative">
                    <Ship className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7ab8d4]" />
                    <select
                      name="boatType"
                      value={formData.boatType}
                      onChange={handleChange}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-[#051923]/50 border border-[#00A8E8]/20 text-white text-sm sm:text-base focus:border-[#00A8E8] focus:outline-none focus:shadow-[0_0_10px_rgba(0,168,232,0.2)] transition-all appearance-none"
                    >
                      <option value="" className="bg-[#051923]">
                        Select boat type
                      </option>
                      {boatTypes.map((type) => (
                        <option
                          key={type.value}
                          value={type.value}
                          className="bg-[#051923]"
                        >
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <label className="block text-[10px] sm:text-xs text-[#7ab8d4] uppercase tracking-wider mb-1.5 sm:mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#051923]/50 border border-[#00A8E8]/20 text-white text-sm sm:text-base placeholder-[#7ab8d4]/50 focus:border-[#00A8E8] focus:outline-none focus:shadow-[0_0_10px_rgba(0,168,232,0.2)] transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#00A8E8] text-[#051923] font-medium tracking-wider flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#CFFFFF] hover:shadow-[0_0_30px_rgba(0,168,232,0.4)] transition-all duration-300 touch-manipulation text-sm sm:text-base"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
