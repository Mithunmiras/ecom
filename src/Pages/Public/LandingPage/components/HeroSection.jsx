import React from "react";

export default function HeroSection({ onOpenNewsletter }) {
  const heroImage = "/hero1.jpg";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-transparent to-transparent opacity-40"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 animate-fadeInUp shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Fresh & Fast
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight opacity-0 animate-fadeInUp animation-delay-100">
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Meals delivered</span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">to your door.</span>
          </h1>

          <p className="text-slate-600 text-lg max-w-xl opacity-0 animate-fadeInUp animation-delay-200 leading-relaxed">Delicious restaurant-quality meals, ready in minutes. Track your order and enjoy exclusive daily offers.</p>

          <div className="flex flex-wrap gap-4 opacity-0 animate-fadeInUp animation-delay-300">
            <a href="/menu" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
              Order Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <button onClick={onOpenNewsletter} className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold border-2 border-purple-200">
              Get Offers
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-8 opacity-0 animate-fadeInUp animation-delay-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-white shadow-md">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm16 16V5H5v14h14z" /></svg>
              </div>
              <div>
                <span className="font-bold text-slate-900">Free Shipping</span>
                <p className="text-sm text-slate-500">over ₦150,000</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-md">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <div>
                <span className="font-bold text-slate-900">Premium Care</span>
                <p className="text-sm text-slate-500">Lifetime polishing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative opacity-0 animate-slideInRight animation-delay-200">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 border-4 border-white">
            <img src={heroImage} alt="Luxe Jewellery hero" className="w-full h-[480px] object-cover hover:scale-110 transition-transform duration-700" />
          </div>

          <div className="mt-6 flex gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <img src="/hero2.avif" alt="detail 1" className="relative w-28 h-28 object-cover rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-white" />
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <img src="/hero3.jpeg" alt="detail 2" className="relative w-28 h-28 object-cover rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-white" />
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <img src="/smeNobg.png" alt="detail 3" className="relative w-28 h-28 object-cover rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
