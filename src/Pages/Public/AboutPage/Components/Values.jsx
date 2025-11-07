import React from 'react';

export default function Values() {
  const values = [
    {
      icon: "fa-gem",
      title: "Quality Craftsmanship",
      description: "Every piece is handcrafted with meticulous attention to detail, using only the finest materials and gemstones sourced from trusted suppliers worldwide."
    },
    {
      icon: "fa-heart",
      title: "Passion for Design",
      description: "Our designers are driven by a passion for creating jewelry that tells stories, evokes emotions, and celebrates the beauty of life's special moments."
    },
    {
      icon: "fa-leaf",
      title: "Sustainable Practices",
      description: "We are committed to ethical sourcing and sustainable practices, ensuring that our creations are as responsible as they are beautiful."
    },
    {
      icon: "fa-users",
      title: "Customer First",
      description: "Your satisfaction is our priority. We provide personalized service, expert guidance, and lifetime support for every piece you purchase."
    }
  ];

  return (
    <section className="values-section">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="section-header">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">What makes us different</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className={`value-card animate-delay-${index + 1}`}>
              <div className="value-icon">
                <i className={`fas ${value.icon}`}></i>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
