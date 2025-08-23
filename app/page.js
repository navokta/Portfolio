'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Project from '@/components/Project';
import About from '@/components/About';

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
      <Header />

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
          <About />
        </section>

        {/* === Projects Section === */}
        <section id="projects" className="min-h-screen py-20 px-4">
          <Project />
        </section>

        {/* === Skills Section === */}
        <section id="skills" className="min-h-screen py-20 px-4 bg-gray-900">
          <Skills />
        </section>

        {/* === Contact Section === */}
        <section id="contact" className="min-h-screen py-20 px-4">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}