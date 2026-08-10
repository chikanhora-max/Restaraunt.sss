"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 4200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
          aria-label="Osteria Borcelle cinematic introduction"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(214,169,86,.16),transparent_25%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,.045),transparent_35%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:80px_80px]" />

          <div className="relative flex w-full max-w-6xl flex-col items-center px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10, letterSpacing: "0.9em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.5em" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 text-[8px] uppercase text-[#ead19a]"
            >
              Milano · Since 1987
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: .55, rotateX: -25, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
              transition={{ delay: .25, duration: 2.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-4 h-[240px] w-[300px] [perspective:1100px] md:h-[320px] md:w-[420px]"
            >
              <div className="absolute left-1/2 top-1/2 h-44 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96a]/20 blur-[65px]" />
              <motion.div
                animate={{ rotateY: [0, 18, -12, 360], rotateX: [0, -4, 5, 0], y: [0, -12, 4, 0] }}
                transition={{ duration: 3.4, delay: .35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 top-1/2 h-40 w-64 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] md:h-48 md:w-80"
              >
                <div className="absolute left-1/2 top-0 h-20 w-64 -translate-x-1/2 rounded-[50%_50%_28%_28%] border border-[#f2c66d]/30 bg-[radial-gradient(ellipse_at_40%_25%,#f3d38a,#a96a24_58%,#4b2410)] shadow-[0_24px_60px_rgba(0,0,0,.65),inset_0_8px_20px_rgba(255,255,255,.22)] [transform:translateZ(22px)] md:w-80" />
                <div className="absolute left-1/2 top-[62px] h-4 w-64 -translate-x-1/2 rounded-full bg-[#f5e4bd] shadow-[0_4px_10px_rgba(0,0,0,.6)] [transform:translateZ(18px)] md:w-80" />
                <div className="absolute left-1/2 top-[76px] h-10 w-[250px] -translate-x-1/2 rounded-[35%] bg-[linear-gradient(160deg,#e6b74d,#a75b19_55%,#54230d)] shadow-[0_8px_16px_rgba(0,0,0,.7)] [transform:translateZ(14px)] md:w-[312px]" />
                <div className="absolute left-1/2 top-[104px] h-6 w-64 -translate-x-1/2 rounded-full bg-[#1e0804] shadow-[0_3px_12px_rgba(0,0,0,.8)] [transform:translateZ(10px)] md:w-80" />
                <div className="absolute left-1/2 top-[118px] h-8 w-[250px] -translate-x-1/2 rounded-[45%] bg-[#d9aa45] shadow-[0_8px_15px_rgba(0,0,0,.65)] [transform:translateZ(7px)] md:w-[312px]" />
                <div className="absolute left-1/2 top-[140px] h-16 w-64 -translate-x-1/2 rounded-[18%_18%_48%_48%] border border-white/10 bg-[linear-gradient(180deg,#dba85a,#8c4818)] shadow-[0_18px_30px_rgba(0,0,0,.75)] [transform:translateZ(3px)] md:w-80" />
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.25, duration: .9 }} className="relative z-20">
              <h1 className="font-display text-5xl tracking-[-0.055em] text-[#f3eee4] md:text-8xl">Osteria <span className="text-[#c9a96a]">Borcelle</span></h1>
              <p className="mt-4 font-display text-sm italic text-white/45">A Taste of Genuine Tradition.</p>
            </motion.div>
          </div>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2.4, duration: 1.1 }} className="absolute bottom-10 left-1/2 h-px w-40 -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-[#c9a96a] to-transparent" />
          <div className="absolute bottom-5 right-6 text-[7px] uppercase tracking-[.35em] text-white/20">Crafted for the table</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
