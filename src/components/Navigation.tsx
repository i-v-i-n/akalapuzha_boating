"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Anchor } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "wet-glass"
            : "bg-transparent"
        }`}
      >
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
              <motion.a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#hero");
                }}
                className="flex items-center gap-2 sm:gap-3 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#00A8E8]/50 flex items-center justify-center group-hover:border-[#CFFFFF] group-hover:shadow-[0_0_20px_rgba(0,168,232,0.3)] transition-all duration-300">
                  <Anchor className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A8E8] group-hover:text-[#CFFFFF] transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg sm:text-xl lg:text-2xl tracking-wide text-white">
                    Akalapuzha
                  </span>
                  <span className="text-[8px] sm:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-[#00A8E8]/70 uppercase">
                    Tourism
                  </span>
                </div>
              </motion.a>

            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative text-sm tracking-wider text-white/70 hover:text-[#CFFFFF] transition-colors group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#00A8E8] to-[#CFFFFF] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="px-6 py-2.5 border border-[#00A8E8] text-[#00A8E8] text-sm tracking-wider hover:bg-[#00A8E8] hover:text-[#051923] hover:shadow-[0_0_30px_rgba(0,168,232,0.4)] transition-all duration-300"
              >
                Book Now
              </motion.a>
            </div>

<button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center touch-manipulation"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                )}
              </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 wet-glass lg:hidden"
          >
<div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-8 px-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="font-serif text-2xl sm:text-3xl text-white hover:text-[#CFFFFF] transition-colors touch-manipulation"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-4 px-6 sm:px-8 py-3 border border-[#00A8E8] text-[#00A8E8] text-base sm:text-lg tracking-wider hover:bg-[#00A8E8] hover:text-[#051923] transition-all duration-300 touch-manipulation"
                >
                  Book Now
                </motion.a>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
