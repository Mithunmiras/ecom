import React from 'react';
import Reveal from '../../../../components/Reveal.jsx';

const infoCards = [
  {
    icon: 'fa-map-marker-alt',
    title: 'Visit Us',
    content: ['123 Luxury Avenue', 'New York, NY 10001', 'United States']
  },
  {
    icon: 'fa-phone',
    title: 'Call Us',
    content: ['Phone: +1 (234) 567-890', 'Toll-Free: 1-800-LUXE-GEM', 'Mon-Fri: 9AM - 6PM EST']
  },
  {
    icon: 'fa-envelope',
    title: 'Email Us',
    content: ['General: info@luxejewels.com', 'Support: support@luxejewels.com', 'Sales: sales@luxejewels.com']
  },
  {
    icon: 'fa-clock',
    title: 'Business Hours',
    content: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed']
  }
];

export default function ContactInfo() {
  return (
    <Reveal animation="animate-fadeInUp" delay="animation-delay-200">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold font-playfair text-slate-900">Contact Information</h2>
        
        <div className="space-y-4">
          {infoCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#C99700] flex items-center justify-center flex-shrink-0">
                <i className={`fas ${card.icon} text-white text-lg`} aria-hidden="true"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{card.title}</h3>
                <div className="text-sm text-slate-600 space-y-0.5">
                  {card.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Connect */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">Connect With Us</h3>
          <div className="flex items-center justify-center gap-4">
            {['fa-facebook-f', 'fa-instagram', 'fa-pinterest', 'fa-twitter'].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-12 h-12 rounded-full bg-white border-2 border-[#C99700] flex items-center justify-center text-[#C99700] hover:bg-[#C99700] hover:text-white transition-colors shadow-sm"
              >
                <i className={`fab ${icon}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
