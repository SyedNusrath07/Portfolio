import React from 'react';
import { GraduationCap, BookOpen, Coffee, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Education',
      description: 'Computer Science Engineering Graduated'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Learning',
      description: 'Full Stack Development'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Passion',
      description: 'Learning,Upskilling'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Projects',
      description: 'Personal & Academic'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 mb-12 text-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m Syed Nusrath Hussaine, a recent Computer Science and Engineering graduate from Anna University – C. Abdul Hakeem College of Engineering & Technology (Batch: 2021–2025), with a GPA of 7.79. I’m an aspiring Full Stack Web Developer passionate about building modern, responsive, and user-focused web applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              While I’m still learning and sharpening my skills, I bring a strong foundation in both front-end and back-end technologies, a commitment to writing clean and efficient code, and a genuine enthusiasm for problem-solving and continuous improvement.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I enjoy exploring new tools, frameworks, and development practices, and I’m actively seeking opportunities to collaborate, grow, and contribute to meaningful projects in the tech industry.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm professionally proficient in English, Tamil, and Hindi, allowing me to communicate effectively with diverse teams and users.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Let’s build something great together!
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors duration-200 group text-center"
              >
                <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-200 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;