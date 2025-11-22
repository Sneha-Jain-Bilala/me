import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Database, Terminal, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Languages')) return <Code2 className="text-pastel-pink" size={24} />;
    if (category.includes('Technologies')) return <Terminal className="text-pastel-blue" size={24} />;
    return <Database className="text-pastel-yellow" size={24} />;
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-12 text-center">Technical Arsenal</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((cat, index) => (
            <div 
              key={index} 
              className="group bg-white/50 dark:bg-surface-dark/50 backdrop-blur-xl border border-white/60 dark:border-white/5 rounded-[2rem] p-8 shadow-card-light dark:shadow-card-dark hover:bg-white hover:dark:bg-surface-dark transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(cat.category)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{cat.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;