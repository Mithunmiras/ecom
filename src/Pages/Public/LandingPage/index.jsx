import React from 'react';
import Header from '../../../layouts/headers/Index';
import HeroJewelry from './components/HeroJewelry';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import NewsletterSection from './components/NewsletterSection';
import FooterJewelry from './components/FooterJewelry';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroJewelry />
        <Categories />
        <FeaturedProducts />
        <Testimonials />
        <NewsletterSection />
      </main>
      <FooterJewelry />
    </div>
  );
}
