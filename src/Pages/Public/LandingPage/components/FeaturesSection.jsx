import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      iconClass: 'fa-solid fa-truck-fast',
      title: 'Free Shipping',
      description: 'Free shipping on orders over $200'
    },
    {
      iconClass: 'fa-solid fa-shield-halved',
      title: 'Secure Payment',
      description: '100% secure payment processing'
    },
    {
      iconClass: 'fa-solid fa-rotate-left',
      title: 'Easy Returns',
      description: '30-day return policy'
    },
    {
      iconClass: 'fa-solid fa-headset',
      title: '24/7 Support',
      description: 'Dedicated customer service'
    }
  ];

  return (
    <section className="features py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center">
          {features.map((feature, index) => (
            <div key={index} className="feature-card px-2">
              <div className="feature-icon mx-auto">
                <i className={`${feature.iconClass} text-white`} aria-hidden="true"></i>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900 font-serif">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-600 max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
