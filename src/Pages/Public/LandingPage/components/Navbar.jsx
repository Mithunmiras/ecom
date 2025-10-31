import React from "react";
import { useCart } from "../../../../context/CartContext";

export default function Navbar({ onOpenNewsletter }) {
  const { getTotalItems, setIsCartOpen } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="backdrop-blur-md bg-white/90 sticky top-0 z-40 border-b border-orange-100 opacity-0 animate-fadeIn shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <img src="/logo.svg" alt="QuickBite" className="w-10 h-10 rounded-full object-cover shadow-lg" />
          <div>
            <div className="text-sm font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">QuickBite</div>
            <div className="text-xs text-slate-500 -mt-1">Hot meals delivered fast</div>
          </div>
        </a>

        <nav className="hidden md:flex gap-8 items-center text-sm">
          <a href="/menu" className="text-slate-700 hover:text-orange-600 font-medium hover:scale-110 transition-all duration-300">Menu</a>
          <a href="/how-it-works" className="text-slate-700 hover:text-orange-600 font-medium hover:scale-110 transition-all duration-300">How it works</a>
          <a href="/contact" className="text-slate-700 hover:text-orange-600 font-medium hover:scale-110 transition-all duration-300">Contact</a>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
