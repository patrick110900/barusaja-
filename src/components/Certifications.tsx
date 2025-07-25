import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description: string;
  category: 'development' | 'cloud' | 'design' | 'management';
}

const certificates: Certificate[] = [
  {
    title: 'Android-Based Village Service Application',
    issuer: 'PPK ORMAWA',
    year: '2023',
    description: 'Developed comprehensive Android application for village administration digitization',
    category: 'development'
  },
  {
    title: 'Final Pit Stop Project',
    issuer: 'Infinite Learning',
    year: '2023',
    description: 'Completed comprehensive UI/UX design and security analysis project',
    category: 'design'
  },
  {
    title: 'HTML & CSS Basic Course',
    issuer: 'Codepolitan',
    year: '2024',
    description: 'Foundation course in web development technologies',
    category: 'development'
  },
  {
    title: 'Be The Most Wanted UX Researcher',
    issuer: 'Professional Certification',
    year: '2024',
    description: 'Advanced certification in user experience research methodologies',
    category: 'design'
  },
  {
    title: 'Oracle Primavera P6 Fundamentals',
    issuer: 'Oracle',
    year: '2023',
    description: 'Project management software proficiency certification',
    category: 'management'
  },
  {
    title: 'Alibaba Cloud Certified',
    issuer: 'Alibaba Cloud',
    year: '2024',
    description: 'Cloud computing platform certification and best practices',
    category: 'cloud'
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Dicoding',
    year: '2023',
    description: 'Amazon Web Services foundational cloud computing certification',
    category: 'cloud'
  }
];

const categoryColors = {
  development: 'from-blue-500 to-blue-600',
  cloud: 'from-purple-500 to-purple-600',
  design: 'from-pink-500 to-pink-600',
  management: 'from-green-500 to-green-600'
};

const categoryLabels = {
  development: 'Development',
  cloud: 'Cloud Computing',
  design: 'Design & UX',
  management: 'Management'
};

const CertificateCard: React.FC<{ certificate: Certificate; index: number; isVisible: boolean }> = ({ certificate, index, isVisible }) => {
  return (
    <div className={`group transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="h-full p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColors[certificate.category]} text-white group-hover:scale-110 transition-transform duration-300`}>
            <Award className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${categoryColors[certificate.category]} text-white`}>
              {categoryLabels[certificate.category]}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {certificate.title}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {certificate.issuer}
          </p>
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{certificate.year}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {certificate.description}
        </p>
        
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer group-hover:translate-x-1 transition-all duration-300">
          <span className="text-sm font-medium">View Details</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export const Certifications: React.FC = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications demonstrating expertise across multiple domains
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <CertificateCard 
                key={`${certificate.title}-${certificate.year}`} 
                certificate={certificate} 
                index={index} 
                isVisible={isInView} 
              />
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid sm:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7+</div>
              <div className="text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
            <div className="text-center p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-xl">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-400">Domains</div>
            </div>
            <div className="text-center p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-xl">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2024</div>
              <div className="text-gray-600 dark:text-gray-400">Latest Year</div>
            </div>
            <div className="text-center p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-xl">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};