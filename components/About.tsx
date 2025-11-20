import React from 'react';
import { motion } from 'framer-motion';
import { HERO_IMAGES } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 1: Ideal Events */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={HERO_IMAGES[1]}
                alt="Event Setup"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-yellow-600/30 z-0 hidden md:block" />
              <div className="absolute -top-6 -left-6 w-40 h-40 border border-white/10 z-0 hidden md:block" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h4 className="text-yellow-500 uppercase tracking-widest text-sm mb-4">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Ideal Events <br />
              <span className="text-gray-400 italic">Inspiring Inimitable</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              At Ideal Events, we believe every occasion deserves to be extraordinary. With over 20 years of expertise, we specialize in creating unforgettable weddings, milestone birthdays, half-saree ceremonies, corporate gatherings, and bespoke celebrations that reflect your unique style.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From concept to completion, our team takes care of every detail — décor, catering, entertainment, photography, logistics — ensuring your event is not just seamless, but truly spectacular.
            </p>
            <a href="#contact" className="text-white border-b border-yellow-500 pb-1 hover:text-yellow-500 transition-colors">
              Learn More About Our Process
            </a>
          </motion.div>
        </div>

        {/* Section 2: Ideal Photography */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
           <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h4 className="text-yellow-500 uppercase tracking-widest text-sm mb-4">Cinematic Excellence</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Ideal Photography <br />
              <span className="text-gray-400 italic">Capturing Moments</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              At Ideal Photography, we believe a photograph is more than just an image — it’s a story, an emotion, and a memory that lasts a lifetime. Our team blends artistic vision with cutting-edge technology to deliver images and films that are timeless.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
             Whether it’s the sparkle in a bride’s eyes, the joy of a birthday celebration, or the elegance of a corporate profile, we ensure every frame tells a story worth remembering.
            </p>
            <a href="#portfolio" className="text-white border-b border-yellow-500 pb-1 hover:text-yellow-500 transition-colors">
              View Our Gallery
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={HERO_IMAGES[2]}
                alt="Photography Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
               <div className="absolute -bottom-6 -left-6 w-40 h-40 border border-yellow-600/30 z-0 hidden md:block" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
