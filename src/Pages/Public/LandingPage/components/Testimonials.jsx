import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Absolutely stunning pieces! The craftsmanship is incredible.",
      author: "Emily R.",
      rating: 5
    },
    {
      text: "Great customer service and fast delivery!",
      author: "Jason L.",
      rating: 5
    },
    {
      text: "Beautiful jewelry that exceeded my expectations.",
      author: "Sarah M.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials" style={{ padding: '5rem 0', background: '#f8f8f8' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>
            What Our Customers Say
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#666' }}>
            Trusted by jewelry lovers worldwide
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ marginBottom: '1rem', color: '#FFD700', fontSize: '1.2rem' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p style={{ fontSize: '1rem', color: '#2c2c2c', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                "{testimonial.text}"
              </p>
              <h4 style={{ fontSize: '1rem', color: '#B8860B', fontWeight: '600' }}>
                {testimonial.author}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
