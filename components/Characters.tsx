"use client";

import { motion } from "framer-motion";

export default function Characters() {
  return (
    <section className="relative py-32 px-6 md:px-16 border-t border-softglow-gold/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-softglow-rose-dim text-sm tracking-[0.25em] uppercase mb-3">The Visitor</p>
          <h3 className="text-3xl text-softglow-paper font-light mb-6">Lina Reed</h3>
          <p className="text-softglow-paper/70 leading-relaxed mb-6">
            She carries a loss that is already beginning to thin. The letter found her because she had nowhere else that required her at a particular hour. Inside the Softglow she learns the difference between threads that drift and threads that approach.
          </p>
          <p className="text-softglow-gold/80 italic text-sm">
            "I don't have anywhere else that requires me at a particular hour."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <p className="text-softglow-gold-dim text-sm tracking-[0.25em] uppercase mb-3">The Bound</p>
          <h3 className="text-3xl text-softglow-paper font-light mb-6">The Archivist</h3>
          <p className="text-softglow-paper/70 leading-relaxed mb-6">
            Bound to the Threshold. Precise. Careful. The formal economy of movement has not changed, yet something in the angle of the shoulders has loosened by a degree that only someone watching for days would notice.
          </p>
          <p className="text-softglow-gold/80 italic text-sm">
            "Most people who come through the door treat the first week as a visit."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
