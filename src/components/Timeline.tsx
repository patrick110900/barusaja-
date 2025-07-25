import React, { useState } from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  gpa?: string;
  achievements?: string[];
  details?: string;
}

const timelineData: TimelineItem[] = [
  {
    type: 'experience',
    title: 'EDP Technician & Technical Operator',
    organization: 'PT. Matahari Putra Prima Tbk – Ambon',
    period: 'Jul 2024 – Apr 2025',
    location: 'Ambon',
    description: 'Maintained refrigeration and air conditioning systems...',
    details: 'Responsible for maintaining critical infrastructure systems...',
    achievements: [
      'Optimized energy efficiency systems',
      'Created promotional materials',
      'Maintained critical infrastructure'
    ]
  },
  {
    type: 'experience',
    title: 'UI/UX Designer & Security Analyst',
    organization: 'Infinite Learning x Kampus Merdeka',
    period: 'Jul 2023 – Oct 2023',
    description: 'Designed mobile health app UI with Figma...',
    details: 'Led the design and security analysis of a comprehensive mobile health application...',
    achievements: [
      'Designed comprehensive mobile health app UI',
      'Conducted security assessments',
      'Implemented secure coding practices'
    ]
  },
  {
    type: 'experience',
    title: 'Android Developer',
    organization: 'PPK ORMAWA – Kemendikbud RI',
    period: 'Sep 2023 – Dec 2023',
    description: 'Built Android apps for village administration digitization...',
    details: 'Developed comprehensive Android applications to digitize village administration...',
    achievements: [
      'Developed village administration systems',
      'Integrated secure API connections',
      'Implemented advanced security features'
    ]
  },
  {
    type: 'education',
    title: 'Bachelor of Industrial Engineering',
    organization: 'Universitas Pattimura',
    period: '2020 – 2025',
    location: 'Ambon',
    description: 'Comprehensive study in industrial engineering...',
    details: 'Pursuing a comprehensive degree in Industrial Engineering...',
    gpa: '3.29'
  },
  {
    type: 'experience',
    title: 'Assistant Lecturer',
    organization: 'Pattimura University',
    period: 'Jul 2021 – Aug 2021',
    description: 'Guided student practicum sessions...',
    details: 'Assisted in teaching Work Design Analysis Course...',
    achievements: [
      'Mentored student practical sessions',
      'Supervised academic projects',
      'Developed teaching materials'
    ]
  },
  {
    type: 'education',
    title: 'Electrical Power Installation Engineering',
    organization: 'SMK Negeri 3 Ambon',
    period: '2016 – 2018',
    location: 'Ambon',
    description: 'Specialized training in electrical systems...',
    details: 'Comprehensive vocational training in electrical power installation...'
  }
];

const FlipCard: React.FC<{ item: TimelineItem; index: number; isVisible: boolean }> = ({ item, index, isVisible }) => {
  const isLeft = index % 2 === 0;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-8`}>
      <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <div
          style={{ transitionDelay: `${index * 100}ms` }}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (isLeft ? 'translate-x-8' : '-translate-x-8')
          }`}
        >
          <div
            className="relative cursor-pointer h-80 group perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 w-full h-full backface-hidden">
                <div className="flex flex-col justify-between h-full p-6 transition-all duration-300 border bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-xl border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20">
                  <div>
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`p-2 rounded-lg ${
                          item.type === 'education'
                            ? 'bg-blue-100 dark:bg-blue-900/30'
                            : 'bg-green-100 dark:bg-green-900/30'
                        }`}
                      >
                        {item.type === 'education' ? (
                          <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400" />
                        )}
                      </div>
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full ${
                          item.type === 'education'
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                            : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        }`}
                      >
                        {item.type === 'education' ? 'Education' : 'Experience'}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {item.organization}
                    </p>
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      {item.gpa && (
                        <div className="flex items-center gap-1">
                          <span className="font-medium">GPA: {item.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm italic text-gray-500 dark:text-gray-400">
                      Hover or tap to see details
                    </p>
                  </div>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                <div className="flex flex-col justify-between h-full p-6 border bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-md rounded-xl border-blue-200/50 dark:border-gray-600/50">
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Details</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {item.details || item.description}
                    </p>
                    {item.achievements && (
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {item.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-xs italic text-gray-500 dark:text-gray-400">Click to flip back</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center line bullet */}
      <div className="relative z-10 flex items-center justify-center w-12">
        <div
          className={`w-4 h-4 rounded-full border-4 transition-all duration-500 ${
            isVisible ? 'bg-blue-600 border-blue-600' : 'bg-gray-300 border-gray-300'
          }`}
        ></div>
      </div>

      <div className="w-1/2"></div>
    </div>
  );
};

export const Timeline: React.FC = () => {
  const { ref: refExperience, isInView: isExperienceInView } = useInView(0.2);
  const { ref: refEducation, isInView: isEducationInView } = useInView(0.2);

  const experienceData = timelineData.filter(item => item.type === 'experience');
  const educationData = timelineData.filter(item => item.type === 'education');

  return (
    <section className="py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="container px-6 mx-auto">

        {/* Experience */}
        <div id="experience" className="mb-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Professional Experience
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-600 to-blue-600"></div>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              Professional journey in engineering, development, and digital transformation
            </p>
          </div>
          <div className="relative max-w-6xl mx-auto" ref={refExperience}>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-600 to-blue-600"></div>
            {experienceData.map((item, index) => (
              <FlipCard key={index} item={item} index={index} isVisible={isExperienceInView} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div id="education">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Education
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-green-600"></div>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              Academic foundation in engineering and technical expertise
            </p>
          </div>
          <div className="relative max-w-6xl mx-auto" ref={refEducation}>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-green-600"></div>
            {educationData.map((item, index) => (
              <FlipCard key={index} item={item} index={index} isVisible={isEducationInView} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
