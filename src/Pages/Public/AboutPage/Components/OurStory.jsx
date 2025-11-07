import React from 'react';

export default function OurStory() {
  return (
    <section className="about-section">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">Our Story</h2>
            <p>Founded in 1990, Luxe Jewels has been at the forefront of luxury jewelry design for over three decades. Our journey began with a simple vision: to create exquisite pieces that tell unique stories and celebrate life's most precious moments.</p>
            <p>Each piece in our collection is meticulously crafted by master artisans who bring decades of experience and an unwavering commitment to excellence. We believe that jewelry is more than just an accessory—it's a form of self-expression, a symbol of love, and a treasure to be passed down through generations.</p>
            <p>Today, Luxe Jewels continues to push the boundaries of design while honoring traditional craftsmanship techniques. Our collections blend timeless elegance with contemporary style, ensuring that every piece resonates with modern sophistication.</p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800" alt="Jewelry Crafting" />
          </div>
        </div>
      </div>
    </section>
  );
}
