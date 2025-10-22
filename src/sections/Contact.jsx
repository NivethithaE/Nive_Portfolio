import React from 'react';
// These icons require 'npm install lucide-react'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'; 

// Define your key contact links
const CONTACT_LINKS = [
  { 
    name: "Email", 
    href: "mailto:nivethithaelangeshwaran@gmail.com", // ⬅️ REPLACE with your actual email
    icon: Mail, 
    color: "text-red-400", 
    handle: "nivethithaelangeshwaran@gmail.com"
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/nivethitha-e-76354a269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // ⬅️ REPLACE with your actual LinkedIn URL
    icon: Linkedin, 
    color: "text-blue-400", 
    handle: "Nivethitha's Profile"
  },
  { 
    name: "GitHub", 
    href: "https://github.com/NivethithaE", // ⬅️ REPLACE with your actual GitHub username
    icon: Github, 
    color: "text-pink-400", 
    handle: "yourusername"
  },
  { 
    name: "Phone", 
    href: "tel:9585099660", // ⬅️ REPLACE with your actual phone number (optional)
    icon: Phone, 
    color: "text-green-400", 
    handle: "+91 9585099660"
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-teal-400 mb-6 text-center">
        Get In Touch
      </h2>
      
      <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        I am currently seeking new opportunities and open to discussing full-stack development projects. Feel free to connect!
      </p>

      {/* Main Call to Action Button */}
      <div className="text-center mb-16">
        <a 
          href={CONTACT_LINKS.find(link => link.name === "Email").href}
          className="inline-flex items-center space-x-3 px-10 py-4 bg-teal-600 text-white text-xl font-bold rounded-lg shadow-2xl hover:bg-teal-500 transition-transform transform hover:scale-105"
        >
          <Mail className="w-6 h-6" />
          <span>Say Hello!</span>
        </a>
      </div>

      {/* Social Links Grid */}
      <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {CONTACT_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <link.icon className={`w-8 h-8 mb-3 ${link.color}`} />
            <span className="text-lg font-semibold text-white">{link.name}</span>
            <span className="text-sm text-gray-400 mt-1 truncate max-w-full">{link.handle}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
