import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Github, Linkedin, Download, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../constants';

gsap.registerPlugin(useGSAP);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "elastic.out(1, 0.75)", duration: 1.5 } });

    tl.from(".hero-card", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      scale: 0.8,
    })
    .from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    }, "-=1");

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-12 px-6"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-pastel-pink/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-pastel-blue/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[20%] left-[30%] w-96 h-96 bg-pastel-yellow/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Text Card */}
          <div className="hero-card lg:col-span-8 bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur-xl border border-white/40 dark:border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-card-light dark:shadow-card-dark flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Open to work</span>
            </div>
            
            <h1 className="hero-text text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Full Stack <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pastel-purple">Flutter Wizard.</span>
            </h1>
            
            <p className="hero-text text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
              {RESUME_DATA.summary}
            </p>

            <div className="hero-text flex flex-wrap gap-4">
              <a href="#projects" className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center gap-2">
                  View Projects <ArrowRight size={20} />
                </span>
              </a>
              <a href="#contact" className="px-8 py-4 bg-white dark:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-white/20 transition-all hover:scale-[1.02] active:scale-95">
                Contact Me
              </a>
            </div>
          </div>

          {/* Side Cards (Bento Grid) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Profile / Stats Card */}
            <div className="hero-card flex-1 bg-gradient-to-br from-pastel-pink/20 to-pastel-purple/20 backdrop-blur-xl border border-white/40 dark:border-white/5 rounded-[2.5rem] p-8 shadow-glow-pink flex flex-col justify-center items-center text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-white/40 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="relative z-10">
                 <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 mb-6 mx-auto shadow-lg rotate-3 group-hover:rotate-6 transition-transform duration-500 flex items-center justify-center text-4xl">
                    👨‍💻
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">3+ Years</h3>
                 <p className="text-slate-600 dark:text-slate-300 font-medium">Coding Experience</p>
               </div>
            </div>

            {/* Socials Card */}
            <div className="hero-card bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur-xl border border-white/40 dark:border-white/5 rounded-[2.5rem] p-8 shadow-card-light dark:shadow-card-dark">
              <div className="flex justify-between items-center gap-4">
                <SocialButton href={`https://${RESUME_DATA.contact.github}`} icon={<Github size={24} />} label="Github" />
                <SocialButton href={`https://${RESUME_DATA.contact.linkedin}`} icon={<Linkedin size={24} />} label="LinkedIn" />
                <div className="w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-slate-400 mb-1">Location</span>
                  <div className="flex items-center gap-1 text-slate-900 dark:text-white font-medium">
                    <MapPin size={16} className="text-pastel-pink" /> India
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const SocialButton: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-900 dark:hover:bg-primary transition-all duration-300 hover:scale-110 shadow-sm"
    title={label}
  >
    {icon}
  </a>
);

export default Hero;