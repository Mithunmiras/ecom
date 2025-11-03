import React from 'react';
import Reveal from '../../../../components/Reveal.jsx';

export default function MapSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal animation="animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-slate-900 text-center mb-8">Find Our Store</h2>
        </Reveal>
        <Reveal animation="animate-fadeInUp" delay="animation-delay-200">
          <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Omnibrix Location"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
