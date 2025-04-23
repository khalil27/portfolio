import React from 'react';
import education from '../data/education';
import experience from '../data/experience';
import { GraduationCap, Briefcase } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Éducation & Expérience
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Formation
              </h3>
            </div>
            
            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-teal-200 dark:before:bg-teal-800">
              {education.map((edu, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-teal-600 dark:bg-teal-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                    <div className="text-sm font-medium text-teal-600 dark:text-teal-400 mb-1">
                      {edu.startDate} - {edu.endDate === 'present' ? 'Présent' : edu.endDate}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {edu.institution}
                    </p>
                    {edu.description && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Expérience Professionnelle
              </h3>
            </div>
            
            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-teal-200 dark:before:bg-teal-800">
              {experience.map((exp, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-teal-600 dark:bg-teal-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                    <div className="text-sm font-medium text-teal-600 dark:text-teal-400 mb-1">
                      {exp.startDate} - {exp.endDate}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {exp.company}, {exp.location}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {exp.description}
                    </p>
                    
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-0.5 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 text-xs font-medium rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;