import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl md:text-3xl font-bold font-serif tracking-wider text-white">
          IDEAL <span className="text-yellow-500">EVENTS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-yellow-500 transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-yellow-600 text-white text-sm uppercase tracking-widest font-semibold hover:bg-yellow-500 transition-colors duration-300 flex items-center gap-2"
          >
            <Phone size={16} />
            Book A Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-yellow-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-gray-300 hover:text-yellow-500 transition-colors text-center"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 bg-yellow-600 text-center text-white font-semibold uppercase tracking-widest hover:bg-yellow-500"
              >
                Book A Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
