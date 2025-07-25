import React from 'react';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { Particles } from './Particles';

export const Hero: React.FC = () => {
  const { displayText, isComplete } = useTypingEffect(
    "Hi, I'm Patrik Paulus – Industrial Engineering Student & Aspiring Digital Product Specialist",
    30
  );

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 animate-pulse"></div>
      </div>

      {/* Particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 mx-auto text-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Profile Photo */}
          <div className="flex justify-center order-2 lg:order-1 lg:justify-start">
            <div className="relative group">
              <div className="overflow-hidden transition-all duration-500 border-4 rounded-full shadow-2xl w-80 h-80 md:w-96 md:h-96 border-white/20 backdrop-blur-sm group-hover:scale-105">
                <img 
                  src="/WhatsApp Image 2025-07-05 at 21.13.27_2d521da9.jpg" 
                  alt="Patrik Paulus - Industrial Engineering Student" 
                  className="object-cover object-center w-full h-full"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute w-24 h-24 rounded-full -top-4 -right-4 bg-green-500/30 animate-pulse"></div>
              <div className="absolute w-16 h-16 rounded-full -bottom-4 -left-4 bg-blue-500/30 animate-bounce"></div>
              <div className="absolute w-8 h-8 rounded-full top-1/2 -right-8 bg-orange-500/40"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 space-y-6 text-center lg:order-2 lg:text-left">
            <h1 className="mb-6 text-4xl font-bold text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-white to-blue-200 bg-clip-text">
              Patrik Paulus
            </h1>

            <div className="flex items-center justify-center h-20 md:h-16 lg:justify-start">
              <p className="text-lg font-medium leading-relaxed md:text-xl lg:text-2xl">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <div className={`transition-all duration-500 ${isComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="max-w-2xl mx-auto mb-8 text-base text-blue-100 md:text-lg lg:text-xl lg:mx-0">
                Specializing in project management, Android development, and digital transformation. 
                Passionate about improving public service efficiency through innovative solutions.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                {/* ✅ Download Resume Button as <a> tag */}
                <a 
                  href="/Patrik Paulus-resume (3).pdf" 
                  download 
                  className="flex items-center gap-3 px-8 py-4 transition-all duration-300 border rounded-full group bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-md hover:scale-105"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="font-semibold">Download Resume</span>
                </a>

                {/* Contact Me Button */}
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-3 px-8 py-4 transition-all duration-300 bg-green-600 rounded-full group hover:bg-green-700 hover:scale-105"
                >
                  <Mail className="w-5 h-5 group-hover:animate-pulse" />
                  <span className="font-semibold">Contact Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute transition-transform transform -translate-x-1/2 cursor-pointer bottom-8 left-1/2 animate-bounce hover:scale-110"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </button>
      </div>
    </section>
  );
};
