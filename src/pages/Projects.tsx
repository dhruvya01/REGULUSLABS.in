import React from 'react';

export default function Projects() {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-5xl font-black mb-8">Mission Dossiers</h1>
      <p className="text-on-surface-variant text-lg max-w-2xl mb-16">
        A selected archive of previous technical deployments, architectural experiments, and successful venture launches.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-video glass-panel rounded-xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-surface-container-highest p-8 flex flex-col justify-end">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Alpha-01</span>
            <h3 className="text-2xl font-bold mb-2">Gym Manager Pro</h3>
            <p className="text-sm text-on-surface-variant">Biometric scaling and revenue intelligence.</p>
          </div>
        </div>
        
        <div className="aspect-video glass-panel rounded-xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-surface-container-highest p-8 flex flex-col justify-end">
            <span className="text-secondary-fixed text-xs font-bold tracking-widest uppercase mb-2">Beta-09</span>
            <h3 className="text-2xl font-bold mb-2">Nexus Trade Terminal</h3>
            <p className="text-sm text-on-surface-variant">High-frequency crypto trading algorithms.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
