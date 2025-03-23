import React from 'react';
import { MapPin, Plane, Anchor, Coffee } from 'lucide-react';

const attractions = [
  {
    icon: <Plane className="w-6 h-6" />,
    title: "International Airport",
    distance: "15 minutes"
  },
  {
    icon: <Anchor className="w-6 h-6" />,
    title: "Cloud 9 Surf Spot",
    distance: "10 minutes"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Tourism Strip",
    distance: "5 minutes"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "City Center",
    distance: "8 minutes"
  }
];

export const Location = () => {
  return (
    <section id="location" className="section-padding bg-gradient-to-t from-charcoal to-charcoal/95">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16">
          Prime <span className="text-sand">Location</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15778.277161755656!2d126.04678983325191!3d9.848742074037422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3305c2350c5c85cd%3A0xe16ec194d40de6dc!2sCloud%209%2C%20General%20Luna%2C%20Surigao%20del%20Norte!5e0!3m2!1sen!2sph!4v1635416850672!5m2!1sen!2sph"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {attractions.map((attraction, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 rounded-lg bg-charcoal border border-gray-800 hover:border-teal transition-colors duration-300"
                >
                  <div className="text-teal mb-3 sm:mb-4">{attraction.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{attraction.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{attraction.distance}</p>
                </div>
              ))}
            </div>
            
            <div className="p-4 sm:p-6 rounded-lg bg-teal/10 border border-teal">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Infrastructure Development</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                <li>✓ New international airport terminal</li>
                <li>✓ Improved road networks</li>
                <li>✓ Modern telecommunications</li>
                <li>✓ Enhanced power grid system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}