"use client";

import { motion } from "motion/react";

export function Order() {
  return (
    <section id="order" className="relative z-10 px-5 py-28 md:px-8 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 rounded-[2rem] border border-line bg-gradient-to-br from-ink-elevated via-ink to-[#1a1410] p-8 md:flex-row md:items-end md:p-12"
      >
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-copper">
            FOUNDERS EDITION
          </p>
          <h2 className="display mt-4 text-4xl text-bone md:text-6xl">
            Reserve the first two hundred.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bone-muted">
            $1,280 · ships Q4 · includes room calibration kit and a private
            tuning session. This CTA is the conversion close after awareness,
            desire, and proof — not a random button in the hero.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 md:w-auto md:min-w-[240px]">
          <a
            href="mailto:hello@fieldinstruments.studio?subject=AURALIS%20Founders%20Edition"
            className="btn-copper"
          >
            Request invite
          </a>
          <p className="text-center text-xs tracking-[0.14em] text-bone-muted">
            No spam · 48h response
          </p>
        </div>
      </motion.div>
    </section>
  );
}
