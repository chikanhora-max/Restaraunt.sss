"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black" aria-label="Osteria Borcelle introduction">
          <motion.div initial={{ scale: 0.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="absolute h-[28rem] w-[28rem] rounded-full bg-[#c9a96a]/10 blur-[100px]" />
          <div className="relative text-center">
            <motion.p initial={{ opacity: 0, letterSpacing: "0.8em" }} animate={{ opacity: 1, letterSpacing: "0.45em" }} transition={{ delay: 0.35, duration: 1.1 }} className="text-[9px] uppercase text-[#ead19a]">Milano · Since 1987</motion.p>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.75, duration: 0.8 }} className="mx-auto my-7 h-px w-24 bg-[#c9a96a]" />
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }} className="font-display text-5xl tracking-[-0.04em] text-[#f3eee4] md:text-7xl">Osteria Borcelle</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15, duration: 1 }} className="mt-5 font-display text-sm italic text-white/45">A Taste of Genuine Tradition.</motion.p>
          </div>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.4, duration: 1.1 }} className="absolute bottom-10 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c9a96a] to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
