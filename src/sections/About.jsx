import React from 'react';
import { Briefcase, Zap, Target } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-24 border-b border-gray-800 bg-gray-900/50"
    >
      <h2 className="text-5xl font-extrabold text-white text-center mb-16">
        The Value I Deliver
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1: Full-Stack Expertise */}
        <div className="group bg-gray-800/80 p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
          <Briefcase className="w-8 h-8 text-teal-400 mb-4 transition-transform duration-300 group-hover:-translate-y-1" />
          <h3 className="text-xl font-bold text-white mb-3">
            Full-Stack Development & UI Optimization
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Specialized in <strong>React.js and Node.js</strong>, with hands-on experience designing and deploying interactive, component-based web features, ensuring smoother navigation and better user experience.
          </p>
        </div>

        {/* Card 2: Data Science & ML */}
        <div className="group bg-gray-800/80 p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
          <Zap className="w-8 h-8 text-blue-400 mb-4 transition-transform duration-300 group-hover:-translate-y-1" />
          <h3 className="text-xl font-bold text-white mb-3">
            Machine Learning & Data Analytics
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Skilled in applying data science techniques to generate actionable insights and building ML models for real-world problems. Experienced in data visualization and reporting for business clarity.
          </p>
        </div>

        {/* Card 3: Project Management & Results */}
        <div className="group bg-gray-800/80 p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
          <Target className="w-8 h-8 text-purple-400 mb-4 transition-transform duration-300 group-hover:-translate-y-1" />
          <h3 className="text-xl font-bold text-white mb-3">
            Goal-Oriented & Project Driven
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Committed to driving projects forward, demonstrated by being a <strong>Smart India Hackathon 2024 Finalist</strong>. Strong soft skills in critical thinking, project management, and teamwork.
          </p>
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-300 italic mb-4">
          "Passionate about building intelligent systems and transforming complex requirements into simple, elegant digital experiences."
        </p>
        <a
          href="#professional-history"
          className="text-teal-400 hover:text-teal-300"
        >
        </a>
      </div>
    </section>
  );
};

export default About;
