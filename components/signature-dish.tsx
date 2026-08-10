"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function Dish() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.pointer.x * 0.22 + state.clock.elapsedTime * 0.12;
    group.current.rotation.x = state.pointer.y * -0.08;
  });
  return (
    <group ref={group} rotation={[-0.12, 0, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.9, 1.75, 0.18, 96]} />
        <meshStandardMaterial color="#11100e" roughness={0.2} metalness={0.15} />
      </mesh>
      <mesh position={[0, 0.17, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.35, 0.055, 12, 96]} />
        <meshStandardMaterial color="#d3b06a" roughness={0.25} metalness={0.75} />
      </mesh>
      {Array.from({ length: 18 }).map((_, i) => {
        const a = i * 2.39996;
        const r = 0.28 + (i % 6) * 0.11;
        return (
          <mesh key={i} position={[Math.cos(a) * r, 0.24 + (i % 3) * 0.018, Math.sin(a) * r]} scale={[0.11 + (i % 3) * 0.025, 0.035, 0.07]}>
            <capsuleGeometry args={[1, 1, 6, 12]} />
            <meshStandardMaterial color={i % 4 === 0 ? "#d6b26b" : "#9b3b22"} roughness={0.48} />
          </mesh>
        );
      })}
      <mesh position={[0, 0.27, 0]} scale={[0.75, 0.12, 0.75]}>
        <sphereGeometry args={[1, 48, 24]} />
        <meshStandardMaterial color="#4c2115" roughness={0.58} />
      </mesh>
    </group>
  );
}

export function SignatureDish() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden border-y border-white/10 bg-[#030303]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(214,178,106,.10),transparent_30%)]" />
      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-[.8fr_1.2fr] md:px-12">
        <div className="relative z-10">
          <p className="text-[9px] uppercase tracking-[.5em] text-[#d6b26a]">04 / Signature dish</p>
          <h2 className="mt-6 font-display text-6xl leading-[.86] md:text-8xl">The plate<br /><em className="text-[#d6b26a]">is the canvas.</em></h2>
          <p className="mt-8 max-w-md text-sm leading-8 text-white/45">A tactile study of handmade pasta, slow-cooked ragù, aged parmesan and olive oil. Move your pointer across the scene—the light follows you.</p>
          <div className="mt-10 flex gap-8 text-[9px] uppercase tracking-[.35em] text-white/30"><span>Seasonal</span><span>Handmade</span><span>Chef's table</span></div>
        </div>
        <div className="h-[55vh] min-h-[360px] w-full">
          <Canvas dpr={[1, 1.75]} camera={{ position: [0, 1.2, 5.2], fov: 35 }} gl={{ antialias: true, powerPreference: "high-performance" }}>
            <ambientLight intensity={0.25} />
            <spotLight position={[3, 5, 4]} intensity={70} angle={0.35} penumbra={1} color="#ffe6ae" />
            <pointLight position={[-3, 1, 2]} intensity={12} color="#8b3019" />
            <Environment preset="night" />
            <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.18}><Dish /></Float>
            <Sparkles count={55} scale={[4, 3, 4]} size={1.1} speed={0.2} color="#d8bd7b" />
            <EffectComposer><Bloom intensity={0.8} luminanceThreshold={0.85} mipmapBlur /><Vignette darkness={0.8} /></EffectComposer>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
