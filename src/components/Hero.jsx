import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const OrbitingMath = () => {
  const items = [
    { symbol: 'π', size: 'text-2xl', radius: 120, duration: 18 },
    { symbol: '∫', size: 'text-3xl', radius: 170, duration: 26 },
    { symbol: 'Σ', size: 'text-2xl', radius: 220, duration: 34 },
    { symbol: '→', size: 'text-2xl', radius: 150, duration: 22 },
    { symbol: '∞', size: 'text-3xl', radius: 200, duration: 30 },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          style={{ width: item.radius * 2, height: item.radius * 2 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: item.duration, ease: 'linear' }}
        >
          <div
            className={`absolute left-1/2 -translate-x-1/2 -top-3 ${item.size} font-semibold text-white/90`}
          >
            {item.symbol}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette and purple glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -inset-40 opacity-60" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25)_0%,rgba(0,0,0,0)_60%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Dive Into the Math Singularity
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mx-auto mb-8 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          A cosmic hub to learn, explore, and master mathematics—from algebraic orbits to
          calculus horizons.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#features"
            className="group inline-flex items-center justify-center rounded-full bg-purple-600/90 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(147,51,234,0.6)] transition hover:bg-purple-500/90 hover:shadow-[0_0_40px_rgba(168,85,247,0.75)]"
          >
            Start Learning
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Orbiting math glyphs */}
      <OrbitingMath />
    </section>
  );
}
