import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

// Define YouTube player event interface
interface YouTubeEvent {
  target: {
    setPlaybackRate: (rate: number) => void;
    mute: () => void;
    playVideo: () => void;
  }
}

export const Hero = () => {
  const youtubeContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    
    // Setup YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: 'ElXjSgPxV3E', // Jeremy Kruis video
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: 'ElXjSgPxV3E', // Required for looping
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          modestbranding: 1,
          mute: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: YouTubeEvent) => {
            event.target.setPlaybackRate(0.8);
            event.target.mute();
            event.target.playVideo();
          }
        }
      });
    };
    
    // Clean up
    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* YouTube container */}
      <div 
        ref={youtubeContainerRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      >
        <div 
          id="youtube-player" 
          className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>
      
      {/* Gradient overlay - preserving this to keep text visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-charcoal/90 z-10" />
      
      {/* Content - moved to z-20 to ensure it's above the video */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-poppins">
          <span className="block text-sand">Smart Luxury Living</span>
          <span className="block mt-2">in Paradise</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 text-gray-200 px-4 sm:px-0">
          Experience the future of tropical living with Skypearls Villas in Siargao.
          Where smart home technology meets island serenity.
        </p>
        
        <button className="btn-primary w-full sm:w-auto">
          Schedule a Virtual Tour
        </button>
        
        <ChevronDown 
          className="absolute bottom-8 animate-bounce w-6 h-6 sm:w-8 sm:h-8 text-white cursor-pointer"
          onClick={() => document.getElementById('property')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
    </section>
  );
}

// Add TypeScript interface for the YouTube API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | null;
  }
}