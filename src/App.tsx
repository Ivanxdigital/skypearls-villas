import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { PropertyShowcase } from './components/PropertyShowcase';
import { ConstructionProgress } from './components/ConstructionProgress';
import { VillaGallery } from './components/VillaGallery';
import { Investment } from './components/Investment';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { MessageCircle } from 'lucide-react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section > div').forEach((el) => {
      el.classList.add('fade-in');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation />
      <Hero />
      <PropertyShowcase />
      <ConstructionProgress />
      <VillaGallery />
      <Investment />
      <Location />
      <Contact />
      
      {/* Floating Contact Button */}
      <button 
        className="fixed bottom-8 right-8 bg-teal p-4 rounded-full shadow-lg hover:bg-teal/90 transition-colors duration-300"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <MessageCircle className="w-6 h-6" />
      </button>
      
      {/* SEO Meta Tags */}
      <head>
        <title>Skypearls Villas | Luxury Smart Homes in Siargao</title>
        <meta name="description" content="Experience the future of tropical living with Skypearls Villas in Siargao. Smart home luxury villas with premium investment potential." />
        <meta name="keywords" content="Siargao property, smart homes, luxury villas, property investment, Philippines real estate, construction progress" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Skypearls Villas | Luxury Smart Homes in Siargao" />
        <meta property="og:description" content="Experience the future of tropical living with Skypearls Villas in Siargao. Smart home luxury villas with premium investment potential." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Skypearls Villas",
            "description": "Luxury smart home villas in Siargao",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "General Luna",
              "addressRegion": "Siargao",
              "addressCountry": "PH"
            },
            "priceRange": "$$$$",
            "telephone": "+63 912 345 6789"
          })}
        </script>
      </head>
    </div>
  );
}

export default App;