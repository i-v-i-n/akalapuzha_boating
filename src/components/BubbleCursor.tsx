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
  const [isPopped, setIsPopped] = useState(false);
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
    setIsPopped(true);

    setTimeout(() => {
      setPops((prev) => prev.filter((p) => p.id !== newPop.id));
    }, 500);

    setTimeout(() => {
      setIsPopped(false);
    }, 300);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <>
      <AnimatePresence>
        {!isPopped && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              x: position.x - 12,
              y: position.y - 12,
              scale: 1,
              opacity: isVisible ? 1 : 0,
            }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
              mass: 0.5,
              scale: { duration: 0.2 },
              opacity: { duration: 0.15 },
            }}
          >
            <div className="w-6 h-6 rounded-full bg-[#00A8E8]/30 border border-[#CFFFFF]/50 backdrop-blur-sm shadow-[0_0_10px_rgba(0,168,232,0.3),inset_0_-2px_4px_rgba(255,255,255,0.2),inset_0_2px_4px_rgba(0,168,232,0.2)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {pops.map((pop) => (
          <motion.div
            key={pop.id}
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            initial={{
              x: pop.x - 12,
              y: pop.y - 12,
              scale: 1,
              opacity: 0.8,
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
            <div className="w-6 h-6 rounded-full bg-[#00A8E8]/40 border border-[#CFFFFF]/50" />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
