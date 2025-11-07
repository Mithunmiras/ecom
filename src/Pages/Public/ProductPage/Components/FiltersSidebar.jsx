import React, { useState } from 'react';

export default function FiltersSidebar({ 
  filters, 
  onFilterChange, 
  onPriceChange, 
  onClearFilters,
  isOpen,
  onClose 
}) {
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);

  const categories = [
    { value: 'rings', label: 'Rings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'bracelets', label: 'Bracelets' },
    { value: 'watches', label: 'Watches' }
  ];

  const materials = [
    { value: 'gold', label: 'Gold' },
    { value: 'silver', label: 'Silver' },
    { value: 'platinum', label: 'Platinum' },
    { value: 'rose-gold', label: 'Rose Gold' },
    { value: 'white-gold', label: 'White Gold' }
  ];

  const gemstones = [
    { value: 'diamond', label: 'Diamond' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'sapphire', label: 'Sapphire' },
    { value: 'emerald', label: 'Emerald' },
    { value: 'pearl', label: 'Pearl' }
  ];

  const handleApplyPrice = () => {
    onPriceChange(parseInt(minPrice) || 0, parseInt(maxPrice) || 10000);
  };

  return (
    <aside className={`filters-sidebar ${isOpen ? 'active' : ''}`}>
      <div className="filters-header">
        <h3>Filters</h3>
        <button className="filters-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>

      {/* Categories */}
      <div className="filter-group">
        <h4>Categories</h4>
        <div className="filter-options">
          {categories.map(category => (
            <label key={category.value} className="filter-option">
              <input
                type="checkbox"
                name="category"
                value={category.value}
                checked={filters.category.includes(category.value)}
                onChange={(e) => onFilterChange('category', category.value, e.target.checked)}
              />
              <span>{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="filter-group">
        <h4>Price Range</h4>
        <div className="price-range">
          <div className="price-inputs">
            <input
              type="number"
              id="minPrice"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <span>-</span>
            <input
              type="number"
              id="maxPrice"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <button className="btn btn-outline" onClick={handleApplyPrice}>
            Apply
          </button>
        </div>
      </div>

      {/* Material */}
      <div className="filter-group">
        <h4>Material</h4>
        <div className="filter-options">
          {materials.map(material => (
            <label key={material.value} className="filter-option">
              <input
                type="checkbox"
                name="material"
                value={material.value}
                checked={filters.material.includes(material.value)}
                onChange={(e) => onFilterChange('material', material.value, e.target.checked)}
              />
              <span>{material.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Gemstone */}
      <div className="filter-group">
        <h4>Gemstone</h4>
        <div className="filter-options">
          {gemstones.map(gemstone => (
            <label key={gemstone.value} className="filter-option">
              <input
                type="checkbox"
                name="gemstone"
                value={gemstone.value}
                checked={filters.gemstone.includes(gemstone.value)}
                onChange={(e) => onFilterChange('gemstone', gemstone.value, e.target.checked)}
              />
              <span>{gemstone.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button 
        className="btn btn-outline" 
        onClick={onClearFilters}
        style={{ width: '100%', marginTop: '1rem' }}
      >
        Clear All Filters
      </button>
    </aside>
  );
}
