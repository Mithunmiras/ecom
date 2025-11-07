import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmptyWishlist() {
  const navigate = useNavigate();

  return (
    <div className="empty-wishlist">
      <i className="fas fa-heart"></i>
      <h2>Your wishlist is empty</h2>
      <p>Save your favorite items so you don't lose sight of them!</p>
      <button 
        className="btn btn-primary btn-compact" 
        onClick={() => navigate('/products')}
      >
        Discover Products
      </button>
    </div>
  );
}
