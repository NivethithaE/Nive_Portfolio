import React from 'react';

const PROJECTS_DATA = [
  {
    title: "Emotion Detection App",
    description:
      "A real-time emotion detection system that captures facial expressions through webcam or uploaded images and predicts emotions using deep learning models. Built with Python, OpenCV, and a trained CNN model, the system integrates a clean GUI for user interaction.",
    techStack: ["Python", "OpenCV", "TensorFlow", "Tkinter", "Flask"],
    githubLink: "https://github.com/NivethithaE/emotion_detection",
    liveLink: "",
    demoType: "Desktop App",
  },
  {
    title: "Movie Decoder Website",
    description:
      "A web application that allows users to decode movie details like cast, crew, and genre while generating a one-liner summary ladder. The app integrates APIs for fetching real-time movie data and displays it in a dynamic, visually aesthetic interface.",
    techStack: ["React", "Tailwind CSS", "Node.js", "TMDb API"],
    githubLink: "https://github.com/NivethithaE/cine-suggest",
    liveLink: "https://cine-suggest-nine.vercel.app/",
    demoType: "Web App",
  },
  {
    title: "Sales Prediction System",
    description:
      "A data-driven application that visualizes and predicts shop sales trends using MySQL and Python. It provides insights into past and future sales through interactive charts in a GUI environment.",
    techStack: ["Python", "MySQL", "Matplotlib", "Tkinter", "Pandas"],
    githubLink: "https://github.com/NivethithaE/Sales_analysis",
    liveLink: "",
    demoType: "Desktop App",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website designed and developed using React and Tailwind CSS. It showcases my technical projects, skills, and professional journey — representing both my Full Stack and Data Analytics expertise.",
    techStack: ["React", "Tailwind CSS", "Vercel", "Framer Motion"],
    githubLink: "https://github.com/NivethithaE/Nive_Portfolio", // your repo name
    liveLink: "https://nivethitha-portfolio.vercel.app/", // replace with your actual deployed link
    demoType: "Portfolio",
  },
  {
  title: "Gesture-Controlled Presentation System",
  description:
    "An interactive system that enables users to control PowerPoint presentations using hand gestures. Built with Python, OpenCV, and MediaPipe, it recognizes gestures like 'Swipe' for next slide and 'Thumbs Up' for previous slide — creating a hands-free, futuristic presentation experience.",
  techStack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
  githubLink: "https://github.com/NivethithaE/Gesture-Presentation", // replace with your actual repo link
  liveLink: "",
  demoType: "Computer Vision Project",
},
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-b border-gray-700">
      <h2 className="text-4xl font-bold text-teal-400 mb-12 text-center">
        Featured Projects
      </h2>
      <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
        A glimpse into some of my favorite works — combining creativity, logic, and technical precision to build real-world solutions.
      </p>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-all"
          >
            <div>
              <h3 className="text-2xl font-semibold text-teal-300 mb-2">
                {project.title}
              </h3>
              <div className="h-24 overflow-y-auto text-gray-400 mb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-auto">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-teal-400 hover:text-teal-200"
              >
                GitHub ↗
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-300 hover:text-white"
                >
                  {project.demoType || "Live Demo"} ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA for more projects */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/NivethithaE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-gray-700 text-white font-semibold rounded-lg shadow-xl hover:bg-gray-600 transition-transform transform hover:scale-[1.02]"
        >
          View All Projects on GitHub →
        </a>
      </div>
    </section>
  );
};

export default Projects;
