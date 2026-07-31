"use client";

export default function SpectralFooter() {
  return (
    <footer className="relative py-16 px-8 border-t border-softglow-gold/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-softglow-paper/40">
        <div>
          <span className="text-softglow-gold/60 tracking-[0.2em] uppercase text-xs">Softglow Threshold</span>
          <p className="mt-1">Book One · R. Snodgrass III · 2026</p>
        </div>
        <div className="flex items-center gap-8">
          <span>Quiet liminal romantasy</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Attention becomes survival</span>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-softglow-gold/30 to-transparent" />
    </footer>
  );
}
