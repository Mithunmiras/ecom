import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <nav className="nav container">
        <a href="/" className="nav-logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" width="40" height="40">
              <circle cx="20" cy="20" r="3" fill="#00ACD4" className="pulse-dot"/>
              <circle cx="10" cy="10" r="2" fill="#00ACD4" opacity="0.8"/>
              <circle cx="30" cy="10" r="2" fill="#00ACD4" opacity="0.8"/>
              <circle cx="10" cy="30" r="2" fill="#00ACD4" opacity="0.8"/>
              <circle cx="30" cy="30" r="2" fill="#00ACD4" opacity="0.8"/>
              <circle cx="20" cy="5" r="1.5" fill="#86E3CE" opacity="0.6"/>
              <circle cx="35" cy="20" r="1.5" fill="#86E3CE" opacity="0.6"/>
              <circle cx="20" cy="35" r="1.5" fill="#86E3CE" opacity="0.6"/>
              <circle cx="5" cy="20" r="1.5" fill="#86E3CE" opacity="0.6"/>
            </svg>
          </div>
          <span className="logo-text">
            <span className="logo-omni">omni</span>
            <span className="logo-brix">brix</span>
          </span>
        </a>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.path} className="nav-item">
                <a 
                  href={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    navigate(item.path);
                    setIsMobileMenuOpen(false); 
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="/contact" 
            className="btn btn-primary nav-cta" 
            onClick={(e) => { 
              e.preventDefault(); 
              navigate('/contact'); 
              setIsMobileMenuOpen(false); 
            }}
          >
            Get Started
          </a>
        </div>

        <div 
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          id="navToggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
