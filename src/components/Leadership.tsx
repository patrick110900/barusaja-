import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const Leadership: React.FC = () => {
  const { ref, isInView } = useInView(0.3);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Leadership & Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Leading organizational development and community initiatives
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl border border-blue-200/50 dark:border-gray-600/50 backdrop-blur-sm">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-blue-600/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-green-600/10 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Chairman of Industrial Engineering Student Association
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">2023 – 2024</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  Led organizational development initiatives, coordinated major events, and spearheaded 
                  community service projects. Focused on building bridges between academic excellence 
                  and practical industry applications.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg w-fit mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Organizational Development
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Restructured association operations and improved member engagement
                    </p>
                  </div>

                  <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg w-fit mx-auto mb-4">
                      <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Event Management
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Coordinated large-scale academic and professional development events
                    </p>
                  </div>

                  <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg w-fit mx-auto mb-4">
                      <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Community Service
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Led initiatives connecting student expertise with community needs
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