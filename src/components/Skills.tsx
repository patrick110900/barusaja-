import React, { useEffect, useState } from 'react';
import { Code, Smartphone, Palette, Zap, Globe, Cloud } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  {
    name: 'Project Management',
    level: 90,
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Android Development',
    level: 85,
    icon: <Smartphone className="w-6 h-6" />,
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'UI/UX Design',
    level: 80,
    icon: <Palette className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Electrical Installation & PLC',
    level: 75,
    icon: <Zap className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Web Development',
    level: 70,
    icon: <Globe className="w-6 h-6" />,
    color: 'from-teal-500 to-teal-600'
  },
  {
    name: 'Cloud Computing',
    level: 65,
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-indigo-500 to-indigo-600'
  }
];

const SkillCard: React.FC<{ skill: Skill; index: number; isVisible: boolean }> = ({ skill, index, isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div className="group p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white group-hover:scale-110 transition-transform duration-300`}>
          {skill.icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {skill.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}% Proficiency</p>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full relative`}
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const { ref, isInView } = useInView(0.3);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive skill set spanning technical development, project management, and strategic planning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                index={index} 
                isVisible={isInView} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Import Briefcase icon
import { Briefcase } from 'lucide-react';