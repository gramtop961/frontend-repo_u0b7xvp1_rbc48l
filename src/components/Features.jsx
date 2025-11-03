import React from 'react';
import { motion } from 'framer-motion';

const topics = [
  {
    title: 'Algebra',
    desc: 'Equations, inequalities, polynomials, and structures.',
    glyph: '𝑥² + 2𝑥 + 1',
  },
  {
    title: 'Geometry',
    desc: 'Euclidean, analytic, and geometric reasoning.',
    glyph: '△ + ◻︎ + ◯',
  },
  {
    title: 'Calculus',
    desc: 'Limits, derivatives, integrals, and series.',
    glyph: 'd/dx (sin x)',
  },
  {
    title: 'Number Theory',
    desc: 'Primes, modular arithmetic, and Diophantine problems.',
    glyph: 'a ≡ b (mod n)',
  },
  {
    title: 'Problem Solving',
    desc: 'Olympiad-style challenges and techniques.',
    glyph: 'Invariants • Pigeonhole • Graphs',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
        >
          Explore Topics
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 shadow-[0_0_40px_rgba(168,85,247,0.15)] backdrop-blur-sm"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-600/20 blur-2xl transition group-hover:bg-purple-500/30" />
              <div className="mb-3 text-sm text-purple-300/90">{t.glyph}</div>
              <h3 className="mb-2 text-xl font-semibold">{t.title}</h3>
              <p className="text-sm text-white/70">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
