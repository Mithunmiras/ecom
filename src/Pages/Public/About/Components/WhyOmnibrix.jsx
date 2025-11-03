import React from 'react';

const WhyOmnibrix = () => {
  const reasons = [
    {
      number: '01',
      icon: 'fas fa-brain',
      title: 'Super Agent Expertise',
      description: "We don't just build AI tools—we create intelligent super agents that learn, adapt, and collaborate. Our agents combine multiple AI capabilities to solve complex business challenges.",
      delay: '0.1s'
    },
    {
      number: '02',
      icon: 'fas fa-mouse-pointer',
      title: 'One-Click Deployment',
      description: 'No complex installations or lengthy implementations. Deploy production-ready AI agents in minutes, not months. Start seeing results from day one.',
      delay: '0.2s'
    },
    {
      number: '03',
      icon: 'fas fa-dollar-sign',
      title: 'Pay-Per-Use Pricing',
      description: 'No massive upfront costs. Pay only for what you actually use. Scale up or down based on your needs with complete pricing transparency.',
      delay: '0.3s'
    },
    {
      number: '04',
      icon: 'fas fa-shield-alt',
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, SOC 2 compliance, and GDPR adherence. Your data is protected with the highest security standards in the industry.',
      delay: '0.4s'
    },
    {
      number: '05',
      icon: 'fas fa-sync-alt',
      title: 'Continuous Learning',
      description: "Our super agents don't stay static—they evolve. Machine learning capabilities ensure your agents get smarter with every interaction.",
      delay: '0.5s'
    },
    {
      number: '06',
      icon: 'fas fa-headset',
      title: '24/7 Expert Support',
      description: "Round-the-clock support from AI specialists who understand your business. We're always here when you need us.",
      delay: '0.6s'
    }
  ];

  return (
    <section className="why-omnibrix-section section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-badge scroll-reveal">Why Choose Us</span>
          <h2 className="section-title scroll-reveal">Why Omnibrix?</h2>
          <p className="section-subtitle scroll-reveal">
            Six reasons why leading enterprises trust us with their AI transformation
          </p>
        </div>

        <div className="why-omnibrix-grid">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="why-omni-card scroll-reveal"
              style={{ animationDelay: reason.delay }}
            >
              <div className="card-number">{reason.number}</div>
              <div className="why-omni-icon">
                <i className={reason.icon}></i>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOmnibrix;
