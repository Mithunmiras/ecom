import React from 'react';

export default function CategoriesSection() {
  const categories = [
    {
      name: 'Rings',
      iconClass: 'fa-solid fa-ring',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400',
      link: '/products?category=rings'
    },
    {
      name: 'Necklaces',
      iconClass: 'fa-solid fa-gem',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400',
      link: '/products?category=necklaces'
    },
    {
      name: 'Earrings',
      iconClass: 'fa-solid fa-star',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400',
      link: '/products?category=earrings'
    },
    {
      name: 'Bracelets',
      iconClass: 'fa-solid fa-link',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400',
      link: '/products?category=bracelets'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-slate-600">
            Explore our curated collections
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.link}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                <span className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300 text-[var(--accent-gold)]">
                  <i className={category.iconClass} aria-hidden="true"></i>
                </span>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <span className="text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Collection →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
