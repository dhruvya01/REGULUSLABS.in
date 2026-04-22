import React, { Suspense } from 'react';
import {
  Check,
  Play,
  MessageCircle,
  Mail,
  MoveRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Hero3D from '../components/Hero3D';
import Object3D from '../components/Object3D';

export default function Home() {
  const fadeInUp: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  return (
    <div className="relative overflow-hidden bg-[#0D1B2A]">
      {/* Immersive 3D Hero Scene */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#0D1B2A]" />}>
        <Hero3D />
      </Suspense>

      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-32 px-6 text-center z-10">
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8DE8E8]/20 bg-[#1B263B]/60 backdrop-blur-xl mb-12 shadow-[0_0_20px_rgba(141,232,232,0.1)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-2 h-2 rounded-full bg-[#8DE8E8] shadow-[0_0_10px_#8DE8E8] animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8DE8E8]">Core Engine Running</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-[#E0E1DD] leading-[0.8] drop-shadow-2xl">
            REGULUS <br /> <span className="text-primary italic">LABS.</span>
          </h1>
          
          {/* Ornamental Tech Bits */}
          <div className="absolute -top-10 -right-4 hidden lg:block opacity-40">
             <div className="flex gap-1">
                {[...Array(8)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-1.5 h-1.5 bg-[#8DE8E8]" 
                    animate={{ opacity: [0, 1, 0] }} 
                    transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                  />
                ))}
             </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to="/contact" className="group relative w-full sm:w-auto px-12 py-5 bg-[#8DE8E8] text-[#0D1B2A] font-black rounded-sm overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(141,232,232,0.2)]">
            <span className="relative z-10 flex items-center gap-3 text-sm uppercase tracking-widest">
              Contact us <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          <Link to="/projects" className="w-full sm:w-auto px-12 py-5 glass-panel text-[#E0E1DD] font-bold rounded-sm border-[#8DE8E8]/10 hover:border-[#8DE8E8]/40 transition-all text-sm uppercase tracking-widest backdrop-blur-xl">
            Our Work
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <p className="text-[8px] uppercase tracking-[0.4em] font-black group-hover:text-[#8DE8E8] transition-colors">Descend</p>
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#8DE8E8] to-transparent animate-bounce"></div>
        </motion.div>
      </section>

      {/* Section 2: Case Study with Enhanced Visuals */}
      <motion.section 
        className="py-20 md:py-40 relative z-10"
        {...fadeInUp}
      >
        <div className="absolute inset-0 bg-[#0D1B2A]/80 backdrop-blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <motion.div 
              className="flex-1 space-y-8 md:space-y-12 text-left"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="inline-block px-3 py-1 rounded-sm bg-[#8DE8E8]/10 border border-[#8DE8E8]/20">
                <span className="text-[10px] font-black text-[#8DE8E8] uppercase tracking-widest">Case Study // A-01</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-[#E0E1DD] tracking-tighter leading-[0.9]">
                MustGym.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#A0B2C1] text-lg max-w-xl font-light leading-relaxed">
                A complete gym management system built for performance.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Simplified view */}
              </div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-8 pt-8">
                <Link to="/contact" className="flex items-center gap-3 text-sm font-black text-[#8DE8E8] hover:gap-6 transition-all uppercase tracking-widest group">
                  Request Access <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/mustgym" className="text-sm font-black text-[#A0B2C1] border-b-2 border-transparent hover:border-[#A0B2C1] pb-1 hover:pb-2 transition-all uppercase tracking-widest">
                  Explore Case Study
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex-1 w-full relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div className="aspect-square glass-panel rounded-lg overflow-hidden relative emerald-glow">
                <img
                  alt="Personalized Gym Management App Showcase"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-60"
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-full h-full absolute inset-0 z-0">
                      <Suspense fallback={null}>
                        <Object3D />
                      </Suspense>
                   </div>
                  <motion.div 
                    className="relative z-10 w-24 h-24 rounded-full bg-[#8DE8E8]/10 backdrop-blur-3xl flex items-center justify-center border border-[#8DE8E8]/30 group cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(141, 232, 232, 0.2)' }}
                  >
                    <Play className="text-[#8DE8E8] w-8 h-8 fill-[#8DE8E8] ml-1" />
                  </motion.div>
                </div>
              </div>

              {/* No more data overlay */}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Tech Grid - Minimal & Modern with 3D Accents */}
      <section className="py-32 px-6 relative">
         <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <Suspense fallback={null}>
               <Hero3D />
            </Suspense>
         </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-[#8DE8E8]/5 border border-[#8DE8E8]/5 relative z-10">
           {[
             { title: "Mobile Apps", desc: "Native applications for iOS and Android.", id: "01" },
             { title: "Websites", desc: "Fast and responsive web experiences.", id: "02" }
           ].map((tech, i) => (
             <motion.div 
               key={i}
               className="bg-[#0D1B2A]/80 backdrop-blur-sm p-12 hover:bg-[#1B263B]/90 transition-all group border-t border-transparent hover:border-[#8DE8E8]/20"
               whileInView={{ opacity: 1 }}
               initial={{ opacity: 0 }}
               viewport={{ once: true }}
             >
               <span className="text-[8px] font-bold text-primary/40 uppercase tracking-widest mb-4 block">{tech.id}</span>
               <h3 className="text-xl font-black text-[#8DE8E8] mb-4 tracking-tighter group-hover:tracking-widest transition-all">{tech.title}</h3>
               <p className="text-[#A0B2C1] text-sm leading-relaxed">{tech.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Final CTA: The Laboratory */}
      <motion.section 
        className="py-24 md:py-40 text-center relative overflow-hidden z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2 
            className="text-4xl md:text-7xl font-black mb-8 md:mb-12 text-[#E0E1DD] tracking-tighter"
            variants={fadeInUp}
          >
            START YOUR <br /> <span className="text-primary italic">PROJECT.</span>
          </motion.h2>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-8"
            variants={fadeInUp}
          >
            <motion.a 
              href="https://wa.me/917889686144"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-12 px-10 py-6 border border-[#8DE8E8]/20 bg-[#8DE8E8]/5 rounded-sm group hover:border-[#8DE8E8] transition-all"
            >
              <div className="text-left">
                <p className="text-sm font-black text-[#E0E1DD] uppercase">WhatsApp</p>
              </div>
              <MessageCircle className="text-[#8DE8E8] group-hover:scale-125 transition-transform" />
            </motion.a>
            
            <motion.a 
              href="mailto:regulus.labss@gmail.com"
              className="flex items-center justify-between gap-12 px-10 py-6 border border-[#A0B2C1]/20 bg-[#A0B2C1]/5 rounded-sm group hover:border-[#A0B2C1] transition-all"
            >
              <div className="text-left">
                <p className="text-sm font-black text-[#E0E1DD] uppercase">Email</p>
              </div>
              <Mail className="text-[#A0B2C1] group-hover:scale-125 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

