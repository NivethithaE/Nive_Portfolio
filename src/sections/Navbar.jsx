import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for the mobile toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // List of navigation items
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 p-4 bg-gray-900/95 backdrop-blur-sm shadow-xl border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo/Name */}
        <a 
          href="#hero" 
          className="text-2xl font-black text-teal-400 hover:text-teal-300 transition-colors tracking-wider"
        >
          Nivethitha E
        </a>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center text-lg">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-gray-300 hover:text-white transition-colors hover:border-b-2 hover:border-teal-400 pb-1"
            >
              {item.name}
            </a>
          ))}

          {/* Resume Button for Desktop */}
          <a 
            href="/Nivethitha _Resume.pdf"  // ✅ File inside public folder
            download="Nivethitha _Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-500 transition-colors"
          >
            Resume
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
      >
        <div className="flex flex-col space-y-3 p-4 bg-gray-800 rounded-lg shadow-inner">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)} 
              className="text-gray-300 hover:text-teal-400 font-medium py-2 border-b border-gray-700 last:border-b-0"
            >
              {item.name}
            </a>
          ))}

          {/* Resume Button for Mobile */}
          <a 
            href="/Nivethitha -Resume.pdf"  // ✅ File inside public folder
            download="Nivethitha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 text-center bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-500 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
