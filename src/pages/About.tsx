import React from 'react';

export default function About() {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-5xl font-black mb-8 text-gradient">The Engine Room</h1>
      <p className="text-on-surface-variant text-lg max-w-2xl mb-16">
        Regulus Labs is a collective of engineers, designers, and deep thinkers dedicated to building software that shifts paradigms. We're driven by the philosophy that high-tech tools should be both beautiful and blazingly fast.
      </p>
      <div className="glass-panel rounded-xl p-12">
        <h3 className="text-sm font-bold text-secondary-fixed uppercase tracking-widest mb-6">Our Mission</h3>
        <p className="text-xl md:text-3xl font-light leading-relaxed">
          "To craft highly efficient digital tools that help ambitious enterprises scale gracefully into the future."
        </p>
      </div>
    </div>
  );
}
