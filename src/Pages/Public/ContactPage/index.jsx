import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submission:', {
      ...formData,
      date: new Date().toISOString()
    });
    setShowSuccessModal(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const faqItems = [
    {
      question: "What are your shipping options?",
      answer: "We offer free standard shipping on orders over ₹200. Express shipping is available for an additional fee. All orders are insured and require signature upon delivery."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items in original condition. Custom or engraved pieces cannot be returned unless defective."
    },
    {
      question: "Do you offer jewelry cleaning services?",
      answer: "Yes! We offer complimentary cleaning services for all jewelry purchased from Luxe Jewels. Visit our store or mail your pieces to us."
    },
    {
      question: "Can I customize a piece?",
      answer: "Absolutely! Our design team can work with you to create a custom piece. Contact us to schedule a consultation with one of our designers."
    },
    {
      question: "Are your gemstones certified?",
      answer: "Yes, all diamonds over 0.5 carats come with certification from GIA or other recognized gemological laboratories. We provide authenticity certificates for all precious gemstones."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we offer flexible financing options through our partners. Apply at checkout for instant approval. Terms and conditions apply."
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section 
        className="page-header"
        style={{ 
          background: "linear-gradient(135deg, rgba(184, 134, 11, 0.9), rgba(139, 69, 19, 0.8)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920') center/cover"
        }}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-container">
              <h2>Contact Information</h2>
              <div className="contact-info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h3>Visit Us</h3>
                    <p>123 Luxury Avenue<br/>New York, NY 10001<br/>United States</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info-content">
                    <h3>Call Us</h3>
                    <p>Phone: +1 (234) 567-890<br/>Toll-Free: 1-800-LUXE-GEM<br/>Mon-Fri: 9AM - 6PM EST</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h3>Email Us</h3>
                    <p>General: info@luxejewels.com<br/>Support: support@luxejewels.com<br/>Sales: sales@luxejewels.com</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="info-content">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="social-connect">
                <h3>Connect With Us</h3>
                <div className="social-links-large">
                  <a href="#" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="section-title">Find Our Store</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span>{item.question}</span>
                  <i className="fas fa-chevron-down"></i>
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal active">
          <div className="modal-content success-modal">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Message Sent!</h2>
            <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
            <button 
              className="btn btn-primary" 
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
