import React from 'react';
import Reveal from '../../../../components/Reveal.jsx';

export default function OurStory() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal animation="animate-slideInLeft">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-slate-900">Our Story</h2>
            <div className="mt-5 space-y-4 text-slate-700 leading-relaxed">
              <p>
                Founded in 1990, Luxe Jewels has been at the forefront of luxury jewelry design for over three decades. Our journey began with a simple vision: to create exquisite pieces that tell unique stories and celebrate life's most precious moments.
              </p>
              <p>
                Each piece in our collection is meticulously crafted by master artisans who bring decades of experience and an unwavering commitment to excellence. We believe that jewelry is more than just an accessory—it's a form of self-expression, a symbol of love, and a treasure to be passed down through generations.
              </p>
              <p>
                Today, Luxe Jewels continues to push the boundaries of design while honoring traditional craftsmanship techniques. Our collections blend timeless elegance with contemporary style, ensuring that every piece resonates with modern sophistication.
              </p>
            </div>
          </Reveal>
          <Reveal animation="animate-slideInRight" className="relative">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800"
              alt="Jewelry Crafting"
              className="w-full h-auto rounded-xl shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#C99700]/20 blur-lg" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
