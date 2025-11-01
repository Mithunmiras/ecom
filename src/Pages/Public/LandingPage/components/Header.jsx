import React, { useState } from 'react';
import { useCart } from '../../../../context/CartContext';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-slate-700 hover:text-amber-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (234) 567-890
              </a>
              <a href="mailto:info@luxejewels.com" className="flex items-center gap-2 text-slate-700 hover:text-amber-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@luxejewels.com
              </a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-slate-700 hover:text-amber-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-700 hover:text-amber-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-700 hover:text-amber-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm5.01 8.22l-2.81 13.24a.74.74 0 01-1.09.43L9.56 19.4l-1.44-2.23-3.11-1a.73.73 0 010-1.38L19.5 7.18a.73.73 0 01.95 1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <img src="/brand/luxe-gem.svg" alt="Luxe Jewels" className="w-10 h-10 drop-shadow" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-playfair">
                Luxe Jewels
              </span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <li>
                <a href="/" className="text-amber-600 hover:text-amber-700 transition-colors font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-slate-700 hover:text-amber-600 transition-colors">
                  Shop
                </a>
              </li>
              <li className="relative group">
                <button className="flex items-center gap-1 text-slate-700 hover:text-amber-600 transition-colors">
                  Collections
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <ul className="py-2">
                    <li>
                      <a href="/products?category=rings" className="block px-4 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                        Rings
                      </a>
                    </li>
                    <li>
                      <a href="/products?category=necklaces" className="block px-4 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                        Necklaces
                      </a>
                    </li>
                    <li>
                      <a href="/products?category=earrings" className="block px-4 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                        Earrings
                      </a>
                    </li>
                    <li>
                      <a href="/products?category=bracelets" className="block px-4 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                        Bracelets
                      </a>
                    </li>
                    <li>
                      <a href="/products?category=watches" className="block px-4 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                        Watches
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="/about" className="text-slate-700 hover:text-amber-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-700 hover:text-amber-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-slate-700 hover:text-amber-600 transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <a href="/account" className="hidden md:block p-2 text-slate-700 hover:text-amber-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </a>

              <button className="hidden md:block relative p-2 text-slate-700 hover:text-amber-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-slate-700 hover:text-amber-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-amber-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="py-4 border-t border-slate-200 animate-fadeIn">
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search for jewelry..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-amber-200 rounded-full focus:border-amber-400 focus:outline-none transition-colors"
                  autoFocus
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 animate-fadeIn">
          <ul className="px-6 py-4 space-y-3">
            <li>
              <a href="/" className="block py-2 text-amber-600 font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="block py-2 text-slate-700 hover:text-amber-600 transition-colors">
                Shop
              </a>
            </li>
            <li>
              <details className="group">
                <summary className="py-2 text-slate-700 hover:text-amber-600 transition-colors cursor-pointer flex items-center justify-between">
                  Collections
                  <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <a href="/products?category=rings" className="block py-2 text-slate-600 hover:text-amber-600 transition-colors">
                      Rings
                    </a>
                  </li>
                  <li>
                    <a href="/products?category=necklaces" className="block py-2 text-slate-600 hover:text-amber-600 transition-colors">
                      Necklaces
                    </a>
                  </li>
                  <li>
                    <a href="/products?category=earrings" className="block py-2 text-slate-600 hover:text-amber-600 transition-colors">
                      Earrings
                    </a>
                  </li>
                  <li>
                    <a href="/products?category=bracelets" className="block py-2 text-slate-600 hover:text-amber-600 transition-colors">
                      Bracelets
                    </a>
                  </li>
                  <li>
                    <a href="/products?category=watches" className="block py-2 text-slate-600 hover:text-amber-600 transition-colors">
                      Watches
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="/about" className="block py-2 text-slate-700 hover:text-amber-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="block py-2 text-slate-700 hover:text-amber-600 transition-colors">
                Contact
              </a>
            </li>
            <li className="pt-3 border-t border-slate-200">
              <a href="/account" className="block py-2 text-slate-700 hover:text-amber-600 transition-colors">
                My Account
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
