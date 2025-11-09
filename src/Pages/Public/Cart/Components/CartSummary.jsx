import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../../context/CartContext';

export default function CartSummary() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, item) => {
    const price = typeof item.price === 'number' ? item.price : parseFloat(item.price);
    return total + (price * item.quantity);
  }, 0);

  const shipping = subtotal > 200 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  const freeShippingRemaining = subtotal < 200 ? (200 - subtotal).toFixed(2) : 0;

  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>
      
      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      </div>
      
      <div className="summary-row">
        <span>Shipping</span>
        <span>{shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span>
      </div>
      
      <div className="summary-row">
        <span>Tax (8%)</span>
        <span>₹{tax.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      </div>
      
      <div className="summary-row total">
        <span>Total</span>
        <span>₹{total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      </div>

      {freeShippingRemaining > 0 && (
        <p style={{ 
          fontSize: '0.875rem', 
          color: 'var(--text-light)', 
          marginTop: '1rem',
          textAlign: 'center'
        }}>
          Add ₹{Number(freeShippingRemaining).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} more for free shipping!
        </p>
      )}

      <button 
        className="btn btn-primary" 
        onClick={() => navigate('/checkout')}
        style={{ width: '100%', marginTop: '1.5rem' }}
      >
        Proceed to Checkout
      </button>
      
      <button 
        className="btn btn-outline" 
        onClick={() => navigate('/products')}
        style={{ width: '100%', marginTop: '1rem' }}
      >
        Continue Shopping
      </button>
    </div>
  );
}
