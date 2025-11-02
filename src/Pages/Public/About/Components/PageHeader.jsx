import React from 'react';
import Reveal from '../../../../components/Reveal.jsx';

export default function PageHeader() {
  const bgUrl = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920";
  return (
    <section className="relative isolate" style={{
      backgroundImage: `linear-gradient(135deg, rgba(201,151,0,0.9), rgba(139,69,19,0.8)), url(${bgUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-white text-center">
        <Reveal animation="animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair">About Luxe Jewels</h1>
          <p className="mt-3 text-base md:text-lg text-amber-50/90">Crafting timeless elegance since 1990</p>
        </Reveal>
      </div>
    </section>
  );
}
