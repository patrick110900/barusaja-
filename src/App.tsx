import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Leadership } from './components/Leadership';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <ThemeToggle />
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Leadership />
        <Certifications />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 bg-gray-900 dark:bg-black text-white text-center">
          <p className="text-gray-400">
            © 2025 Patrik Paulus. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;