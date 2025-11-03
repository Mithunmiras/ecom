import React from 'react';

const Recognition = () => {
  const recognitions = [
    {
      icon: 'fas fa-trophy',
      title: 'Best AI Platform 2024',
      org: 'TechCrunch Disrupt',
      delay: '0.1s'
    },
    {
      icon: 'fas fa-certificate',
      title: 'SOC 2 Type II Certified',
      org: 'Security & Compliance',
      delay: '0.2s'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'GDPR Compliant',
      org: 'Data Protection',
      delay: '0.3s'
    },
    {
      icon: 'fas fa-star',
      title: 'Top 10 AI Startups',
      org: 'Forbes 2024',
      delay: '0.4s'
    },
    {
      icon: 'fas fa-medal',
      title: 'Innovation Award',
      org: 'AI Summit 2024',
      delay: '0.5s'
    },
    {
      icon: 'fas fa-gem',
      title: 'Partner Excellence',
      org: 'Google Cloud',
      delay: '0.6s'
    }
  ];

  return (
    <section className="recognition-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge scroll-reveal">Recognition</span>
          <h2 className="section-title scroll-reveal">Awards & Certifications</h2>
        </div>

        <div className="recognition-grid">
          {recognitions.map((recognition, index) => (
            <div
              key={index}
              className="recognition-card scroll-reveal"
              style={{ animationDelay: recognition.delay }}
            >
              <i className={recognition.icon}></i>
              <h4>{recognition.title}</h4>
              <p>{recognition.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
