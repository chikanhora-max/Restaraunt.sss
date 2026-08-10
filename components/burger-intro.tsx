"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Bun({ bottom = false }: { bottom?: boolean }) {
  return (
    <mesh position={[0, bottom ? -0.78 : 0.72, 0]} scale={[1.75, bottom ? 0.58 : 0.78, 1.45]}>
      <sphereGeometry args={[1, 64, 32]} />
      <meshStandardMaterial color={bottom ? "#7a2f12" : "#b96328"} roughness={0.42} metalness={0.04} />
    </mesh>
  );
}

function Burger() {
  const group = useRef<THREE.Group>(null);
  const layers = useMemo(() => [
    { y: 0.35, s: [1.65, 0.18, 1.35], c: "#d7b44a" },
    { y: 0.08, s: [1.52, 0.18, 1.22], c: "#7c2419" },
    { y: -0.18, s: [1.58, 0.16, 1.26], c: "#d5c38e" },
    { y: -0.45, s: [1.52, 0.20, 1.2], c: "#8b2f17" },
  ], []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.7;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.2) * 0.055;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.7) * 0.08;
  });

  return (
    <group ref={group} rotation={[0.1, 0, -0.08]}>
      <Bun />
      {layers.map((layer, i) => (
        <mesh key={i} position={[0, layer.y, 0]} scale={layer.s as [number, number, number]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={layer.c} roughness={i === 0 ? 0.24 : 0.55} />
        </mesh>
      ))}
      <Bun bottom />
      {[...Array(16)].map((_, i) => {
        const a = (i / 16) * Math.PI * 2;
        return (
          <mesh key={`sesame-${i}`} position={[Math.cos(a) * 0.72, 1.18 + (i % 3) * 0.04, Math.sin(a) * 0.6]} rotation={[0.4, a, 0.2]} scale={[0.07, 0.018, 0.025]}>
            <sphereGeometry args={[1, 12, 8]} />
            <meshStandardMaterial color="#f6e5ad" roughness={0.6} />
          </mesh>
        );
      })}
    </group>
  );
}

export function BurgerIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 4200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] overflow-hidden bg-[#020202]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
          aria-label="Osteria Borcelle cinematic introduction"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(201,169,106,.13),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(122,47,18,.15),transparent_40%)]" />
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0.2, 5.2], fov: 38 }} gl={{ antialias: true, powerPreference: "high-performance" }}>
            <ambientLight intensity={0.25} />
            <spotLight position={[3, 5, 4]} intensity={85} angle={0.35} penumbra={1} color="#ffe2a1" />
            <pointLight position={[-3, 0, 2]} intensity={18} color="#9b3e19" />
            <Environment preset="night" />
            <Float speed={1.3} rotationIntensity={0.18} floatIntensity={0.28}>
              <Burger />
            </Float>
            <Sparkles count={90} scale={[5, 4, 4]} size={1.4} speed={0.25} color="#d8bd7b" />
            <EffectComposer>
              <Bloom intensity={1.15} luminanceThreshold={0.7} mipmapBlur />
              <Vignette darkness={1.1} offset={0.2} />
            </EffectComposer>
          </Canvas>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between px-6 py-10 text-center">
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 1 }} className="text-[9px] uppercase tracking-[.55em] text-[#d7bd7c]">A cinematic dining experience</motion.p>
            <div>
              <motion.div initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}>
                <p className="text-[9px] uppercase tracking-[.6em] text-white/45">Osteria</p>
                <h1 className="mt-3 font-display text-5xl tracking-[-.055em] text-[#f4efe4] md:text-8xl">Borcelle</h1>
              </motion.div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1, duration: 1 }} className="mt-5 font-display text-sm italic text-white/40">A Taste of Genuine Tradition.</motion.p>
            </div>
            <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 2.5, duration: 1.2 }} className="flex items-center gap-4 text-[8px] uppercase tracking-[.4em] text-white/30">
              <span className="h-px w-12 bg-[#c9a96a]/50" />
              Enter the table
              <span className="h-px w-12 bg-[#c9a96a]/50" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
