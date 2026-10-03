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
    <section
      id="system"
      className="section-panel relative z-10 px-5 py-14 md:px-8 md:py-16"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
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
          <h2 className="display mt-3 text-3xl text-bone md:mt-4 md:text-5xl">
            Three rules.
            <br />
            No magic black box.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-muted md:mt-5 md:text-base">
            AURALIS follows a fixed pipeline: sense the acoustic boundary
            conditions, form beams with phase control, then apply spatial
            filters that match how hearing works — not louder EQ presets.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-6">
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
              className="rounded-3xl border border-line bg-ink-elevated/70 p-5 backdrop-blur-xl md:p-7"
            >
              <p className="display text-sm tracking-[0.2em] text-copper">
                {beat.index}
              </p>
              <h3 className="display mt-3 text-xl text-bone md:mt-5 md:text-2xl">
                {beat.title}
              </h3>
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-bone-muted md:mt-4 md:line-clamp-none">
                {beat.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
