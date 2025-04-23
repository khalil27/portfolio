import React from 'react';
import personalInfo from '../data/personal-info';
import { GraduationCap, Briefcase, MapPin, Mail, Phone, Globe } from 'lucide-react';
import languages from '../data/languages';
import khalilImage from '../images/khalil.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          À propos de moi
        </h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
            <img 
  src={khalilImage} 
  alt="Khalil" 
  className="w-[600px] h-auto object-contain" 
/>


              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Informations Personnelles
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {personalInfo.location.address}, {personalInfo.location.city}, {personalInfo.location.country}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                    <a href={`tel:${personalInfo.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Globe className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {personalInfo.nationality}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-span-2">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Qui suis-je?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {personalInfo.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                    <GraduationCap className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                    Formation
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Actuellement étudiant en 2ème année d'ingénierie informatique à l'ESPRIT. Passionné par le développement web et mobile, je cherche constamment à améliorer mes compétences techniques et à rester à jour avec les nouvelles technologies.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                    <Briefcase className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                    Expérience
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    J'ai réalisé des stages professionnels qui m'ont permis de mettre en pratique mes connaissances théoriques dans des environnements réels. Ces expériences m'ont aidé à développer ma capacité d'adaptation et mon sens de la responsabilité.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Langues
                  </h4>
                  <div className="space-y-3">
                    {languages.map((language) => (
                      <div key={language.code}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 dark:text-gray-300">{language.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{language.proficiency}</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-teal-600 dark:bg-teal-400 rounded-full"
                            style={{ width: `${language.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
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

export default About;