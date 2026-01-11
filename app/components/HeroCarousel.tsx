"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  {
    src: "/cabinets/cabinets-7.jpg",
    alt: "Luxury gray kitchen with crystal chandeliers and marble island",
  },
  {
    src: "/cabinets/cabinets-15.jpg",
    alt: "Elegant white kitchen with gold accents and marble backsplash",
  },
  {
    src: "/cabinets/cabinets-0.webp",
    alt: "Traditional warm-toned kitchen with copper accents",
  },
  {
    src: "/cabinets/cabinets-1.jpg",
    alt: "Modern sleek kitchen with gray cabinets and pendant lighting",
  },
  {
    src: "/cabinets/cabinets-5.jpg",
    alt: "Contemporary kitchen with marble waterfall island",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
      setIsTransitioning(false);
    }, 500);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40 transition-opacity duration-500 ${
          isTransitioning ? "opacity-90" : "opacity-100"
        }`}
      />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold z-10" />

      {/* Content */}
      <div className="container relative z-10 pt-24">
        <div className="max-w-3xl">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in-up opacity-0">
            North Atlanta&apos;s Premier Cabinet Showroom
          </p>
          <h1 className="text-white mb-6 animate-fade-in-up opacity-0 animate-delay-100">
            Exceptional Cabinets.
            <br />
            <span className="text-gold">Timeless Craftsmanship.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-in-up opacity-0 animate-delay-200">
            For over 20 years, S2M Cabinets has delivered premium cabinetry and
            remodeling services to discerning homeowners, builders, and designers
            throughout North Atlanta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 animate-delay-300">
            <a href="tel:+16782176410" className="btn-gold">
              <PhoneIcon />
              Call (678) 217-6410
            </a>
            <Link
              href="/showroom"
              className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal"
            >
              Visit Showroom
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gold w-8"
                : "bg-ivory/40 hover:bg-ivory/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-gray-400 text-xs uppercase tracking-widest">
          <span className="rotate-90 origin-center">Scroll</span>
          <div className="w-px h-12 bg-gold/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}
