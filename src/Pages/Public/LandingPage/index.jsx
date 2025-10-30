import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ProductCard from "./components/ProductCard.jsx";
import CallToAction from "./components/CallToAction.jsx";
import NewsletterModal from "./components/NewsletterModal.jsx";
import KeyFeatures from "./components/KeyFeatures.jsx";
// Use the shared layout Footer from layouts/footer
import Footer from "../../../layouts/footer/Index.jsx";
import CircularGallery from "./components/CircularGallery.jsx";

const productsSample = [
  {
    id: 1,
    name: "Spicy Jollof Bowl",
    price: "₦1,800",
  img: "/hero1.svg",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Grilled Chicken Platter",
    price: "₦2,500",
  img: "/hero2.svg",
    tag: "New",
  },
  {
    id: 3,
    name: "Veggie Wrap",
    price: "₦1,200",
  img: "/hero3.svg",
    tag: "",
  },
  {
    id: 4,
    name: "Seafood Rice",
    price: "₦3,200",
  img: "/smeNobg.svg",
    tag: "Limited",
  },
];

export default function LandingPage() {
  const [openNewsletter, setOpenNewsletter] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 text-slate-900 antialiased min-h-screen">
      <Navbar onOpenNewsletter={() => setOpenNewsletter(true)} />

      <main className="relative">
        <HeroSection onOpenNewsletter={() => setOpenNewsletter(true)} />

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12">
          <div className="opacity-0 animate-fadeInUp animation-delay-200">
            <h2 className="text-2xl font-bold text-center mb-6">Featured Restaurants</h2>
            <div style={{ height: '600px', position: 'relative' }} className="mb-8">
              <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.06} scrollEase={0.02} />
            </div>
          </div>
        </section>
        {/* Removed the 'Why LuxeJewels?' / Features section per request */}

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 opacity-0 animate-fadeInUp">
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Featured Collections</span>
            </h2>
            <p className="text-slate-600 text-lg opacity-0 animate-fadeInUp animation-delay-100">Discover our handpicked selection of exquisite pieces</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsSample.map((p, i) => (
              <div key={p.id} className={`opacity-0 animate-fadeInUp animation-delay-${(i + 1) * 100}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center opacity-0 animate-fadeInUp animation-delay-500">
            <button
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl font-bold text-lg"
              onClick={() => setOpenNewsletter(true)}
            >
              Explore Full Collection
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </section>

  {/* Key features for QuickBite - added per request */}
  <KeyFeatures />

  <Footer />
      </main>

      {openNewsletter && (
        <NewsletterModal
          onClose={() => setOpenNewsletter(false)}
          onSubscribe={() => {
            setSubscribed(true);
            setTimeout(() => setOpenNewsletter(false), 900);
          }}
          subscribed={subscribed}
        />
      )}
    </div>
  );
}

