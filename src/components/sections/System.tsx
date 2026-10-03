"use client";

import { motion } from "motion/react";

const beats = [
  {
    index: "01",
    title: "Measure the room",
    copy: "A short probe tone captures an impulse response. Soft furniture, glass, and corners are mapped so the DSP knows which reflections help — and which ones smear the image.",
  },
  {
    index: "02",
    title: "Steer with timed beams",
    copy: "Twelve independently delayed drivers form constructive and destructive interference patterns. Energy is aimed toward listening zones instead of blasting every wall equally.",
  },
  {
    index: "03",
    title: "Render spatial cues",
    copy: "Object and ambisonic feeds are decoded with HRTF-informed filters so elevation and depth stay stable as you move a few steps — not only when you sit in one “sweet spot.”",
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
            THE METHOD
          </p>
          <h2 className="display mt-4 text-4xl text-bone md:text-6xl">
            Three rules.
            <br />
            No magic black box.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-bone-muted">
            AURALIS follows a fixed pipeline: sense the acoustic boundary
            conditions, form beams with phase control, then apply spatial
            filters that match how hearing works — not louder EQ presets.
          </p>
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
