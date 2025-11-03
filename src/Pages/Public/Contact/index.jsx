import React from 'react';
import Header from '../LandingPage/components/Header.jsx';
import Footer from '../LandingPage/components/Footer.jsx';
import PageHeader from './Components/PageHeader.jsx';
import ContactForm from './Components/ContactForm.jsx';
import ContactInfo from './Components/ContactInfo.jsx';
import MapSection from './Components/MapSection.jsx';
import FAQSection from './Components/FAQSection.jsx';

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <main>
        <PageHeader />
        
        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              <div>
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        <MapSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
