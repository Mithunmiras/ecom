import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get wishlist count from localStorage
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlistCount(wishlist.length);
  }, []);

  const cartCount = getTotalItems();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/products" },
    { 
      label: "Collections", 
      path: "#",
      dropdown: [
        { label: "Rings", path: "/products?category=rings" },
        { label: "Necklaces", path: "/products?category=necklaces" },
        { label: "Earrings", path: "/products?category=earrings" },
        { label: "Bracelets", path: "/products?category=bracelets" },
        { label: "Watches", path: "/products?category=watches" },
      ]
    },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNavigation = (e, path) => {
    e.preventDefault();
    if (path !== '#') {
      navigate(path);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <a href="tel:+1234567890">
                <i className="fas fa-phone"></i> +1 (234) 567-890
              </a>
              <a href="mailto:info@luxejewels.com">
                <i className="fas fa-envelope"></i> info@luxejewels.com
              </a>
            </div>
            <div className="top-bar-right">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo">
              <a 
                href="/" 
                onClick={(e) => handleNavigation(e, '/')}
              >
                <i className="fas fa-gem"></i>
                <span>Luxe Jewels</span>
              </a>
            </div>

            {/* Navigation Menu */}
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className={item.dropdown ? 'dropdown' : ''}
                  onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
                  onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
                >
                  <a 
                    href={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={(e) => handleNavigation(e, item.path)}
                  >
                    {item.label}
                    {item.dropdown && <i className="fas fa-chevron-down"></i>}
                  </a>
                  {item.dropdown && (
                    <ul className="dropdown-menu">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a 
                            href={subItem.path}
                            onClick={(e) => handleNavigation(e, subItem.path)}
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Navigation Icons */}
            <div className="nav-icons">
              <a 
                href="#" 
                className="search-icon" 
                id="searchToggle"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSearchOpen(!isSearchOpen);
                }}
              >
                <i className="fas fa-search"></i>
              </a>
              <a 
                href="/account" 
                onClick={(e) => handleNavigation(e, '/account')}
              >
                <i className="fas fa-user"></i>
              </a>
              <a 
                href="#" 
                id="wishlistIcon"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fas fa-heart"></i>
                {wishlistCount > 0 && (
                  <span className="badge" id="wishlistCount">{wishlistCount}</span>
                )}
              </a>
              <a 
                href="/cart" 
                id="cartIcon"
                onClick={(e) => handleNavigation(e, '/cart')}
              >
                <i className="fas fa-shopping-bag"></i>
                {cartCount > 0 && (
                  <span className="badge" id="cartCount">{cartCount}</span>
                )}
              </a>
              <button 
                className="mobile-toggle" 
                id="mobileToggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className={`search-bar ${isSearchOpen ? 'active' : ''}`} id="searchBar">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search for jewelry..." 
                id="searchInput"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const query = e.target.value;
                    navigate(`/products?search=${query}`);
                    setIsSearchOpen(false);
                  }
                }}
              />
              <button 
                type="button" 
                id="searchBtn"
                onClick={() => {
                  const searchInput = document.getElementById('searchInput');
                  if (searchInput?.value) {
                    navigate(`/products?search=${searchInput.value}`);
                    setIsSearchOpen(false);
                  }
                }}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
