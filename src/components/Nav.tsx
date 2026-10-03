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
    smoothScrollToId(id, 2.15);
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a
          href="#top"
          onClick={go("top")}
          className="display text-sm tracking-[0.18em] text-bone"
        >
          FIELD / AURALIS
        </a>
        <nav className="hidden items-center gap-8 text-sm text-bone-muted md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={go(link.id)}
              className="transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#order"
          onClick={go("order")}
          className="rounded-full border border-line bg-bone/5 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-bone backdrop-blur-md transition hover:border-copper hover:text-copper-bright"
        >
          PRE-ORDER
        </a>
      </div>
    </motion.header>
  );
}
