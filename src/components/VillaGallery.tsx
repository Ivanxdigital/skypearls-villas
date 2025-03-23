import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description: string;
  featured?: boolean;
}

export const VillaGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  // Gallery images data with paths relative to the public folder
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/src/assets/images/Front of Villa.JPG',
      alt: "Front view of Skypearls Villa",
      description: "Modern minimalist facade with signature arched windows and palm surroundings",
      featured: true
    },
    {
      id: 2,
      src: '/src/assets/images/Behind the Villa.JPG',
      alt: "Back view of Skypearls Villa",
      description: "Rear view showcasing the arched entryways and lush landscaping"
    },
    {
      id: 3,
      src: '/src/assets/images/Pool Side of the Villa.JPG',
      alt: "Pool side of Skypearls Villa",
      description: "Private plunge pool with glass barrier and tropical palm views",
      featured: true
    },
    {
      id: 4,
      src: '/src/assets/images/Bedroom.JPG',
      alt: "Bedroom of Skypearls Villa",
      description: "Serene bedroom with natural light and premium finishes"
    },
    {
      id: 5,
      src: '/src/assets/images/Bathroom.JPG',
      alt: "Bathroom of Skypearls Villa",
      description: "Minimalist bathroom with high-end fixtures and natural materials"
    },
    {
      id: 6,
      src: '/src/assets/images/Outdoor Kitchen.JPG',
      alt: "Kitchen of Skypearls Villa",
      description: "Gourmet kitchenette with SMEG appliances and designer accents"
    },
    {
      id: 7,
      src: '/src/assets/images/Sunken Living Room.JPG',
      alt: "Sunken living room of Skypearls Villa",
      description: "Intimate sunken living area with custom lighting and comfort",
      featured: true
    }
  ];

  // Get featured images for the main display
  const featuredImages = galleryImages.filter(img => img.featured);
  
  // Handle opening the lightbox
  const openLightbox = (image: GalleryImage) => {
    setActiveImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };
  
  // Handle closing the lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  // Navigate to next image in lightbox
  const nextImage = () => {
    if (!activeImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === activeImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setActiveImage(galleryImages[nextIndex]);
  };
  
  // Navigate to previous image in lightbox
  const prevImage = () => {
    if (!activeImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === activeImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setActiveImage(galleryImages[prevIndex]);
  };

  return (
    <section id="villa-gallery" className="py-24 bg-gradient-to-b from-charcoal to-charcoal/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Studio <span className="text-sand">Villa</span> Showcase
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our first completed studio villa design - a perfect blend of minimalist elegance, 
            smart technology, and tropical luxury in the heart of Siargao.
          </p>
        </div>
        
        {/* Featured images - larger display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Larger feature image */}
          <div 
            className="md:col-span-8 relative group overflow-hidden rounded-xl shadow-xl cursor-pointer"
            onClick={() => openLightbox(featuredImages[0])}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={featuredImages[0].src} 
                alt={featuredImages[0].alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-semibold">{featuredImages[0].alt}</h3>
              <p className="text-gray-300 mt-2">{featuredImages[0].description}</p>
            </div>
          </div>
          
          {/* Secondary featured images */}
          <div className="md:col-span-4 grid grid-rows-2 gap-8">
            {featuredImages.slice(1, 3).map((image) => (
              <div 
                key={image.id} 
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-medium">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Section divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-charcoal px-4 text-sm text-gray-400">EXPLORE MORE</span>
          </div>
        </div>
        
        {/* Regular gallery thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
          {galleryImages.filter(img => !img.featured).map((image) => (
            <div 
              key={image.id} 
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:-translate-y-1"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-800">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white text-sm font-medium">{image.alt}</h3>
                  <p className="text-gray-300 text-xs mt-1 line-clamp-2">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Experience our villas virtually or schedule an in-person visit
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-teal to-sand text-charcoal font-medium rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300">
            Schedule Virtual Tour
          </button>
        </div>
      </div>
      
      {/* Lightbox for full-size image viewing */}
      {lightboxOpen && activeImage && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-charcoal/50 hover:bg-charcoal/80 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Navigation buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full bg-charcoal/50 hover:bg-charcoal/80 transition-colors text-4xl"
            onClick={prevImage}
          >
            &lsaquo;
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full bg-charcoal/50 hover:bg-charcoal/80 transition-colors text-4xl"
            onClick={nextImage}
          >
            &rsaquo;
          </button>
          
          {/* Main image */}
          <div className="w-full h-full max-w-6xl max-h-[85vh] flex flex-col">
            <div className="relative flex-1 overflow-hidden">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="object-contain w-full h-full"
              />
            </div>
            
            {/* Caption */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">{activeImage.alt}</h3>
              <p className="text-gray-300 mt-1">{activeImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};