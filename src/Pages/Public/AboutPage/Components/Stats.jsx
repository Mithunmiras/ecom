import React from 'react';

export default function Stats() {
  const stats = [
    { number: "30+", label: "Years of Excellence" },
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Unique Designs" },
    { number: "20+", label: "Master Artisans" }
  ];

  return (
    <section className="stats-section">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card animate-delay-${index + 1}`}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
