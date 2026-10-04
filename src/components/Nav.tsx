"use client";

import { motion } from "motion/react";
import { smoothScrollToId } from "@/lib/scroll-to";

const LINKS = [
  { id: "shift", label: "Science" },
  { id: "system", label: "Method" },
  { id: "materials", label: "Specs" },
  { id: "order", label: "Order" },
] as const;

function go(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollToId(id, 1.45);
  };
}

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Solid ink bar for maximum contrast over the hero */}
      <div
        className="absolute inset-0 border-b border-white/10"
        style={{
          background: "rgba(7, 8, 10, 0.96)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow:
            "0 22px 56px rgba(0, 0, 0, 0.7), 0 1px 0 rgba(244, 239, 230, 0.06) inset",
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a
          href="#top"
          onClick={go("top")}
          className="nav-brand display text-sm tracking-[0.18em]"
          style={{
            color: "#f4efe6",
            textShadow: "0 2px 16px rgba(0,0,0,0.95)",
          }}
        >
          FIELD / AURALIS
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={go(link.id)}
              className="nav-link"
              style={{
                color: "rgba(244, 239, 230, 0.88)",
                textShadow: "0 2px 12px rgba(0,0,0,0.9)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#order"
          onClick={go("order")}
          className="nav-cta rounded-full px-4 py-2 text-xs font-semibold tracking-[0.14em]"
          style={{
            background: "#d4926a",
            color: "#07080a",
            border: "1px solid rgba(232, 184, 150, 0.55)",
            boxShadow:
              "0 10px 28px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,146,106,0.25)",
          }}
        >
          PRE-ORDER
        </a>
      </div>
    </motion.header>
  );
}
