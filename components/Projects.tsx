import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Featured Work</h2>
          <p className="text-slate-600 dark:text-slate-400">Swipe to explore my latest apps and websites.</p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={false}
          breakpoints={{
            640: { slidesPerView: 1.2, centeredSlides: false },
            1024: { slidesPerView: 2.2, centeredSlides: false },
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Pagination, Autoplay]}
          className="pb-20 !overflow-visible"
        >
          {PROJECTS.map((project, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="group h-full relative bg-white dark:bg-surface-dark border border-slate-100 dark:border-white/5 rounded-[2.5rem] overflow-hidden shadow-card-light dark:shadow-card-dark hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                
                {/* Image Section */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Action Button for Link */}
                  <a 
                     href={project.link}
                     className="absolute bottom-4 right-4 z-20 w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-lg text-slate-900 dark:text-white hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">{project.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;