import React from 'react';

export default function WishlistItems({ items, onRemove, onMoveToCart }) {
  return (
    <div className="wishlist-grid">
      {items.map((item) => (
        <div key={item.id} className="wishlist-card">
          <div className="wishlist-card-image">
            <img src={item.image} alt={item.name} />
            {item.badge && (
              <span className="product-badge">{item.badge}</span>
            )}
          </div>
          
          <div className="wishlist-card-content">
            <span className="product-category">{item.category}</span>
            <h3 className="product-name">{item.name}</h3>
            
            <div className="product-rating">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                if (starValue <= Math.floor(item.rating)) {
                  return <i key={index} className="fas fa-star"></i>;
                } else if (starValue - 0.5 <= item.rating) {
                  return <i key={index} className="fas fa-star-half-alt"></i>;
                } else {
                  return <i key={index} className="far fa-star"></i>;
                }
              })}
              <span className="reviews">({item.reviews})</span>
            </div>
            
            <div className="product-price">
              <span className="current-price">₹{item.price.toLocaleString('en-IN')}</span>
              {item.oldPrice && (
                <span className="old-price">₹{item.oldPrice.toLocaleString('en-IN')}</span>
              )}
            </div>
            
            <div className="wishlist-card-actions">
              <button 
                className="btn btn-primary"
                onClick={() => onMoveToCart(item)}
              >
                <i className="fas fa-shopping-bag"></i> Add to Cart
              </button>
              <button 
                className="btn-icon-remove"
                onClick={() => onRemove(item.id)}
                aria-label="Remove from wishlist"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
