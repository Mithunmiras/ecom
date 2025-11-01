import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      subtitle: 'New Collection 2024',
      title: 'Timeless Elegance',
      text: 'Discover exquisite pieces crafted with passion and precision',
      buttonText: 'Explore Collection',
      gradient: 'linear-gradient(135deg, rgba(184, 134, 11, 0.9), rgba(139, 69, 19, 0.8))',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920'
    },
    {
      subtitle: 'Exclusive Offer',
      title: 'Luxury Redefined',
      text: 'Premium jewelry for those who appreciate the finer things',
      buttonText: 'Shop Now',
      gradient: 'linear-gradient(135deg, rgba(218, 165, 32, 0.9), rgba(184, 134, 11, 0.8))',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920'
    },
    {
      subtitle: 'Handcrafted Masterpieces',
      title: 'Artisan Collection',
      text: 'Each piece tells a unique story of craftsmanship',
      buttonText: 'View Details',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.9), rgba(101, 67, 33, 0.8))',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => { setActiveSlide(index); };
  const nextSlide = () => { setActiveSlide((prev) => (prev + 1) % slides.length); };
  const prevSlide = () => { setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length); };

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              background: `${slide.gradient}, url('${slide.image}') center/cover`
            }}
          >
            <div className="h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl text-center mx-auto">
                  <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-[var(--dark-gold)] text-sm font-semibold rounded-full mb-4 animate-fadeIn">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6 animate-fadeInUp">
                    {slide.title}
                  </h1>
                  <p className="text-xl lg:text-2xl text-white/90 mb-8 animate-fadeInUp animation-delay-200">
                    {slide.text}
                  </p>
                  <a
                    href="/products"
                    className="inline-block px-8 py-4 bg-white text-amber-700 font-bold rounded-full hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-fadeInUp animation-delay-300"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
