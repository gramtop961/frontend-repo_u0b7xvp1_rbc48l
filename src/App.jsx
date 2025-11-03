import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Interactive from './components/Interactive.jsx';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      <Hero />
      <About />
      <Features />
      <Interactive />

      {/* Final CTA Footer */}
      <footer id="get-started" className="relative w-full bg-black py-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-700/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h3 className="mb-4 text-2xl font-bold sm:text-3xl">Join the Orbit</h3>
          <p className="mx-auto mb-8 max-w-2xl text-white/75">
            Be first to access interactive lessons, challenges, and visual explorations.
            Enter the singularity and level up your math.
          </p>
          <div className="mx-auto flex max-w-md flex-col items-center gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/50 outline-none backdrop-blur focus:border-white/20"
            />
            <button className="w-full rounded-full bg-purple-600/90 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(147,51,234,0.6)] transition hover:bg-purple-500/90 hover:shadow-[0_0_40px_rgba(168,85,247,0.75)] sm:w-auto">
              Notify Me
            </button>
          </div>
          <p className="mt-6 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
