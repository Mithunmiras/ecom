import React from "react";

const HeroJewelry = () => {
  return (
    <section className="hero" style={{
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.9), rgba(139, 69, 19, 0.8)), url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920) center/cover',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div className="hero-content" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>
          Discover Timeless Beauty
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: '0.95' }}>
          Explore our collection of exquisite jewelry designed to dazzle and inspire.
        </p>
        <a 
          href="/products" 
          className="btn btn-primary"
          style={{
            display: 'inline-block',
            padding: '0.875rem 2rem',
            background: '#B8860B',
            color: 'white',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroJewelry;
