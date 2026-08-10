"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function LuxuryCursor() {
  const glow = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      gsap.to(glow.current, { x: event.clientX, y: event.clientY, duration: 0.65, ease: "power3.out" });
      gsap.to(dot.current, { x: event.clientX, y: event.clientY, duration: 0.12, ease: "power2.out" });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={glow} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[60] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96a]/10 blur-3xl mix-blend-screen" />
      <div ref={dot} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[61] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ead19a] shadow-[0_0_18px_5px_rgba(201,169,106,.55)] max-md:hidden" />
    </>
  );
}
