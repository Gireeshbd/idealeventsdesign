import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { motion } from 'framer-motion';

export const Gallery: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end">
        <div>
          <h4 className="text-yellow-500 uppercase tracking-widest text-sm mb-4">Portfolio</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Captured Moments</h2>
        </div>
        <a href="#" className="hidden md:block px-8 py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs tracking-widest">
          Follow on Instagram
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0 max-w-[1800px] mx-auto">
        {GALLERY_IMAGES.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            className={`relative overflow-hidden group ${
                index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
            }`}
          >
            <img
              src={src}
              alt={`Portfolio ${index}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 text-center">
                    <span className="text-white text-lg font-serif italic">View Project</span>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center md:hidden">
         <a href="#" className="px-8 py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs tracking-widest">
          Follow on Instagram
        </a>
      </div>
    </section>
  );
};
