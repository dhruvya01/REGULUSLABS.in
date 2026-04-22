import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import { Target, Users, Shield, Cpu, Globe, Rocket } from 'lucide-react';
import Object3D from '../components/Object3D';

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

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen pb-20 overflow-hidden relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* Secondary 3D Accent */}
        <div className="absolute -top-20 -right-40 w-96 h-96 opacity-30 pointer-events-none">
           <Suspense fallback={null}>
              <Object3D />
           </Suspense>
        </div>

        <motion.div variants={itemVariants} className="mb-24 relative z-10 text-left">
          <h1 className="text-4xl md:text-6xl font-black mb-8 text-[#E0E1DD] tracking-tighter leading-tight max-w-4xl">
            Regulus Labs. <br />
            <span className="text-primary italic">Building digital products.</span>
          </h1>
          <p className="text-[#A0B2C1] text-xl max-w-3xl leading-relaxed font-light">
            We are a team of engineers dedicated to creating reliable software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div variants={itemVariants} className="glass-panel p-10 rounded-sm border-l-4 border-primary bg-[#1B263B]/20">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3 tracking-tight">
               <Target className="text-primary" size={24} /> THE MISSION
            </h2>
            <p className="text-[#A0B2C1] leading-relaxed mb-8 font-light">
              We specialize in mobile applications and high-quality web infrastructure.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-10 rounded-sm bg-[#1B263B]/20">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3 tracking-tight">
               <Users className="text-primary" size={24} /> THE TEAM
            </h2>
            <p className="text-[#A0B2C1] leading-relaxed mb-6 font-light">
              Led by <span className="text-[#E0E1DD] font-bold">Dhruvya Malhotra</span> and <span className="text-[#E0E1DD] font-bold">Seema Malhotra</span>.
            </p>
          </motion.div>
        </div>

        {/* Simple Footer Section */}
        <motion.div 
          className="glass-panel border-primary/20 rounded-sm p-8 md:p-20 text-center relative overflow-hidden bg-[#1B263B]/10 backdrop-blur-3xl"
          variants={itemVariants}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">Reliable Software <span className="text-primary">Development</span></h2>
          <p className="text-[#A0B2C1] text-lg max-w-2xl mx-auto mb-10 font-light">
            We combine technical experience with integrity to deliver effective results.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

