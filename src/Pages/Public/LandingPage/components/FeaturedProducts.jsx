import React, { useContext } from "react";
import { getFeaturedProducts } from "../../ProductPage/constant/products";
import { CartContext } from "../../../../context/CartContext";

const FeaturedProducts = () => {
  const products = getFeaturedProducts(8);
  const { addToCart } = useContext(CartContext);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    return stars;
  };

  return (
    <section className="featured-products">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="section-header">
          <h2 className="section-title">Featured Collection</h2>
          <p className="section-subtitle">Our most popular pieces</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={product.id} className={`product-card animate-delay-${(index % 4) + 1}`}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
                <div className="product-actions">
                  <button className="action-btn" aria-label="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </button>
                  <button className="action-btn" aria-label="Quick view">
                    <i className="far fa-eye"></i>
                  </button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  <span className="stars">{renderStars(product.rating)}</span>
                  <span>({product.reviews})</span>
                </div>
                <div className="product-price">
                  <span className="current-price">${product.price}</span>
                  {product.oldPrice && (
                    <span className="old-price">${product.oldPrice}</span>
                  )}
                </div>
                <button 
                  className="btn btn-primary add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  <i className="fas fa-shopping-bag"></i> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="/products" className="btn btn-outline">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
