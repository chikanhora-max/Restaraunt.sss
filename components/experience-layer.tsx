"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const dishes = [
  { number: "01", name: "Tagliatelle al Ragù", note: "24-hour beef ragù · Parmigiano Reggiano · handmade pasta", price: "38" },
  { number: "02", name: "Risotto al Tartufo", note: "Carnaroli rice · black truffle · aged parmesan", price: "46" },
  { number: "03", name: "Branzino alla Brace", note: "Charcoal sea bass · lemon · olive oil · herbs", price: "52" },
];

export function ExperienceLayer() {
  const [active, setActive] = useState(0);
  const [sound, setSound] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 90, damping: 20 });
  const sy = useSpring(y, { stiffness: 90, damping: 20 });
  const glowX = useTransform(sx, (v) => `${v}px`);
  const glowY = useTransform(sy, (v) => `${v}px`);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-1/2 top-1/2 z-[45] h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ translateX: glowX, translateY: glowY, background: "radial-gradient(circle, rgba(201,169,106,.16), transparent 68%)" }}
      />

      <div className="fixed bottom-6 left-6 z-[80] hidden items-center gap-3 md:flex">
        <button onClick={() => setSound(!sound)} className="glass rounded-full px-4 py-2 text-[9px] uppercase tracking-[.28em] text-white/60 transition hover:text-white">
          {sound ? "Sound on" : "Sound off"}
        </button>
        <span className="text-[8px] uppercase tracking-[.25em] text-white/20">Borcelle / 2026</span>
      </div>

      <div className="fixed bottom-6 right-6 z-[80] hidden items-center gap-3 md:flex">
        <span className="h-px w-10 bg-white/15" />
        <span className="text-[8px] uppercase tracking-[.35em] text-white/35">Scroll to explore</span>
      </div>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#030303] px-6 py-32 md:px-12 md:py-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(201,169,106,.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between gap-8">
            <div>
              <p className="text-[9px] uppercase tracking-[.5em] text-[#c9a96a]">The signature table</p>
              <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[.88] tracking-[-.05em] text-white md:text-[7rem]">A menu built<br /><em className="text-white/30">to be remembered.</em></h2>
            </div>
            <div className="hidden text-right text-[9px] uppercase tracking-[.35em] text-white/25 md:block">Three courses<br />One evening</div>
          </div>

          <div className="grid gap-2 border-t border-white/10">
            {dishes.map((dish, i) => (
              <motion.button
                key={dish.number}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group relative grid w-full grid-cols-[45px_1fr_auto] items-center gap-5 border-b border-white/10 py-7 text-left md:grid-cols-[60px_1fr_1fr_auto] md:py-9"
              >
                <span className="text-[9px] tracking-[.3em] text-[#c9a96a]/60">{dish.number}</span>
                <span className="font-display text-2xl text-white transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">{dish.name}</span>
                <span className="hidden text-xs leading-6 text-white/30 md:block">{dish.note}</span>
                <span className="font-display text-xl text-[#d9bf82]">€{dish.price}</span>
                <motion.span animate={{ scaleX: active === i ? 1 : 0 }} className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#c9a96a]" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[90vh] overflow-hidden bg-black px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[.7fr_1.3fr] md:items-center">
          <div>
            <p className="text-[9px] uppercase tracking-[.5em] text-[#c9a96a]">The cellar</p>
            <h2 className="mt-6 font-display text-5xl leading-[.9] md:text-7xl">Pour slowly.<br /><span className="text-white/30">Stay longer.</span></h2>
            <p className="mt-8 max-w-md text-sm leading-7 text-white/40">A cellar of old-world Italian bottles and unexpected discoveries, selected to make the food taste even better.</p>
            <a href="/wine-cellar" className="mt-10 inline-flex rounded-full border border-[#c9a96a]/40 px-6 py-3 text-[9px] uppercase tracking-[.35em] text-[#d9bf82] transition hover:bg-[#c9a96a] hover:text-black">Explore the cellar</a>
          </div>
          <motion.div style={{ rotate: active * 1.5 }} className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1a1510] via-[#080706] to-black shadow-2xl">
            <div className="absolute inset-8 rounded-full border border-[#c9a96a]/15" />
            <div className="absolute left-1/2 top-1/2 h-72 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-[#c9a96a]/30 bg-gradient-to-r from-white/10 via-[#20180d] to-white/5 shadow-[0_0_80px_rgba(201,169,106,.12)]" />
            <div className="absolute left-1/2 top-[16%] -translate-x-1/2 text-[8px] uppercase tracking-[.5em] text-[#c9a96a]">Borcelle</div>
            <div className="absolute bottom-10 left-0 right-0 text-center font-display text-2xl text-white/70">Vino Italiano</div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[.5em] text-[#c9a96a]">Tonight, at Borcelle</p>
              <h2 className="mt-5 max-w-5xl font-display text-6xl leading-[.85] tracking-[-.055em] md:text-[8rem]">Make an<br /><em className="text-[#c9a96a]">evening of it.</em></h2>
            </div>
            <a href="/reservations" className="group relative inline-flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[#c9a96a]/50 text-center text-[8px] uppercase tracking-[.3em] text-[#d9bf82] transition duration-500 hover:scale-110 hover:bg-[#c9a96a] hover:text-black md:h-36 md:w-36">Reserve<br />your table<span className="absolute inset-2 rounded-full border border-white/10 transition group-hover:scale-90" /></a>
          </div>
          <div className="mt-24 grid grid-cols-2 border-y border-white/10 md:grid-cols-4">
            {["Pasta · handmade", "Fire · charcoal", "Wine · cellar", "Table · yours"].map((item) => <div key={item} className="border-r border-white/10 px-4 py-6 text-[8px] uppercase tracking-[.3em] text-white/35 last:border-0">{item}</div>)}
          </div>
        </div>
      </section>
    </>
  );
}
