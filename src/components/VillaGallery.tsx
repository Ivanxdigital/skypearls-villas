import React, { useState } from 'react';
import { X } from 'lucide-react';

// Import images as URLs
const frontVilla = new URL('../assets/images/Front of Villa.JPG', import.meta.url).href;
const behindVilla = new URL('../assets/images/Behind the Villa.JPG', import.meta.url).href;
const bedroom = new URL('../assets/images/Bedroom.JPG', import.meta.url).href;
const bathroom = new URL('../assets/images/Bathroom.JPG', import.meta.url).href;
const poolSide = new URL('../assets/images/Pool Side of the Villa.JPG', import.meta.url).href;
const outdoorKitchen = new URL('../assets/images/Outdoor Kitchen.JPG', import.meta.url).href;
const sunkenLivingRoom = new URL('../assets/images/Sunken Living Room.JPG', import.meta.url).href;

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

  // Gallery images data
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: frontVilla,
      alt: "Front view of Skypearls Villa",
      description: "Modern minimalist facade with signature arched windows and palm surroundings",
      featured: true
    },
    {
      id: 2,
      src: behindVilla,
      alt: "Back view of Skypearls Villa",
      description: "Rear view showcasing the arched entryways and lush landscaping",
      featured: true
    },
    {
      id: 3,
      src: poolSide,
      alt: "Pool side of Skypearls Villa",
      description: "Private plunge pool with glass barrier and tropical palm views",
      featured: true
    },
    {
      id: 4,
      src: bedroom,
      alt: "Bedroom of Skypearls Villa",
      description: "Serene bedroom with natural light and premium finishes"
    },
    {
      id: 5,
      src: bathroom,
      alt: "Bathroom of Skypearls Villa",
      description: "Minimalist bathroom with high-end fixtures and natural materials"
    },
    {
      id: 6,
      src: outdoorKitchen,
      alt: "Kitchen of Skypearls Villa",
      description: "Gourmet kitchenette with SMEG appliances and designer accents"
    },
    {
      id: 7,
      src: sunkenLivingRoom,
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
    <section id="villa-gallery" className="py-24 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Studio <span className="text-sand">Villa</span> Showcase
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our first completed studio villa design - a perfect blend of minimalist elegance, 
            smart technology, and tropical luxury in the heart of Siargao.
          </p>
        </div>
        
        {/* Main gallery grid - unified layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main feature image - larger */}
          <div 
            className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => openLightbox(featuredImages[0])}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={featuredImages[0].src} 
                alt={featuredImages[0].alt} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-semibold">{featuredImages[0].alt}</h3>
              <p className="text-gray-300 mt-1">{featuredImages[0].description}</p>
            </div>
          </div>
          
          {/* Grid of remaining images - uniform sizing */}
          {galleryImages.filter(img => img.id !== featuredImages[0].id).map((image) => (
            <div 
              key={image.id} 
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Unified overlay style for all images */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-medium">{image.alt}</h3>
                <p className="text-gray-300 text-sm mt-1 line-clamp-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox for full-size image viewing */}
      {lightboxOpen && activeImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            className="absolute top-6 right-6 text-white p-2 rounded-full bg-charcoal/70 hover:bg-charcoal transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Navigation buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full bg-charcoal/50 hover:bg-charcoal/80 transition-colors text-4xl z-10"
            onClick={prevImage}
          >
            &lsaquo;
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full bg-charcoal/50 hover:bg-charcoal/80 transition-colors text-4xl z-10"
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