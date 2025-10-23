import React from 'react';
import profileImage from '../assets/image3.jpg';
import { Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between px-10 md:px-24 lg:px-36 py-24 md:py-40 
                 min-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-950 to-black border-b border-gray-800"
    >
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-5 animate-fadeInLeft">

        {/* Sub-headline */}
        <p className="text-lg text-teal-400 font-medium tracking-wide">
          I build scalable web solutions that drive results.
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
          Nivethitha,
          <br className="hidden lg:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 text-3xl lg:text-5xl">
            Full Stack Developer & Data Analyst
          </span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0">
          Expert in <strong>React, Node.js, and Data Analytics</strong>, specializing in building scalable web applications and transforming complex data into actionable insights using machine learning and visualization techniques.
        </p>

        {/* Call to Action Buttons */}
        <div className="pt-6 flex flex-wrap justify-center md:justify-start gap-5">
          <a 
            href="#projects" 
            className="inline-flex items-center px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-xl shadow-teal-600/40 hover:bg-teal-500 transition-transform transform hover:scale-[1.03] duration-300"
          >
            View Projects 
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>

          <a 
            href="/Nivethitha _Resume.pdf"
            download="Nivethitha _Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 animate-fadeInRight">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 via-blue-600 to-purple-700 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
          <img 
            src={profileImage} 
            alt="Nivethitha's Professional Profile" 
            className="relative w-72 h-72 md:w-[23rem] md:h-[23rem] rounded-full object-cover border-[5px] border-teal-500 shadow-2xl shadow-teal-500/40 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
