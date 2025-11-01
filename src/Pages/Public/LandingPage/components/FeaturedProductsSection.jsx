import React, { useState, useEffect } from 'react';

export default function FeaturedProductsSection() {
  const [loading, setLoading] = useState(true);
  const [products] = useState([
    {
      id: 1,
      name: 'Diamond Solitaire Ring',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400',
      category: 'rings'
    },
    {
      id: 2,
      name: 'Pearl Necklace',
      price: 899,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400',
      category: 'necklaces'
    },
    {
      id: 3,
      name: 'Gold Hoop Earrings',
      price: 599,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400',
      category: 'earrings'
    },
    {
      id: 4,
      name: 'Tennis Bracelet',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400',
      category: 'bracelets'
    }
  ]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-slate-600">
            Our most popular pieces
          </p>
        </div>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-600 mb-4"></div>
            <p className="text-slate-600">Loading products...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold mb-4 text-[var(--primary-gold)]">
                      ${product.price.toLocaleString()}
                    </p>
                    <button className="w-full py-3 text-white font-semibold rounded-full transition-colors duration-300"
                      style={{ backgroundColor: 'var(--primary-gold)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--dark-gold)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-gold)')}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href="/products"
                className="inline-block px-8 py-4 font-bold rounded-full transition-all duration-300"
                style={{ border: '2px solid var(--primary-gold)', color: 'var(--primary-gold)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-gold)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--primary-gold)';
                }}
              >
                View All Products
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
