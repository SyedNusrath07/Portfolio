import React from 'react';
import { Download, Eye, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/syed-nusrath-resume.pdf';
    link.download = 'syed-nusrath-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 transform -skew-y-12"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6 animate-fade-in-up">
              <p className="text-cyan-400 text-lg mb-2 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Syed Nusrath Hussaine
              </h1>
            </div>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I'm passionate about web development and creating beautiful, 
              functional applications. Currently learning modern technologies and building projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('#projects')}
                className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 font-medium"
              >
                <Eye size={20} />
                View Projects
              </button>
              <button
                onClick={downloadResume}
                className="flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 font-medium"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>

            <div className="mt-6 flex space-x-4 justify-center lg:justify-start">
              <a
                href="https://github.com/SyedNusrath07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 text-gray-400 hover:text-cyan-400 hover:bg-slate-700 rounded-lg transition-all duration-200 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/syed-nusrath-hussaine"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 text-gray-400 hover:text-cyan-400 hover:bg-slate-700 rounded-lg transition-all duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 p-0.5 animate-float-smooth">
<img
  src="/syed.png"
  alt="Syed Nusrath Hussaine"
  loading="lazy"
  className="w-full h-full rounded-full object-cover"
/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
