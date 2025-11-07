import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="empty-cart">
      <i className="fas fa-shopping-bag"></i>
      <h2>Your cart is empty</h2>
      <p>Start adding some beautiful jewelry to your collection!</p>
      <button 
        className="btn btn-primary" 
        onClick={() => navigate('/products')}
      >
        Shop Now
      </button>
    </div>
  );
}
