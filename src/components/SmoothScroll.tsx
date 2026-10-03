"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useScrollProgress } from "@/lib/scroll-progress";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const { reducedMotion } = useScrollProgress();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
