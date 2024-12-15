'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const carouselImages = [
  {
    src: "/mothers.png",
    alt: "Teenage mothers at Njoo Dada",
    heading: "Restoring Hope, Empowering Teenage Mothers", 
    subtext: "We provide support, education, and opportunities for teenage mothers to build a better future."
  },
  {
    src: "/mothers2.png",
    alt: "Education Programs",
    heading: "Empowering Through Education",
    subtext: "Creating opportunities for a brighter future through quality education and skill development."
  },
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] sm:h-[80vh] flex items-center overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{image.heading}</h1>
              <p className="text-xl sm:text-2xl">{image.subtext}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
} 