import React from "react";

export default function Navbar({ onOpenNewsletter }) {
  return (
    <header className="backdrop-blur-md bg-white/90 sticky top-0 z-40 border-b border-purple-100 opacity-0 animate-fadeIn shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <img src="/logo.svg" alt="QuickBite" className="w-10 h-10 rounded-full object-cover shadow-lg" />
          <div>
            <div className="text-sm font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">QuickBite</div>
            <div className="text-xs text-slate-500 -mt-1">Hot meals delivered fast</div>
          </div>
        </a>

        <nav className="hidden md:flex gap-8 items-center text-sm">
          <a href="/menu" className="text-slate-700 hover:text-purple-600 font-medium hover:scale-110 transition-all duration-300">Menu</a>
          <a href="/how-it-works" className="text-slate-700 hover:text-purple-600 font-medium hover:scale-110 transition-all duration-300">How it works</a>
          <a href="/contact" className="text-slate-700 hover:text-purple-600 font-medium hover:scale-110 transition-all duration-300">Contact</a>
          <button onClick={onOpenNewsletter} className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">Order Now</button>
        </nav>

        <div className="md:hidden">
          <a href="/collections" className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">Shop</a>
        </div>
      </div>
    </header>
  );
}
