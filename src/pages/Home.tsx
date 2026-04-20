import React from 'react';
import {
  Check,
  Play,
  MessageCircle,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-secondary-fixed/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-outline-variant/20 bg-surface-container-lowest/50 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span>
          <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-on-surface-variant">Autonomous Systems Engine v2.0</span>
        </div>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-on-surface mb-8 max-w-5xl leading-[0.9]">
          Engineering <br /> <span className="text-gradient">the Future</span>
        </h1>

        <p className="max-w-2xl text-on-surface-variant text-lg md:text-xl font-light leading-relaxed mb-12">
          We build state-of-the-art, AI-powered applications tailored for your business, your personal ventures, or your next big idea.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-lg hover:shadow-[0_0_30px_rgba(110,229,145,0.3)] transition-all duration-300">
            Deploy Solution
          </Link>
          <Link to="/projects" className="w-full sm:w-auto px-10 py-4 glass-panel text-on-surface font-bold rounded-lg hover:bg-surface-container-high transition-all">
            View Dossier
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-widest">Orbital Descent</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* Section 2: Featured Operation (Personalized Gym App) */}
      <section className="py-20 bg-surface-container-lowest/50 relative z-10 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8 text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Project: Alpha-01</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">Your Own <span className="text-secondary-fixed">Branded Gym App</span></h2>
              <p className="text-on-surface-variant text-lg max-w-xl">
                Regulus Labs offers a specialized personal app for your gym where you can track everything digitially. No more paper registers—add every member and have all details in one place with custom branding.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary stroke-[2]" />
                  </div>
                  <span className="text-sm font-medium">Full Member Database & Digitial Records</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary stroke-[2]" />
                  </div>
                  <span className="text-sm font-medium">Custom Branding & High UI Fidelity</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-block px-8 py-4 border border-secondary-fixed/50 text-secondary-fixed font-bold rounded-lg hover:bg-secondary-fixed/5 hover:border-secondary-fixed transition-all">
                  Request Demo Access
                </Link>
                <Link to="/mustgym" className="inline-block px-8 py-4 bg-surface-container-high text-on-surface font-bold rounded-lg hover:bg-surface-container-highest transition-all">
                  More Details
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="aspect-video glass-panel rounded-xl overflow-hidden relative emerald-glow">
                <img
                  alt="Personalized Gym Management App Showcase"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-xl flex items-center justify-center border border-primary/50 group cursor-pointer hover:scale-110 transition-transform">
                    <Play className="text-primary w-8 h-8 fill-primary stroke-none ml-1" />
                  </div>
                </div>
              </div>

              {/* UI Elements Overlay */}
              <div className="absolute -bottom-6 -left-6 p-4 glass-panel rounded-lg shadow-2xl hidden md:block">
                <div className="flex gap-4 items-center">
                  <div className="w-2 h-10 bg-primary rounded-full"></div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Revenue Surge</p>
                    <p className="text-xl font-black text-primary">+24%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: The Laboratory */}
      <section className="py-20 md:py-40 text-center relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-container/5 to-transparent pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Initialize a <span className="text-gradient">Protocol</span></h2>
          <p className="text-on-surface-variant text-lg mb-12">Ready to elevate your digital presence? Our lab is currently accepting selective high-impact projects.</p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="flex items-center gap-3 px-8 py-4 bg-[#25d366]/10 border border-[#25d366]/30 rounded-xl hover:bg-[#25d366]/20 transition-all text-on-surface">
              <MessageCircle className="w-5 h-5 text-[#25d366]" />
              <span className="font-bold text-sm tracking-wide">WhatsApp Directive</span>
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-secondary-fixed/10 border border-secondary-fixed/30 rounded-xl hover:bg-secondary-fixed/20 transition-all text-on-surface">
              <Mail className="w-5 h-5 text-secondary-fixed" />
              <span className="font-bold text-sm tracking-wide">Encrypted Email</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
