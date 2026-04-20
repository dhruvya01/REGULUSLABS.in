import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-[#50c878] border-b border-[#50c878] pb-1" : "text-on-surface-variant hover:text-secondary-fixed pb-1 border-b border-transparent";
  };

  return (
    <div className="bg-[#000000] selection:bg-primary-container selection:text-on-primary-container min-h-screen text-on-surface flex flex-col">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-md shadow-[0_1px_20px_rgba(80,200,120,0.05)] transition-all duration-300">
        <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
          <Link to="/" className="text-xl font-black tracking-tighter text-[#50c878]">Regulus Labs</Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link className={`tracking-tight text-sm font-medium transition-all duration-300 ${isActive('/services')}`} to="/services">Services</Link>
            <Link className={`tracking-tight text-sm font-medium transition-all duration-300 ${isActive('/projects')}`} to="/projects">Projects</Link>
            <Link className={`tracking-tight text-sm font-medium transition-all duration-300 ${isActive('/lab')}`} to="/lab">The Lab</Link>
            <Link className={`tracking-tight text-sm font-medium transition-all duration-300 ${isActive('/about')}`} to="/about">About</Link>
          </div>
          <Link to="/contact" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-5 py-2 rounded-lg text-sm font-bold tracking-tight active:opacity-80 transition-all hover:scale-105">
            Start a Project
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest w-full py-12 px-8 border-t border-outline-variant/10 relative z-10 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          <Link to="/" className="text-lg font-bold text-[#50c878] tracking-tighter">Regulus Labs</Link>
          <div className="flex flex-wrap justify-center gap-8">
            <Link className="uppercase tracking-[0.05em] text-[10px] text-on-surface-variant hover:text-secondary-fixed transition-colors font-medium" to="/services/mobile-apps">Custom Mobile Apps</Link>
            <Link className="uppercase tracking-[0.05em] text-[10px] text-on-surface-variant hover:text-secondary-fixed transition-colors font-medium" to="/services/websites">High-Performance Websites</Link>
            <Link className="uppercase tracking-[0.05em] text-[10px] text-on-surface-variant hover:text-secondary-fixed transition-colors font-medium" to="/services/enterprise">Enterprise Software</Link>
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
