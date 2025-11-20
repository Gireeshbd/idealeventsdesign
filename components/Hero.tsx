import React from 'react';
import { motion } from 'framer-motion';
import { HERO_IMAGES, COMPANY_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax Scale */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img
          src={HERO_IMAGES[0]}
          alt="Luxury Wedding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-yellow-500 uppercase tracking-[0.3em] text-sm md:text-base mb-4"
        >
          {COMPANY_INFO.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
        >
          Making Dreams <br />
          <span className="italic text-yellow-100/90 font-light">Come Alive</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light mb-10"
        >
          {COMPANY_INFO.subTagline}. From concept to completion, we craft unforgettable celebrations tailored to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-slate-950 hover:bg-yellow-500 hover:text-white transition-all duration-300 uppercase tracking-widest font-bold text-sm w-full sm:w-auto"
          >
            Plan Your Event
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border border-white text-white hover:bg-white hover:text-slate-950 transition-all duration-300 uppercase tracking-widest font-bold text-sm w-full sm:w-auto"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-yellow-500 to-transparent mx-auto mb-2" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};
