"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BubblePop {
  id: number;
  x: number;
  y: number;
}

export function BubbleCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [pops, setPops] = useState<BubblePop[]>([]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = "* { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    const newPop: BubblePop = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setPops((prev) => [...prev, newPop]);

    setTimeout(() => {
      setPops((prev) => prev.filter((p) => p.id !== newPop.id));
    }, 500);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-6 h-6 rounded-full bg-[#00A8E8]/30 border border-[#CFFFFF]/50 backdrop-blur-sm shadow-[0_0_10px_rgba(0,168,232,0.3),inset_0_-2px_4px_rgba(255,255,255,0.2),inset_0_2px_4px_rgba(0,168,232,0.2)]" />
      </motion.div>

      <AnimatePresence>
        {pops.map((pop) => (
          <motion.div
            key={pop.id}
            className="fixed pointer-events-none z-[9998]"
            initial={{
              x: pop.x - 12,
              y: pop.y - 12,
              scale: 1,
              opacity: 0.6,
            }}
            animate={{
              scale: 2.5,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <div className="w-6 h-6 rounded-full bg-[#00A8E8]/20 border border-[#CFFFFF]/30" />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
