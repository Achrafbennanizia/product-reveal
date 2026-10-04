"use client";

import { motion } from "motion/react";

export function Order() {
  return (
    <section
      id="order"
      className="section-panel relative z-10 px-5 py-12 md:px-8 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] border border-line bg-gradient-to-br from-ink-elevated via-ink to-[#1a1410] p-7 md:flex-row md:items-end md:gap-10 md:p-12"
      >
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-copper">
            FOUNDERS BATCH · 200 UNITS
          </p>
          <h2 className="display mt-4 text-4xl text-bone md:text-6xl">
            Get calibrated hardware, not a wishlist.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bone-muted">
            $1,280 · ships in Q4. Includes the measurement mic, a printed
            calibration guide, and one remote tuning session so your room’s
            impulse response is applied correctly on day one.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 md:w-auto md:min-w-[240px]">
          <a
            href="mailto:hello@fieldinstruments.studio?subject=AURALIS%20Founders%20Edition"
            className="btn-copper"
          >
            Request an invite
          </a>
          <p className="text-center text-xs tracking-[0.14em] text-bone-muted">
            Reply within 48 hours
          </p>
        </div>
      </motion.div>
    </section>
  );
}
