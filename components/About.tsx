import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { EDUCATION } from '../constants';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".about-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-8">
          
          {/* Main Info */}
          <div className="md:col-span-5 about-card">
            <div className="sticky top-32">
              <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
                About <span className="text-pastel-purple">Me</span>
              </h2>
              <div className="bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-card-light dark:shadow-card-dark">
                 <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  I'm a passionate developer who bridges the gap between design and engineering. With a strong foundation in <span className="text-slate-900 dark:text-white font-semibold">Flutter</span> and <span className="text-slate-900 dark:text-white font-semibold">Full Stack Web</span>, I create intuitive, performant, and beautiful digital experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Flutter', 'Node.js', 'UI/UX'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-pastel-blue/20 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            
            {/* Education Header */}
            <div className="about-card flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-pastel-pink/20 text-pink-600 dark:text-pink-300">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>

            {/* Education Cards */}
            {EDUCATION.map((edu, index) => (
              <div key={index} className="about-card group relative bg-white dark:bg-surface-dark border border-slate-100 dark:border-white/5 rounded-3xl p-6 hover:shadow-lg transition-all hover:border-pastel-pink/50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{edu.school}</h4>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-500">{edu.year}</span>
                </div>
                <p className="text-primary font-medium mb-1">{edu.degree}</p>
                <div className="flex justify-between items-end">
                   <p className="text-sm text-slate-500">{edu.location}</p>
                   <span className="text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded">{edu.grade}</span>
                </div>
              </div>
            ))}

            {/* Activities */}
            <div className="about-card flex items-center gap-3 mt-10 mb-2">
              <div className="p-2 rounded-xl bg-pastel-yellow/20 text-yellow-600 dark:text-yellow-300">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Activities</h3>
            </div>

             <div className="about-card bg-gradient-to-r from-slate-50 to-white dark:from-surface-dark dark:to-black border border-slate-100 dark:border-white/5 rounded-3xl p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Content Writer & Editor</h4>
                    <p className="text-slate-600 dark:text-slate-400">Ojaswa Club • Managed blogs and event reports.</p>
                  </div>
                  <div className="w-full h-px bg-slate-200 dark:bg-slate-800"></div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Bureau of Indian Standards</h4>
                    <p className="text-slate-600 dark:text-slate-400">Active contributor to quality assurance discussions.</p>
                  </div>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;