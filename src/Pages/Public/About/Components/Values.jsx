import React from 'react';

const values = [
  {
    icon: 'fas fa-lightbulb',
    title: 'Innovation First',
    description: "We push the boundaries of what's possible with AI, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
    delay: '0.1s'
  },
  {
    icon: 'fas fa-trophy',
    title: 'Excellence',
    description: "We're committed to delivering exceptional quality in everything we do, from code to customer service. Mediocrity is not in our vocabulary.",
    delay: '0.2s'
  },
  {
    icon: 'fas fa-hands-helping',
    title: 'Client Success',
    description: 'Your success is our success. We measure our achievements by the tangible value we create for your business and the problems we solve.',
    delay: '0.3s'
  },
  {
    icon: 'fas fa-unlock',
    title: 'Transparency',
    description: 'No hidden fees, no black boxes. We believe in clear communication, honest pricing, and explainable AI that you can trust.',
    delay: '0.4s'
  },
  {
    icon: 'fas fa-users',
    title: 'Collaboration',
    description: 'We work as an extension of your team, fostering partnerships built on mutual respect, open communication, and shared goals.',
    delay: '0.5s'
  },
  {
    icon: 'fas fa-balance-scale',
    title: 'Ethical AI',
    description: 'We develop AI responsibly, ensuring our solutions are fair, unbiased, and designed to augment human capabilities, not replace them.',
    delay: '0.6s'
  }
];

export default function Values() {
  return (
    <section className="values-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge scroll-reveal">Our Values</span>
          <h2 className="section-title scroll-reveal">What Drives Us</h2>
          <p className="section-subtitle scroll-reveal">
            The principles that guide our work and relationships
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card scroll-reveal"
              style={{ animationDelay: value.delay }}
            >
              <div className="value-icon">
                <i className={value.icon}></i>
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
