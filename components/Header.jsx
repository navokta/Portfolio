'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const WowHeader = () => {
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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-700 backdrop-blur-md border-b ${
        scrolled
          ? 'bg-gray-900/90 border-gray-700 shadow-xl shadow-purple-900/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center group focus:outline-none"
          >
            <div
              className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-transparent transition-all duration-500 transform group-hover:scale-110"
              style={{
                background: 'linear-gradient(45deg, #a855f7, #ec4899)',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
              }}
            >
              <Image
                src="/sakshi-logo.jpg"
                alt="Coder"
                width={48}
                height={48}
                className="object-cover transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110"
              />
            </div>
            <span className="ml-3 text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient inline-block">
              Coder
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`group relative px-3 py-2 text-base md:text-lg font-medium text-gray-200 transition-all duration-300 hover:text-pink-300 ${activeLink === link.id ? 'text-pink-300' : ''}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 group-hover:w-full ${
                    activeLink === link.id ? 'w-full' : ''
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-end transition-all duration-500">
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-500 origin-left ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5 opacity-100' : 'mb-1 opacity-100'
                }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-500 ${
                  mobileMenuOpen ? 'w-0 opacity-0' : 'mb-1 opacity-100'
                }`}
              ></span>
              <span
                className={`block h-0.5 w-4 bg-white transition-all duration-500 origin-left ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5 opacity-100' : 'opacity-100'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out md:hidden ${
            mobileMenuOpen ? 'max-h-80 opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col space-y-2 px-2">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 transform hover:translate-x-2 ${
                    activeLink === link.id
                      ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-pink-300 shadow-lg shadow-purple-900/20'
                      : 'text-white hover:bg-gray-800/70'
                  }`}
                  style={{
                    transitionDelay: `${index * 100 + 50}ms`,
                    animation: mobileMenuOpen ? 'slideDown 0.5s ease-out forwards' : '',
                  }}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Global Styles for Gradient Text & Animation */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient {
          background: linear-gradient(-45deg, #8b5cf6, #d946ef, #f43f5e, #ec4899);
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </header>
  );
};

export default WowHeader;