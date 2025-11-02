import React from 'react';
import Reveal from '../../../../components/Reveal.jsx';

const items = [
  {
    icon: 'fa-gem',
    title: 'Quality Craftsmanship',
    text: 'Every piece is handcrafted with meticulous attention to detail, using only the finest materials and gemstones sourced from trusted suppliers worldwide.'
  },
  {
    icon: 'fa-heart',
    title: 'Passion for Design',
    text: 'Our designers are driven by a passion for creating jewelry that tells stories, evokes emotions, and celebrates the beauty of life\'s special moments.'
  },
  {
    icon: 'fa-leaf',
    title: 'Sustainable Practices',
    text: 'We are committed to ethical sourcing and sustainable practices, ensuring that our creations are as responsible as they are beautiful.'
  },
  {
    icon: 'fa-users',
    title: 'Customer First',
    text: 'Your satisfaction is our priority. We provide personalized service, expert guidance, and lifetime support for every piece you purchase.'
  }
];

export default function Values() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal animation="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-slate-900">Our Values</h2>
            <p className="mt-2 text-slate-600">What makes us different</p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, idx) => (
            <Reveal
              key={idx}
              animation="animate-scaleIn"
              delay={idx === 0 ? '' : idx === 1 ? 'animation-delay-100' : idx === 2 ? 'animation-delay-200' : 'animation-delay-300'}
            >
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#C99700] flex items-center justify-center shadow-md">
                  <i className={`fas ${it.icon} text-white text-xl`} aria-hidden="true"></i>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{it.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
