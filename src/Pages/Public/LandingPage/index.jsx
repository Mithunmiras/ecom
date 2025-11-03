import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyOmnibrix from './components/WhyOmnibrix';
import CTA from './components/CTA';
import BlogPreview from './components/BlogPreview';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyOmnibrix />
        <BlogPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
