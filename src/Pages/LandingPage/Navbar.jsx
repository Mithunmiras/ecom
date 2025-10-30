import React from "react";

export default function Navbar({ onOpenNewsletter }) {
  return (
    <header className="backdrop-blur-sm bg-white/80 sticky top-0 z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center text-white font-semibold">LJ</div>
          <div>
            <div className="text-sm font-semibold">LuxeJewels</div>
            <div className="text-xs text-slate-500 -mt-1">Fine Jewellery</div>
          </div>
        </a>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="/collections" className="text-slate-700 hover:text-slate-900">Collections</a>
          <a href="/about" className="text-slate-700 hover:text-slate-900">About</a>
          <a href="/contact" className="text-slate-700 hover:text-slate-900">Contact</a>
          <button onClick={onOpenNewsletter} className="px-4 py-2 bg-slate-900 text-white rounded-md">Subscribe</button>
        </nav>

        <div className="md:hidden">
          <a href="/collections" className="px-3 py-2 rounded-md bg-slate-900 text-white text-sm">Shop</a>
        </div>
      </div>
    </header>
  );
}
