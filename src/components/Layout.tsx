import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { MessageCircle, MoreVertical, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary border-b border-primary pb-1 whitespace-nowrap" : "text-on-surface-variant hover:text-secondary-fixed pb-1 border-b border-transparent whitespace-nowrap";
  };

  // Replace with your actual WhatsApp number (include country code, e.g., 919876543210)
  const whatsappNumber = "917889686144"; 
  const message = encodeURIComponent("Hi Dhruvya, I'm interested in working with Regulus Labs. Can we discuss a project?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-surface-container-lowest selection:bg-primary-container selection:text-on-primary-container min-h-screen text-on-surface flex flex-col">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0D1B2A]/80 backdrop-blur-md border-b border-[#8DE8E8]/10 transition-all duration-300">
        <div className="flex justify-between items-center px-4 md:px-10 py-4 max-w-full mx-auto relative">
          
          {/* Left Side: System ID */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col font-mono">
               <span className="text-[8px] font-black text-[#8DE8E8] uppercase tracking-[0.2em] mb-1">System ID</span>
               <span className="text-[10px] text-[#E0E1DD] font-bold">RL-DEPLOY-01</span>
            </div>
            <button 
              className="md:hidden text-on-surface p-1 -ml-1 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <MoreVertical size={24} />}
            </button>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            {[
              { label: 'SERVICES', path: '/services' },
              { label: 'PROJECTS', path: '/projects' },
              { label: 'ABOUT', path: '/about' }
            ].map((link) => (
              <Link 
                key={link.path}
                className={`tracking-[0.3em] text-[10px] font-black transition-all duration-300 ${isActive(link.path)} uppercase`} 
                to={link.path}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Right Side: Start a Project CTA */}
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex flex-col font-mono text-right">
               <span className="text-[8px] font-black text-[#8DE8E8] uppercase tracking-[0.2em] mb-1">Registry</span>
               <span className="text-[10px] text-[#E0E1DD] font-bold">CORE-STABLE</span>
            </div>
            <Link to="/contact" className="bg-[#8DE8E8] text-[#0D1B2A] px-6 py-2 rounded-sm text-[10px] font-black tracking-[0.2em] uppercase active:opacity-80 transition-all hover:scale-105 shadow-[0_0_20px_rgba(141,232,232,0.2)]">
              INITIALIZE
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-[#0D1B2A]/95 backdrop-blur-2xl border-b border-[#8DE8E8]/10 absolute top-full left-0 w-full shadow-2xl"
            >
              <div className="flex flex-col px-8 py-10 gap-8">
                {[
                  { label: 'SERVICES', path: '/services' },
                  { label: 'PROJECTS', path: '/projects' },
                  { label: 'ABOUT', path: '/about' },
                  { label: 'CONTACT', path: '/contact' }
                ].map((link) => (
                  <Link 
                    key={link.path}
                    className={`tracking-[0.4em] text-sm font-black transition-all duration-300 ${isActive(link.path)} uppercase`} 
                    onClick={closeMenu} 
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[#25D366]/40 transition-shadow duration-300 flex items-center justify-center group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out font-bold text-sm">
          Chat with us
        </span>
      </motion.a>

      <main className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest w-full py-12 px-8 border-t border-outline-variant/10 relative z-10 mt-auto">
        <div className="flex flex-col md:flex-row justify-end items-center gap-6 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            <Link className="uppercase tracking-[0.05em] text-[10px] text-[#A0B2C1] hover:text-[#8DE8E8] transition-colors font-medium" to="/services">Mobile Apps</Link>
            <Link className="uppercase tracking-[0.05em] text-[10px] text-[#A0B2C1] hover:text-[#8DE8E8] transition-colors font-medium" to="/services">Websites</Link>
            <Link className="uppercase tracking-[0.05em] text-[10px] text-[#A0B2C1] hover:text-[#8DE8E8] transition-colors font-medium" to="/contact">Contact</Link>
          </div>
          <div className="uppercase tracking-[0.05em] text-[10px] text-[#A0B2C1] font-medium">
            © 2026 Regulus Labs.
          </div>
        </div>
      </footer>
    </div>
  );
}
