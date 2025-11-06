import React from "react";

const FooterJewelry = () => {
  return (
    <footer style={{
      background: '#1a1a1a',
      color: 'white',
      padding: '4rem 0 2rem'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <div style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: '#FFD700',
              fontFamily: 'Playfair Display, serif'
            }}>
              <i className="fas fa-gem" style={{ marginRight: '8px' }}></i>
              <span>Luxe Jewels</span>
            </div>
            <p style={{ color: '#999', marginBottom: '1.5rem' }}>
              Crafting timeless elegance since 1990. We believe in creating jewelry that tells your unique story.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {['facebook-f', 'instagram', 'pinterest', 'twitter'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    color: '#999',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#B8860B';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#999';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'white' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['About Us', 'Shop', 'Contact', 'Size Guide', 'Care Instructions'].map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{ color: '#999', textDecoration: 'none', transition: 'all 0.3s ease' }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#B8860B';
                      e.currentTarget.style.paddingLeft = '0.5rem';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = '#999';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'white' }}>Customer Service</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Shipping Information', 'Returns & Exchanges', 'Privacy Policy', 'Terms & Conditions', 'FAQ'].map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href="#"
                    style={{ color: '#999', textDecoration: 'none', transition: 'all 0.3s ease' }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#B8860B';
                      e.currentTarget.style.paddingLeft = '0.5rem';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = '#999';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'white' }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem', color: '#999' }}>
                <i className="fas fa-map-marker-alt" style={{ marginTop: '0.25rem', color: '#B8860B' }}></i>
                <span>123 Luxury Ave, New York, NY 10001</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#999' }}>
                <i className="fas fa-phone" style={{ color: '#B8860B' }}></i>
                <a href="tel:+1234567890" style={{ color: '#999', textDecoration: 'none' }}>+1 (234) 567-890</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#999' }}>
                <i className="fas fa-envelope" style={{ color: '#B8860B' }}></i>
                <a href="mailto:info@luxejewels.com" style={{ color: '#999', textDecoration: 'none' }}>info@luxejewels.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: '#666', margin: 0 }}>
            © 2025 Luxe Jewels. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '2rem', opacity: '0.6' }}>
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-paypal"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterJewelry;
