import React from "react";

export default function HeroSection({ onOpenNewsletter }) {
  const heroImage = "/hero1.jpg";

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium opacity-0 animate-fadeInUp">New Collection</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight opacity-0 animate-fadeInUp animation-delay-100">Jewellery that tells your story.</h1>

          <p className="text-slate-700 max-w-xl opacity-0 animate-fadeInUp animation-delay-200">Handcrafted pieces inspired by heritage and modern silhouettes. Sustainably sourced stones, ethical practices, and a lifetime of care.</p>

          <div className="flex gap-4 opacity-0 animate-fadeInUp animation-delay-300">
            <a href="/collections" className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg shadow hover:bg-black hover:scale-105 transition-all duration-300">Shop the Collection</a>

            <button onClick={onOpenNewsletter} className="inline-flex items-center gap-2 border border-slate-200 px-5 py-3 rounded-lg hover:bg-slate-50 hover:scale-105 transition-all duration-300">Join Newsletter</button>
          </div>

          <div className="flex items-center gap-4 mt-6 opacity-0 animate-fadeInUp animation-delay-400">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Free Shipping</span>
              <span className="text-sm text-slate-500">over ₦150,000</span>
            </div>

            <div className="hidden sm:flex border-l border-slate-200 pl-4 items-center gap-3">
              <span className="font-semibold">Complimentary Care</span>
              <span className="text-sm text-slate-500">Lifetime polishing</span>
            </div>
          </div>
        </div>

        <div className="relative opacity-0 animate-slideInRight animation-delay-200">
          <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img src={heroImage} alt="Luxe Jewellery hero" className="w-full h-[420px] object-cover sm:object-top hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="mt-4 flex gap-3">
            <img src="/hero2.avif" alt="detail 1" className="w-24 h-24 object-cover rounded-lg shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 cursor-pointer" />
            <img src="/hero3.jpeg" alt="detail 2" className="w-24 h-24 object-cover rounded-lg shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 cursor-pointer" />
            <img src="/smeNobg.png" alt="detail 3" className="w-24 h-24 object-cover rounded-lg shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
}
