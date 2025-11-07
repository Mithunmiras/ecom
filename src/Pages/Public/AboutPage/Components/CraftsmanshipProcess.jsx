import React from 'react';

export default function CraftsmanshipProcess() {
  const processSteps = [
    {
      number: "01",
      title: "Design Concept",
      description: "Our designers sketch and conceptualize unique pieces, drawing inspiration from art, nature, and timeless elegance."
    },
    {
      number: "02",
      title: "Material Selection",
      description: "We carefully select premium materials and ethically sourced gemstones that meet our exacting standards."
    },
    {
      number: "03",
      title: "Master Crafting",
      description: "Expert artisans bring designs to life through traditional techniques and precision craftsmanship."
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Each piece undergoes rigorous quality checks to ensure it meets our exceptional standards of excellence."
    }
  ];

  return (
    <section className="process-section">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="section-header">
          <h2 className="section-title">Our Craftsmanship Process</h2>
          <p className="section-subtitle">From concept to creation</p>
        </div>
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div key={index} className={`process-step animate-delay-${index + 1}`}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
