import React from 'react';
import { User, Target, Briefcase } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const About: React.FC = () => {
  const { ref, isInView } = useInView(0.3);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder - Using Geometric Design */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-green-600 rounded-full p-1">
                <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <User className="w-32 h-32 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-30"></div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I specialize in <strong>project management, product development, HR planning, and information systems</strong>. 
                  With a vocational background in Electrical Power Installation (PLC & basic automation), I bring a unique 
                  blend of technical expertise and strategic thinking to every project.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My experience spans <strong>Android development, UI/UX design, and digital transformation projects</strong>. 
                  I'm passionate about leveraging technology to create meaningful solutions that improve efficiency and 
                  user experience.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Vision</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Aspiring to become a Digital Product Specialist improving public service efficiency
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Technical background with strategic project management skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};