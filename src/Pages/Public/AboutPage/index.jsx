import React from 'react';
import OurStory from './Components/OurStory';
import Values from './Components/Values';
import CraftsmanshipProcess from './Components/CraftsmanshipProcess';
import Stats from './Components/Stats';

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section 
        className="page-header"
        style={{ 
          background: "linear-gradient(135deg, rgba(184, 134, 11, 0.9), rgba(139, 69, 19, 0.8)), url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920') center/cover"
        }}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <h1>About Luxe Jewels</h1>
          <p>Crafting timeless elegance since 1990</p>
        </div>
      </section>

      <OurStory />
      <Values />
      <CraftsmanshipProcess />
      <Stats />
    </>
  );
}
