import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Elegant Gold Necklace",
      category: "Necklaces",
      price: 299,
      oldPrice: 399,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
      rating: 4.9,
      reviews: 124,
      badge: "New"
    },
    {
      id: 2,
      name: "Diamond Ring",
      category: "Rings",
      price: 499,
      oldPrice: 599,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
      rating: 5.0,
      reviews: 89,
      badge: "Featured"
    },
    {
      id: 3,
      name: "Pearl Earrings",
      category: "Earrings",
      price: 199,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 4,
      name: "Gold Bracelet",
      category: "Bracelets",
      price: 349,
      oldPrice: 449,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
      rating: 4.9,
      reviews: 92,
      badge: "Sale"
    },
    {
      id: 5,
      name: "Sapphire Pendant",
      category: "Necklaces",
      price: 599,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
      rating: 5.0,
      reviews: 67
    },
    {
      id: 6,
      name: "Emerald Ring",
      category: "Rings",
      price: 799,
      oldPrice: 899,
      image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=400",
      rating: 4.9,
      reviews: 43,
      badge: "Hot"
    },
    {
      id: 7,
      name: "Diamond Studs",
      category: "Earrings",
      price: 399,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400",
      rating: 4.7,
      reviews: 201
    },
    {
      id: 8,
      name: "Tennis Bracelet",
      category: "Bracelets",
      price: 899,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400",
      rating: 5.0,
      reviews: 78,
      badge: "Luxury"
    }
  ];

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
                <button className="btn btn-primary add-to-cart">
                  Add to Cart
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
