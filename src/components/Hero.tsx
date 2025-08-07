'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/char-wave.jpeg"
          alt="Character Wave"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/20"></div>
      </div>
      
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