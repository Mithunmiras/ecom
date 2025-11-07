import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../layouts/headers/Index';
import Footer from '../LandingPage/components/Footer';
import { CartContext } from '../../../context/CartContext';
import WishlistItems from './Components/WishlistItems';
import EmptyWishlist from './Components/EmptyWishlist';

export default function WishlistPage() {
  const navigate = useNavigate();
  const { addToCart, showToast } = useContext(CartContext);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    loadWishlist();
    
    // Listen for wishlist updates
    const handleWishlistUpdate = () => {
      loadWishlist();
    };
    
    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    
    return () => {
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
    };
  }, []);

  const loadWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlistItems(wishlist);
  };

  const removeFromWishlist = (productId) => {
    const wishlist = wishlistItems.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    setWishlistItems(wishlist);
    
    // Dispatch event to update header count
    window.dispatchEvent(new Event('wishlistUpdated'));
    
    showToast('Removed from wishlist', 'info');
  };

  const moveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  const clearWishlist = () => {
    if (window.confirm('Are you sure you want to clear your wishlist?')) {
      localStorage.setItem('wishlist', JSON.stringify([]));
      setWishlistItems([]);
      window.dispatchEvent(new Event('wishlistUpdated'));
      showToast('Wishlist cleared', 'info');
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container mx-auto max-w-7xl px-6">
          <a href="/">Home</a>
          <i className="fas fa-chevron-right"></i>
          <span>Wishlist</span>
        </div>
      </div>

      {/* Wishlist Section */}
      <section className="wishlist-section">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="wishlist-header">
            <h1 className="page-title">My Wishlist</h1>
            {wishlistItems.length > 0 && (
              <button 
                className="btn btn-outline"
                onClick={clearWishlist}
              >
                <i className="fas fa-trash"></i> Clear Wishlist
              </button>
            )}
          </div>

          {wishlistItems.length === 0 ? (
            <EmptyWishlist />
          ) : (
            <WishlistItems 
              items={wishlistItems}
              onRemove={removeFromWishlist}
              onMoveToCart={moveToCart}
            />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
