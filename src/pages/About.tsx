import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import { Target, Users, Shield, Cpu, Globe, Rocket, Star } from 'lucide-react';
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
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Star size={12} className="text-primary fill-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Little King</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 text-[#E0E1DD] tracking-tighter leading-tight max-w-4xl">
            Regulus Labs: <br />
            <span className="text-primary italic">Engineering the Future.</span>
          </h1>
          <div className="space-y-6 max-w-4xl">
            <p className="text-[#A0B2C1] text-xl leading-relaxed font-light">
              At Regulus Labs, we believe that local businesses deserve world-class technology. Named after the brightest star in the Leo constellation—the <span className="text-primary font-bold italic">'Little King'</span>—our mission is to provide small and medium enterprises with the digital armor they need to dominate their markets.
            </p>
            <p className="text-[#A0B2C1] text-lg leading-relaxed font-light border-l-2 border-primary/30 pl-6 italic">
              Founded in 2026, Regulus Labs is a high-performance software agency specializing in fully-animated mobile applications, AI-integrated management systems, and high-stakes web infrastructure.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div variants={itemVariants} className="glass-panel p-10 rounded-sm border-l-4 border-primary bg-[#1B263B]/20">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3 tracking-tight text-[#E0E1DD]">
               <Target className="text-primary" size={24} /> OUR CORE
            </h2>
            <p className="text-[#A0B2C1] leading-relaxed font-light">
              We don't just build apps; we build growth engines. Whether it’s automating gym memberships or crafting bespoke software for local startups, Regulus Labs is where "vibe coding" meets professional execution.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel p-10 rounded-sm bg-[#1B263B]/20">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3 tracking-tight text-[#E0E1DD]">
               <Users className="text-primary" size={24} /> THE TEAM
            </h2>
            <div className="space-y-6">
              <p className="text-[#A0B2C1] leading-relaxed font-light">
                Regulus Labs is a family-backed technology venture.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary mb-1">Operations</p>
                  <p className="text-[#E0E1DD] font-bold">Seema Malhotra</p>
                  <p className="text-[10px] text-[#A0B2C1]/60">Legal & Financial Oversight</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#8DE8E8] mb-1">Engineering</p>
                  <p className="text-[#E0E1DD] font-bold">Dhruvya Malhotra</p>
                  <p className="text-[10px] text-[#A0B2C1]/60">Technical Vision & Product Engineering</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Statment Section */}
        <motion.div 
          className="glass-panel border-primary/20 rounded-sm p-8 md:p-20 text-center relative overflow-hidden bg-[#1B263B]/10 backdrop-blur-3xl"
          variants={itemVariants}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <Rocket className="text-primary mx-auto mb-8 opacity-50" size={48} />
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter text-[#E0E1DD]">
            Digital <span className="text-primary">Dominance</span> Engineered.
          </h2>
          <p className="text-[#A0B2C1] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Equipping the next generation of industry leaders with the infrastructure they deserve.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
