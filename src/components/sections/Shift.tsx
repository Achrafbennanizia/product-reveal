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
            THE PROBLEM
          </p>
          <h2 className="display mt-4 text-4xl text-bone md:text-5xl">
            Stereo only controls left and right.
            <span className="block text-bone-muted">
              Your ears also need height and distance.
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-bone-muted">
            Humans locate sound with interaural time and level differences
            (ITD / ILD), spectral pinna cues for elevation, and early
            reflections for distance. Two-channel stereo can fake width, but it
            cannot encode height or a stable distance field — so music collapses
            into a flat plane between the speakers.
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
            ["ITD / ILD", "Left–right timing & loudness cues"],
            ["Pinna filtering", "Elevation cues from ear shape"],
            ["Early reflections", "Brain uses them to judge distance"],
            ["Room modes", "Untreated rooms smear bass & image"],
          ].map(([label, value]) => (
            <li
              key={label}
              className="flex items-baseline justify-between gap-6 border-b border-line pb-4"
            >
              <span className="tracking-[0.12em] text-bone/70">{label}</span>
              <span className="text-right text-bone">{value}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
