import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import Object3D from '../components/Object3D';

const projects = [
  {
    title: "MustGym",
    type: "Enterprise Suite",
    desc: "A management system for fitness centers.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    link: "/mustgym",
    tag: "ALPHA-01"
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen pb-24 relative overflow-hidden">
      {/* 3D Backdrop */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <Suspense fallback={null}>
            <Object3D />
         </Suspense>
      </div>

      <motion.div 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-20">
          <motion.div 
            className="inline-block px-3 py-1 rounded-sm bg-[#8DE8E8]/10 border border-[#8DE8E8]/20 mb-6"
            variants={itemVariants}
          >
            <span className="text-[10px] font-black text-[#8DE8E8] uppercase tracking-[0.3em]">Work Repository</span>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-[#E0E1DD] leading-tight"
            variants={itemVariants}
          >
            Our <span className="text-primary italic">Work.</span>
          </motion.h1>
          <motion.p 
            className="text-[#A0B2C1] text-lg max-w-3xl font-light leading-relaxed"
            variants={itemVariants}
          >
            A collection of our software products and systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
            >
              <div className="flex-1 w-full relative">
                <div className="aspect-video glass-panel overflow-hidden rounded-sm relative group cursor-crosshair">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
                  />
                  <div className="absolute inset-0 bg-[#0D1B2A]/40 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
                     <Suspense fallback={null}>
                        <Object3D />
                     </Suspense>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{project.tag}</span>
                    <div className="h-[1px] w-12 bg-primary/20" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-[#E0E1DD] tracking-tight">{project.title}</h2>
                  <p className="text-[#A0B2C1] text-lg font-light leading-relaxed">{project.desc}</p>
                </div>

                <div className="flex gap-12 border-y border-[#8DE8E8]/5 py-8">
                   <div className="space-y-1">
                      <p className="text-[9px] font-bold text-[#8DE8E8]/40 uppercase tracking-widest">Protocol</p>
                      <p className="text-xs font-black text-[#E0E1DD]">NATIVE V1.0</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[9px] font-bold text-[#8DE8E8]/40 uppercase tracking-widest">Status</p>
                      <p className="text-xs font-black text-[#E0E1DD]">OPERATIONAL</p>
                   </div>
                </div>

                <div className="flex pt-4">
                  <Link 
                    to={project.link} 
                    className="flex items-center gap-4 text-sm font-black text-[#8DE8E8] group hover:gap-8 transition-all uppercase tracking-widest"
                  >
                    Enter Lab <MoveRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
