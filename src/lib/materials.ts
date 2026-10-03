"use client";

import * as THREE from "three";

type TextureSet = {
  albedo: THREE.CanvasTexture;
  roughness: THREE.DataTexture;
  normal: THREE.DataTexture;
  ao: THREE.DataTexture;
};

function hash(n: number) {
  const x = Math.sin(n * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

function fbm(x: number, y: number, seed: number) {
  let v = 0;
  let a = 0.5;
  let f = 1;
  for (let i = 0; i < 4; i++) {
    v += a * hash(x * f * 12.9898 + y * f * 78.233 + seed + i * 19.1);
    a *= 0.5;
    f *= 2.1;
  }
  return v;
}

function makeDataTexture(
  size: number,
  fill: (x: number, y: number, i: number) => [number, number, number],
) {
  const data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = y * size + x;
      const [r, g, b] = fill(x, y, i);
      const o = i * 4;
      data[o] = r;
      data[o + 1] = g;
      data[o + 2] = b;
      data[o + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.colorSpace = THREE.NoColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.needsUpdate = true;
  return tex;
}

function heightToNormal(height: Float32Array, size: number, strength = 1.35) {
  return makeDataTexture(size, (x, y) => {
    const i = y * size + x;
    const left = height[y * size + ((x - 1 + size) % size)];
    const right = height[y * size + ((x + 1) % size)];
    const up = height[((y - 1 + size) % size) * size + x];
    const down = height[((y + 1) % size) * size + x];
    const dx = (right - left) * strength;
    const dy = (down - up) * strength;
    const inv = 1 / Math.sqrt(dx * dx + dy * dy + 1);
    return [
      (-dx * inv * 0.5 + 0.5) * 255,
      (-dy * inv * 0.5 + 0.5) * 255,
      inv * 255,
    ];
  });
}

function finishTexture(
  tex: THREE.Texture,
  repeat: [number, number] = [1, 1],
  srgb = false,
) {
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat[0], repeat[1]);
  tex.anisotropy = 8;
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.needsUpdate = true;
  return tex;
}

/** Brushed aluminum — img2threejs brushed-steel recipe + streak albedo. */
export function brushedAluminumSet(): TextureSet {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#c9c4bb";
  ctx.fillRect(0, 0, size, size);
  for (let y = 0; y < size; y++) {
    const a = 0.02 + hash(y * 1.7) * 0.09;
    ctx.fillStyle = `rgba(255,255,255,${a})`;
    ctx.fillRect(0, y, size, 1);
    ctx.fillStyle = `rgba(30,28,26,${a * 0.55})`;
    ctx.fillRect(hash(y * 3.1) * 6, y, size, 1);
  }
  // micro pits
  for (let i = 0; i < 900; i++) {
    const x = hash(i * 2.2) * size;
    const y = hash(i * 5.7) * size;
    ctx.fillStyle = `rgba(20,18,16,${0.04 + hash(i) * 0.06})`;
    ctx.fillRect(x, y, 1 + hash(i + 1) * 2, 1);
  }

  const albedo = new THREE.CanvasTexture(canvas);
  finishTexture(albedo, [1.4, 3.2], true);

  const height = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const streak = fbm(x * 0.35, y * 0.02, 11) * 0.35;
      const grain = fbm(x * 0.08, y * 0.08, 44) * 0.2;
      height[y * size + x] = 0.45 + streak + grain;
    }
  }

  const roughness = makeDataTexture(size, (x, y) => {
    const h = height[y * size + x];
    const v = Math.min(255, Math.max(0, (0.28 + (1 - h) * 0.35 + fbm(x, y, 9) * 0.12) * 255));
    return [v, v, v];
  });
  finishTexture(roughness, [1.4, 3.2]);

  const normal = heightToNormal(height, size, 3.2);
  finishTexture(normal, [1.4, 3.2]);

  const ao = makeDataTexture(size, (x, y) => {
    const h = height[y * size + x];
    const v = Math.min(255, Math.max(140, (0.75 + h * 0.25) * 255));
    return [v, v, v];
  });
  finishTexture(ao, [1.4, 3.2]);
  ao.channel = 0;

  return { albedo, roughness, normal, ao };
}

/** Copper band — warm gradient + micro scratches. */
export function copperSet(): TextureSet {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createLinearGradient(0, 0, size, size);
  g.addColorStop(0, "#f0c4a0");
  g.addColorStop(0.4, "#d4926a");
  g.addColorStop(0.75, "#a8623c");
  g.addColorStop(1, "#6e3a22");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 220; i++) {
    ctx.fillStyle = `rgba(255,230,200,${hash(i) * 0.1})`;
    ctx.fillRect(hash(i * 2) * size, hash(i * 3) * size, 10, 1);
  }
  for (let i = 0; i < 80; i++) {
    ctx.fillStyle = `rgba(60,30,15,${0.05 + hash(i + 4) * 0.08})`;
    ctx.fillRect(hash(i * 7) * size, hash(i * 9) * size, 18, 1.5);
  }

  const albedo = new THREE.CanvasTexture(canvas);
  finishTexture(albedo, [2, 1], true);

  const height = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      height[y * size + x] =
        0.5 + fbm(x * 0.04, y * 0.2, 21) * 0.3 + fbm(x * 0.2, y * 0.02, 3) * 0.15;
    }
  }

  const roughness = makeDataTexture(size, (x, y) => {
    const v = (0.16 + fbm(x * 0.1, y * 0.1, 5) * 0.22) * 255;
    return [v, v, v];
  });
  finishTexture(roughness, [2, 1]);

  const normal = heightToNormal(height, size, 2.6);
  finishTexture(normal, [2, 1]);

  const ao = makeDataTexture(size, (x, y) => {
    const v = (0.82 + height[y * size + x] * 0.15) * 255;
    return [v, v, v];
  });
  finishTexture(ao, [2, 1]);
  ao.channel = 0;

  return { albedo, roughness, normal, ao };
}

/** Back-compat helpers used by older call sites. */
export function brushedAluminumMap() {
  return brushedAluminumSet().albedo;
}
export function copperMap() {
  return copperSet().albedo;
}
export function roughnessNoise() {
  return brushedAluminumSet().roughness;
}
