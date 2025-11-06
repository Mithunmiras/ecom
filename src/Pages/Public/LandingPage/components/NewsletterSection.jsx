import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <section className="newsletter" style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #B8860B, #8B4513)',
      color: 'white'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '0.5rem', fontFamily: 'Playfair Display, serif' }}>
              Stay Updated
            </h2>
            <p style={{ fontSize: '1rem', opacity: '0.9' }}>
              Subscribe to receive updates on new arrivals and exclusive offers.
            </p>
          </div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', flex: 1, minWidth: '300px', maxWidth: '500px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                padding: '1rem 1.5rem',
                border: 'none',
                borderRadius: '50px',
                outline: 'none',
                fontSize: '1rem'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '1rem 2rem',
                background: 'white',
                color: '#B8860B',
                border: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#f8f8f8'}
              onMouseOut={(e) => e.currentTarget.style.background = 'white'}
            >
              Subscribe
            </button>
          </form>
        </div>
        {message && (
          <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem', opacity: '0.9' }}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
