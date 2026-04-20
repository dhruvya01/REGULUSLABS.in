import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.h1 
        className="text-5xl font-black mb-8 text-[#50c878]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Regulus Labs
      </motion.h1>
      <motion.p 
        className="text-on-surface-variant text-lg max-w-2xl mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Regulus Labs is a cutting-edge software development company run by <strong>Dhruvya Malhotra</strong>. We specialize in crafting high-performance mobile applications and modern, scalable websites designed to elevate your digital presence.
      </motion.p>
      <motion.div 
        className="bg-[#131313] border border-[#50c878]/20 rounded-xl p-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-sm font-bold text-[#50c878] uppercase tracking-widest mb-6">Our Core</h3>
        <p className="text-xl md:text-3xl font-light leading-relaxed">
          "Led by Dhruvya Malhotra, we combine technical excellence with creative vision to build the next generation of digital products."
        </p>
      </motion.div>
    </div>
  );
}

