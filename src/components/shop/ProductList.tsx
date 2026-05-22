import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductList.module.css";

interface ProductListProps {
  sortedProducts: any[];
  paginatedProducts: any[];
  currentPage: number;
  setCurrentPage: (val: number) => void;
  totalPages: number;
  productsPerPage: number;
  sortBy: string;
  setSortBy: (val: string) => void;
  handleResetFilters: () => void;
  filtersActive: boolean;
  handleAddToCart: (product: any) => void;
}

export default function ProductList({
  sortedProducts,
  paginatedProducts,
  currentPage,
  setCurrentPage,
  totalPages,
  productsPerPage,
  sortBy,
  setSortBy,
  handleResetFilters,
  filtersActive,
  handleAddToCart
}: ProductListProps) {
  
  const renderStars = (rating: number) => {
    return (
      <div className={styles.starRating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={star <= rating ? styles.starFilled : styles.starEmpty}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <main className={styles.productsCol}>
      {/* Filter Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.resultCount}>
          Showing {sortedProducts.length > 0 ? (currentPage - 1) * productsPerPage + 1 : 0}–
          {Math.min(currentPage * productsPerPage, sortedProducts.length)} of {sortedProducts.length} results
          {filtersActive && (
            <button onClick={handleResetFilters} className={styles.resetBadge}>
              Reset Filters &times;
            </button>
          )}
        </div>
        
        <div className={styles.sortingWrapper}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={styles.sortSelect}
          >
            <option value="default">Default sorting</option>
            <option value="price-low">Sort by price: low to high</option>
            <option value="price-high">Sort by price: high to low</option>
            <option value="rating">Sort by rating</option>
            <option value="name">Sort by name</option>
          </select>
        </div>
      </div>

      {/* Products List */}
      {paginatedProducts.length > 0 ? (
        <div className={styles.productsGrid}>
          {paginatedProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              {/* Sale Badge */}
              {product.onSale && (
                <div className={styles.saleBadge}>
                  <span>SALE</span>
                </div>
              )}
              
              <div className={styles.productImageBox}>
                <Link href={`/product/${product.id}`} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={240}
                    height={240}
                    className={styles.productImg}
                    priority={product.id <= 3}
                  />
                </Link>
              </div>

              <div className={styles.productInfo}>
                <Link href={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                </Link>
                {renderStars(product.rating)}
                
                <div className={styles.priceRow}>
                  {product.originalPrice ? (
                    <>
                      <span className={styles.oldPrice}>${product.originalPrice.toFixed(2)}</span>
                      <span className={styles.currentPrice}>${product.price.toFixed(2)}</span>
                    </>
                  ) : (
                    <span className={styles.currentPrice}>
                      ${product.price.toFixed(2)}
                      {product.maxPrice ? ` – $${product.maxPrice.toFixed(2)}` : ""}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className={styles.addToCartBtn}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cartIcon}>
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  {product.maxPrice ? "Select options" : "Add to cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <h3>No products found</h3>
          <p>Try adjusting your search query, price filter, or other selections.</p>
          <button onClick={handleResetFilters} className={styles.resetBtn}>
            Clear Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setCurrentPage(idx + 1)}
              className={currentPage === idx + 1 ? styles.pagActive : styles.pagBtn}
            >
              {idx + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className={styles.pagBtn}
            >
              &gt;
            </button>
          )}
        </div>
      )}
    </main>
  );
}
