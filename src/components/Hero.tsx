'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [blurAmount, setBlurAmount] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const heroTop = heroRect.top;
        const heroHeight = heroRect.height;
        const screenHeight = window.innerHeight;
        
        // Calculate how much of hero has scrolled out of view (0 = fully visible, 1 = completely scrolled past)
        const scrollProgress = Math.max(0, -heroTop / heroHeight);
        
        // Start blurring immediately when scrolling begins
        if (scrollProgress > 0) {
          // Calculate blur intensity based on scroll progress (0 to 1)
          const blurIntensity = Math.min(scrollProgress * 12, 12); // Scale to max 12px blur
          setBlurAmount(blurIntensity);
        } else {
          setBlurAmount(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        filter: `blur(${blurAmount}px)`,
      }}
    >
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/char-wave01.jpeg"
          alt="Character Wave"
          fill
          className="object-cover"
          priority
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
        <div className="absolute inset-0 bg-foreground/20"></div>
      </div>
      
      {/* Gradient blur overlay for bottom 30% - divided into 3 sections */}
      {blurAmount > 0 && (
        <>
          {/* Bottom section (0-10%) - Most intense blur */}
          <div
            className="absolute inset-0 z-5 pointer-events-none"
            style={{
              backdropFilter: `blur(${blurAmount}px)`,
              maskImage: `linear-gradient(to top, black 0%, black 10%, transparent 100%)`,
              WebkitMaskImage: `linear-gradient(to top, black 0%, black 10%, transparent 100%)`,
            }}
          />
          {/* Middle section (10-20%) - Medium blur */}
          <div
            className="absolute inset-0 z-4 pointer-events-none"
            style={{
              backdropFilter: `blur(${blurAmount * 0.6}px)`,
              maskImage: `linear-gradient(to top, transparent 0%, black 10%, black 20%, transparent 100%)`,
              WebkitMaskImage: `linear-gradient(to top, transparent 0%, black 10%, black 20%, transparent 100%)`,
              transition: 'backdrop-filter 0.1s ease-out'
            }}
          />
          {/* Top section (20-30%) - Light blur */}
          <div
            className="absolute inset-0 z-3 pointer-events-none"
            style={{
              backdropFilter: `blur(${blurAmount * 0.3}px)`,
              maskImage: `linear-gradient(to top, transparent 0%, black 20%, black 30%, transparent 100%)`,
              WebkitMaskImage: `linear-gradient(to top, transparent 0%, black 20%, black 30%, transparent 100%)`,
              transition: 'backdrop-filter 0.1s ease-out'
            }}
          />
        </>
      )}
      
      <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 lg:whitespace-nowrap"
        >
          Beyond the Quantum Leap
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto font-medium"
        >
          Pioneering the future of financial technologies with cutting-edge quantitative methodologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="px-8 py-4 h-16 text-lg font-semibold w-80 sm:w-48"
          >
            Explore Services
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 bg-transparent backdrop-blur-sm h-16 text-lg font-semibold w-80 sm:w-48"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 