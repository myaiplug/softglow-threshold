"use client";

import { motion } from "framer-motion";

export default function FinalCrossing() {
  return (
    <section id="cross" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,201,138,0.08)_0%,_transparent_60%)]" />
      
      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-12 mx-auto w-24 h-40 border border-softglow-gold/40 threshold-frame animate-threshold-pulse"
        >
          <div className="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-softglow-gold to-transparent" />
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-light text-softglow-paper mb-6">
          Cross the Threshold
        </h2>
        <p className="text-softglow-paper/60 mb-12 max-w-md mx-auto leading-relaxed">
          Softglow Threshold is available now. The first residual archive in the sequence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-softglow-gold text-softglow-void font-medium tracking-wide hover:shadow-glow-strong transition-shadow duration-500"
          >
            Read on Amazon
          </a>
          <a
            href="#series"
            className="px-8 py-4 border border-softglow-gold/30 text-softglow-gold-dim hover:border-softglow-gold transition-colors"
          >
            View the Sequence
          </a>
        </div>

        <div className="mt-20 pt-12 border-t border-softglow-gold/10">
          <p className="text-sm text-softglow-paper/50 mb-6 tracking-wide">
            Receive correspondence when the next Threshold begins to open
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your address for residual notes"
              className="flex-1 bg-softglow-charcoal/80 border border-softglow-gold/20 px-5 py-3 text-softglow-paper placeholder:text-softglow-paper/30 focus:outline-none focus:border-softglow-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 border border-softglow-gold/40 text-softglow-gold text-sm tracking-wide hover:bg-softglow-gold/10 transition-colors"
            >
              Keep the thread
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
