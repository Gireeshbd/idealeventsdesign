import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <HashRouter>
      <div className="bg-slate-950 min-h-screen text-white selection:bg-yellow-500 selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
