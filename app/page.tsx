"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import HeroThreshold from "@/components/HeroThreshold";
import SoftglowSection from "@/components/SoftglowSection";
import Characters from "@/components/Characters";
import SeriesThresholds from "@/components/SeriesThresholds";
import ReaderResonance from "@/components/ReaderResonance";
import FinalCrossing from "@/components/FinalCrossing";
import SpectralFooter from "@/components/SpectralFooter";
import Nav from "@/components/Nav";
import ScrollSeam from "@/components/ScrollSeam";

export default function SoftglowLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <main ref={containerRef} className="relative min-h-screen bg-softglow-void">
      <ScrollSeam progress={scrollYProgress} />
      <Nav />
      <HeroThreshold />
      <SoftglowSection />
      <Characters />
      <SeriesThresholds />
      <ReaderResonance />
      <FinalCrossing />
      <SpectralFooter />
    </main>
  );
}
