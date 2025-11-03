import React, { useEffect, useRef, useState } from 'react';

const StatCounter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(target);
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, hasAnimated]);

  return (
    <div className="vm-stat" ref={ref}>
      <div className="stat-number">{count}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const VisionMission = () => {
  return (
    <section className="vision-mission-section section">
      <div className="container">
        <div className="vm-grid">
          <div className="vm-card scroll-reveal">
            <div className="vm-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h2>Our Vision</h2>
            <p className="lead">
              A world where AI super agents augment every human worker, unlocking unprecedented productivity and innovation.
            </p>
            <p>
              We envision a future where businesses of all sizes can leverage AI super agents—intelligent systems that don't just automate tasks, but think, learn, and collaborate alongside humans. These agents will transform how we work, freeing humans to focus on creativity, strategy, and meaningful interactions while AI handles the complexity.
            </p>
            <div className="vm-stats">
              <StatCounter target="500" label="AI Agents Deployed" />
              <StatCounter target="10" label="Million Tasks Automated" />
            </div>
          </div>

          <div className="vm-card scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="vm-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h2>Our Mission</h2>
            <p className="lead">
              To democratize access to enterprise-grade AI super agents through simple, scalable, and affordable solutions.
            </p>
            <p>
              We're committed to breaking down the barriers that prevent businesses from adopting AI. Through one-click deployment, pay-per-use pricing, and comprehensive support, we make it possible for any organization to harness the power of AI super agents—without massive upfront investments or specialized expertise.
            </p>
            <div className="vm-stats">
              <StatCounter target="98" label="Client Satisfaction Rate" />
              <StatCounter target="40" label="% Average Cost Reduction" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
