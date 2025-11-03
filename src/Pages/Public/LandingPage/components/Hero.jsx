import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = 'Transform Your Business with AI Super Agents';
  
  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setIsTypingComplete(true), 1000);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Counter animation
  const [counters, setCounters] = useState({ agents: 0, satisfaction: 0, support: 0 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector('.hero-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const targets = { agents: 500, satisfaction: 98, support: 24 };
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        agents: Math.floor(targets.agents * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        support: Math.floor(targets.support * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
  };

  return (
    <section className="hero">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', position: 'relative' }}>
        <div className="hero-content" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <div className="hero-badge fade-in-up" style={{ animationDelay: '0.1s', display: 'inline-flex', margin: '0 auto 2rem' }}>
            <i className="fas fa-robot"></i>
            <span>AI Super Agent Technology</span>
          </div>
          <h1 className="hero-title" style={{ textAlign: 'center' }}>
            <span className={`typing-text ${isTypingComplete ? 'typing-complete' : ''}`}>
              {displayText}
              {!isTypingComplete && <span className="cursor">|</span>}
            </span>
          </h1>
          <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.4s', margin: '0 auto 2rem', maxWidth: '700px' }}>
            Deploy enterprise-grade AI agents in one click. Build custom AI solutions, create strategic roadmaps, and implement voice AI that works 24/7.
          </p>
          <div className="hero-cta fade-in-up" style={{ animationDelay: '0.6s', justifyContent: 'center' }}>
            <a href="#contact" className="btn btn-primary btn-lg pulse-btn" onClick={(e) => { e.preventDefault(); document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <span>Start Free Trial</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#services" className="btn btn-outline btn-lg" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <span>Explore Services</span>
              <i className="fas fa-compass"></i>
            </a>
          </div>
          <div className="hero-stats fade-in-up" style={{ animationDelay: '0.8s', maxWidth: '800px', margin: '0 auto', justifyContent: 'center' }}>
            <div className="stat-item">
              <div className="stat-number">{counters.agents}+</div>
              <div className="stat-label">AI Agents Deployed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.satisfaction}%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.support}/7</div>
              <div className="stat-label">Hour Support</div>
            </div>
          </div>
        </div>
        <div className="hero-visual fade-in-right" style={{ display: 'none' }}>
          <div className="floating-card card-1">
            <i className="fas fa-brain"></i>
            <span>AI Consulting</span>
          </div>
          <div className="floating-card card-2">
            <i className="fas fa-route"></i>
            <span>Digital Roadmap</span>
          </div>
          <div className="floating-card card-3">
            <i className="fas fa-robot"></i>
            <span>Custom Agents</span>
          </div>
          <div className="floating-card card-4">
            <i className="fas fa-microphone-alt"></i>
            <span>Voice AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;