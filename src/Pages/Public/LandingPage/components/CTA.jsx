import React, { useEffect, useRef } from 'react';

const CTA = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section section" ref={sectionRef}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="cta-content scroll-reveal" style={{ textAlign: 'center' }}>
          <h2>Ready to Transform Your Business with AI?</h2>
          <p>Start your 14-day free trial today. No credit card required.</p>
          <div className="cta-buttons" style={{ justifyContent: 'center' }}>
            <a href="#contact" className="btn btn-primary btn-lg pulse-btn" onClick={(e) => { e.preventDefault(); document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Start Free Trial <i className="fas fa-rocket"></i>
            </a>
            <a href="#services" className="btn btn-outline-light btn-lg" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Pricing <i className="fas fa-tag"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;