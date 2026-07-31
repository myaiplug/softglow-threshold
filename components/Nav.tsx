"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference"
    >
      <span className="text-softglow-paper/80 text-sm tracking-[0.3em] uppercase">
        Softglow
      </span>
      <div className="flex items-center gap-8 text-sm tracking-wide text-softglow-paper/60">
        <a href="#archive" className="hover:text-softglow-gold transition-colors">Archive</a>
        <a href="#series" className="hover:text-softglow-gold transition-colors">Sequence</a>
        <a href="#cross" className="hover:text-softglow-gold transition-colors">Cross</a>
      </div>
    </motion.nav>
  );
}
