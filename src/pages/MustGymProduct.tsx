import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  Smartphone, 
  Globe, 
  Shield, 
  Zap, 
  Database, 
  Cpu, 
  Layout, 
  Layers,
  MoveRight
} from 'lucide-react';
import Object3D from '../components/Object3D';

const features = [
  { 
    title: "Member Tracking", 
    desc: "Easily manage member profiles and check-ins.",
    icon: Cpu 
  },
  { 
    title: "Simple Billing", 
    desc: "Automated invoicing and payment processing.",
    icon: Database 
  },
  { 
    title: "Admin Dashboard", 
    desc: "View gym performance and member stats at a glance.",
    icon: Layout 
  },
  { 
    title: "Scalable System", 
    desc: "Built to support multiple gym locations.",
    icon: Layers 
  }
];

export default function MustGymProduct() {
  const fadeInUp: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen pb-24 relative overflow-hidden bg-[#0D1B2A]">
      {/* Immersive Background */}
      <div className="absolute top-0 right-0 w-full h-[600px] opacity-20 pointer-events-none z-0">
         <Suspense fallback={null}>
            <Object3D />
         </Suspense>
      </div>

      {/* Hero Section */}
      <motion.div 
        className="relative z-10 mb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 mb-8">
          <Zap size={14} className="text-primary" />
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Gym Management Software</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-[#E0E1DD] leading-tight">
          MustGym.
        </h1>
        <p className="text-[#A0B2C1] text-xl max-w-3xl font-light leading-relaxed mb-12">
          A high-quality management system for fitness centers.
        </p>

        <div className="flex flex-wrap gap-6">
           <Link to="/contact" className="px-10 py-5 bg-[#8DE8E8] text-[#0D1B2A] font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform rounded-sm shadow-[0_10px_30px_rgba(141,232,232,0.2)] flex items-center gap-3">
              Get Started <ArrowRight size={16} />
           </Link>
        </div>
      </motion.div>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-[#8DE8E8]/5 border border-[#8DE8E8]/5 rounded-sm overflow-hidden mb-40 relative z-10">
        {features.map((feature, i) => (
          <motion.div 
            key={i}
            className="p-12 bg-[#0D1B2A] hover:bg-[#1B263B] transition-all duration-500"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            <div className="w-12 h-12 rounded-sm bg-[#8DE8E8]/5 flex items-center justify-center mb-8 border border-[#8DE8E8]/10 group transition-all">
              <feature.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-black text-[#E0E1DD] mb-4 tracking-tight">{feature.title}</h3>
            <p className="text-[#A0B2C1] text-sm leading-relaxed font-light">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Simple Footer Section */}
      <motion.section 
        className="relative py-40 glass-panel rounded-sm overflow-hidden bg-[#1B263B]/20 backdrop-blur-3xl mb-40 border-[#8DE8E8]/10"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
           <h2 className="text-3xl md:text-5xl font-black text-[#E0E1DD] mb-8 tracking-tighter">Scale your gym business.</h2>
           <p className="text-[#A0B2C1] text-lg mb-12 font-light leading-relaxed">
             Our software helps you manage your gym efficiently.
           </p>
        </div>
      </motion.section>

      {/* Deployment Footer */}
      <div className="text-center">
         <Link to="/contact" className="inline-flex items-center gap-4 text-sm font-black text-[#8DE8E8] hover:gap-8 transition-all uppercase tracking-widest group">
            Contact us <MoveRight className="group-hover:translate-x-2 transition-transform" />
         </Link>
      </div>
    </div>
  );
}
