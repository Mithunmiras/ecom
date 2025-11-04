import React, { useEffect, useState } from 'react';

export default function PageHeader() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'AI Solutions for Every Business Need';
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-content">
          <span className="page-badge fade-in-up">Our Services</span>
          <h1 className="page-title">
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </h1>
          <p className="page-subtitle fade-in-up" style={{ animationDelay: '0.4s' }}>
            From strategic consulting to deployment, we provide comprehensive AI services tailored to your business objectives.
          </p>
        </div>
      </div>
    </section>
  );
}
