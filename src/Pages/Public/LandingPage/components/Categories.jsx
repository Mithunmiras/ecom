import React from "react";

const Categories = () => {
  const categories = [
    {
      name: "Necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
      icon: "fa-gem"
    },
    {
      name: "Rings",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
      icon: "fa-ring"
    },
    {
      name: "Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      icon: "fa-earrings"
    },
    {
      name: "Bracelets",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
      icon: "fa-bracelet"
    }
  ];

  return (
    <section className="categories" style={{ padding: '5rem 0', background: '#f8f8f8' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>
            Shop by Category
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#666' }}>
            Explore our curated collections
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {categories.map((category, index) => (
            <a
              key={index}
              href={`/products?category=${category.name.toLowerCase()}`}
              style={{
                position: 'relative',
                height: '350px',
                borderRadius: '10px',
                overflow: 'hidden',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'block'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: `url(${category.image}) center/cover`,
                  transition: 'transform 0.5s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '2rem',
                color: 'white'
              }}>
                <i className={`fas ${category.icon}`} style={{ fontSize: '3rem', marginBottom: '1rem', color: '#FFD700' }}></i>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontFamily: 'Playfair Display, serif' }}>
                  {category.name}
                </h3>
                <span style={{ fontSize: '0.9rem', color: '#FFD700' }}>View Collection</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
