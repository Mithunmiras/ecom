import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navMenu = document.getElementById('navMenu');
      const mobileToggle = document.getElementById('mobileToggle');
      
      if (isMobileMenuOpen && 
          navMenu && 
          !navMenu.contains(event.target) && 
          mobileToggle && 
          !mobileToggle.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Get wishlist count from localStorage
  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setWishlistCount(wishlist.length);
    };
    
    updateWishlistCount();
    
    // Listen for wishlist updates
    window.addEventListener('wishlistUpdated', updateWishlistCount);
    
    return () => {
      window.removeEventListener('wishlistUpdated', updateWishlistCount);
    };
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
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (e, index) => {
    e.preventDefault();
    // Only toggle dropdown on mobile
    if (window.innerWidth <= 968) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="mx-auto max-w-7xl px-6">
          <div className="top-bar-content flex items-center justify-between gap-4">
            <div className="top-bar-left flex items-center gap-6">
              <a href="tel:+1234567890" className="flex items-center gap-2">
                <i className="fas fa-phone"></i> <span className="hidden sm:inline">+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@luxejewels.com" className="flex items-center gap-2">
                <i className="fas fa-envelope"></i> <span className="hidden md:inline">info@luxejewels.com</span>
              </a>
            </div>
            <div className="top-bar-right flex items-center gap-4">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="mx-auto max-w-7xl px-6">
          <div className="nav-content flex items-center justify-between gap-8">
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
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''} flex items-center gap-8`} id="navMenu">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`${item.dropdown ? 'dropdown' : ''} ${activeDropdown === index ? 'active' : ''}`}
                  onMouseEnter={() => item.dropdown && window.innerWidth > 968 && setIsDropdownOpen(true)}
                  onMouseLeave={() => item.dropdown && window.innerWidth > 968 && setIsDropdownOpen(false)}
                >
                  <a 
                    href={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={(e) => item.dropdown ? handleDropdownClick(e, index) : handleNavigation(e, item.path)}
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
                title="My Account"
              >
                <i className="fas fa-user"></i>
              </a>
              <a 
                href="/wishlist" 
                id="wishlistIcon"
                onClick={(e) => handleNavigation(e, '/wishlist')}
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
