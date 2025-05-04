import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import personalInfo from '../data/personal-info';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-400/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary-400/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-300"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-300/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-600"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="relative inline-block mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in relative z-10">
          {personalInfo.greeting} {personalInfo.name}
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-20 blur-lg animate-pulse-slow"></div>
        </div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 mb-8 animate-fade-in animation-delay-300">
          {personalInfo.title}
        </h2>
        
        <p className="max-w-2xl mx-auto text-lg text-white/80 mb-12 animate-fade-in animation-delay-600 leading-relaxed">
          {personalInfo.description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-900">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="group px-8 py-4 bg-white text-primary-600 font-medium rounded-lg hover:bg-opacity-95 transition-all hover-lift relative overflow-hidden"
          >
            <span className="relative z-10">Voir mes projets</span>
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="group px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all hover-lift relative overflow-hidden"
          >
            <span className="relative z-10">Me contacter</span>
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"></div>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="group p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all cursor-pointer animate-bounce-slow hover-scale"
        >
          <ChevronDown className="text-white transform group-hover:scale-110 transition-transform" size={24} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;