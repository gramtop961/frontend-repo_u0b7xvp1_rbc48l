import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          What is Math Singularity?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl text-center text-white/80"
        >
          A modern platform for students, enthusiasts, and competition trainees. Learn core
          concepts, explore visualizations, and sharpen problem-solving skills across
          algebra, geometry, calculus, and number theory—all in a sleek, cosmic interface.
        </motion.p>
      </div>
    </section>
  );
}
