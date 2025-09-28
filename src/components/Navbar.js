import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FIA</span>
              </div>
              <span>Free Image AI</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('demo')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('footer')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('hero')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('demo')}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('footer')}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('hero')}
                className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 text-base font-medium w-full text-center rounded-lg mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
