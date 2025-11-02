import React, { useState } from 'react';
import Reveal from '../../../../components/Reveal.jsx';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Contact form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <Reveal animation="animate-fadeInUp">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair text-slate-900 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C99700] focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C99700] focus:border-transparent transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C99700] focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C99700] focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C99700] focus:border-transparent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#C99700] text-white font-semibold rounded-lg hover:bg-[#B8860B] transition-colors shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fadeIn" onClick={() => setShowSuccess(false)}>
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md mx-4 text-center animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check-circle text-3xl text-green-600"></i>
            </div>
            <h2 className="text-2xl font-bold font-playfair text-slate-900 mb-2">Message Sent!</h2>
            <p className="text-slate-600 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-2 bg-[#C99700] text-white font-semibold rounded-lg hover:bg-[#B8860B] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
