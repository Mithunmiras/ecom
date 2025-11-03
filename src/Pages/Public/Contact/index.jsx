import React, { useEffect } from 'react';
import Header from '../LandingPage/components/Header';
import Footer from '../LandingPage/components/Footer';
import PageHeader from './Components/PageHeader';
import ContactForm from './Components/ContactForm';
import ContactInfo from './Components/ContactInfo';
import FAQSection from './Components/FAQSection';

export default function ContactPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      revealElements.forEach((el) => {
        revealObserver.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader />
        
        {/* Contact Section */}
        <section className="contact-section section">
          <div className="container">
            <div className="contact-grid">
              <ContactForm />
              <ContactInfo />
            </div>
            
            {/* Quick Start Card - Centered */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
              <div className="quick-start-card scroll-reveal" style={{ animationDelay: '0.4s', maxWidth: '600px', width: '100%' }}>
                <div className="quick-start-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Quick Start</h3>
                <p>Want to try Voice AI immediately? Start your free 14-day trial now.</p>
                <a href="/#services" className="btn btn-outline btn-block">
                  Start Free Trial <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
