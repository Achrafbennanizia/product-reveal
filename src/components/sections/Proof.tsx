"use client";

import { motion } from "motion/react";

const quotes = [
  {
    quote:
      "It doesn’t sound like a speaker in a corner. It sounds like the room decided to perform.",
    name: "Maya Chen",
    role: "Spatial designer, Atelier North",
  },
  {
    quote:
      "Finally a hardware story where the industrial design and the marketing funnel agree.",
    name: "Jonas Reid",
    role: "Product marketing, Orbit Lab",
  },
];

export function Proof() {
  return (
    <section className="relative z-10 px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-xs font-semibold tracking-[0.24em] text-copper"
        >
          SOCIAL PROOF
        </motion.p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {quotes.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                ease: [0.23, 1, 0.32, 1],
                delay: i * 0.08,
              }}
              className="rounded-3xl border border-line bg-ink-elevated/60 p-8 backdrop-blur-xl"
            >
              <blockquote className="display text-2xl leading-snug text-bone md:text-3xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm text-bone-muted">
                <span className="text-bone">{item.name}</span> · {item.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
