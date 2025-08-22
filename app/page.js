'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import WowHeader from '@/components/Header';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Header */}
      <WowHeader />

      {/* Main Content */}
      <main className="pt-24">
        {/* === Home Section === */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="text-center max-w-4xl mx-auto z-10 relative">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-fade-in">
              Hi, I'm Coder
            </h1>
            <h2 className="text-2xl md:text-4xl mb-8 text-gray-300 tracking-wide">
              Web Developer & Creative Designer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              I build beautiful, responsive websites with modern technologies like React, Next.js, and Tailwind CSS.
            </p>
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch 🚀
            </button>
          </div>
        </section>

        {/* === About Section === */}
        <section id="about" className="min-h-screen py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              About <span className="text-pink-400">Me</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
                <Image
                  src="/sakshi-about.jpg"
                  alt="Coder"
                  width={320}
                  height={320}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Who am I?
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with a love for clean code and stunning UI/UX. I specialize in building modern, responsive websites using the latest web technologies.
                </p>
                <p className="text-gray-400">
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source, or mentoring aspiring developers.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {[
                    ['Name', 'Coder'],
                    ['Email', 'Coder@example.com'],
                    ['From', 'Mumbai, India'],
                    ['Experience', '3+ Years'],
                    ['Specialty', 'React & Next.js'],
                    ['Availability', 'Open to Work'],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <h4 className="font-medium text-pink-300">{label}:</h4>
                      <p className="text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === Projects Section === */}
        <section id="projects" className="min-h-screen py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              My <span className="text-pink-400">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3, 4, 5, 6].map((project) => (
                <div
                  key={project}
                  className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:translate-y-2 transition-all duration-500 group"
                >
                  <div className="h-52 bg-gray-700 relative">
                    <Image
                      src={`/project-${project}.jpg`}
                      alt={`Project ${project}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                      Project {project}
                    </h3>
                    <p className="text-gray-400 mb-5 leading-relaxed">
                      A modern web app built with React, Next.js, and Tailwind. Features responsive design, dark mode, and optimized performance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'Tailwind', 'TypeScript'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-medium text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Skills Section === */}
<section id="skills" className="min-h-screen py-20 px-4 bg-gray-900">
  <div className="container mx-auto max-w-5xl">
    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
      My <span className="text-pink-400">Expertise</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Frontend */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
        <h3 className="text-2xl font-semibold text-purple-400 mb-5 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Frontend
        </h3>
        <div className="flex flex-wrap gap-3">
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML5', 'CSS3'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-700 text-gray-100 rounded-lg text-sm font-medium shadow-sm hover:bg-purple-600 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-colors">
        <h3 className="text-2xl font-semibold text-pink-400 mb-5 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
          Backend
        </h3>
        <div className="flex flex-wrap gap-3">
          {['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Firebase'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-700 text-gray-100 rounded-lg text-sm font-medium shadow-sm hover:bg-pink-600 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & Design */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors">
        <h3 className="text-2xl font-semibold text-blue-400 mb-5 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Tools & Design
        </h3>
        <div className="flex flex-wrap gap-3">
          {['Git', 'VS Code', 'Figma', 'Adobe XD', 'Postman', 'Vercel', 'Netlify'].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-gray-700 text-gray-100 rounded-lg text-sm font-medium shadow-sm hover:bg-blue-600 hover:text-white transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Optional: Add a soft closing line */}
    <p className="text-center text-gray-400 mt-16 text-lg">
      Always learning. Always building.
    </p>
  </div>
</section>

        {/* === Contact Section === */}
        <section id="contact" className="min-h-screen py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Get In <span className="text-pink-400">Touch</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/2 space-y-8">
                <h3 className="text-3xl font-semibold">Let's Connect</h3>
                <p className="text-gray-400 leading-relaxed">
                  Have a project in mind? I'd love to hear about it! Reach out via email or socials.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      label: 'Email',
                      value: 'sakshi@example.com',
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      label: 'Phone',
                      value: '+91 98765 43210',
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      label: 'Location',
                      value: 'Mumbai, India',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="mt-1 text-pink-400 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{item.label}</h4>
                        <p className="text-gray-400">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-1/2">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition-all"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message 💬
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}