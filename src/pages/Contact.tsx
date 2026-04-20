import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Globe, Bot, Send, MessageCircle, Mail, ChevronLeft } from 'lucide-react';

type Step = 'service' | 'description' | 'method';
type ServiceType = 'Mobile App' | 'Website' | 'AI Agent';

export default function Contact() {
  const [step, setStep] = useState<Step>('service');
  const [service, setService] = useState<ServiceType | null>(null);
  const [description, setDescription] = useState('');

  const whatsappNumber = "917889686144";
  const gmailAddress = "regulus.labss@gmail.com";

  const handleServiceSelect = (type: ServiceType) => {
    setService(type);
    setStep('description');
  };

  const constructMessage = () => {
    return `Hi Dhruvya, I'm interested in starting a project with Regulus Labs.

Project Type: ${service}
Description: ${description}`;
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(constructMessage());
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  };

  const openGmail = () => {
    const subject = encodeURIComponent(`New Project Inquiry: ${service}`);
    const body = encodeURIComponent(constructMessage());
    window.location.href = `mailto:${gmailAddress}?subject=${subject}&body=${body}`;
  };

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto min-h-screen pb-20">
      <div className="mb-12 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Initialize <span className="text-gradient">Project Protocol</span>
        </motion.h1>
        <motion.p 
          className="text-on-surface-variant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Follow the steps to deploy your visual and technical architecture.
        </motion.p>
      </div>

      <AnimatePresence mode="wait">
        {step === 'service' && (
          <motion.div 
            key="service"
            {...containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { id: 'Mobile App' as ServiceType, icon: <Smartphone className="w-8 h-8" />, color: 'primary' },
              { id: 'Website' as ServiceType, icon: <Globe className="w-8 h-8" />, color: 'secondary-fixed' },
              { id: 'AI Agent' as ServiceType, icon: <Bot className="w-8 h-8" />, color: 'primary' },
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleServiceSelect(item.id)}
                className="glass-panel p-8 rounded-2xl flex flex-col items-center gap-6 text-center hover:border-primary/40 transition-colors group"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-${item.color}/10 border border-${item.color}/20 group-hover:bg-${item.color}/20 transition-colors`}>
                  <div className={`text-${item.color}`}>{item.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.id}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Custom-built {item.id === 'AI Agent' ? 'autonomous intelligence' : item.id === 'Website' ? 'high-fidelity web experiences' : 'native-speed mobile apps'}.
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}

        {step === 'description' && (
          <motion.div 
            key="description"
            {...containerVariants}
            className="glass-panel p-8 md:p-12 rounded-3xl"
          >
            <button 
              onClick={() => setStep('service')}
              className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors mb-8 uppercase tracking-widest"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Services
            </button>
            
            <h2 className="text-2xl font-bold mb-4">Project Brief</h2>
            <p className="text-on-surface-variant text-sm mb-8">What exactly do you have in mind for your {service}? Give us a brief overview.</p>
            
            <textarea
              autoFocus
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="E.g. I want a gym app with member tracking and dietary plans integrated..."
              className="w-full bg-surface-container-low border border-outline/20 rounded-xl p-6 min-h-[200px] text-on-surface focus:outline-none focus:border-primary/50 transition-colors mb-8 resize-none"
            />

            <button
              disabled={!description.trim()}
              onClick={() => setStep('method')}
              className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(80,200,120,0.2)] transition-all"
            >
              Continue to Dispatch <Send className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {step === 'method' && (
          <motion.div 
            key="method"
            {...containerVariants}
            className="text-center"
          >
            <button 
              onClick={() => setStep('description')}
              className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors mb-12 uppercase tracking-widest mx-auto"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Description
            </button>

            <h2 className="text-2xl font-bold mb-2">Choose Transmission</h2>
            <p className="text-on-surface-variant text-sm mb-12">Select your preferred encrypted communication channel.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.button
                whileHover={{ y: -5 }}
                onClick={openWhatsApp}
                className="flex items-center justify-center gap-4 p-8 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-on-surface hover:bg-[#25D366]/20 transition-all font-bold"
              >
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
                <div className="text-left">
                  <p className="text-lg">WhatsApp</p>
                  <p className="text-[10px] text-on-surface-variant font-medium">Direct Directive</p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ y: -5 }}
                onClick={openGmail}
                className="flex items-center justify-center gap-4 p-8 rounded-2xl bg-secondary-fixed/10 border border-secondary-fixed/30 text-on-surface hover:bg-secondary-fixed/20 transition-all font-bold"
              >
                <Mail className="w-8 h-8 text-secondary-fixed" />
                <div className="text-left">
                  <p className="text-lg">Gmail</p>
                  <p className="text-[10px] text-on-surface-variant font-medium">Encrypted Package</p>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
