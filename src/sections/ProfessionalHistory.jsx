import React from "react";

const ProfessionalHistory = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Strack IT",
      period: "Dec 2023 – Mar 2024",
      description:
        "Worked on developing full-stack web applications using React.js and Node.js. Implemented responsive designs, optimized APIs, and enhanced UI for smoother workflows.",
      skills: ["React.js", "Node.js", "MySQL", "Express.js", "REST APIs"],
    },
    {
      title: "Machine Learning Intern",
      company: "Prodigy InfoTech",
      period: "Apr 2024 – Jun 2024",
      description:
        "Built predictive models and data visualization dashboards for real-world datasets. Improved model accuracy and implemented data preprocessing pipelines.",
      skills: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    },
    {
      title: "AI & Data Science Intern",
      company: "NXT Logic Pvt Ltd",
      period: "Jul 2024 – Sep 2024",
      description:
        "Applied deep learning and NLP techniques to automate data analysis. Developed sentiment analysis models and contributed to business intelligence reports.",
      skills: ["TensorFlow", "Keras", "NLP", "Power BI"],
    },
    {
      title: "Smart India Hackathon Finalist",
      company: "Government of India",
      period: "Aug 2024",
      description:
        "Developed an intelligent project under the theme of Smart Solutions for Society. Focused on scalability, innovation, and collaborative development.",
      skills: ["Teamwork", "Innovation", "Problem Solving"],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-gray-200 py-16 px-6">
      <h1 className="text-5xl font-bold text-center text-teal-400 mb-12">
        Detailed Professional History
      </h1>

      <div className="max-w-5xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-teal-500 transition-all"
          >
            <h2 className="text-2xl font-semibold text-white">{exp.title}</h2>
            <p className="text-teal-400 font-medium">
              {exp.company} • {exp.period}
            </p>
            <p className="mt-3 text-gray-400">{exp.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm text-teal-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalHistory;
