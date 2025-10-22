import React from 'react';
import { Github, Link, TerminalSquare } from 'lucide-react'; // Icons for quick visual links

/**
 * Reusable component to display a single project card.
 * @param {object} props - Project properties
 * @param {string} props.title - Project title
 * @param {string} props.description - Short project summary
 * @param {string[]} props.techStack - Array of technologies used
 * @param {string} props.githubLink - Link to the GitHub repository
 * @param {string} [props.liveLink] - Optional link to the live demo
 * @param {string} [props.demoType] - Optional type of demo (e.g., 'Code', 'Website', 'CLI')
 */
const ProjectCard = ({ title, description, techStack, githubLink, liveLink, demoType = 'Website' }) => {
  // Determine the appropriate icon for the demo link
  const DemoIcon = demoType === 'CLI' ? TerminalSquare : Link;

  return (
    <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:-translate-y-1">
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-400 mb-4 h-20 overflow-hidden">{description}</p>
      
      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-xs font-medium px-3 py-1 bg-teal-900/40 text-teal-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Links */}
      <div className="flex justify-start space-x-4">
        
        {/* GitHub Link (Mandatory) */}
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
        >
          <Github className="w-5 h-5 text-pink-400" />
          <span className="font-semibold">Code</span>
        </a>
        
        {/* Live Demo Link (Optional) */}
        {liveLink && (
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
          >
            <DemoIcon className="w-5 h-5 text-teal-400" />
            <span className="font-semibold">{demoType}</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
