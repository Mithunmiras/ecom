import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ProductCard from "./components/ProductCard.jsx";
import CallToAction from "./components/CallToAction.jsx";
import NewsletterModal from "./components/NewsletterModal.jsx";
import KeyFeatures from "./components/KeyFeatures.jsx";
import Footer from "../../../layouts/footer/Index.jsx";
import CircularGallery from "./components/CircularGallery.jsx";
import ProductList from "./components/ProductList.jsx";
import CartSidebar from "../../../components/CartSidebar.jsx";

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
  <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 text-slate-900 antialiased min-h-screen">
      <Navbar onOpenNewsletter={() => setOpenNewsletter(true)} />
      <CartSidebar />

      <main className="relative">
        <HeroSection onOpenNewsletter={() => setOpenNewsletter(true)} />

        {/* Featured Restaurants moved below the product listing */}

        <ProductList />

        {/* Featured Restaurants (moved below product listing) */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12">
          <div className="opacity-0 animate-fadeInUp animation-delay-200">
            <h2 className="text-2xl font-bold text-center mb-6">Featured Restaurants</h2>
            <div style={{ height: '600px', position: 'relative' }} className="mb-8">
              <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.06} scrollEase={0.02} />
            </div>
          </div>
        </section>

        <KeyFeatures />

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 mb-16">
          <CallToAction />
        </section>

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

