import React, { useEffect, useRef } from 'react';

const WhyOmnibrix = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section section section-dark" id="why-omnibrix" ref={sectionRef}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-badge scroll-reveal">Why Choose Us</span>
          <h2 className="section-title scroll-reveal">Why Omnibrix?</h2>
          <p className="section-subtitle scroll-reveal">We're not just another AI consultancy—we're your innovation partner</p>
        </div>

        <div className="why-grid" style={{ justifyItems: 'center' }}>
          <div className="why-card scroll-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="why-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Rapid Deployment</h3>
            <p>Deploy AI solutions in days, not months. Our one-click deployment gets you up and running fast.</p>
          </div>

          <div className="why-card scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="why-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h3>Pay What You Use</h3>
            <p>Transparent pricing with no hidden fees. Only pay for actual usage with our flexible pricing model.</p>
          </div>

          <div className="why-card scroll-reveal" style={{ animationDelay: '0.3s' }}>
            <div className="why-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Custom Solutions</h3>
            <p>Every business is unique. We build AI agents tailored to your specific workflows and challenges.</p>
          </div>

          <div className="why-card scroll-reveal" style={{ animationDelay: '0.4s' }}>
            <div className="why-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock expert support to ensure your AI agents are always performing optimally.</p>
          </div>

          <div className="why-card scroll-reveal" style={{ animationDelay: '0.5s' }}>
            <div className="why-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Enterprise Security</h3>
            <p>Bank-grade encryption and compliance with industry standards to protect your data.</p>
          </div>

          <div className="why-card scroll-reveal" style={{ animationDelay: '0.6s' }}>
            <div className="why-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Proven Results</h3>
            <p>Average 40% cost reduction and 60% efficiency improvement for our clients.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOmnibrix;