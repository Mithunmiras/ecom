import React from "react";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 via-violet-400 to-fuchsia-400 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">LJ</div>
            <div>
              <div className="font-bold text-lg bg-gradient-to-r from-purple-200 to-violet-200 bg-clip-text text-transparent">LuxeJewels</div>
              <div className="text-sm text-purple-300">Fine Jewellery</div>
            </div>
          </a>

          <p className="mt-6 text-sm text-purple-200 max-w-sm leading-relaxed">Handcrafted jewellery made with love and precision. Visit our atelier by appointment only.</p>
        </div>

        <div className="flex gap-12">
          <div>
            <h4 className="font-bold mb-4 text-purple-200">Shop</h4>
            <ul className="text-sm text-purple-300 space-y-3">
              <li><a href="/collections" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Collections</a></li>
              <li><a href="/custom" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Custom</a></li>
              <li><a href="/gift-cards" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-purple-200">Company</h4>
            <ul className="text-sm text-purple-300 space-y-3">
              <li><a href="/about" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">About</a></li>
              <li><a href="/press" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Press</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Careers</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-purple-200">Contact</h4>
          <p className="text-sm text-purple-300">hello@luxejewels.example</p>
          <p className="text-sm text-purple-300 mt-2">+234 800 000 0000</p>

          <div className="mt-6 flex items-center gap-3">
            <a className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-400 hover:to-violet-400 transition-all duration-300 hover:scale-110 font-semibold" href="#">F</a>
            <a className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-400 hover:to-violet-400 transition-all duration-300 hover:scale-110 font-semibold" href="#">I</a>
            <a className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-400 hover:to-violet-400 transition-all duration-300 hover:scale-110 font-semibold" href="#">T</a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 text-sm text-purple-300 py-6 text-center backdrop-blur-sm">
        <p>© {new Date().getFullYear()} LuxeJewels — Crafted with care and passion.</p>
      </div>
    </footer>
  );
}
