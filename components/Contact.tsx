import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    event: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. We will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h4 className="text-yellow-500 uppercase tracking-widest text-sm mb-4">Get In Touch</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Let's Plan Your <br />Next Event</h2>
            <p className="text-gray-400 mb-12 max-w-md">
              We would love to hear from you. Reach out to discuss how we can make your celebration unforgettable.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3 rounded-none border border-white/10">
                   <MapPin className="text-yellow-500" size={24} />
                </div>
                <div>
                  <h5 className="text-white font-serif text-xl mb-1">Head Office</h5>
                  <p className="text-gray-400 text-sm">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                 <div className="bg-white/5 p-3 rounded-none border border-white/10">
                   <Phone className="text-yellow-500" size={24} />
                </div>
                <div>
                  <h5 className="text-white font-serif text-xl mb-1">Phone</h5>
                  <p className="text-gray-400 text-sm">{COMPANY_INFO.phone}</p>
                  <p className="text-gray-400 text-sm">+91 7842229444</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                 <div className="bg-white/5 p-3 rounded-none border border-white/10">
                   <Mail className="text-yellow-500" size={24} />
                </div>
                <div>
                  <h5 className="text-white font-serif text-xl mb-1">Email</h5>
                  <p className="text-gray-400 text-sm">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Name *</label>
                    <input 
                        type="text" 
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 text-white p-4 focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="John Doe"
                    />
                </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Phone</label>
                    <input 
                        type="tel" 
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 text-white p-4 focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="+91 ..."
                    />
                </div>
              </div>
              
               <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Email *</label>
                    <input 
                        type="email" 
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 text-white p-4 focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Event Type</label>
                    <select 
                        name="event"
                        value={formState.event}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 text-white p-4 focus:outline-none focus:border-yellow-500 transition-colors appearance-none"
                    >
                        <option value="" className="bg-slate-900">Select an Event</option>
                        <option value="Wedding" className="bg-slate-900">Wedding</option>
                        <option value="Corporate" className="bg-slate-900">Corporate</option>
                        <option value="Photography" className="bg-slate-900">Photography</option>
                        <option value="Other" className="bg-slate-900">Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Description *</label>
                    <textarea 
                        name="description"
                        required
                        rows={4}
                        value={formState.description}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 text-white p-4 focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="Tell us about your vision..."
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold uppercase tracking-widest transition-all duration-300"
                >
                    Send Request
                </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
