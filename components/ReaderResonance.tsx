"use client";

import { motion } from "framer-motion";

export default function ReaderResonance() {
  return (
    <section className="relative py-32 px-6 md:px-16 border-t border-softglow-gold/10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-softglow-gold-dim text-sm tracking-[0.3em] uppercase mb-6"
        >
          Resonance
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-softglow-paper mb-12"
        >
          This book is for you if
        </motion.h2>

        <div className="space-y-6 text-left max-w-lg mx-auto">
          {[
            "You want atmosphere over spectacle",
            "Soft magic and residual heat matter more than epic battles",
            "You prefer slow-burn, attentive intimacy",
            "Emotional precision is its own form of tension",
            "You are willing to stay with something that refuses false victory",
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-softglow-gold shrink-0" />
              <p className="text-softglow-paper/75 leading-relaxed">{line}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
