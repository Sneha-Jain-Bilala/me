import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile Menu Animation
  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(".mobile-nav-item", 
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: "power3.out" }
      );
    }
  }, { scope: sidebarRef, dependencies: [isMobileMenuOpen] });

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const getIcon = (label: string) => {
    switch (label) {
      case 'About': return <User size={20} />;
      case 'Experience': return <Briefcase size={20} />;
      case 'Projects': return <Code size={20} />;
      case 'Skills': return <Code size={20} />;
      case 'Contact': return <Mail size={20} />;
      default: return <Home size={20} />;
    }
  };

  return (
    <>
      {/* Desktop Nav - "Dynamic Island" style */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 p-1.5 rounded-full glass border border-white/20 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 transition-all duration-300">
        
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <a
              key={item.label}
              href={item.href}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isActive 
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-105' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-pastel-yellow dark:bg-primary mr-1 animate-pulse" />
              )}
              {item.label}
            </a>
          );
        })}

        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />

        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Mobile Menu Button (Top Right) */}
      <div className="fixed top-0 right-0 z-50 md:hidden p-6 pointer-events-none">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="pointer-events-auto p-3.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg text-slate-900 dark:text-white active:scale-90 transition-transform"
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none delay-300'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/20 dark:bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
             isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`} 
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div 
          ref={sidebarRef}
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-2xl border-l border-white/20 shadow-2xl transform transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1) flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-white/5">
             <span className="text-xl font-display font-bold text-slate-900 dark:text-white">Menu</span>
             <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 transition-colors active:scale-95"
                aria-label="Close Menu"
             >
                <X size={24} />
             </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2" ref={navItemsRef}>
             {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`mobile-nav-item group flex items-center justify-between p-4 rounded-2xl text-lg font-medium transition-all ${
                      isActive 
                        ? 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white translate-x-2 shadow-sm' 
                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                       <span className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-white dark:bg-white/10 text-primary' : 'bg-slate-100 dark:bg-white/5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                          {getIcon(item.label)}
                       </span>
                       {item.label}
                    </div>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(99,102,241,0.6)]" />}
                  </a>
                )
             })}
          </div>

          {/* Sidebar Footer (Theme Toggle) */}
          <div className="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
             <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white font-medium transition-transform active:scale-[0.98] shadow-sm"
             >
                <span className="flex items-center gap-3">
                   {isDark ? <Moon size={20} className="text-pastel-blue" /> : <Sun size={20} className="text-amber-500" />}
                   {isDark ? 'Dark Mode' : 'Light Mode'}
                </span>
                <div className={`w-12 h-7 rounded-full relative transition-colors duration-300 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                   <div className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${isDark ? 'left-6' : 'left-1'}`} />
                </div>
             </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;