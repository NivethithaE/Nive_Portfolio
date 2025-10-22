import React from 'react';

// Import all sections
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';      // <-- New Import
import Projects from './sections/Projects';  // <-- New Import
import Contact from './sections/Contact';    // We will build this next
import ProfessionalHistory from './sections/ProfessionalHistory';
function App() {
  return (
    // Tailwind classes for the main body/page container
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />
      
      {/* Main Content Area: Centered and Padded */}
      <main className="container mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <ProfessionalHistory />
        
        {/* Render the new sections */}
        <Skills /> 
        <Projects />
        
        <Contact /> 
      </main>
      
      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 bg-gray-900 border-t border-gray-800 mt-12">
        <p>&copy; {new Date().getFullYear()} Nivethitha.Dev. Built with React and Tailwind CSS.</p>
        <p className="mt-1 text-sm">Design inspired by modern developer portfolios.</p>
      </footer>
    </div>
  );
}

export default App;
