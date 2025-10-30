import React from "react";

export default function CallToAction() {
  return (
    <div className="relative overflow-hidden p-8 md:p-10 bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 rounded-3xl opacity-0 animate-fadeInUp animation-delay-100 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-fuchsia-500 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 backdrop-blur-sm">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          Exclusive Offer
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Book a Private Viewing</h3>
        <p className="text-purple-50 leading-relaxed">Schedule an appointment with our in-house gemologist and stylist. Experience luxury service.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/book" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold">
            Book Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-300 font-bold backdrop-blur-sm">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
