import React, { useEffect, useState } from 'react';

export default function PageHeader() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Let's Build Something Amazing";

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
          <span className="page-badge fade-in-up">Get In Touch</span>
          <h1 className="page-title">
            <span className="typing-text">
              {displayedText}
              {displayedText.length < fullText.length && '|'}
            </span>
          </h1>
          <p className="page-subtitle fade-in-up" style={{ animationDelay: '0.4s' }}>
            Ready to transform your business with AI? Our experts are here to help. Get started with a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
