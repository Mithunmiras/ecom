import React from "react";

const Categories = () => {
  const categories = [
    {
      name: "Rings",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
      icon: "fa-ring"
    },
    {
      name: "Necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
      icon: "fa-gem"
    },
    {
      name: "Earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      icon: "fa-earrings"
    },
    {
      name: "Bracelets",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
      icon: "fa-bracelet"
    }
  ];

  return (
    <section className="categories">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="section-header">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Explore our curated collections</p>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <a
              key={index}
              href={`/products?category=${category.name.toLowerCase()}`}
              className={`category-card animate-delay-${index + 1}`}
            >
              <div
                className="category-image"
                style={{ background: `url('${category.image}') center/cover` }}
              />
              <div className="category-overlay">
                <i className={`fas ${category.icon}`}></i>
                <h3>{category.name}</h3>
                <span>View Collection</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
