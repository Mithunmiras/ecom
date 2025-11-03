import React, { useEffect, useRef } from 'react';

const Services = () => {
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
    <section className="services-section section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-badge scroll-reveal">Our Services</span>
          <h2 className="section-title scroll-reveal">Comprehensive AI Solutions</h2>
          <p className="section-subtitle scroll-reveal">From strategy to implementation, we provide end-to-end AI services</p>
        </div>

        <div className="services-grid" style={{ justifyItems: 'center' }}>
          <div className="service-card scroll-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="service-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>AI Consulting</h3>
            <p>Strategic AI consulting to transform your business operations with intelligent automation and data-driven insights.</p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> Strategy Development</li>
              <li><i className="fas fa-check"></i> Use Case Identification</li>
              <li><i className="fas fa-check"></i> ROI Analysis</li>
            </ul>
            <a href="#" className="service-link">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="service-card scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="service-icon">
              <i className="fas fa-route"></i>
            </div>
            <h3>AI Digital Roadmap</h3>
            <p>Create a comprehensive AI transformation roadmap tailored to your business objectives and technology landscape.</p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> Current State Assessment</li>
              <li><i className="fas fa-check"></i> Gap Analysis</li>
              <li><i className="fas fa-check"></i> Implementation Plan</li>
            </ul>
            <a href="#" className="service-link">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="service-card scroll-reveal" style={{ animationDelay: '0.3s' }}>
            <div className="service-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3>Build Custom AI Agents</h3>
            <p>Develop powerful AI agents customized for your specific workflows, automating complex tasks with precision.</p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> Custom Development</li>
              <li><i className="fas fa-check"></i> Workflow Integration</li>
              <li><i className="fas fa-check"></i> Continuous Learning</li>
            </ul>
            <a href="#" className="service-link">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="service-card service-card-featured scroll-reveal" style={{ animationDelay: '0.4s' }}>
            <div className="featured-badge">
              <i className="fas fa-star"></i> Popular
            </div>
            <div className="service-icon">
              <i className="fas fa-microphone-alt"></i>
            </div>
            <h3>Voice AI Solutions</h3>
            <p>Deploy voice AI agents in one click. Pay only for what you use with transparent per-minute pricing.</p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> One-Click Deployment</li>
              <li><i className="fas fa-check"></i> Pay-Per-Use ($0.08/min)</li>
              <li><i className="fas fa-check"></i> 14-Day Free Trial</li>
            </ul>
            <a href="#" className="service-link">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;