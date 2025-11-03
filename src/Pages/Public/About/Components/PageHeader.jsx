import React, { useEffect, useState } from 'react';

export default function PageHeader() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Building the Future with AI Super Agents";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-content">
          <span className="page-badge fade-in-up">About Omnibrix</span>
          <h1 className="page-title">
            <span className="typing-text">
              {displayedText}
              {displayedText.length < fullText.length && '|'}
            </span>
          </h1>
          <p className="page-subtitle fade-in-up" style={{ animationDelay: '0.4s' }}>
            We're on a mission to democratize enterprise-grade AI, empowering businesses of all sizes with intelligent super agents that augment human capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}
