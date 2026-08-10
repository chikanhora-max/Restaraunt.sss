"use client";

import { motion } from "framer-motion";

const pastaModel = "https://sketchfab.com/3d-models/pasta-bec7601a89f14d0bbe7eb40b48d14b26";

export function Food3D() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-center">
        <div>
          <p className="text-[9px] uppercase tracking-[.5em] text-[#c9a96a]">02 / From the table</p>
          <h2 className="mt-6 font-display text-5xl leading-[.92] text-[#f3eee4] md:text-7xl">Made to be<br /><em className="text-[#c9a96a]">experienced.</em></h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-white/45">Explore the pasta in three dimensions. This first asset is a downloadable Creative Commons pasta model discovered on Sketchfab; it will be replaced by your final production GLB when your own food assets are ready.</p>
          <a href={pastaModel} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full border border-[#c9a96a]/50 px-6 py-3 text-[9px] uppercase tracking-[.25em] text-[#ead19a] transition hover:bg-[#ead19a] hover:text-black">View source model</a>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#c9a96a]/20 bg-[#080706] shadow-[0_0_100px_rgba(201,169,106,.08)]">
          <iframe title="Osteria Borcelle pasta 3D model" src="https://sketchfab.com/models/bec7601a89f14d0bbe7eb40b48d14b26/embed?autostart=1&ui_theme=dark&dnt=1" className="h-full w-full" allow="autoplay; fullscreen; xr-spatial-tracking" />
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
