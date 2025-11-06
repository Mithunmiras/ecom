import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Elegant Gold Necklace",
      price: "$299",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
      category: "Necklaces"
    },
    {
      name: "Diamond Ring",
      price: "$499",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
      category: "Rings"
    },
    {
      name: "Pearl Earrings",
      price: "$199",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      category: "Earrings"
    },
    {
      name: "Gold Bracelet",
      price: "$349",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
      category: "Bracelets"
    }
  ];

  return (
    <section className="featured" style={{ padding: '5rem 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>
            Featured Products
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#666' }}>
            Our most popular pieces
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
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
              <div style={{ position: 'relative', height: '320px', overflow: 'hidden', background: '#f8f8f8' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '0.875rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {product.category}
                </div>
                <h3 style={{ fontSize: '1.125rem', margin: '0.5rem 0', fontWeight: '600' }}>
                  {product.name}
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  margin: '0.5rem 0',
                  fontSize: '0.875rem'
                }}>
                  <span style={{ color: '#FFD700' }}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                  <span style={{ color: '#666' }}>(4.9)</span>
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#B8860B',
                  marginTop: '1rem'
                }}>
                  {product.price}
                </div>
                <a
                  href="/product-detail"
                  style={{
                    display: 'block',
                    width: '100%',
                    marginTop: '1rem',
                    padding: '0.75rem',
                    background: '#B8860B',
                    color: 'white',
                    borderRadius: '50px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#8B4513'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#B8860B'}
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
