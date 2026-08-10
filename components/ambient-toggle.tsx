"use client";

import { useEffect, useRef, useState } from "react";

export function AmbientToggle() {
  const [enabled, setEnabled] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audio.current = new Audio("/audio/restaurant-ambience.mp3");
    audio.current.loop = true;
    audio.current.volume = 0.18;
    return () => {
      audio.current?.pause();
      audio.current = null;
    };
  }, []);

  const toggle = async () => {
    if (!audio.current) return;
    if (enabled) {
      audio.current.pause();
      setEnabled(false);
      return;
    }
    try {
      await audio.current.play();
      setEnabled(true);
    } catch {
      setEnabled(false);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Turn ambience off" : "Turn ambience on"}
      className="fixed bottom-6 left-6 z-[160] hidden items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-3 text-[8px] uppercase tracking-[.3em] text-white/50 backdrop-blur-xl transition hover:border-[#c9a96a]/40 hover:text-[#ead19a] md:flex"
    >
      <span className={`h-1.5 w-1.5 rounded-full ${enabled ? "animate-pulse bg-[#ead19a]" : "bg-white/30"}`} />
      {enabled ? "Ambience on" : "Ambience"}
    </button>
  );
}
