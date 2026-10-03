"use client";

import { motion } from "motion/react";

const beats = [
  {
    index: "01",
    title: "Sense the room",
    copy: "A quiet chirp reads walls and soft surfaces. No app maze — the node learns first, then plays.",
  },
  {
    index: "02",
    title: "Sculpt the field",
    copy: "Twelve beamlets shape width and height. Voices stay centered; instruments bloom around you.",
  },
  {
    index: "03",
    title: "Stay out of sight",
    copy: "One object on a shelf. Copper halo, matte shell, no LED carnival — presence without spectacle.",
  },
];

export function System() {
  return (
    <section id="system" className="relative z-10 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-copper">
            THE SYSTEM
          </p>
          <h2 className="display mt-4 text-4xl text-bone md:text-6xl">
            Three moves.
            <br />
            One listening habit.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {beats.map((beat, i) => (
            <motion.article
              key={beat.index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.7,
                ease: [0.23, 1, 0.32, 1],
                delay: i * 0.08,
              }}
              className="rounded-3xl border border-line bg-ink-elevated/70 p-7 backdrop-blur-xl"
            >
              <p className="display text-sm tracking-[0.2em] text-copper">
                {beat.index}
              </p>
              <h3 className="display mt-5 text-2xl text-bone">{beat.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-bone-muted">
                {beat.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
