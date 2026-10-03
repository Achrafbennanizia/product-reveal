"use client";

import { motion } from "motion/react";

export function Shift() {
  return (
    <section id="shift" className="relative z-10 px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-xl rounded-3xl border border-line bg-ink/55 p-8 backdrop-blur-xl md:p-10"
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-copper">
            THE SHIFT
          </p>
          <h2 className="display mt-4 text-4xl text-bone md:text-5xl">
            Stereo was a compromise.
            <span className="block text-bone-muted">Space is the product.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-bone-muted">
            Most “immersive” setups ask you to rearrange the room. AURALIS maps
            reflections, then paints a field you can walk through — so the
            marketing promise is the listening experience, not another cable.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          className="space-y-5 text-sm text-bone-muted md:pl-8"
        >
          {[
            ["Audience", "Design-led homes & focused workspaces"],
            ["Job to be done", "Fill a room with presence, not noise"],
            ["Primary CTA", "Reserve the Founders Edition"],
            ["Proof", "Adaptive room map in under 90 seconds"],
          ].map(([label, value]) => (
            <li
              key={label}
              className="flex items-baseline justify-between gap-6 border-b border-line pb-4"
            >
              <span className="tracking-[0.16em] text-bone/70">{label}</span>
              <span className="text-right text-bone">{value}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
