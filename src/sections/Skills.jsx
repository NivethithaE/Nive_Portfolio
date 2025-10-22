import React from 'react';

// Define your skills data in clear, professional categories
const SKILL_GROUPS = [
  {
    title: "Core Technologies",
    skills: ["JavaScript", "React", "Node.js", "HTML & CSS"],
    color: "text-blue-400"
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Tailwind CSS", "Bootstrap"],
    color: "text-green-400"
  },
  {
    title: "Databases & Cloud",
    skills: ["MongoDB", "SQL/NoSQL", "AWS (EC2, S3)", "Docker", "4Vercel"],
    color: "text-yellow-400"
  },
  {
    title: "Tools & Methodologies",
    skills: ["Git/GitHub", "Agile/Scrum", "RESTful APIs", "Webpack/Vite","Excel"],
    color: "text-red-400"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-b border-gray-700">
      <h2 className="text-4xl font-bold text-teal-400 mb-6 text-center">
        Technical Expertise
      </h2>
      <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
        A comprehensive look at the technologies, tools, and methodologies I leverage to build scalable and maintainable applications.
      </p>
      
      {/* Responsive Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILL_GROUPS.map((group, index) => (
          <div 
            key={index} 
            className="bg-gray-800 p-6 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-teal-500/30 hover:-translate-y-1"
          >
            <h3 className={`text-xl font-extrabold mb-4 ${group.color} border-b border-gray-700 pb-2`}>
              {group.title}
            </h3>
            <ul className="space-y-3 text-sm">
              {group.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center text-gray-300">
                  {/* Small Teal Dot Icon */}
                  <span className={`w-2 h-2 rounded-full ${group.color} mr-3 block flex-shrink-0`}></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

