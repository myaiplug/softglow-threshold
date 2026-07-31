"use client";

import { motion } from "framer-motion";

const impressions = [
  {
    title: "Residual Heat",
    body: "The warmth that remains after a hand has left the surface. Not the heat of the living, but the memory of contact.",
  },
  {
    title: "Attention",
    body: "The only force that keeps a thread from thinning. To look carefully is to keep something coherent a little longer.",
  },
  {
    title: "The Softglow",
    body: "A living archive of residual human memory. Gold and rose threads drift at different heights, some resting, some still deciding.",
  },
  {
    title: "Coherence",
    body: "What remains when extraction is refused. The collection survives only through sustained, non-extractive presence.",
  },
];

export default function SoftglowSection() {
  return (
    <section id="archive" className="relative py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-softglow-gold-dim text-sm tracking-[0.3em] uppercase mb-4"
        >
          The Archive
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-softglow-paper mb-16 max-w-2xl"
        >
          What the Softglow keeps
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {impressions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8 }}
              className="group relative p-8 border border-softglow-gold/15 hover:border-softglow-gold/40 transition-colors duration-700 bg-softglow-charcoal/40"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-softglow-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <h3 className="text-softglow-gold text-xl mb-4 tracking-wide">{item.title}</h3>
              <p className="text-softglow-paper/65 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
