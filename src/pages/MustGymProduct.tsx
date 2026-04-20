import React from 'react';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Trophy, 
  Zap, 
  QrCode, 
  Users, 
  Settings, 
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  BrainCircuit,
  UtensilsCrossed,
  LineChart,
  Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MustGymProduct() {
  const sections = [
    {
      title: "Core Architecture & Security",
      icon: <ShieldCheck className="text-secondary-fixed" />,
      features: [
        "Role-Based Access Control (RBAC) for Admins & Members",
        "Real-time Firebase Sync & Auth",
        "PWA Ready: Installable on iOS/Android",
        "SEO Optimized Architecture"
      ]
    },
    {
      title: "Interactive Member Dashboard",
      icon: <LayoutDashboard className="text-primary" />,
      features: [
        "Live Gym Occupancy Monitoring",
        "Gamification Hub: Points & XP Tracking",
        "Interactive 'Daily 12' Hydration Tracker",
        "Personal Record (PR) Max Lift Brief",
        "One-click Program Resumption"
      ]
    },
    {
      title: "Advanced Gamification",
      icon: <Trophy className="text-amber-400" />,
      features: [
        "Check-in/Check-out Points Rewards",
        "Elite Leveling System",
        "Virtual Badge Achievement System",
        "Community Challenges & Leaderboards"
      ]
    },
    {
      title: "AI-Powered Ecosystem",
      icon: <BrainCircuit className="text-purple-400" />,
      features: [
        "Gemini AI Training Routine Generator",
        "Personalized Indian Diet Plans",
        "Historical Progress Lift Tracking"
      ]
    },
    {
      title: "Terminal Check-in System",
      icon: <QrCode className="text-blue-400" />,
      features: [
        "Secure QR Entry/Exit System",
        "Admin Terminal Portal for Tablets",
        "Instant Attendance Verification"
      ]
    },
    {
      title: "Admin Command Center",
      icon: <Settings className="text-gray-400" />,
      features: [
        "Live Alerts Console & Logic",
        "Business Analytics: Revenue & Attendance Heatmaps",
        "AI Business Insights Engine",
        "Equipment Inventory & Financial Ledgers"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <Link to="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12">
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </Link>

      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
          <Sparkles size={14} className="text-primary" />
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Flagship Product</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">MustGym <span className="text-secondary-fixed">Suite</span></h1>
        <p className="text-on-surface-variant text-xl max-w-3xl leading-relaxed">
          MustGym is a high-performance, full-stack gym management application designed for elite fitness centers. It bridges the gap between administrative operations and member engagement through cutting-edge technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-2xl flex flex-col hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {section.icon}
            </div>
            <h3 className="text-xl font-bold mb-6">{section.title}</h3>
            <ul className="space-y-4 flex-1">
              {section.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex gap-3 text-sm text-on-surface-variant leading-relaxed">
                  <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="mt-32 p-12 glass-panel rounded-3xl relative overflow-hidden border-primary/20">
        <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-1/4 -translate-y-1/4">
          <Zap size={300} />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 italic">"The Industrial 'Must' Aesthetic"</h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            Designed with a high-contrast dark theme and neon primary accents, MustGym creates a professional, focused atmosphere. Powered by Framer Motion for kinetic feedback and real-time notifications.
          </p>
          <Link to="/contact" className="inline-flex bg-primary text-on-primary font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(110,229,145,0.4)] transition-all">
            Get MustGym For Your Business
          </Link>
        </div>
      </section>
    </div>
  );
}
