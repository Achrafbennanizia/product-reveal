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
      className="section-panel relative z-10 px-5 py-10 md:px-8 md:py-14"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-3 md:grid-cols-[minmax(0,1fr)_clamp(11rem,24vw,20rem)_minmax(0,1fr)] md:gap-x-6 md:gap-y-2.5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="md:col-start-1 md:row-start-1 md:mb-1"
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-copper">
            LAB RESULTS
          </p>
          <h2 className="display mt-2 text-3xl text-bone md:text-[2.15rem] md:leading-[0.95] xl:text-5xl">
            What we measure before we claim it.
          </h2>
        </motion.div>

        {findings.map((item, i) => {
          const place = [
            "md:col-start-1 md:row-start-2",
            "md:col-start-3 md:row-start-2",
            "md:col-start-1 md:row-start-3",
            "md:col-start-3 md:row-start-3",
          ][i];

          return (
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
              className={`flex h-full flex-col rounded-3xl border border-line bg-ink-elevated/85 p-4 backdrop-blur-xl md:p-5 ${place}`}
            >
              <p className="text-xs tracking-[0.18em] text-bone-muted">
                {item.title}
              </p>
              <p className="display mt-2 text-3xl text-copper md:text-4xl">
                {item.metric}
              </p>
              <p className="mt-2 text-sm leading-snug text-bone-muted md:mt-3">
                {item.detail}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
