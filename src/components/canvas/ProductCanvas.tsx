"use client";

import dynamic from "next/dynamic";

const ProductScene = dynamic(
  () => import("./ProductScene").then((m) => m.ProductScene),
  { ssr: false },
);

export function ProductCanvas() {
  return <ProductScene />;
}
