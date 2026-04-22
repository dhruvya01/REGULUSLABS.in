import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Brain, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Object3D from '../components/Object3D';

const serviceList = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "We build high-performance mobile applications for both iOS and Android platforms.",
    tech: ["SWIFT", "KOTLIN", "REACT NATIVE", "EXPO"]
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Engineering modern, responsive web experiences that are fast and visually striking.",
    tech: ["VITE", "TYPESCRIPT", "TAILWIND", "REACT"]
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen pb-24 relative overflow-hidden">
      {/* 3D Visual Accent */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none z-0">
         <Suspense fallback={null}>
            <Object3D />
         </Suspense>
      </div>

      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="mb-24">
          <motion.div 
            className="inline-block px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Our Services</span>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-[#E0E1DD] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Building high-performance <br /> <span className="text-primary italic">Software.</span>
          </motion.h1>
          <motion.p 
            className="text-[#A0B2C1] text-lg max-w-3xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We focus on creating reliable mobile apps and fast websites for your business.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-[#8DE8E8]/5 border border-[#8DE8E8]/5 rounded-sm overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {serviceList.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group p-8 md:p-12 bg-[#0D1B2A] hover:bg-[#1B263B] transition-all duration-500 flex flex-col justify-between min-h-[350px]"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#8DE8E8]/5 flex items-center justify-center mb-8 border border-[#8DE8E8]/10 group-hover:bg-primary/10 transition-all">
                  <service.icon className="text-[#8DE8E8]" size={24} />
                </div>
                <h2 className="text-2xl font-black text-[#E0E1DD] mb-6 tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-[#A0B2C1] text-sm leading-relaxed mb-8 font-light italic opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.desc}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {service.tech.map((t, i) => (
                  <span key={i} className="text-[9px] font-bold text-[#8DE8E8]/40 px-2 py-1 border border-[#8DE8E8]/10 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

