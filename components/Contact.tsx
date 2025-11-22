import React from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-pastel-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-white dark:bg-surface-dark rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Let's Work Together</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                Have a project in mind or want to discuss Flutter development? I'm just a message away.
              </p>
              
              <div className="space-y-4">
                <ContactPill label={RESUME_DATA.contact.email} />
                <ContactPill label={RESUME_DATA.contact.phone} />
                <ContactPill label="India" />
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" 
                />
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>

          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} {RESUME_DATA.name}. Built with React, GSAP & Tailwind.
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactPill: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium">
    <div className="w-2 h-2 rounded-full bg-pastel-pink"></div>
    {label}
  </div>
);

export default Contact;