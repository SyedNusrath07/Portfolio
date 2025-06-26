import React from 'react';
import { Code, Palette, Server, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Full-stack web development using modern technologies and frameworks. From concept to deployment, I create scalable and efficient web applications.',
      features: ['Custom Web Applications', 'E-commerce Solutions', 'CMS Development', 'API Integration']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces that provide exceptional user experiences across all devices and platforms.',
      features: ['Responsive Design', 'User Interface Design', 'Wireframing', 'Prototyping']
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Robust backend solutions with database design, API development, and server configuration for scalable applications.',
      features: ['REST API Development', 'Database Design', 'Server Configuration', 'Cloud Deployment']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile-First Design',
      description: 'Responsive web applications that work seamlessly across all devices, ensuring optimal user experience on mobile and desktop.',
      features: ['Mobile Optimization', 'Cross-browser Testing', 'Performance Optimization', 'PWA Development']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I Can <span className="text-cyan-400">Do</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer comprehensive web development services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;