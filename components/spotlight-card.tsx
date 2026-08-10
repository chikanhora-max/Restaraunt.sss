"use client";

import { useState, type ReactNode, type CSSProperties } from "react";

export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [point, setPoint] = useState({ x: 50, y: 50 });
  return (
    <div
      className={`luxury-card ${className}`}
      style={{ "--mx": `${point.x}%`, "--my": `${point.y}%` } as CSSProperties}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPoint({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
    >
      {children}
    </div>
  );
}
