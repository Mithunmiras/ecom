import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'consulting',
    icon: 'fa-brain',
    title: 'AI Consulting Services',
    lead: 'Transform your business with strategic AI consulting that drives measurable results.',
    description: 'Our expert consultants work closely with your team to identify opportunities, develop strategies, and implement AI solutions that align with your business goals. We provide end-to-end guidance from ideation to execution.',
    features: [
      {
        icon: 'fa-lightbulb',
        title: 'Strategy Development',
        description: 'Create comprehensive AI strategies aligned with business objectives'
      },
      {
        icon: 'fa-search',
        title: 'Use Case Identification',
        description: 'Discover high-impact AI opportunities in your workflows'
      },
      {
        icon: 'fa-chart-line',
        title: 'ROI Analysis',
        description: 'Quantify the business value and return on AI investments'
      },
      {
        icon: 'fa-users',
        title: 'Change Management',
        description: 'Guide your team through AI transformation smoothly'
      }
    ],
    reverse: false
  },
  {
    id: 'roadmap',
    icon: 'fa-route',
    title: 'AI Digital Roadmap',
    lead: 'Chart your path to AI excellence with a comprehensive digital transformation roadmap.',
    description: 'We create detailed, actionable roadmaps that outline every step of your AI journey. From current state assessment to future vision, our roadmaps provide clarity and direction for successful AI implementation.',
    features: [
      {
        icon: 'fa-clipboard-check',
        title: 'Current State Assessment',
        description: 'Evaluate your existing technology landscape and capabilities'
      },
      {
        icon: 'fa-puzzle-piece',
        title: 'Gap Analysis',
        description: 'Identify gaps between current state and desired outcomes'
      },
      {
        icon: 'fa-tasks',
        title: 'Implementation Plan',
        description: 'Detailed phased approach with timelines and milestones'
      },
      {
        icon: 'fa-bullseye',
        title: 'Success Metrics',
        description: 'Define KPIs and measurement frameworks for tracking progress'
      }
    ],
    reverse: true
  },
  {
    id: 'agents',
    icon: 'fa-robot',
    title: 'Build Custom AI Agents',
    lead: 'Develop intelligent agents that automate complex workflows and enhance productivity.',
    description: 'Our custom AI agents are designed specifically for your business processes. They learn from your data, adapt to your workflows, and continuously improve performance while seamlessly integrating with your existing systems.',
    features: [
      {
        icon: 'fa-code',
        title: 'Custom Development',
        description: 'Build agents tailored to your unique business requirements'
      },
      {
        icon: 'fa-puzzle-piece',
        title: 'Seamless Integration',
        description: 'Connect with your existing tools and workflows'
      },
      {
        icon: 'fa-sync-alt',
        title: 'Continuous Learning',
        description: 'Agents that improve over time with machine learning'
      },
      {
        icon: 'fa-expand-arrows-alt',
        title: 'Scalable Architecture',
        description: 'Grow your AI capabilities as your business expands'
      }
    ],
    reverse: false
  },
  {
    id: 'voice',
    icon: 'fa-microphone-alt',
    title: 'Voice AI Solutions',
    lead: 'Deploy enterprise-grade voice AI in one click. Pay only for what you use.',
    description: 'Transform customer interactions with intelligent voice AI that works 24/7. Our one-click deployment gets you up and running in minutes, with transparent pay-per-use pricing that scales with your needs.',
    features: [
      {
        icon: 'fa-mouse-pointer',
        title: 'One-Click Deployment',
        description: 'Install and configure voice AI in under 5 minutes'
      },
      {
        icon: 'fa-dollar-sign',
        title: 'Pay-Per-Use Pricing',
        description: '$0.08/min standard | $0.12/min premium'
      },
      {
        icon: 'fa-gift',
        title: '14-Day Free Trial',
        description: 'Test all features risk-free, no credit card required'
      },
      {
        icon: 'fa-clock',
        title: '24/7 Availability',
        description: 'Never miss a customer interaction, day or night'
      }
    ],
    featured: true,
    pricing: {
      standard: { price: '$0.08', unit: 'per minute', tier: 'Standard Voice AI' },
      premium: { price: '$0.12', unit: 'per minute', tier: 'Premium Voice AI' }
    },
    reverse: true
  }
];

export default function ServicesDetail() {
  return (
    <section className="services-detail-section section">
      <div className="container">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-detail scroll-reveal ${service.reverse ? 'service-detail-reverse' : ''} ${service.featured ? 'service-detail-featured' : ''}`}
          >
            {service.featured && (
              <div className="featured-banner">
                <i className="fas fa-star"></i> Most Popular Service
              </div>
            )}
            
            <div className="service-detail-content">
              <div className="service-detail-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h2>{service.title}</h2>
              <p className="lead">{service.lead}</p>
              <p>{service.description}</p>

              <div className="service-features-grid">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <i className={`fas ${feature.icon}`}></i>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {service.pricing && (
                <div className="pricing-highlight">
                  <h4>Transparent Pricing</h4>
                  <div className="pricing-options">
                    <div className="pricing-option">
                      <span className="price">{service.pricing.standard.price}</span>
                      <span className="unit">{service.pricing.standard.unit}</span>
                      <span className="tier">{service.pricing.standard.tier}</span>
                    </div>
                    <div className="pricing-option">
                      <span className="price">{service.pricing.premium.price}</span>
                      <span className="unit">{service.pricing.premium.unit}</span>
                      <span className="tier">{service.pricing.premium.tier}</span>
                    </div>
                  </div>
                </div>
              )}

              <Link to="/contact" className={`btn btn-primary btn-lg ${service.featured ? 'pulse-btn' : ''}`}>
                {service.featured ? 'Start Free Trial' : 'Learn More'} <i className={`fas ${service.featured ? 'fa-rocket' : 'fa-arrow-right'}`}></i>
              </Link>
            </div>

            <div className="service-detail-visual">
              <div className="animated-illustration">
                <div className="illustration-element element-1"></div>
                <div className="illustration-element element-2"></div>
                <div className="illustration-element element-3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
