import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'GSMS/FreshMart',
      description: 'I built a responsive shopping cart system with real-time updates, detailed order summary, and a seamless self-collection checkout. It includes an admin dashboard for managing products, tracking orders, and monitoring revenue.',
      image: '/GSMS.png',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive'],
      liveUrl: 'https://gsms-fresh-mart.vercel.app/',
      githubUrl: 'https://github.com/SyedNusrath07/GSMS-FreshMart.git',
      date: '2025'
    },
    {
      id: 2,
      title: 'birdflight',
      description: 'I built a casual bird flying tap game with smooth controls, seasonal themes, real-time scoring, and fun obstacles. Players can unlock and switch bird skins, power-ups, and trails through a coin shop. I also added user achievements and level-based rewards to enhance engagement.',
      image: '/birdflight.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      liveUrl: 'https://birdflight.netlify.app/',
      githubUrl: 'https://github.com/SyedNusrath07/birdflight.git',
      date: '2025'
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'personal portfolio',
      image: '/portfolio.png',
      tags: ['JavaScript', 'API Integration', 'CSS3', 'HTML5'],
      liveUrl: 'https://example.com/project3',
      githubUrl: '#',
      date: '2025'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some projects I've built while learning web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full hover:bg-slate-600 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;