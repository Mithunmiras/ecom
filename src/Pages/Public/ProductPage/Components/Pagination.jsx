import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const renderPageButtons = () => {
    const buttons = [];

    // Previous button
    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          className="page-btn"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      );
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        buttons.push(
          <button
            key={i}
            className={`page-btn ${i === currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        buttons.push(<span key={`dots-${i}`}>...</span>);
      }
    }

    // Next button
    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          className="page-btn"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      );
    }

    return buttons;
  };

  return <div className="pagination">{renderPageButtons()}</div>;
}
