import React from 'react';
import Reveal from '../../../../components/Reveal.jsx';

const stats = [
  { number: '30+', label: 'Years of Excellence' },
  { number: '50K+', label: 'Happy Customers' },
  { number: '500+', label: 'Unique Designs' },
  { number: '20+', label: 'Master Artisans' },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <Reveal
              key={idx}
              animation="animate-scaleIn"
              delay={idx === 0 ? '' : idx === 1 ? 'animation-delay-100' : idx === 2 ? 'animation-delay-200' : 'animation-delay-300'}
            >
              <div className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 font-playfair">
                  {s.number}
                </div>
                <div className="mt-1 text-sm text-slate-600">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
