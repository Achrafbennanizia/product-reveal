"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100svh] items-end px-5 pb-16 pt-28 md:items-center md:px-8 md:pb-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-end">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="mb-5 text-xs font-semibold tracking-[0.28em] text-copper"
          >
            FIELD INSTRUMENTS · SPATIAL AUDIO NODE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.28 }}
            className="display text-[clamp(3.4rem,9vw,7.5rem)] text-bone"
          >
            AURALIS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.42 }}
            className="mt-6 max-w-md text-base leading-relaxed text-bone-muted md:text-lg"
          >
            One loudspeaker that places sound in three dimensions — by measuring
            your room first, then steering energy with timed beams instead of
            drowning the walls in volume.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#order" className="btn-primary">
              Reserve a unit
            </a>
            <a
              href="#shift"
              className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-medium tracking-[0.08em] text-bone transition hover:border-bone/40"
            >
              How it works
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.7 }}
          className="hidden justify-self-end text-right md:block"
        >
          <p className="text-xs tracking-[0.22em] text-bone-muted">
            SCROLL TO INSPECT
          </p>
          <div className="mt-3 ml-auto h-16 w-px bg-gradient-to-b from-copper to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
