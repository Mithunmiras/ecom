import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "./Features";
import ProductCard from "./ProductCard";
import CallToAction from "./CallToAction";
import NewsletterModal from "./NewsletterModal";
import Footer from "./Footer";

const productsSample = [
  {
    id: 1,
    name: "Aurora Diamond Ring",
    price: "₦120,000",
    img: "/hero1.jpg",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Luxe Pearl Necklace",
    price: "₦85,000",
    img: "/hero2.avif",
    tag: "New",
  },
  {
    id: 3,
    name: "Eternity Band",
    price: "₦55,000",
    img: "/hero3.jpeg",
    tag: "",
  },
  {
    id: 4,
    name: "Opal Drop Earrings",
    price: "₦45,000",
    img: "/smeNobg.png",
    tag: "Limited",
  },
];

export default function LandingPage() {
  const [openNewsletter, setOpenNewsletter] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="bg-white text-slate-900 antialiased">
      <Navbar onOpenNewsletter={() => setOpenNewsletter(true)} />

      <main className="relative">
        <HeroSection onOpenNewsletter={() => setOpenNewsletter(true)} />

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 -mt-12">
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 opacity-0 animate-scaleIn animation-delay-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Features />
              <div>
                <CallToAction />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 opacity-0 animate-fadeInUp">Featured Collections</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsSample.map((p, i) => (
              <div key={p.id} className={`opacity-0 animate-fadeInUp animation-delay-${(i + 1) * 100}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center opacity-0 animate-fadeInUp animation-delay-500">
            <button
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-black hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => setOpenNewsletter(true)}
            >
              Explore Full Collection
            </button>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 mb-20 opacity-0 animate-fadeInUp">
          <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-shadow duration-300">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Craftsmanship meets timeless design</h3>
              <p className="mt-2 text-slate-700">Bespoke jewellery made by artisans. Free worldwide shipping on orders over ₦150,000.</p>
            </div>

            <div className="flex gap-3">
              <a href="/contact" className="inline-block px-5 py-3 bg-white text-slate-900 border border-slate-200 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">Contact Us</a>
              <a href="/services" className="inline-block px-5 py-3 bg-slate-900 text-white rounded-lg hover:bg-black hover:scale-105 transition-all duration-300">Book a Consultation</a>
            </div>
          </div>
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

