import React from 'react';
import { CLIENT_LOGOS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
                <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6">Trusted by Corporate Clients</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {CLIENT_LOGOS.slice(0, 5).map((logo, idx) => (
                        <img key={idx} src={logo} alt="Client" className="h-8 md:h-10 object-contain" />
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm mb-4 md:mb-0">
                    © 2025 Ideal Events. All rights reserved.
                </p>
                <div className="flex space-x-6">
                     <a href="#" className="text-gray-500 hover:text-yellow-500 text-sm">Instagram</a>
                     <a href="#" className="text-gray-500 hover:text-yellow-500 text-sm">Facebook</a>
                     <a href="#" className="text-gray-500 hover:text-yellow-500 text-sm">YouTube</a>
                </div>
            </div>
        </div>
    </footer>
  );
};
