import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "New Collection 2024",
      title: "Timeless Elegance",
      text: "Discover exquisite pieces crafted with passion and precision",
      buttonText: "Explore Collection",
      background: "linear-gradient(135deg, rgba(184, 134, 11, 0.9), rgba(139, 69, 19, 0.8)), url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920') center/cover"
    },
    {
      subtitle: "Exclusive Offer",
      title: "Luxury Redefined",
      text: "Premium jewelry for those who appreciate the finer things",
      buttonText: "Shop Now",
      background: "linear-gradient(135deg, rgba(218, 165, 32, 0.9), rgba(184, 134, 11, 0.8)), url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920') center/cover"
    },
    {
      subtitle: "Handcrafted Masterpieces",
      title: "Artisan Collection",
      text: "Each piece tells a unique story of craftsmanship",
      buttonText: "View Details",
      background: "linear-gradient(135deg, rgba(139, 69, 19, 0.9), rgba(101, 67, 33, 0.8)), url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920') center/cover"
    }
  ];

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => {
      if (direction === 1) {
        return prev >= slides.length - 1 ? 0 : prev + 1;
      } else {
        return prev <= 0 ? slides.length - 1 : prev - 1;
      }
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="hero relative h-[600px] overflow-hidden">
      <div className="hero-slider relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide absolute w-full h-full flex items-center transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ background: slide.background }}
          >
            <div className="container mx-auto px-5">
              <div className="hero-content text-center text-white max-w-[700px] mx-auto">
                <span className="hero-subtitle block text-sm uppercase tracking-[3px] mb-4 text-[#FFD700]">
                  {slide.subtitle}
                </span>
                <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-playfair">
                  {slide.title}
                </h1>
                <p className="hero-text text-lg md:text-xl mb-8 opacity-95">
                  {slide.text}
                </p>
                <a
                  href="/products"
                  className="btn btn-primary inline-block py-3.5 px-8 bg-gold-primary text-white rounded-full font-medium transition-all duration-300 hover:bg-gold-dark hover:-translate-y-0.5 shadow-luxury"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="hero-prev absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white border-none w-12 h-12 rounded-full cursor-pointer text-xl transition-all duration-300 z-10"
        onClick={() => changeSlide(-1)}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="hero-next absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white border-none w-12 h-12 rounded-full cursor-pointer text-xl transition-all duration-300 z-10"
        onClick={() => changeSlide(1)}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots Navigation */}
      <div className="hero-dots absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`hero-dot w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#FFD700] scale-110'
                : 'bg-white/50 hover:bg-[#FFD700]'
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
