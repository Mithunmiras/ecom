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
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              background: `linear-gradient(135deg, ${
                index === 0 ? 'rgba(184, 134, 11, 0.9), rgba(139, 69, 19, 0.8)' :
                index === 1 ? 'rgba(218, 165, 32, 0.9), rgba(184, 134, 11, 0.8)' :
                'rgba(139, 69, 19, 0.9), rgba(101, 67, 33, 0.8)'
              }), url('${
                index === 0 ? 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920' :
                index === 1 ? 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920' :
                'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920'
              }') center/cover`
            }}
          >
            <div className="container mx-auto max-w-7xl px-6">
              <div className="hero-content">
                <span className="hero-subtitle">
                  {slide.subtitle}
                </span>
                <h1 className="hero-title">
                  {slide.title}
                </h1>
                <p className="hero-text">
                  {slide.text}
                </p>
                <a
                  href="/products"
                  className="btn btn-primary"
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
        className="hero-prev"
        onClick={() => changeSlide(-1)}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="hero-next"
        onClick={() => changeSlide(1)}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots Navigation */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
