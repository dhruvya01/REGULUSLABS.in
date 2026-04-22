import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { MessageCircle, MoreVertical, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-[#50c878] border-b border-[#50c878] pb-1 whitespace-nowrap" : "text-on-surface-variant hover:text-secondary-fixed pb-1 border-b border-transparent whitespace-nowrap";
  };

  // Replace with your actual WhatsApp number (include country code, e.g., 919876543210)
  const whatsappNumber = "917889686144"; 
  const message = encodeURIComponent("Hi Dhruvya, I'm interested in working with Regulus Labs. Can we discuss a project?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="bg-[#000000] selection:bg-primary-container selection:text-on-primary-container min-h-screen text-on-surface flex flex-col">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-md shadow-[0_1px_20px_rgba(80,200,120,0.05)] transition-all duration-300">
        <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 max-w-full mx-auto relative">
          
          {/* Left Side: 3-dot Menu + Logo */}
          <div className="flex items-center gap-3">
            <button 
              className="md:hidden text-on-surface p-1 -ml-1 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <MoreVertical size={24} />}
            </button>
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
              <img src="/logo.png" alt="Regulus Labs" className="h-8 w-auto md:h-10 transition-transform hover:scale-105" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link className={`tracking-tight text-sm font-medium transition-all duration-300 ${isActive('/services')}`} to="/services">Services</Link>
            <Link className={`tracking-tight text-sm font-medium transition-all duration-300 ${isActive('/projects')}`} to="/projects">Projects</Link>
            <Link className={`tracking-tight text-sm font-medium transition-all duration-300 ${isActive('/lab')}`} to="/lab">The Lab</Link>
            <Link className={`tracking-tight text-sm font-medium transition-all duration-300 ${isActive('/about')}`} to="/about">About</Link>
          </div>
          
          {/* Right Side: Start a Project CTA */}
          <div>
            <Link to="/contact" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-4 md:px-5 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-bold tracking-tight active:opacity-80 transition-all hover:scale-105">
              Start a Project
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
              className="md:hidden overflow-hidden bg-[#131313] border-b border-outline-variant/10 absolute top-full left-0 w-full shadow-xl"
            >
              <div className="flex flex-col px-6 py-6 gap-6">
                <Link className={`tracking-tight text-lg font-medium ${isActive('/services')}`} onClick={() => setIsMenuOpen(false)} to="/services">Services</Link>
                <Link className={`tracking-tight text-lg font-medium ${isActive('/projects')}`} onClick={() => setIsMenuOpen(false)} to="/projects">Projects</Link>
                <Link className={`tracking-tight text-lg font-medium ${isActive('/lab')}`} onClick={() => setIsMenuOpen(false)} to="/lab">The Lab</Link>
                <Link className={`tracking-tight text-lg font-medium ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)} to="/about">About</Link>
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Regulus Labs" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </Link>
          <div className="flex flex-wrap justify-center gap-8">
            <Link className="uppercase tracking-[0.05em] text-[10px] text-on-surface-variant hover:text-secondary-fixed transition-colors font-medium" to="/services/mobile-apps">Custom Mobile Apps</Link>
            <Link className="uppercase tracking-[0.05em] text-[10px] text-on-surface-variant hover:text-secondary-fixed transition-colors font-medium" to="/services/websites">High-Performance Websites</Link>
            <Link className="uppercase tracking-[0.05em] text-[10px] text-on-surface-variant hover:text-secondary-fixed transition-colors font-medium" to="/contact">Contact</Link>
          </div>
          <div className="uppercase tracking-[0.05em] text-[10px] text-on-surface-variant font-medium">
            © 2026 Regulus Labs. The Celestial Engine.
          </div>
        </div>
      </footer>
    </div>
  );
}
