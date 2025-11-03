import React from 'react';
import Reveal from '../../../../components/Reveal.jsx';

const steps = [
  {
    num: '01',
    title: 'Design Concept',
    text: 'Our designers sketch and conceptualize unique pieces, drawing inspiration from art, nature, and timeless elegance.'
  },
  {
    num: '02',
    title: 'Material Selection',
    text: 'We carefully select premium materials and ethically sourced gemstones that meet our exacting standards.'
  },
  {
    num: '03',
    title: 'Master Crafting',
    text: 'Expert artisans bring designs to life through traditional techniques and precision craftsmanship.'
  },
  {
    num: '04',
    title: 'Quality Assurance',
    text: 'Each piece undergoes rigorous quality checks to ensure it meets our exceptional standards of excellence.'
  }
];

export default function Process() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal animation="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-slate-900">Our Craftsmanship Process</h2>
            <p className="mt-2 text-slate-600">From concept to creation</p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-8 relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-200" aria-hidden="true"></div>
          {steps.map((s, i) => (
            <Reveal
              key={s.num}
              animation="animate-fadeInUp"
              delay={i === 0 ? '' : i === 1 ? 'animation-delay-100' : i === 2 ? 'animation-delay-200' : 'animation-delay-300'}
            >
              <div className="relative grid md:grid-cols-2 gap-8 items-start">
                <div className={`flex items-start gap-4 ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#06B6D4] text-white flex items-center justify-center font-bold shadow-md">
                      {s.num}
                    </div>
                  </div>
                  <div className="md:hidden pt-1">
                    <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-slate-600">{s.text}</p>
                  </div>
                </div>
                <div className={`${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} hidden md:block`}>
                  <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
