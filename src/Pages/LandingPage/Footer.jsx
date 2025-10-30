import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center text-white font-semibold">LJ</div>
            <div>
              <div className="font-semibold">LuxeJewels</div>
              <div className="text-sm text-slate-500">Fine Jewellery</div>
            </div>
          </a>

          <p className="mt-4 text-sm text-slate-600 max-w-sm">Handcrafted jewellery made with love. Visit our atelier by appointment only.</p>
        </div>

        <div className="flex gap-8">
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="text-sm text-slate-600 space-y-2">
              <li><a href="/collections">Collections</a></li>
              <li><a href="/custom">Custom</a></li>
              <li><a href="/gift-cards">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="text-sm text-slate-600 space-y-2">
              <li><a href="/about">About</a></li>
              <li><a href="/press">Press</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-slate-600">hello@luxejewels.example</p>
          <p className="text-sm text-slate-600 mt-2">+234 800 000 0000</p>

          <div className="mt-6 flex items-center gap-3">
            <a className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600" href="#">F</a>
            <a className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600" href="#">I</a>
            <a className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600" href="#">T</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 text-sm text-slate-500 py-4 text-center">© {new Date().getFullYear()} LuxeJewels — Crafted with care.</div>
    </footer>
  );
}
