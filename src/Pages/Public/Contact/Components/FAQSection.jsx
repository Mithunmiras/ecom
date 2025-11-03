import React, { useState } from 'react';

const faqs = [
  {
    question: 'How quickly can I deploy AI Super Agents?',
    answer: 'Most businesses can deploy their first AI Super Agent within 24-48 hours. Our one-click deployment system makes it incredibly fast to get started. Complex enterprise deployments typically take 1-2 weeks including customization and integration.'
  },
  {
    question: 'What pricing model do you offer?',
    answer: 'We operate on a pay-per-use model - you only pay for the actions your AI Super Agents perform. No upfront costs, no hidden fees. Enterprise customers can opt for custom pricing based on volume and specific needs.'
  },
  {
    question: 'Can I try before committing?',
    answer: 'Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. You can deploy up to 3 AI Super Agents and see the results firsthand before making any commitment.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We provide 24/7 support through multiple channels including chat, email, and phone. Enterprise customers get dedicated account managers and priority support. We also offer comprehensive documentation, video tutorials, and regular webinars.'
  },
  {
    question: 'How do you ensure data security?',
    answer: 'Security is our top priority. We use enterprise-grade encryption, comply with GDPR and SOC 2 standards, and store data in secure, redundant data centers. We never share your data with third parties and offer on-premise deployment options for sensitive industries.'
  },
  {
    question: 'Can AI Super Agents integrate with my existing systems?',
    answer: 'Yes! Our AI Super Agents integrate seamlessly with 1000+ popular business tools including CRMs, project management software, communication platforms, and custom APIs. Our team can help with custom integrations if needed.'
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section section-dark">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-badge">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item scroll-reveal ${activeIndex === index ? 'active' : ''}`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h4>{faq.question}</h4>
                <i className="fas fa-plus"></i>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
