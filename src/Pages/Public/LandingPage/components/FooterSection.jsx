import React, { useEffect, useState } from 'react';

export default function FooterSection() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
  <footer className="bg-slate-950 text-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/brand/luxe-gem.svg" alt="Luxe Jewels" className="w-8 h-8" />
                <span className="text-xl font-bold" style={{ color: 'var(--accent-gold)' }}>Luxe Jewels</span>
              </div>
              <p className="text-sm text-slate-400">
                Crafting timeless elegance since 1990. We believe in creating jewelry that tells your unique story.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {[
                  { icon: 'fab fa-facebook-f', href: '#' },
                  { icon: 'fab fa-instagram', href: '#' },
                  { icon: 'fab fa-pinterest', href: '#' },
                  { icon: 'fab fa-twitter', href: '#' },
                ].map((s, idx) => (
                  <a key={idx} href={s.href} aria-label={s.icon}
                     className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                    <i className={`${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4" style={{ color: 'var(--accent-gold)' }}>Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><a className="hover:text-white transition-colors" href="/about">About Us</a></li>
                <li><a className="hover:text-white transition-colors" href="/products">Shop</a></li>
                <li><a className="hover:text-white transition-colors" href="/contact">Contact</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Size Guide</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Care Instructions</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-bold mb-4" style={{ color: 'var(--accent-gold)' }}>Customer Service</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><a className="hover:text-white transition-colors" href="#">Shipping Information</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Returns & Exchanges</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Terms & Conditions</a></li>
                <li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4" style={{ color: 'var(--accent-gold)' }}>Contact Us</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><i className="fas fa-map-marker-alt mr-2" aria-hidden="true" /> 123 Luxury Ave, New York, NY 10001</li>
                <li><i className="fas fa-phone mr-2" aria-hidden="true" /> +1 (234) 567-890</li>
                <li><i className="fas fa-envelope mr-2" aria-hidden="true" /> info@luxejewels.com</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">&copy; {year} Luxe Jewels. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xl text-slate-300">
              <i className="fab fa-cc-visa" aria-hidden="true" />
              <i className="fab fa-cc-mastercard" aria-hidden="true" />
              <i className="fab fa-cc-amex" aria-hidden="true" />
              <i className="fab fa-cc-paypal" aria-hidden="true" />
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed right-6 bottom-6 z-50 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} `}
        style={{ backgroundColor: 'var(--primary-gold)', color: '#fff' }}
      >
        <i className="fas fa-arrow-up" aria-hidden="true" />
      </button>
    </>
  );
}
