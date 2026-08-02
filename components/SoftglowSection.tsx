"use client";

import { motion } from "framer-motion";

const impressions = [
  {
    title: "What the Softglow is",
    body: "A living archive of leftover human memory. Not a library of books — a place where residual moments hang as soft golden and rose-colored threads of light. Some drift. Some still decide whether to stay.",
  },
  {
    title: "Residual Heat",
    body: "The warmth left after contact. Not living body heat — the memory of a hand, a presence, a moment that has not fully gone.",
  },
  {
    title: "Attention",
    body: "The force that keeps a memory thread from thinning. Looking carefully is how something stays coherent a little longer.",
  },
  {
    title: "The story",
    body: "Lina walks through a doorway that should not open. Inside she meets the Archivist, who is bound to the Softglow. Slow-burn romance. Soft magic. No epic wars — intimacy and presence under pressure.",
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
          The world of the book
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-softglow-paper mb-6 max-w-2xl"
        >
          What Softglow Threshold is about
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-softglow-paper/70 text-lg max-w-2xl mb-16 leading-relaxed"
        >
          A quiet fantasy romance. A woman enters a living memory archive and meets the man bound to it. Soft magic, slow burn, sensory detail — not court intrigue or dragon battles.
        </motion.p>

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
