import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Features from "./components/Features";
import ProductCard from "./components/ProductCard.jsx";
import CallToAction from "./components/CallToAction.jsx";
import NewsletterModal from "./components/NewsletterModal.jsx";
import Footer from "./components/Footer.jsx";

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
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 text-slate-900 antialiased min-h-screen">
      <Navbar onOpenNewsletter={() => setOpenNewsletter(true)} />

      <main className="relative">
        <HeroSection onOpenNewsletter={() => setOpenNewsletter(true)} />

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 -mt-16 relative z-20">
          <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-12 opacity-0 animate-scaleIn animation-delay-500 border-2 border-purple-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <Features />
              <div>
                <CallToAction />
              </div>
            </div>
          </div>
        </section>

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

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-24 mb-20 opacity-0 animate-fadeInUp">
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 rounded-3xl p-10 md:p-16 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Craftsmanship meets timeless design</h3>
                <p className="text-purple-50 text-lg leading-relaxed">Bespoke jewellery made by artisans. Free worldwide shipping on orders over ₦150,000. Experience the perfect blend of tradition and innovation.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold whitespace-nowrap">
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
                <a href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-300 font-bold backdrop-blur-sm whitespace-nowrap">
                  Book Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </a>
              </div>
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

