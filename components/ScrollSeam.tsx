"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

export default function ScrollSeam({ progress }: { progress: MotionValue<number> }) {
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed left-6 top-0 bottom-0 w-px z-40 pointer-events-none hidden md:block">
      <div className="absolute inset-0 bg-softglow-gold/10" />
      <motion.div
        style={{ height }}
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-softglow-gold via-softglow-rose to-softglow-gold origin-top"
      />
    </div>
  );
}
