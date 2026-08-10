"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Menu", "Story", "Chef", "Wine", "Gallery", "Contact"];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-5 py-5 md:px-10 md:py-7">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-white/10 bg-black/20 px-5 py-3 backdrop-blur-xl md:px-7">
        <Link href="/" className="font-display text-sm tracking-[0.3em] text-[#ead19a]">OB</Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => <Link key={link} href={`/${link.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.25em] text-white/60 transition hover:text-[#ead19a]">{link}</Link>)}
        </div>
        <Link href="/reservations" className="hidden rounded-full border border-[#c9a96a]/50 px-5 py-2 text-[10px] uppercase tracking-[0.2em] text-[#ead19a] transition hover:bg-[#c9a96a] hover:text-black md:block">Reserve</Link>
        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden">
          <span className="h-px w-5 bg-white" /><span className="h-px w-5 bg-white/60" />
        </button>
      </nav>
      <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="glass mx-auto mt-2 max-w-[1400px] rounded-3xl p-6 md:hidden">
        {links.concat("Reservations").map((link) => <Link onClick={() => setOpen(false)} key={link} href={`/${link.toLowerCase()}`} className="block border-b border-white/10 py-4 font-display text-2xl text-white/80">{link}</Link>)}
      </motion.div>}</AnimatePresence>
    </header>
  );
}
