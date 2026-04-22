import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      className="pt-32 px-6 max-w-7xl mx-auto min-h-screen pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-primary tracking-tighter">
          Regulus Labs: <br />
          <span className="text-on-surface">Engineering the Future</span>
        </h1>
        <p className="text-on-surface-variant text-xl max-w-3xl leading-relaxed font-light">
          At Regulus Labs, we believe that local businesses deserve world-class technology. Named after the brightest star in the Leo constellation—the <span className="text-primary font-medium">'Little King'</span>—our mission is to provide small and medium enterprises with the digital armor they need to dominate their markets.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl border-l-4 border-primary">
          <h2 className="text-2xl font-bold mb-4">The Mission</h2>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Founded in 2026, Regulus Labs is a high-performance software agency specializing in fully-animated mobile applications, AI-integrated management systems, and high-stakes web infrastructure.
          </p>
          <div className="space-y-3">
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span className="text-sm">Bespoke Mobile Architecture</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span className="text-sm">AI-Driven Business Logic</span>
             </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">The Team</h2>
          <p className="text-on-surface-variant leading-relaxed">
            While our legal and financial operations are managed by <strong>Seema Malhotra</strong>, our technical vision and product engineering are led by <strong>Dhruvya Malhotra</strong>.
          </p>
          <div className="mt-8 pt-8 border-t border-outline-variant/10">
            <p className="text-sm italic text-on-surface-variant">
              "We don't just build apps; we build growth engines. Whether it’s automating gym memberships or crafting bespoke software for local startups at highly competitive rates."
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="bg-surface border border-primary/20 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        variants={itemVariants}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <h2 className="text-3xl md:text-5xl font-black mb-6">Digital Dominance <span className="text-primary">Guaranteed</span></h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">
          We combine technical excellence with family-driven integrity to ensure your business stays ahead of the orbital curve.
        </p>
      </motion.div>
    </motion.div>
  );
}

