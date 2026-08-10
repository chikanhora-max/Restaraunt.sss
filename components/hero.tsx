"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(157,116,52,.18),transparent_32%),radial-gradient(circle_at_75%_20%,rgba(255,255,255,.04),transparent_25%)]" />
      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a96a]/10 shadow-[0_0_160px_rgba(201,169,106,.08)]" />
      <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 text-center">
        <p className="mb-8 text-[9px] uppercase tracking-[.55em] text-[#c9a96a]">Milano · Since 1987</p>
        <h1 className="font-display text-[17vw] leading-[.72] tracking-[-.055em] text-[#f3eee4] md:text-[13vw]">
          OSTERIA<br /><span className="text-[#c9a96a]">BORCELLE</span>
        </h1>
        <p className="mx-auto mt-10 max-w-md font-display text-lg italic text-white/55">A Taste of Genuine Tradition.</p>
        <Link href="/reservations" className="mt-10 inline-flex rounded-full border border-[#c9a96a]/60 px-8 py-4 text-[10px] uppercase tracking-[.28em] text-[#ead19a] transition duration-500 hover:bg-[#ead19a] hover:text-black">Reserve your table</Link>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"><span className="text-[8px] uppercase tracking-[.4em] text-white/30">Scroll to discover</span><div className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-[#c9a96a] to-transparent" /></div>
    </section>
  );
}
