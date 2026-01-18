"use client";

import { motion } from "framer-motion";
import { Anchor, Facebook, Instagram, Twitter, Youtube, ArrowUp } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Houseboats", href: "#services" },
    { name: "Shikara Boats", href: "#services" },
    { name: "Speedboats", href: "#services" },
    { name: "Canoe Rides", href: "#services" },
    { name: "Packages", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#experience" },
    { name: "Our Fleet", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Booking Policy", href: "#" },
    { name: "Cancellation", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#051923] border-t border-[#00A8E8]/10">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300A8E8%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-full border border-[#00A8E8]/50 flex items-center justify-center group-hover:border-[#CFFFFF] group-hover:shadow-[0_0_20px_rgba(0,168,232,0.3)] transition-all duration-300">
                <Anchor className="w-6 h-6 text-[#00A8E8] group-hover:text-[#CFFFFF] transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-wide text-white">
                  Akalappuzha
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#00A8E8]/70 uppercase">
                  Tourism
                </span>
              </div>
            </a>

            <p className="text-[#7ab8d4] text-sm leading-relaxed mb-8 max-w-sm">
              Experience the enchanting beauty of Kerala&apos;s backwaters with our 
              premium boat services. Since 1998, we&apos;ve been creating unforgettable 
              memories on the serene waters of Alappuzha.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full border border-[#00A8E8]/30 flex items-center justify-center hover:border-[#00A8E8] hover:bg-[#00A8E8]/10 hover:shadow-[0_0_15px_rgba(0,168,232,0.3)] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-[#00A8E8]" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#7ab8d4] text-sm hover:text-[#CFFFFF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-sm tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#7ab8d4] text-sm hover:text-[#CFFFFF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-sm tracking-wider uppercase">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#7ab8d4] text-sm hover:text-[#CFFFFF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-[#00A8E8]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#7ab8d4] text-sm">
            © {new Date().getFullYear()} Akalappuzha Tourism. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[#7ab8d4] text-sm">
              A Government of Kerala Initiative
            </span>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full border border-[#00A8E8]/30 flex items-center justify-center hover:border-[#00A8E8] hover:bg-[#00A8E8]/10 hover:shadow-[0_0_15px_rgba(0,168,232,0.3)] transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-[#00A8E8]" />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px water-shimmer" />
    </footer>
  );
}
