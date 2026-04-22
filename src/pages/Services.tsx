import React from 'react';
import { motion } from 'motion/react';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.h1 
        className="text-5xl font-black mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Capabilities & Services
      </motion.h1>
      <motion.p 
        className="text-on-surface-variant text-lg max-w-2xl mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We specialize in creating robust digital infrastructure spanning native mobile development and ultra-performant immersive web experiences.
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-xl hover:border-primary/40 transition-colors">
           <h2 className="text-2xl font-bold mb-4">Mobile Architecture</h2>
           <p className="text-on-surface-variant">Building pixel-perfect, native-speed iOS and Android applications perfectly tuned for both scale and conversion.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="glass-panel p-8 rounded-xl hover:border-secondary-fixed/40 transition-colors">
           <h2 className="text-2xl font-bold mb-4 text-primary">Web Experience</h2>
           <p className="text-on-surface-variant">Deploying React, Next.js, and modern frontend environments that load instantly and perform immaculately on all devices.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

