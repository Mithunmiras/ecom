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
    <div className="story-stat" ref={ref}>
      <div className="stat-number">{count}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default function OurStory() {
  return (
    <section className="story-section section section-dark">
      <div className="container">
        <div className="story-content">
          <div className="story-text scroll-reveal">
            <span className="section-badge">Our Story</span>
            <h2>How Omnibrix Began</h2>
            <p className="lead">
              Founded in 2022 by a team of AI researchers and enterprise software veterans, Omnibrix was born from a simple observation: AI was too complicated and expensive for most businesses to adopt.
            </p>
            <p>
              We saw brilliant AI research locked in academic papers while businesses struggled with manual processes. We witnessed companies spending millions on AI projects that never made it to production. We heard countless stories of failed AI implementations due to complexity and cost.
            </p>
            <p>
              So we set out to change that. We built Omnibrix on the belief that enterprise-grade AI should be as easy to deploy as a mobile app and as affordable as a SaaS subscription. Today, we're proud to serve businesses worldwide, democratizing access to AI super agents that transform operations.
            </p>
            <div className="story-achievements">
              <div className="achievement">
                <i className="fas fa-award"></i>
                <div>
                  <strong>Best AI Platform 2024</strong>
                  <span>TechCrunch Disrupt</span>
                </div>
              </div>
              <div className="achievement">
                <i className="fas fa-star"></i>
                <div>
                  <strong>Top 10 AI Startups</strong>
                  <span>Forbes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="story-visual scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="story-stats-grid">
              <StatCounter target="2022" label="Founded" />
              <StatCounter target="150" label="Team Members" />
              <StatCounter target="500" label="Enterprise Clients" />
              <StatCounter target="50" label="Countries Served" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
