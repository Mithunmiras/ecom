import React, { useState } from 'react';
import Reveal from '../../../../components/Reveal.jsx';

const faqs = [
  {
    question: 'What are your shipping options?',
    answer: 'We offer free standard shipping on orders over $200. Express shipping is available for an additional fee. All orders are insured and require signature upon delivery.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all items in original condition. Custom or engraved pieces cannot be returned unless defective.'
  },
  {
    question: 'Do you offer jewelry cleaning services?',
    answer: 'Yes! We offer complimentary cleaning services for all jewelry purchased from Luxe Jewels. Visit our store or mail your pieces to us.'
  },
  {
    question: 'Can I customize a piece?',
    answer: 'Absolutely! Our design team can work with you to create a custom piece. Contact us to schedule a consultation with one of our designers.'
  },
  {
    question: 'Are your gemstones certified?',
    answer: 'Yes, all diamonds over 0.5 carats come with certification from GIA or other recognized gemological laboratories. We provide authenticity certificates for all precious gemstones.'
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we offer flexible financing options through our partners. Apply at checkout for instant approval. Terms and conditions apply.'
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal
      animation="animate-fadeInUp"
      delay={index === 0 ? '' : index === 1 ? 'animation-delay-100' : index === 2 ? 'animation-delay-200' : ''}
    >
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
        >
          <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
          <i className={`fas fa-chevron-down text-[#C99700] transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true"></i>
        </button>
        <div
          className={`px-6 overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 py-4 border-t border-slate-200' : 'max-h-0'
          }`}
        >
          <p className="text-slate-600">{faq.answer}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function FAQSection() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Reveal animation="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-2 text-slate-600">Quick answers to common questions</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
