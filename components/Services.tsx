import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-yellow-500 uppercase tracking-widest text-sm mb-4">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Curated Experiences</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-slate-900 border border-white/5 overflow-hidden h-[450px] flex flex-col justify-end p-6"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-yellow-600 w-12 h-12 flex items-center justify-center mb-4 text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto">
                    {service.description}
                  </p>
                  <a href="#portfolio" className="inline-flex items-center text-yellow-500 text-sm uppercase tracking-widest font-bold group-hover:text-white transition-colors">
                    View Works <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
