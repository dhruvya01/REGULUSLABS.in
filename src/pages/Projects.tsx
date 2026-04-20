import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
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
        Completed Projects
      </motion.h1>
      <motion.p 
        className="text-on-surface-variant text-lg max-w-2xl mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A curated selection of successfully deployed technical systems and architectural digital products.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/mustgym" className="block">
          <motion.div 
            className="aspect-video glass-panel rounded-xl overflow-hidden relative group cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute inset-0 bg-surface-container-highest p-8 flex flex-col justify-end">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Alpha-01</span>
              <h3 className="text-2xl font-bold mb-2">MustGym</h3>
              <p className="text-sm text-on-surface-variant">Biometric scaling and revenue intelligence.</p>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}


