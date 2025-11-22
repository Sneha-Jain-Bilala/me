import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');

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

  const getIcon = (label: string) => {
    switch (label) {
      case 'About': return <User size={18} />;
      case 'Experience': return <Briefcase size={18} />;
      case 'Projects': return <Code size={18} />;
      case 'Skills': return <Code size={18} />; // Reusing Code for Skills or change if needed
      case 'Contact': return <Mail size={18} />;
      default: return <Home size={18} />;
    }
  };

  return (
    <>
      {/* Floating Desktop Nav - "Dynamic Island" style */}
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

      {/* Mobile Bottom Nav - "Tab Bar" style */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden glass border-t border-white/20 dark:border-white/10 pb-safe">
        <div className="flex justify-around items-center p-4">
          {NAV_ITEMS.slice(0, 5).map((item) => {
             const isActive = activeSection === item.href.substring(1);
             return (
              <a
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  isActive ? 'text-primary dark:text-pastel-blue' : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {getIcon(item.label)}
                <span className="text-[10px] font-medium">{item.label}</span>
              </a>
             )
          })}
          <button onClick={toggleTheme} className="text-slate-400 dark:text-slate-500">
             {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;