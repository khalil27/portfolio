import React, { useState } from 'react';
import skills, { getSkillsByCategory, Skill } from '../data/skills';

type CategoryType = Skill['category'];

const categoryLabels: Record<CategoryType, string> = {
  programming: 'Langages de programmation',
  web: 'Web & Mobile',
  database: 'Bases de données',
  tools: 'Outils',
  methodologies: 'Méthodologies',
  frameworks: 'Frameworks'
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('programming');
  
  const categories: CategoryType[] = ['programming', 'frameworks', 'web', 'database', 'tools', 'methodologies'];
  const filteredSkills = getSkillsByCategory(activeCategory);
  
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Mes compétences
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
            {categoryLabels[activeCategory]}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 transition-transform hover:scale-105">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                  <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-teal-600 dark:bg-teal-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;