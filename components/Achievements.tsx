import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 mb-4">
            <Trophy size={28} />
          </div>
          <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white text-center">Honors & Awards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-surface-dark border border-slate-100 dark:border-white/5 rounded-3xl p-8 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 font-display font-black text-6xl text-slate-300 dark:text-slate-600 select-none group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              
              <div className="relative z-10 mt-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pr-8 leading-tight">
                  {ach.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;