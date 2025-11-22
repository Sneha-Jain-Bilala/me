import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Github, Linkedin, MapPin, Smartphone, Globe, Cpu, Layers } from 'lucide-react';
import { RESUME_DATA } from '../constants';

gsap.registerPlugin(useGSAP);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const experienceCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "elastic.out(1, 0.75)", duration: 1.5 } });

    tl.from(".hero-card", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      scale: 0.9,
    })
    .from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    }, "-=1");
    
    // Floating animation for tech icons
    gsap.to(".tech-float", {
      y: -12,
      rotation: 5,
      duration: 3,
      stagger: {
        each: 0.5,
        from: "random"
      },
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

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
            
            {/* IMPROVED: Tech Stack / Focus Card */}
            <div 
              ref={experienceCardRef} 
              className="hero-card flex-1 relative bg-white dark:bg-surface-dark border border-slate-100 dark:border-white/5 rounded-[2.5rem] p-8 shadow-card-light dark:shadow-card-dark flex flex-col justify-center items-center text-center overflow-visible group hover:border-primary/30 transition-colors duration-500"
            >
               {/* Animated Background Elements */}
               <div className="absolute -right-12 -top-12 w-48 h-48 bg-pastel-blue/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
               <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-pastel-pink/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-in-out delay-100"></div>
               
               {/* Decorative Pattern */}
               <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] rounded-[2.5rem]"></div>

               <div className="relative z-10 flex flex-col items-center w-full">
                 {/* Tech Composition */}
                 <div className="relative w-full h-32 mb-4 flex items-center justify-center">
                    
                    {/* Flutter/Mobile */}
                    <div className="tech-float absolute left-[25%] top-2 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-100 dark:border-white/10 z-20 hover:scale-110 transition-transform">
                       <Smartphone size={28} className="text-pastel-blue" />
                    </div>

                    {/* Web/Globe */}
                    <div className="tech-float absolute right-[25%] top-8 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-pink-500/10 border border-slate-100 dark:border-white/10 z-20 hover:scale-110 transition-transform">
                       <Globe size={28} className="text-pastel-pink" />
                    </div>

                    {/* Backend/Cpu - Blurred background element */}
                    <div className="tech-float absolute top-[40%] left-[45%] p-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-100 dark:border-white/5 z-10 scale-90">
                        <Layers size={20} className="text-slate-400" />
                    </div>
                 </div>

                 <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
                   Mobile & Web
                 </h3>
                 <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-[240px]">
                   Crafting seamless cross-platform experiences with <span className="text-slate-700 dark:text-white font-bold">Flutter</span> & <span className="text-slate-700 dark:text-white font-bold">Next.js</span>
                 </p>

                 {/* Bottom Progress Indicator */}
                 <div className="w-16 h-1.5 rounded-full bg-slate-100 dark:bg-white/10 mt-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-primary to-pastel-purple origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
                 </div>
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
    className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-900 dark:hover:bg-primary transition-all duration-300 hover:scale-110 shadow-sm group relative overflow-hidden"
    title={label}
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-pastel-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <span className="relative z-10">{icon}</span>
  </a>
);

export default Hero;