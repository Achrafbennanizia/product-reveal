"use client";

import { motion } from "motion/react";

const findings = [
  {
    title: "Image stability",
    metric: "±1.8°",
    detail:
      "Median azimuth error across a 1.2 m listening arc in a treated ISO-style room — vs ±7° for a conventional stereo pair at the same SPL.",
  },
  {
    title: "Calibration time",
    metric: "70 s",
    detail:
      "Mean time to capture and apply a room impulse response on mid-size living rooms (18–32 m²). Re-run after furniture moves.",
  },
  {
    title: "Low-frequency control",
    metric: "−6 dB",
    detail:
      "Average reduction of the strongest modal peak between 40–80 Hz after adaptive EQ, measured at the primary seat.",
  },
  {
    title: "Latency budget",
    metric: "<8 ms",
    detail:
      "Probe → process → playback path kept under the threshold where audio–video sync remains imperceptible for most viewers.",
  },
];

export function Proof() {
  return (
    <section
      id="proof"
      className="section-panel relative z-10 px-5 py-14 md:px-8 md:py-16"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-copper">
            LAB RESULTS
          </p>
          <h2 className="display mt-3 max-w-2xl text-3xl text-bone md:mt-4 md:text-5xl">
            What we measure before we claim it.
          </h2>
        </motion.div>

        <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 md:gap-5">
          {findings.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.7,
                ease: [0.23, 1, 0.32, 1],
                delay: i * 0.06,
              }}
              className="rounded-3xl border border-line bg-ink-elevated/60 p-5 backdrop-blur-xl md:p-7"
            >
              <p className="text-xs tracking-[0.18em] text-bone-muted">
                {item.title}
              </p>
              <p className="display mt-2 text-3xl text-copper md:mt-3 md:text-4xl">
                {item.metric}
              </p>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-bone-muted md:mt-4 md:line-clamp-none">
                {item.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
