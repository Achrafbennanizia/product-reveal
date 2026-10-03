"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";
import { ProductModel } from "./ProductModel";
import { useScrollProgress } from "@/lib/scroll-progress";

function SceneContents() {
  const { reducedMotion } = useScrollProgress();

  return (
    <>
      <ambientLight intensity={0.28} />
      <spotLight
        position={[4.2, 6.5, 2.4]}
        intensity={52}
        angle={0.32}
        penumbra={0.85}
        color="#f4efe6"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.00015}
      />
      <spotLight
        position={[-3.2, 2.4, -2.2]}
        intensity={26}
        angle={0.48}
        penumbra={1}
        color="#d4926a"
      />
      <directionalLight
        position={[-2, 4, 5]}
        intensity={0.55}
        color="#c8d4e8"
      />
      <Environment preset="studio" environmentIntensity={0.72} />

      {reducedMotion ? (
        <ProductModel />
      ) : (
        <Float speed={1.05} rotationIntensity={0.12} floatIntensity={0.28}>
          <ProductModel />
        </Float>
      )}

      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.5}
        scale={9}
        blur={3.2}
        far={3.5}
        color="#000000"
      />
    </>
  );
}

export function ProductScene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1]">
      <Canvas
        camera={{ position: [2.4, 1.1, 3.2], fov: 32, near: 0.1, far: 40 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.05,
          powerPreference: "high-performance",
        }}
        shadows
      >
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
    </div>
  );
}
