"use client";

import { motion } from "motion/react";

const specs = [
  ["Bandwidth", "38 Hz – 20 kHz (±2.5 dB, free field)"],
  ["Drivers", "12 × 40 mm full-range + 1 × 100 mm woofer"],
  ["DSP", "48 kHz · 32-bit float · <8 ms round-trip"],
  ["Calibration", "Room IR capture · ~70 seconds"],
  ["Max SPL", "98 dB @ 1 m (THD < 1%)"],
  ["Power", "65 W peak · USB‑C PD standby"],
];

export function Materials() {
  return (
    <section
      id="materials"
      className="section-panel relative z-10 px-5 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 md:grid-cols-[minmax(0,1fr)_clamp(11rem,24vw,20rem)_minmax(0,1.08fr)] md:gap-x-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="md:col-start-1"
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-copper">
            SPECIFICATIONS
          </p>
          <h2 className="display mt-3 text-3xl text-bone md:mt-4 md:text-[2.75rem] lg:text-5xl">
            Numbers you can check, not adjectives.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-bone-muted md:mt-6 md:text-base">
            Housing is stiff anodized aluminum to reduce cabinet resonance. The
            copper ring is a heat and RF shield for the emitter array — form
            follows thermal and electromagnetic constraints, not decoration.
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
          className="rounded-3xl border border-line bg-ink/80 p-2 backdrop-blur-xl md:col-start-3"
        >
          {specs.map(([term, detail]) => (
            <div
              key={term}
              className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-5 border-b border-line px-4 py-3 last:border-b-0 md:px-5 md:py-3.5"
            >
              <dt className="text-xs tracking-[0.14em] whitespace-nowrap text-bone-muted md:text-sm">
                {term}
              </dt>
              <dd className="text-sm leading-snug text-bone">{detail}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
