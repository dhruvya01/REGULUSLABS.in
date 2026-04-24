import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Globe, Bot, Send, MessageCircle, Mail, ChevronLeft, IndianRupee, Calendar } from 'lucide-react';

type Step = 'service' | 'description' | 'details' | 'method';
type ServiceType = 'Mobile App' | 'Website' | 'AI Agent';

export default function Contact() {
  const [step, setStep] = useState<Step>('service');
  const [service, setService] = useState<ServiceType | null>(null);
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [isCustomBudget, setIsCustomBudget] = useState(false);
  const [timeline, setTimeline] = useState('');

  const whatsappNumber = "917889686144";
  const gmailAddress = "regulus.labss@gmail.com";

  const handleServiceSelect = (type: ServiceType) => {
    setService(type);
    setStep('description');
  };

  const constructMessage = () => {
    return `Hi Dhruvya, I'm interested in starting a project with Regulus Labs.

Project Type: ${service}
Description: ${description}
Budget Range: ${budget}
Target Timeline: ${timeline}`;
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

  const containerVariants: any = {
    initial: { opacity: 0, scale: 0.98, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.98, y: -10 },
    transition: { duration: 0.3, ease: "easeOut" }
  };

  return (
    <div className="pt-24 md:pt-32 px-6 max-w-4xl mx-auto min-h-screen pb-20">
      <div className="mb-12 text-center">
        <motion.h1 
          className="text-3xl md:text-4xl font-black mb-4 tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Start Your <span className="text-primary italic">Project.</span>
        </motion.h1>
        <motion.p 
          className="text-[#A0B2C1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Complete the steps below to begin our collaboration.
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
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  borderColor: "rgba(0, 209, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleServiceSelect(item.id)}
                className="glass-panel p-6 md:p-8 rounded-xl flex flex-col items-center gap-4 text-center hover:border-primary/40 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-${item.color}/10 border border-${item.color}/20 group-hover:bg-${item.color}/20 transition-colors`}>
                  <div className={`text-${item.color}`}>{item.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.id}</h3>
                  <p className="text-[10px] text-[#A0B2C1] leading-relaxed">
                    Custom-built {item.id === 'AI Agent' ? 'intelligent systems' : item.id === 'Website' ? 'web experiences' : 'mobile apps'}.
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

            <motion.button
              disabled={!description.trim()}
              whileHover={description.trim() ? { scale: 1.02, boxShadow: "0 0 30px rgba(0, 209, 255, 0.4)" } : {}}
              whileTap={description.trim() ? { scale: 0.98 } : {}}
              onClick={() => setStep('details')}
              className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Set Scope <Send className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        )}

        {step === 'details' && (
          <motion.div 
            key="details"
            {...containerVariants}
            className="glass-panel p-8 md:p-12 rounded-3xl"
          >
            <button 
              onClick={() => setStep('description')}
              className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors mb-8 uppercase tracking-widest"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Brief
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">Estimated Budget</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {['₹20k', '₹30k', '₹50k'].map((range) => (
                    <button
                      key={range}
                      onClick={() => {
                        setBudget(range);
                        setIsCustomBudget(false);
                      }}
                      className={`px-6 py-4 rounded-xl border text-left font-medium transition-all ${
                        budget === range && !isCustomBudget
                        ? 'bg-primary/10 border-primary text-primary' 
                        : 'bg-surface-container-low border-outline/20 text-on-surface-variant hover:border-primary/40'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => {
                      setIsCustomBudget(true);
                      setBudget('');
                    }}
                    className={`px-6 py-4 rounded-xl border text-left font-medium transition-all ${
                      isCustomBudget
                      ? 'bg-primary/10 border-primary text-primary' 
                      : 'bg-surface-container-low border-outline/20 text-on-surface-variant hover:border-primary/40'
                    }`}
                  >
                    Custom Amount
                  </button>

                  <AnimatePresence>
                    {isCustomBudget && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="relative pt-2">
                          <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                          <input
                            autoFocus
                            type="text"
                            placeholder="Enter amount (e.g. 25,000)"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="w-full bg-surface-container-low border border-primary/50 rounded-xl py-4 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">Desired Timeline</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {['Less than 2 weeks', '2-4 weeks', '1-3 months', '3 months+'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setTimeline(time)}
                      className={`px-6 py-4 rounded-xl border text-left font-medium transition-all ${
                        timeline === time 
                        ? 'bg-primary/10 border-primary text-primary' 
                        : 'bg-surface-container-low border-outline/20 text-on-surface-variant hover:border-primary/40'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <motion.button
              disabled={!budget || !timeline}
              whileHover={budget && timeline ? { scale: 1.02, boxShadow: "0 0 30px rgba(0, 209, 255, 0.4)" } : {}}
              whileTap={budget && timeline ? { scale: 0.98 } : {}}
              onClick={() => setStep('method')}
              className="w-full mt-12 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Continue to Dispatch <Send className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        )}

        {step === 'method' && (
          <motion.div 
            key="method"
            {...containerVariants}
            className="text-center"
          >
            <button 
              onClick={() => setStep('details')}
              className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors mb-12 uppercase tracking-widest mx-auto"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Scope
            </button>

            <h2 className="text-2xl font-bold mb-2">Choose Transmission</h2>
            <p className="text-[#A0B2C1] text-sm mb-12">Select your preferred communication channel.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.button
                whileHover={{ 
                  y: -10,
                  backgroundColor: "rgba(37, 211, 102, 0.2)",
                  borderColor: "rgba(37, 211, 102, 0.5)",
                  boxShadow: "0 10px 30px rgba(37, 211, 102, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openWhatsApp}
                className="flex items-center justify-center gap-4 p-8 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-on-surface transition-all font-bold"
              >
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
                <div className="text-left">
                  <p className="text-lg">WhatsApp</p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ 
                  y: -10,
                  backgroundColor: "rgba(0, 209, 255, 0.2)",
                  borderColor: "rgba(0, 209, 255, 0.5)",
                  boxShadow: "0 10px 30px rgba(0, 209, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openGmail}
                className="flex items-center justify-center gap-4 p-8 rounded-2xl bg-secondary-fixed/10 border border-secondary-fixed/30 text-on-surface transition-all font-bold"
              >
                <Mail className="w-8 h-8 text-secondary-fixed" />
                <div className="text-left">
                  <p className="text-lg">Email</p>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

