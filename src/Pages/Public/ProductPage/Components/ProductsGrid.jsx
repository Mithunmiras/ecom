import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../../context/CartContext';

export default function ProductsGrid({ products }) {
  const navigate = useNavigate();
  const { addToCart, showToast } = useContext(CartContext);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    return stars;
  };

  const handleAddToWishlist = (product, e) => {
    e.stopPropagation();
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const exists = wishlist.find(item => item.id === product.id);
    
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      
      // Update wishlist count
      const event = new Event('wishlistUpdated');
      window.dispatchEvent(event);
      
      showToast('Successfully added to wishlist!', 'success');
    } else {
      showToast('Already in wishlist!', 'info');
    }
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
  };

  if (products.length === 0) {
    return (
      <div className="products-grid">
        <div className="empty-state" style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem 2rem' }}>
          <i className="fas fa-search" style={{ fontSize: '5rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}></i>
          <h3>No products found</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
            Try adjusting your filters or search terms
          </p>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            Reset Filters
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`product-card animate-delay-${(index % 8) + 1}`}
          onClick={() => navigate(`/product/${product.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <div className="product-image">
            <img src={product.image} alt={product.name} />
            {product.badge && <span className="product-badge">{product.badge}</span>}
            <div className="product-actions">
              <button 
                className="action-btn"
                onClick={(e) => handleAddToWishlist(product, e)}
                title="Add to Wishlist"
              >
                <i className="far fa-heart"></i>
              </button>
              <button 
                className="action-btn"
                onClick={(e) => e.stopPropagation()}
                title="Quick View"
              >
                <i className="far fa-eye"></i>
              </button>
            </div>
          </div>
          <div className="product-info">
            <span className="product-category">{product.category}</span>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-rating">
              {renderStars(product.rating)}
              <span className="reviews">({product.reviews})</span>
            </div>
            <div className="product-price">
              <span className="current-price">${product.price.toLocaleString()}</span>
              {product.oldPrice && (
                <span className="old-price">${product.oldPrice.toLocaleString()}</span>
              )}
            </div>
            <button 
              className="btn btn-primary add-to-cart-btn"
              onClick={(e) => handleAddToCart(product, e)}
            >
              <i className="fas fa-shopping-bag"></i> Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
