import { useState, useEffect } from 'react';
import Image from 'next/image';

const WowHeader = () => {
    const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active link based on scroll position
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
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0f172a] py-2 shadow-lg' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex justify-between items-center">
                {/* Logo with your photo */}
                <button onClick={() => handleLinkClick('home')} className="flex items-center group">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500 group-hover:border-pink-500 transition-all">
                    <Image 
                      src="/sakshi-logo.jpg" // Replace with your photo
                      alt="Sakshi Jain"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <span className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Sakshi Jain
                  </span>
                </button>
    
                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                  <ul className="flex space-x-8">
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <button
                          onClick={() => handleLinkClick(link.id)}
                          className={`relative px-2 py-1 text-lg font-medium transition-all ${activeLink === link.id ? 'text-pink-400' : 'text-white hover:text-pink-300'}`}
                        >
                          {link.name}
                          {activeLink === link.id && (
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 rounded-full" />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
    
                {/* Mobile menu button */}
                <button
                  className="md:hidden p-2 rounded-md text-white focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <div className="w-6 flex flex-col items-end">
                    <span className={`block h-0.5 bg-white transition-all ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-1.5' : 'w-6 mb-1.5'}`}></span>
                    <span className={`block h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : 'w-5 mb-1.5'}`}></span>
                    <span className={`block h-0.5 bg-white transition-all ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-4'}`}></span>
                  </div>
                </button>
              </div>
    
              {/* Mobile Navigation */}
              <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
                <ul className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => handleLinkClick(link.id)}
                        className={`block w-full text-left px-4 py-2 text-lg font-medium rounded-lg transition-all ${activeLink === link.id ? 'bg-purple-900 text-pink-300' : 'text-white hover:bg-gray-800'}`}
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </header>
  );
};

export default WowHeader;