import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/SyedNusrath07', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/syed-nusrath-hussaine', label: 'LinkedIn' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
              <div className="text-2xl font-bold text-white mb-4">
                <span className="text-cyan-400">{'<'}</span>
                Syed Nusrath
                <span className="text-cyan-400">{' />'}</span>
              </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Computer Science student passionate about web development and creating 
              amazing user experiences through clean, efficient code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 text-gray-400 hover:text-cyan-400 hover:bg-slate-700 rounded-lg transition-all duration-200 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>syednusrath2604@gmail.com</p>
              <p>8825739313</p>
              <p>Vellore</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 Syed Nusrath Hussaine. Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> and lots of learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;