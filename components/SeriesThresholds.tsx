"use client";

import { motion } from "framer-motion";

const books = [
  {
    number: "01",
    title: "Softglow Threshold",
    status: "Open",
    state: "active",
    note: "The first residual archive. Available now.",
  },
  {
    number: "02",
    title: "Residual Heat",
    status: "Thinning",
    state: "forming",
    note: "Memory still cohering. Correspondence forthcoming.",
  },
  {
    number: "03",
    title: "The Bound Seam",
    status: "Sealed",
    state: "locked",
    note: "The Threshold has not yet decided to open.",
  },
];

export default function SeriesThresholds() {
  return (
    <section id="series" className="relative py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-softglow-gold-dim text-sm tracking-[0.3em] uppercase mb-4"
        >
          The Sequence
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-softglow-paper mb-6"
        >
          Additional Thresholds
        </motion.h2>
        <p className="text-softglow-paper/55 max-w-xl mb-16">
          Softglow Threshold is the first door. Others exist. Some are still deciding whether to hold.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {books.map((book, i) => (
            <motion.div
              key={book.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.9 }}
              className={`relative p-8 border transition-all duration-700 ${
                book.state === "active"
                  ? "border-softglow-gold/50 bg-softglow-charcoal/60 shadow-glow"
                  : book.state === "forming"
                  ? "border-softglow-rose/25 bg-softglow-charcoal/30"
                  : "border-softglow-gold/10 bg-softglow-void/80 opacity-70"
              }`}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-softglow-gold/60 text-sm tracking-widest">{book.number}</span>
                <span
                  className={`text-xs tracking-wider uppercase ${
                    book.state === "active"
                      ? "text-softglow-gold"
                      : book.state === "forming"
                      ? "text-softglow-rose-dim"
                      : "text-softglow-paper/30"
                  }`}
                >
                  {book.status}
                </span>
              </div>
              <h3 className="text-xl text-softglow-paper mb-3 font-light">{book.title}</h3>
              <p className="text-sm text-softglow-paper/50 leading-relaxed">{book.note}</p>

              {book.state === "active" && (
                <div className="mt-8">
                  <a
                    href="#cross"
                    className="text-softglow-gold text-sm tracking-wide hover:underline underline-offset-4"
                  >
                    Enter this Threshold →
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
