import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard.jsx';

const products = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, basil on crispy crust",
    price: "₦2,500",
    originalPrice: "₦3,000",
    image: "/Restaurants/image.png",
    category: "Pizza",
    rating: 4.5,
    reviews: 128,
    badge: "Popular"
  },
  {
    id: 2,
    name: "Spicy Jollof Rice Bowl",
    description: "Nigerian spicy jollof with grilled chicken and plantain",
    price: "₦1,800",
    image: "/Restaurants/image%20(1).png",
    category: "Nigerian",
    rating: 4.8,
    reviews: 256,
    badge: "Bestseller"
  },
  {
    id: 3,
    name: "Crispy Chicken Burger",
    description: "Buttermilk fried chicken, lettuce, mayo in brioche bun",
    price: "₦2,200",
    image: "/Restaurants/image%20(2).png",
    category: "Burgers",
    rating: 4.6,
    reviews: 189,
  },
  {
    id: 4,
    name: "Creamy Pasta Alfredo",
    description: "Fettuccine in rich parmesan cream sauce with herbs",
    price: "₦2,800",
    image: "/Restaurants/image%20(3).png",
    category: "Pasta",
    rating: 4.7,
    reviews: 145,
  },
  {
    id: 5,
    name: "Beef Suya Wrap",
    description: "Spicy suya beef with veggies in soft tortilla wrap",
    price: "₦1,500",
    originalPrice: "₦1,800",
    image: "/Restaurants/generated-image.png",
    category: "Nigerian",
    rating: 4.4,
    reviews: 98,
    badge: "New"
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: "₦1,200",
    image: "/Restaurants/generated-image%20(1).png",
    category: "Desserts",
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 7,
    name: "Caesar Salad Bowl",
    description: "Crisp romaine, parmesan, croutons, caesar dressing",
    price: "₦1,600",
    image: "/Restaurants/image.png",
    category: "Salads",
    rating: 4.3,
    reviews: 87,
  },
  {
    id: 8,
    name: "BBQ Chicken Pizza",
    description: "BBQ chicken, onions, bell peppers, mozzarella",
    price: "₦2,900",
    image: "/Restaurants/image%20(1).png",
    category: "Pizza",
    rating: 4.6,
    reviews: 167,
  },
  {
    id: 9,
    name: "Grilled Fish & Chips",
    description: "Crispy fried fish fillet with golden fries and tartar sauce",
    price: "₦3,200",
    image: "/Restaurants/image%20(2).png",
    category: "Seafood",
    rating: 4.7,
    reviews: 134,
    badge: "Premium"
  },
  {
    id: 10,
    name: "Veggie Spring Rolls",
    description: "Fresh vegetables wrapped in crispy golden rolls",
    price: "₦1,000",
    image: "/Restaurants/image%20(3).png",
    category: "Appetizers",
    rating: 4.2,
    reviews: 76,
  },
  {
    id: 11,
    name: "Mango Smoothie Bowl",
    description: "Tropical mango smoothie topped with fresh fruits and granola",
    price: "₦1,400",
    image: "/Restaurants/generated-image.png",
    category: "Beverages",
    rating: 4.5,
    reviews: 92,
  },
  {
    id: 12,
    name: "Spicy Beef Tacos",
    description: "Three soft tacos with seasoned beef, salsa, and sour cream",
    price: "₦2,100",
    image: "/Restaurants/generated-image%20(1).png",
    category: "Mexican",
    rating: 4.6,
    reviews: 143,
  }
];

const categories = ["All", "Pizza", "Burgers", "Nigerian", "Pasta", "Desserts", "Salads", "Seafood", "Appetizers", "Beverages", "Mexican"];

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity");

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "price-low") {
        return parseFloat(a.price.replace(/[₦,]/g, '')) - parseFloat(b.price.replace(/[₦,]/g, ''));
      }
      if (sortBy === "price-high") {
        return parseFloat(b.price.replace(/[₦,]/g, '')) - parseFloat(a.price.replace(/[₦,]/g, ''));
      }
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      return b.reviews - a.reviews;
    });

    return sorted;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
  <section className="py-16 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Explore Our Menu
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Discover delicious meals from top restaurants. Fresh, fast, and delivered to your door.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-slate-200 focus:border-purple-600 focus:outline-none transition-colors duration-300 shadow-sm"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <label className="text-sm font-semibold text-slate-700 hidden sm:block">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-full border-2 border-slate-200 focus:border-purple-600 focus:outline-none transition-colors duration-300 bg-white shadow-sm font-medium text-slate-700 cursor-pointer"
            >
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="mb-8 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          <div className="flex gap-3 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-purple-300 hover:text-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">No dishes found</h3>
            <p className="text-slate-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">
                Showing <span className="font-bold text-purple-600">{filteredAndSortedProducts.length}</span> delicious dishes
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
