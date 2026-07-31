"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroThreshold() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const threadShiftX = useTransform(springX, [0, 1], [-40, 40]);
  const threadShiftY = useTransform(springY, [0, 1], [-25, 25]);
  const lightIntensity = useTransform(springX, [0, 0.5, 1], [0.7, 1.15, 0.7]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#16161F_0%,_#07070B_70%)]" />

      <motion.div
        style={{ x: threadShiftX, y: threadShiftY }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="absolute thread-line opacity-40"
            style={{
              top: `${12 + i * 9}%`,
              left: `${-10 + (i % 3) * 15}%`,
              width: `${40 + (i % 4) * 20}%`,
              animationDelay: `${i * 1.4}s`,
              animation: `threadDrift ${14 + i * 1.2}s ease-in-out infinite`,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        style={{ scale: lightIntensity }}
        className="relative z-10 w-[min(90vw,420px)] aspect-[3/5] threshold-frame rounded-sm overflow-hidden animate-threshold-pulse"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8C98A]/20 via-[#E8C98A]/08 to-transparent" />
        <div className="absolute inset-[18%] border border-[#E8C98A]/25 rounded-sm" />
        <div className="absolute left-1/2 top-[12%] bottom-[12%] w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#F5D9A8] to-transparent shadow-[0_0_30px_#E8C98A]" />
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8A0B8]/60 to-transparent" />
          <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8A0B8]/40 to-transparent" />
        </div>
      </motion.div>

      <div className="absolute z-20 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="text-softglow-gold-dim text-sm tracking-[0.35em] uppercase mb-6"
        >
          Book One of the Softglow Sequence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.4 }}
          className="font-display"
        >
          <span className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-softglow-paper glow-text">
            SOFTGLOW
          </span>
          <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl tracking-[0.25em] text-softglow-gold-dim font-light">
            THRESHOLD
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
          className="mt-8 text-softglow-paper/70 text-base md:text-lg max-w-md mx-auto leading-relaxed"
        >
          She walked through a door that was never meant to open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#cross"
            className="group relative px-10 py-4 bg-softglow-gold text-softglow-void font-medium tracking-wide transition-all duration-500 hover:shadow-glow-strong"
          >
            <span className="relative z-10">Cross the Threshold</span>
            <span className="absolute inset-0 bg-softglow-paper opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </a>
          <a
            href="#archive"
            className="px-8 py-4 border border-softglow-gold/40 text-softglow-gold-dim tracking-wide hover:border-softglow-gold hover:text-softglow-gold transition-colors duration-500"
          >
            Enter the Archive
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-softglow-void to-transparent" />
    </section>
  );
}
