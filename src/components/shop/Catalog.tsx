"use client";

import { motion } from "framer-motion";
import React, { useState, useMemo } from "react";
import ProductList from "./ProductList";
import styles from "./Catalog.module.css";

import { productsData, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Catalog() {
  // Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("default");
  
  const { addToCart, toastMessage } = useCart();

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Rating and Categories count helpers
  const categoriesCount = useMemo(() => {
    const counts: Record<string, number> = {};
    productsData.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Search Query filter
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Price filter
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      
      // Category filter
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      
      return matchesSearch && matchesPrice && matchesCategory;
    });
  }, [searchQuery, minPrice, maxPrice, selectedCategory]);

  // Sorted Products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "name") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }
    return list;
  }, [filteredProducts, sortBy]);

  // Paginated Products
  const paginatedProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [sortedProducts, currentPage]);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handleAddToCart = (product: Product) => {
    addToCart({ id: product.id, title: product.title, price: product.price, image: product.image });
  };

  // Clear all filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setMinPrice(10);
    setMaxPrice(100);
    setSelectedCategory(null);
    setSortBy("default");
    setCurrentPage(1);
  };

  const filtersActive = !!(selectedCategory || searchQuery || minPrice > 10 || maxPrice < 100);

  return (
    <motion.section className={styles.catalogSection} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
      {/* Toast Notification */}
      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}

      <div className={styles.container}>
        <div className={styles.shopToolbar}>
          <div className={styles.toolbarSearch}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7.5" /><path d="m20 20-3.5-3.5" /></svg>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              placeholder="Search honey products"
              aria-label="Search honey products"
            />
          </div>
          <div className={styles.categoryFilter}>
            <span>Category</span>
            <div className={styles.categoryScroller} role="listbox" aria-label="Filter by category">
              <button type="button" className={!selectedCategory ? styles.categoryChipActive : styles.categoryChip} onClick={() => { setSelectedCategory(null); setCurrentPage(1); }}>All</button>
              {Object.keys(categoriesCount).map((category) => (
                <button
                  type="button"
                  key={category}
                  className={selectedCategory === category ? styles.categoryChipActive : styles.categoryChip}
                  onClick={() => { setSelectedCategory(selectedCategory === category ? null : category); setCurrentPage(1); }}
                >
                  {category.replace(" Honey", "")}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.priceFilter}>
            <div className={styles.priceFilterHeader}>
              <span>Price range</span>
              <strong>${minPrice} – ${maxPrice}</strong>
            </div>
            <div className={styles.rangeTrack}>
              <div className={styles.rangeFill} style={{ left: `${((minPrice - 10) / 90) * 100}%`, right: `${100 - ((maxPrice - 10) / 90) * 100}%` }} />
              <input aria-label="Minimum price" className={styles.rangeInput} type="range" min="10" max="100" value={minPrice} onChange={(e) => { setMinPrice(Math.min(Number(e.target.value), maxPrice - 1)); setCurrentPage(1); }} />
              <input aria-label="Maximum price" className={styles.rangeInput} type="range" min="10" max="100" value={maxPrice} onChange={(e) => { setMaxPrice(Math.max(Number(e.target.value), minPrice + 1)); setCurrentPage(1); }} />
            </div>
          </div>
          <label className={styles.toolbarField}>
            <span>Sort by</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Featured</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
              <option value="rating">Top rated</option>
              <option value="name">Name</option>
            </select>
          </label>
          {filtersActive && <button onClick={handleResetFilters} className={styles.clearFilters}>Clear</button>}
        </div>

        <div className={styles.resultsLine}>
          <span>{sortedProducts.length} products</span>
          <span className={styles.resultsRule}></span>
          <span>Pure honey, carefully selected</span>
        </div>

        <div className={styles.layoutGrid}>
          <ProductList 
            sortedProducts={sortedProducts}
            paginatedProducts={paginatedProducts}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            productsPerPage={productsPerPage}
            handleResetFilters={handleResetFilters}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </motion.section>
  );
}
