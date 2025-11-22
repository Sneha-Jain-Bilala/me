import React, { useRef } from 'react';
import { EXPERIENCE } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.exp-card');
    cards.forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section id="experience" ref={containerRef} className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-sm font-mono text-pastel-purple mb-2">CAREER PATH</span>
          <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Professional Experience</h2>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pastel-pink via-pastel-blue to-pastel-yellow hidden md:block opacity-50"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className={`exp-card flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-[3px] border-primary rounded-full z-10 hidden md:block mt-8 shadow-[0_0_0_4px_rgba(99,102,241,0.2)]"></div>

                {/* Content Side */}
                <div className="flex-1">
                   <div className="bg-white dark:bg-surface-dark border border-slate-100 dark:border-white/5 rounded-[2rem] p-8 shadow-card-light dark:shadow-card-dark relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                      {/* Decorative Gradient Background */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-bl-[4rem] transition-opacity group-hover:opacity-20 ${
                        index % 2 === 0 ? 'from-pink-500 to-purple-500' : 'from-blue-500 to-cyan-500'
                      }`}></div>

                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-500 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                             <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>
                             {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>

                {/* Empty Side for alignment */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;