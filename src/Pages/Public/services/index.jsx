import React, { useEffect } from 'react';
import Header from '../LandingPage/components/Header';
import Footer from '../LandingPage/components/Footer';
import PageHeader from './components/PageHeader';
import ServicesDetail from './components/ServicesDetail';
import ProcessSection from './components/ProcessSection';
import CTA from '../LandingPage/components/CTA';

export default function ServicesPage() {
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
        <ServicesDetail />
        <ProcessSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
