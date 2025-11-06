import React from "react";

const Features = () => {
  const features = [
    {
      icon: "fa-shipping-fast",
      title: "Free Shipping",
      description: "Free shipping on orders over $200"
    },
    {
      icon: "fa-shield-alt",
      title: "Secure Payment",
      description: "100% secure payment processing"
    },
    {
      icon: "fa-undo",
      title: "Easy Returns",
      description: "30-day return policy"
    },
    {
      icon: "fa-headset",
      title: "24/7 Support",
      description: "Dedicated customer service"
    }
  ];

  return (
    <section className="features">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card animate-delay-${index + 1}`}>
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
