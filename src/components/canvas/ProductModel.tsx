"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh, MeshPhysicalMaterial } from "three";
import * as THREE from "three";
import { useScrollProgress } from "@/lib/scroll-progress";
import { brushedAluminumSet, copperSet } from "@/lib/materials";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}
function segment(progress: number, start: number, end: number) {
  return clamp01((progress - start) / (end - start));
}

/** Continuous lathe silhouette — pedestal → waist → collar. */
function speakerProfile(samples = 72) {
  const pts: THREE.Vector2[] = [];
  for (let i = 0; i < samples; i++) {
    const t = i / (samples - 1);
    const y = -0.98 + t * 1.36;
    // Radial envelope with soft ease (no hard steps)
    let r: number;
    if (t < 0.08) {
      const u = t / 0.08;
      r = lerp(0.04, 0.56, u * u * (3 - 2 * u));
    } else if (t < 0.22) {
      const u = (t - 0.08) / 0.14;
      r = lerp(0.56, 0.5, u);
    } else if (t < 0.55) {
      const u = (t - 0.22) / 0.33;
      r = 0.5 - 0.06 * Math.sin(u * Math.PI * 0.85);
    } else if (t < 0.78) {
      const u = (t - 0.55) / 0.23;
      r = lerp(0.46, 0.4, u * u);
    } else {
      const u = (t - 0.78) / 0.22;
      r = lerp(0.4, 0.2, Math.pow(u, 1.35));
    }
    pts.push(new THREE.Vector2(r, y));
  }
  return pts;
}

export function ProductModel() {
  const group = useRef<Group>(null);
  const ring = useRef<Mesh>(null);
  const core = useRef<Mesh>(null);
  const { progress, reducedMotion } = useScrollProgress();

  const aluminum = useMemo(() => {
    if (typeof document === "undefined") return null;
    return brushedAluminumSet();
  }, []);
  const copper = useMemo(() => {
    if (typeof document === "undefined") return null;
    return copperSet();
  }, []);

  const bodyProfile = useMemo(() => speakerProfile(80), []);

  useFrame((state) => {
    if (!group.current || !ring.current || !core.current) return;

    const t = reducedMotion ? 0.12 : progress;
    const idle = reducedMotion ? 0 : state.clock.elapsedTime;

    const reveal = segment(t, 0, 0.22);
    const orbit = segment(t, 0.18, 0.48);
    const explode = segment(t, 0.45, 0.72);
    const settle = segment(t, 0.7, 1);

    const damp = reducedMotion ? 1 : 0.1;
    const targetY =
      lerp(0.35, Math.PI * 1.65, orbit) +
      settle * 0.35 +
      Math.sin(idle * 0.35) * 0.03;
    const targetX = lerp(0.28, -0.12, reveal) + explode * 0.08;
    const targetLift =
      lerp(-0.15, 0.35, reveal) - explode * 0.05 + Math.sin(idle * 0.6) * 0.02;

    group.current.rotation.y += (targetY - group.current.rotation.y) * damp;
    group.current.rotation.x += (targetX - group.current.rotation.x) * damp;
    group.current.position.y += (targetLift - group.current.position.y) * damp;
    const s = lerp(0.82, 1.08, reveal);
    group.current.scale.setScalar(
      group.current.scale.x + (s - group.current.scale.x) * damp,
    );

    const ringY = lerp(0.55, 1.18, explode);
    ring.current.position.y += (ringY - ring.current.position.y) * damp;
    ring.current.rotation.z = idle * 0.18 + explode * 0.9;

    const glowMat = core.current.material as MeshPhysicalMaterial;
    glowMat.emissiveIntensity = lerp(0.85, 2.6, reveal + explode * 0.35);

    const cd = 0.07;
    state.camera.position.x += (lerp(2.5, 1.55, orbit) - state.camera.position.x) * cd;
    state.camera.position.y += (lerp(1.15, 0.82, reveal) - state.camera.position.y) * cd;
    state.camera.position.z += (lerp(3.35, 2.65, settle) - state.camera.position.z) * cd;
    state.camera.lookAt(0, 0.15, 0);
  });

  return (
    <group ref={group} dispose={null}>
      {/* Lathed aluminum shell */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[bodyProfile, 128]} />
        <meshPhysicalMaterial
          map={aluminum?.albedo}
          color="#c9c4bb"
          metalness={1}
          roughness={0.32}
          roughnessMap={aluminum?.roughness}
          normalMap={aluminum?.normal}
          normalScale={new THREE.Vector2(0.28, 0.28)}
          clearcoat={0.55}
          clearcoatRoughness={0.22}
          envMapIntensity={1.25}
        />
      </mesh>

      {/* Recessed seam */}
      <mesh position={[0, -0.04, 0]} castShadow>
        <torusGeometry args={[0.455, 0.016, 24, 96]} />
        <meshPhysicalMaterial color="#14161c" metalness={0.7} roughness={0.5} />
      </mesh>

      {/* Copper thermal / RF band */}
      <mesh position={[0, -0.04, 0]} castShadow>
        <torusGeometry args={[0.475, 0.034, 32, 120]} />
        <meshPhysicalMaterial
          map={copper?.albedo}
          color="#d4926a"
          metalness={0.98}
          roughness={0.18}
          roughnessMap={copper?.roughness}
          normalMap={copper?.normal}
          normalScale={new THREE.Vector2(0.4, 0.4)}
          emissive="#4a2814"
          emissiveIntensity={0.2}
          clearcoat={0.45}
          clearcoatRoughness={0.12}
          envMapIntensity={1.3}
        />
      </mesh>

      {/* Dark collar */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.38, 0.18, 64]} />
        <meshPhysicalMaterial
          color="#12141a"
          metalness={0.82}
          roughness={0.38}
          clearcoat={0.3}
          clearcoatRoughness={0.35}
        />
      </mesh>

      {/* Floating copper halo */}
      <mesh ref={ring} position={[0, 0.55, 0]} castShadow>
        <torusGeometry args={[0.64, 0.038, 36, 140]} />
        <meshPhysicalMaterial
          map={copper?.albedo}
          color="#d4926a"
          metalness={0.98}
          roughness={0.14}
          roughnessMap={copper?.roughness}
          normalMap={copper?.normal}
          emissive="#5a2e18"
          emissiveIntensity={0.32}
          clearcoat={0.6}
          clearcoatRoughness={0.08}
          envMapIntensity={1.4}
        />
      </mesh>

      {/* Glass emitter core */}
      <mesh ref={core} position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.195, 64, 64]} />
        <meshPhysicalMaterial
          color="#f3d8bc"
          emissive="#d4926a"
          emissiveIntensity={1.6}
          roughness={0.08}
          metalness={0.02}
          transmission={0.42}
          thickness={0.55}
          ior={1.48}
          clearcoat={1}
          clearcoatRoughness={0.04}
          envMapIntensity={1.1}
        />
      </mesh>

      {/* Inner glow fill */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.11, 32, 32]} />
        <meshBasicMaterial color="#ffc9a0" transparent opacity={0.55} />
      </mesh>

      {/* Micro fasteners */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.52, -0.78, Math.sin(angle) * 0.52]}
            rotation={[Math.PI / 2, 0, angle]}
            castShadow
          >
            <cylinderGeometry args={[0.022, 0.022, 0.035, 16]} />
            <meshPhysicalMaterial
              map={aluminum?.albedo}
              color="#b8b3aa"
              metalness={1}
              roughness={0.22}
            />
          </mesh>
        );
      })}

      {/* Cooling fins — tapered plates */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <mesh
            key={`fin-${i}`}
            position={[Math.cos(angle) * 0.5, -0.52, Math.sin(angle) * 0.5]}
            rotation={[0, -angle, 0]}
            castShadow
          >
            <boxGeometry args={[0.028, 0.3, 0.08]} />
            <meshPhysicalMaterial
              color="#1a1c22"
              metalness={0.78}
              roughness={0.4}
              clearcoat={0.15}
            />
          </mesh>
        );
      })}

      {/* Top array grille */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh
            key={`grille-${i}`}
            position={[
              Math.cos(angle) * 0.16,
              0.4,
              Math.sin(angle) * 0.16,
            ]}
            rotation={[Math.PI / 2, 0, angle]}
          >
            <cylinderGeometry args={[0.012, 0.012, 0.04, 10]} />
            <meshPhysicalMaterial
              color="#2a2e36"
              metalness={0.7}
              roughness={0.35}
              emissive="#d4926a"
              emissiveIntensity={0.15}
            />
          </mesh>
        );
      })}
    </group>
  );
}
