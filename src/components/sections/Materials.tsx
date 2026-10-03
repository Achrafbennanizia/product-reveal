"use client";

import { motion } from "motion/react";

const specs = [
  ["Shell", "Anodized aluminum · sandblasted"],
  ["Halo", "Warm copper alloy · micro-beveled"],
  ["Core", "Adaptive emitter · tunable warmth"],
  ["Height", "168 mm"],
  ["Weight", "1.1 kg"],
  ["Power", "USB‑C · wireless standby"],
];

export function Materials() {
  return (
    <section
      id="materials"
      className="relative z-10 px-5 py-28 md:px-8 md:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-end">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-copper">
            CRAFT
          </p>
          <h2 className="display mt-4 max-w-lg text-4xl text-bone md:text-5xl">
            Built like an instrument, not a gadget.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-bone-muted">
            Scroll again — the halo lifts, the core warms. Materials do the
            storytelling so the page never needs floating badges.
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
          className="rounded-3xl border border-line bg-ink/60 p-2 backdrop-blur-xl"
        >
          {specs.map(([term, detail]) => (
            <div
              key={term}
              className="grid grid-cols-[0.8fr_1.2fr] gap-4 border-b border-line px-5 py-4 last:border-b-0"
            >
              <dt className="text-sm tracking-[0.12em] text-bone-muted">
                {term}
              </dt>
              <dd className="text-sm text-bone">{detail}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
