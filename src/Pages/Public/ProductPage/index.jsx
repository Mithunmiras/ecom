import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../../layouts/headers/Index';
import Footer from '../LandingPage/components/Footer';
import FiltersSidebar from './Components/FiltersSidebar';
import ProductsGrid from './Components/ProductsGrid';
import Pagination from './Components/Pagination';
import { getAllProducts } from './constant/products';

export default function ProductPage() {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  
  const [filters, setFilters] = useState({
    category: [],
    material: [],
    gemstone: [],
    minPrice: 0,
    maxPrice: 10000
  });

  const [breadcrumbText, setBreadcrumbText] = useState('Shop');
  const [pageTitle, setPageTitle] = useState('All Products');

  // Load initial state from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    if (category) {
      setFilters(prev => ({ ...prev, category: [category] }));
      const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
      setBreadcrumbText(formattedCategory);
      setPageTitle(formattedCategory);
    }
    
    if (search) {
      setPageTitle(`Search Results for "${search}"`);
    }
  }, [searchParams]);

  // Get all products
  const allProducts = getAllProducts();

  // Apply filters
  const filteredProducts = allProducts.filter(product => {
    // Category filter
    if (filters.category.length > 0) {
      if (!filters.category.includes(product.category.toLowerCase())) return false;
    }

    // Material filter
    if (filters.material.length > 0) {
      if (!filters.material.some(m => product.material?.toLowerCase().includes(m))) {
        return false;
      }
    }

    // Gemstone filter
    if (filters.gemstone.length > 0) {
      if (!filters.gemstone.some(g => product.gemstone?.toLowerCase().includes(g))) {
        return false;
      }
    }

    // Price filter
    if (product.price < filters.minPrice || product.price > filters.maxPrice) {
      return false;
    }

    return true;
  });

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  // Pagination
  const productsPerPage = 12;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

  const handleFilterChange = (filterType, value, checked) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      if (checked) {
        if (!newFilters[filterType].includes(value)) {
          newFilters[filterType] = [...newFilters[filterType], value];
        }
      } else {
        newFilters[filterType] = newFilters[filterType].filter(v => v !== value);
      }
      return newFilters;
    });
    setCurrentPage(1);
  };

  const handlePriceChange = (minPrice, maxPrice) => {
    setFilters(prev => ({ ...prev, minPrice, maxPrice }));
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      category: [],
      material: [],
      gemstone: [],
      minPrice: 0,
      maxPrice: 10000
    });
    setSortBy('featured');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container mx-auto max-w-7xl px-6">
          <a href="/">Home</a>
          <i className="fas fa-chevron-right"></i>
          <span>{breadcrumbText}</span>
        </div>
      </div>

      {/* Products Page */}
      <section className="products-page">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="products-layout">
            {/* Filters Sidebar */}
            <FiltersSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onPriceChange={handlePriceChange}
              onClearFilters={handleClearFilters}
              isOpen={showFilters}
              onClose={() => setShowFilters(false)}
            />

            {/* Products Content */}
            <div className="products-content">
              <div className="products-header">
                <div className="products-info">
                  <h1 id="pageTitle">{pageTitle}</h1>
                  <p id="productsCount">
                    Showing {currentProducts.length} of {sortedProducts.length} products
                  </p>
                </div>
                <div className="products-controls">
                  <button 
                    className="filter-toggle" 
                    onClick={() => setShowFilters(true)}
                  >
                    <i className="fas fa-filter"></i> Filters
                  </button>
                  <select 
                    className="sort-select" 
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      setCurrentPage(1);
                    }}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>

              <ProductsGrid products={currentProducts} />

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
