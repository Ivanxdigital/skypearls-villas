import React from 'react';
import { Home, Wifi, Shield, Thermometer, Zap, LayoutTemplate, Mountain } from 'lucide-react';

// Import only the images used in the main showcase
const frontVilla = new URL('../assets/images/Front of Villa.JPG', import.meta.url).href;
const sunkenLivingRoom = new URL('../assets/images/Sunken Living Room.JPG', import.meta.url).href;
const poolSide = new URL('../assets/images/Pool Side of the Villa.JPG', import.meta.url).href;

const features = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Smart Home Villa",
    description: "Powered by Alexa, control your home with your voice & from a tablet."
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Connected Living",
    description: "Starlink internet, 5G ready, fiber optic ready."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Advanced Security",
    description: "24/7 smart monitoring and access control"
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: "Climate Control",
    description: "Energy-efficient temperature management"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Hybrid Energy System",
    description: "Smart switching between Siralco grid and solar power to maximize savings."
  },
  {
    icon: <LayoutTemplate className="w-6 h-6" />,
    title: "Spacious High Ceilings",
    description: "Breathtaking open interiors for enhanced airflow and natural light."
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    title: "Rooftop Viewing Deck",
    description: "Panoramic views of coconut trees and perfect for plane spotting near the airport."
  }
];

export const PropertyShowcase = () => {
  return (
    <section id="property" className="section-padding bg-charcoal/95">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16">
          <span className="text-sand">Smart Living</span> Redefined
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
          {/* Left side - Images */}
          <div className="lg:w-[45%] space-y-6 sm:space-y-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={frontVilla}
                alt="Villa Front Exterior"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src={sunkenLivingRoom}
                alt="Sunken Living Room"
                className="rounded-lg h-full object-cover"
              />
              <img
                src={poolSide}
                alt="Villa Pool Side"
                className="rounded-lg h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Features */}
          <div className="lg:w-[55%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 rounded-lg bg-charcoal border border-gray-800 hover:border-teal transition-colors duration-300 flex flex-col h-full"
                >
                  <div className="text-teal mb-2 sm:mb-3">{feature.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};