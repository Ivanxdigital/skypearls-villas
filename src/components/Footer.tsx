import React from 'react';
import { Instagram, Facebook, Twitter, MessageCircle, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-white/10 pt-10 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold font-poppins text-sand">Skypearls</h3>
            <p className="text-sm text-gray-400 mt-2 text-center md:text-left">
              Smart luxury living in paradise
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-sand transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sand transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sand transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#hero" className="text-gray-300 hover:text-sand transition-colors duration-300 text-sm">Home</a>
              <a href="#property" className="text-gray-300 hover:text-sand transition-colors duration-300 text-sm">Properties</a>
              <a href="#investment" className="text-gray-300 hover:text-sand transition-colors duration-300 text-sm">Investment</a>
              <a href="#contact" className="text-gray-300 hover:text-sand transition-colors duration-300 text-sm">Contact</a>
            </nav>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 text-sm mb-2">General Luna, Siargao Island</p>
            <p className="text-gray-300 text-sm mb-2">Philippines</p>
            <a href="mailto:info@skypearls.com" className="text-sand hover:text-sand/80 transition-colors duration-300 text-sm">
              info@skypearls.com
            </a>
            <a href="tel:+639123456789" className="text-gray-300 hover:text-sand transition-colors duration-300 text-sm mt-1">
              +63 912 345 6789
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 sm:mb-0 text-center sm:text-left">
            © {currentYear} Skypearls Villas. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-xs text-gray-500 hover:text-sand transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-sand transition-colors duration-300">Terms of Service</a>
            <p className="text-xs text-gray-500 flex items-center">
              Made with <Heart size={12} className="mx-1 text-sand" /> in Siargao
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 