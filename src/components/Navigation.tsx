import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Building, LineChart, Map, MessageSquare } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Navigation links
  const navLinks = [
    { name: 'Home', icon: <Home className="w-5 h-5" />, href: '#hero' },
    { name: 'Properties', icon: <Building className="w-5 h-5" />, href: '#property' },
    { name: 'Investment', icon: <LineChart className="w-5 h-5" />, href: '#investment' },
    { name: 'Location', icon: <Map className="w-5 h-5" />, href: '#location' },
    { name: 'Contact', icon: <MessageSquare className="w-5 h-5" />, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navLinks]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const handleNavLinkClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-charcoal/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#hero" 
            className="text-2xl font-bold text-white font-poppins flex items-center"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick('#hero');
            }}
          >
            <span className="text-sand">Sky</span>pearls Villas
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link text-gray-300 hover:text-sand transition-colors duration-300 flex items-center gap-2 py-2 relative ${
                    activeSection === link.href.substring(1) ? 'text-sand' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(link.href);
                  }}
                >
                  {link.icon}
                  <span>{link.name}</span>
                  <span 
                    className={`nav-link-indicator ${
                      activeSection === link.href.substring(1) ? 'w-full' : 'w-0'
                    }`} 
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={handleMenuToggle}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-charcoal/95 backdrop-blur-lg z-40 transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-8 py-8 text-center">
            {navLinks.map((link, index) => (
              <li key={link.name} className="mobile-nav-item">
                <a
                  href={link.href}
                  className={`text-gray-200 hover:text-sand text-2xl font-poppins flex items-center gap-3 transition-all duration-300 hover:scale-105 ${
                    activeSection === link.href.substring(1) ? 'text-sand' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(link.href);
                  }}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}; 