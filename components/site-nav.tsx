"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticLink } from "./magnetic-link";

const links = ["Menu", "Story", "Chef", "Wine", "Gallery", "Contact"];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 md:px-10 md:py-7">
      <nav className="glass mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-4 py-2.5 md:px-7 md:py-3">
        <Link href="/" className="group flex items-center gap-3 font-display text-sm tracking-[0.3em] text-[#ead19a]"><span className="grid h-7 w-7 place-items-center rounded-full border border-[#c9a96a]/40 text-[8px] tracking-normal transition group-hover:rotate-12">OB</span><span className="hidden text-[9px] uppercase tracking-[.4em] text-white/50 sm:block">Osteria Borcelle</span></Link>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => <MagneticLink key={link} href={`/${link.toLowerCase()}`} className="px-2 py-2 text-[9px] uppercase tracking-[0.28em] text-white/55 transition hover:text-[#ead19a]">{link}</MagneticLink>)}
        </div>
        <MagneticLink href="/reservations" className="hidden rounded-full border border-[#c9a96a]/50 px-5 py-2.5 text-[9px] uppercase tracking-[0.25em] text-[#ead19a] transition hover:bg-[#ead19a] hover:text-black md:block">Reserve a table</MagneticLink>
        <button aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden">
          <span className="flex flex-col gap-1.5"><span className={`h-px w-4 bg-white transition ${open ? "translate-y-[3px] rotate-45" : ""}`} /><span className={`h-px w-4 bg-white/60 transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} /></span>
        </button>
      </nav>
      <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -12, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: .98 }} className="glass mx-auto mt-2 max-w-[1400px] rounded-3xl p-5 md:hidden">
        {links.concat("Reservations").map((link) => <Link onClick={() => setOpen(false)} key={link} href={`/${link.toLowerCase()}`} className="group flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl text-white/80"><span>{link}</span><span className="text-xs text-[#c9a96a] transition group-hover:translate-x-1">↗</span></Link>)}
      </motion.div>}</AnimatePresence>
    </header>
  );
}
