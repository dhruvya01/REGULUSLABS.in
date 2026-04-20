import React from 'react';

export default function Services() {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-5xl font-black mb-8">Capabilities & Services</h1>
      <p className="text-on-surface-variant text-lg max-w-2xl mb-16">
        We specialize in creating robust digital infrastructure spanning native mobile development, dynamic enterprise solutions, and ultra-performant immersive web experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-xl">
           <h2 className="text-2xl font-bold mb-4">Mobile Architecture</h2>
           <p className="text-on-surface-variant">Building pixel-perfect, native-speed iOS and Android applications perfectly tuned for both scale and conversion.</p>
        </div>
        <div className="glass-panel p-8 rounded-xl">
           <h2 className="text-2xl font-bold mb-4 text-secondary-fixed">Web Experience</h2>
           <p className="text-on-surface-variant">Deploying React, Next.js, and modern frontend environments that load instantly and perform immaculately on all devices.</p>
        </div>
        <div className="glass-panel p-8 rounded-xl">
           <h2 className="text-2xl font-bold mb-4">Enterprise Data Sytems</h2>
           <p className="text-on-surface-variant">Custom dashboards, workflow automation, and CRM integrations optimized for heavy data throughput.</p>
        </div>
        <div className="glass-panel p-8 rounded-xl">
           <h2 className="text-2xl font-bold mb-4 text-primary">Cloud Infrastructure</h2>
           <p className="text-on-surface-variant">Serverless deployments, distributed databases, and completely automated CI/CD pipelines to ensure constant uptime.</p>
        </div>
      </div>
    </div>
  );
}
