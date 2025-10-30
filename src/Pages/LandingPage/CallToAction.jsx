import React from "react";

export default function CallToAction() {
  return (
    <div className="p-6 md:p-8 bg-gradient-to-br from-white to-rose-50 rounded-xl border border-slate-100 opacity-0 animate-fadeInUp animation-delay-100">
      <h3 className="text-xl font-bold">Book a Private Viewing</h3>
      <p className="mt-2 text-slate-600">Schedule an appointment with our in-house gemologist and stylist.</p>

      <div className="mt-4 flex gap-3">
        <a href="/book" className="inline-block px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">Book Now</a>
        <a href="/contact" className="inline-block px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 hover:scale-105 transition-all duration-300">Contact</a>
      </div>
    </div>
  );
}
