import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Very simple email validation
    const isValid = /.+@.+\..+/.test(email.trim());
    if (!isValid) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section
      className="py-20"
      style={{
        backgroundImage: 'linear-gradient(135deg, var(--primary-gold), var(--dark-gold))',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="backdrop-blur-sm bg-white/10 border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-white lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg lg:text-xl text-white/85">
                Get the latest updates on new collections and exclusive offers
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              {submitted ? (
                <div className="bg-white/20 backdrop-blur-sm text-white p-6 rounded-2xl text-center">
                  <div className="text-5xl mb-3">
                    <i className="fas fa-check-circle" aria-hidden="true" />
                  </div>
                  <p className="text-xl font-semibold">Thank you for subscribing!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      aria-invalid={error ? 'true' : 'false'}
                      aria-describedby={error ? 'newsletter-error' : undefined}
                      className="w-full px-6 py-4 rounded-full text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-white/40 transition-all"
                    />
                    {error && (
                      <p id="newsletter-error" className="mt-2 text-sm text-red-100">
                        {error}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    style={{ backgroundColor: 'var(--primary-gold)' }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
