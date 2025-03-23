import React from 'react';
import { Home, Wifi, Shield, Thermometer } from 'lucide-react';

const features = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Smart Architecture",
    description: "Modern design meets intelligent living spaces"
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Connected Living",
    description: "Integrated IoT systems for seamless control"
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
  }
];

export const PropertyShowcase = () => {
  return (
    <section id="property" className="section-padding bg-charcoal/95">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16">
          <span className="text-sand">Smart Living</span> Redefined
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
                alt="Villa Exterior"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                alt="Villa Interior"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80"
                alt="Villa Pool"
                className="rounded-lg"
              />
            </div>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 rounded-lg bg-charcoal border border-gray-800 hover:border-teal transition-colors duration-300"
                >
                  <div className="text-teal mb-3 sm:mb-4">{feature.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold">Construction Progress</h3>
              <div className="h-2 bg-gray-800 rounded-full">
                <div className="h-full w-3/4 bg-teal rounded-full" />
              </div>
              <p className="text-sm sm:text-base text-gray-400">Phase 2 completion: 75%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}