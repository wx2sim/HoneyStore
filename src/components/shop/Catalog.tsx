"use client";

import React, { useState, useMemo } from "react";
import ProductList from "./ProductList";
import styles from "./Catalog.module.css";

import { productsData, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Catalog() {
  // Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [priceLimit, setPriceLimit] = useState(100);
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
      const matchesPrice = product.price <= priceLimit;
      
      // Category filter
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      
      return matchesSearch && matchesPrice && matchesCategory;
    });
  }, [searchQuery, priceLimit, selectedCategory]);

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
    setPriceLimit(100);
    setSelectedCategory(null);
    setSortBy("default");
    setCurrentPage(1);
  };

  const filtersActive = !!(selectedCategory || searchQuery || priceLimit < 100);

  return (
    <section className={styles.catalogSection}>
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
          <label className={styles.toolbarField}>
            <span>Category</span>
            <select value={selectedCategory ?? "all"} onChange={(e) => { setSelectedCategory(e.target.value === "all" ? null : e.target.value); setCurrentPage(1); }}>
              <option value="all">All products</option>
              {Object.keys(categoriesCount).map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
          </label>
          <label className={styles.toolbarField}>
            <span>Price up to</span>
            <select value={priceLimit} onChange={(e) => { setPriceLimit(Number(e.target.value)); setCurrentPage(1); }}>
              <option value="100">Any price</option>
              <option value="25">$25</option>
              <option value="50">$50</option>
              <option value="75">$75</option>
            </select>
          </label>
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
    </section>
  );
}
