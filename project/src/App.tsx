import React, { useEffect } from 'react';
import './styles/animations.css';
import { ThemeProvider, useTheme } from './utils/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import personalInfo from './data/personal-info';

const AppContent: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    // Update page title
    document.title = `Portfolio de ${personalInfo.name}`;
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;