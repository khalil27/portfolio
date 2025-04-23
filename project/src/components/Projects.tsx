import React, { useState } from 'react';
import projects, { Project } from '../data/projects';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  const openProjectModal = (project: Project) => {
    setActiveProject(project);
  };
  
  const closeProjectModal = () => {
    setActiveProject(null);
  };
  
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in">
          Mes projets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover-lift cursor-pointer animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => openProjectModal(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image || 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-100 text-xs font-medium rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeProjectModal}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="h-64 sm:h-80 overflow-hidden relative">
              <img 
                src={activeProject.image || 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
                alt={activeProject.title}
                className="w-full h-full object-cover object-center"
              />
              <button 
                onClick={closeProjectModal}
                className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {activeProject.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {activeProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <Code className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {activeProject.github && (
                  <a 
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors hover-lift"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Voir le code
                  </a>
                )}
                
                {activeProject.liveDemo && (
                  <a 
                    href={activeProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 dark:bg-primary-700 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors hover-lift"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Voir le démo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;