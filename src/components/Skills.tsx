import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 75 },
        { name: 'CSS3', level: 70 },
        { name: 'JavaScript', level: 50 },
        { name: 'React', level: 40 },
        { name: 'Tailwind CSS', level: 45 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', level: 70 },
        { name: 'Flask', level: 40 },
        { name: 'Node.js', level: 40 },
        { name: 'REST APIs', level: 45 }
      ]
    },
    {
      title: 'Tools & Database',
      skills: [
        { name: 'Git', level: 65 },
        { name: 'SQL', level: 50 },
        { name: 'MongoDB', level: 35 },
        { name: 'VS Code', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Tech <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I'm learning and working with to build amazing projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-cyan-300 group-hover:to-blue-400"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;