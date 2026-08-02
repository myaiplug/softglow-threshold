"use client";

import { motion } from "framer-motion";

const facts = [
  {
    title: "What kind of place it is",
    body: "Think of a quiet museum that does not hold objects. It holds leftover moments from people\u2019s lives — the feeling after someone left the room, a conversation that never finished, warmth that stayed on a surface. Those moments appear as thin threads of soft gold and rose light floating in the air.",
  },
  {
    title: "How it looks",
    body: "A large, still interior. Not outdoors. Not a city. Soft light, no harsh neon. Threads of gold and rose drift at different heights. Some hang still. Some move slowly. The air feels warm in places, like residual body heat after contact.",
  },
  {
    title: "How the place works",
    body: "If you look carefully at a thread, it stays clearer longer. If you ignore it or try to take from it, the thread thins and can fade. The Softglow is kept stable by attention, not by machines or magic spells.",
  },
  {
    title: "Who lives there",
    body: "One man is bound to the Softglow: the Archivist. He cannot simply leave. He maintains the collection of residual memories. When Lina walks through the doorway, she enters this place and meets him. Almost the entire story happens inside the Softglow.",
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
          The setting
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-softglow-paper mb-6 max-w-2xl"
        >
          What the Softglow is
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-softglow-paper/75 text-lg max-w-2xl mb-4 leading-relaxed"
        >
          The Softglow is the place where most of the book happens.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-softglow-paper/70 text-base max-w-2xl mb-16 leading-relaxed"
        >
          It is not a forest, castle, or city. It is closer to a quiet indoor archive of unfinished human moments — like a museum of residual feeling instead of objects — that you reach by walking through a doorway that should not open.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {facts.map((item, i) => (
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
              <p className="text-softglow-paper/70 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
