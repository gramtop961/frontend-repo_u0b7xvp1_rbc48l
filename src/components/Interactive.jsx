import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

function SinePath({ amplitude = 40, frequency = 2, width = 600, height = 200 }) {
  const path = useMemo(() => {
    const points = [];
    const steps = 200;
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * width;
      const y = height / 2 + amplitude * Math.sin((i / steps) * frequency * Math.PI * 2);
      points.push(`${x},${y}`);
    }
    return `M ${points[0]} L ${points.slice(1).join(' ')}`;
  }, [amplitude, frequency, width, height]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-40 w-full">
      <defs>
        <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d={path} fill="none" stroke="url(#purpleGlow)" strokeWidth="3" filter="url(#glow)" />
    </svg>
  );
}

export default function Interactive() {
  const [amp, setAmp] = useState(40);
  const [freq, setFreq] = useState(2);

  return (
    <section id="interactive" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute left-10 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-center text-3xl font-bold sm:text-4xl"
        >
          Interactive Math
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mb-10 max-w-2xl text-center text-white/75"
        >
          Tweak parameters to see functions morph in real time. Explore waves, growth, and
          symmetry visually.
        </motion.p>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
          <SinePath amplitude={amp} frequency={freq} />
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/80">Amplitude: {amp}</label>
              <input
                type="range"
                min="10"
                max="80"
                value={amp}
                onChange={(e) => setAmp(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/80">Frequency: {freq}</label>
              <input
                type="range"
                min="1"
                max="6"
                value={freq}
                onChange={(e) => setFreq(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>
          </div>

          {/* Final call to action area */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-white/70">
              Ready to go deeper? Practice with curated sets and visual explorations.
            </p>
            <a
              href="#get-started"
              className="rounded-full bg-purple-600/90 px-6 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(147,51,234,0.6)] transition hover:bg-purple-500/90 hover:shadow-[0_0_40px_rgba(168,85,247,0.75)]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
