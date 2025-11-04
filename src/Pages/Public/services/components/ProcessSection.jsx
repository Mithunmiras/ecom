import React from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description: 'We analyze your business needs, current processes, and identify AI opportunities.',
    delay: '0.1s'
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'Develop a comprehensive roadmap with clear milestones and success metrics.',
    delay: '0.2s'
  },
  {
    number: '03',
    title: 'Development & Integration',
    description: 'Build and deploy AI solutions that integrate seamlessly with your systems.',
    delay: '0.3s'
  },
  {
    number: '04',
    title: 'Training & Support',
    description: 'Ensure your team is equipped and provide ongoing optimization support.',
    delay: '0.4s'
  }
];

export default function ProcessSection() {
  return (
    <section className="process-section section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-badge scroll-reveal">Our Process</span>
          <h2 className="section-title scroll-reveal">How We Work</h2>
          <p className="section-subtitle scroll-reveal">A proven methodology for successful AI implementation</p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="process-step scroll-reveal"
              style={{ animationDelay: step.delay }}
            >
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
