"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh, MeshStandardMaterial } from "three";
import { useScrollProgress } from "@/lib/scroll-progress";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

function segment(progress: number, start: number, end: number) {
  return clamp01((progress - start) / (end - start));
}

export function ProductModel() {
  const group = useRef<Group>(null);
  const ring = useRef<Mesh>(null);
  const core = useRef<Mesh>(null);
  const { progress, reducedMotion } = useScrollProgress();

  useFrame((state) => {
    if (!group.current || !ring.current || !core.current) return;

    const t = reducedMotion ? 0.12 : progress;
    const idle = reducedMotion ? 0 : state.clock.elapsedTime;

    const reveal = segment(t, 0, 0.22);
    const orbit = segment(t, 0.18, 0.48);
    const explode = segment(t, 0.45, 0.72);
    const settle = segment(t, 0.7, 1);

    group.current.rotation.y =
      lerp(0.35, Math.PI * 1.65, orbit) +
      settle * 0.35 +
      Math.sin(idle * 0.35) * 0.03;
    group.current.rotation.x = lerp(0.28, -0.12, reveal) + explode * 0.08;
    group.current.position.y =
      lerp(-0.15, 0.35, reveal) - explode * 0.05 + Math.sin(idle * 0.6) * 0.02;
    group.current.scale.setScalar(lerp(0.82, 1.08, reveal));

    ring.current.position.y = lerp(0.55, 1.15, explode);
    ring.current.rotation.z = idle * 0.25 + explode * 0.8;

    const glowMat = core.current.material as MeshStandardMaterial;
    glowMat.emissiveIntensity = lerp(0.6, 2.1, reveal + explode * 0.35);

    state.camera.position.x = lerp(2.4, 1.6, orbit);
    state.camera.position.y = lerp(1.1, 0.85, reveal);
    state.camera.position.z = lerp(3.2, 2.7, settle);
    state.camera.lookAt(0, 0.1, 0);
  });

  return (
    <group ref={group} dispose={null}>
      <mesh position={[0, -1.05, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.55, 0.72, 0.18, 64]} />
        <meshPhysicalMaterial
          color="#1a1c22"
          metalness={0.7}
          roughness={0.45}
          clearcoat={0.3}
        />
      </mesh>

      <mesh position={[0, -0.35, 0]} castShadow>
        <cylinderGeometry args={[0.42, 0.5, 1.15, 64]} />
        <meshPhysicalMaterial
          color="#c9c4bb"
          metalness={0.92}
          roughness={0.28}
          clearcoat={0.65}
          clearcoatRoughness={0.2}
        />
      </mesh>

      <mesh position={[0, -0.05, 0]} castShadow>
        <torusGeometry args={[0.445, 0.035, 24, 80]} />
        <meshPhysicalMaterial
          color="#d4926a"
          metalness={0.95}
          roughness={0.22}
          emissive="#5a2e18"
          emissiveIntensity={0.15}
        />
      </mesh>

      <mesh position={[0, 0.28, 0]} castShadow>
        <cylinderGeometry args={[0.36, 0.42, 0.22, 64]} />
        <meshPhysicalMaterial
          color="#1a1c22"
          metalness={0.7}
          roughness={0.45}
          clearcoat={0.3}
        />
      </mesh>

      <mesh ref={ring} position={[0, 0.55, 0]} castShadow>
        <torusGeometry args={[0.58, 0.045, 32, 100]} />
        <meshPhysicalMaterial
          color="#d4926a"
          metalness={0.95}
          roughness={0.22}
          emissive="#5a2e18"
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh ref={core} position={[0, 0.52, 0]}>
        <sphereGeometry args={[0.18, 48, 48]} />
        <meshStandardMaterial
          color="#e8b896"
          emissive="#d4926a"
          emissiveIntensity={1.4}
          roughness={0.35}
          metalness={0.1}
        />
      </mesh>

      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.48, -0.55, Math.sin(angle) * 0.48]}
            rotation={[0, -angle, 0]}
            castShadow
          >
            <boxGeometry args={[0.04, 0.28, 0.08]} />
            <meshPhysicalMaterial
              color="#1a1c22"
              metalness={0.7}
              roughness={0.45}
            />
          </mesh>
        );
      })}
    </group>
  );
}
