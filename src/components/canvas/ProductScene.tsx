"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { Suspense } from "react";
import { ProductModel } from "./ProductModel";
import { useScrollProgress } from "@/lib/scroll-progress";

function SceneContents() {
  const { reducedMotion } = useScrollProgress();

  return (
    <>
      <ambientLight intensity={0.35} />
      <spotLight
        position={[4, 6, 2]}
        intensity={48}
        angle={0.35}
        penumbra={0.8}
        color="#f4efe6"
        castShadow
      />
      <spotLight
        position={[-3, 2, -2]}
        intensity={22}
        angle={0.5}
        penumbra={1}
        color="#d4926a"
      />
      <Environment preset="city" environmentIntensity={0.45} />

      {reducedMotion ? (
        <ProductModel />
      ) : (
        <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.35}>
          <ProductModel />
        </Float>
      )}

      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.45}
        scale={8}
        blur={2.8}
        far={3}
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
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
    </div>
  );
}
