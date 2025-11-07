import React, { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';

export default function CartItems() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  const handleRemove = (productId) => {
    if (window.confirm('Remove this item from cart?')) {
      removeFromCart(productId);
    }
  };

  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <div className="cart-item-meta">
              {item.category} | {item.material || 'Premium Material'}
            </div>
            <div className="quantity-controls">
              <button 
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              />
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            <div className="cart-item-price">
              ${(item.price * item.quantity).toLocaleString()}
            </div>
          </div>
          <div className="cart-item-actions">
            <button 
              className="remove-item" 
              onClick={() => handleRemove(item.id)}
              aria-label="Remove item"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
