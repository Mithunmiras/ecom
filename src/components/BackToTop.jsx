import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useContext(CartContext);
  const cartCount = getTotalItems();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      {isVisible && (
        <>
          <button
            className="floating-cart"
            onClick={goToCart}
            aria-label="View cart"
          >
            <i className="fas fa-shopping-bag"></i>
            {cartCount > 0 && (
              <span className="floating-cart-badge">{cartCount}</span>
            )}
          </button>
          <button
            className="scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </>
      )}
    </>
  );
}
