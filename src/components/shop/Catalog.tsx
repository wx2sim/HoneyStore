"use client";

import React, { useState, useMemo } from "react";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";
import styles from "./Catalog.module.css";

import { productsData } from "@/data/products";

// Sidebar Recent Reviews Data
const recentReviewsData = [
  {
    id: 1,
    title: "Jamun Honey",
    rating: 5,
    author: "Admin",
    image: "/assets/shop/products/jamun-honey.png"
  },
  {
    id: 2,
    title: "Wild Honey",
    rating: 5,
    author: "John",
    image: "/assets/shop/products/wild-honey.png"
  },
  {
    id: 3,
    title: "Flavored Creamy Mango Honey",
    rating: 4,
    author: "Jane",
    image: "/assets/shop/products/flavored-creamy-mango-honey.png"
  }
];

export default function Catalog() {
  // Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [priceLimit, setPriceLimit] = useState(100);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("default");
  
  // Cart Simulation State
  const [cart, setCart] = useState<{ id: number; title: string; price: number; image: string; quantity: number }[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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

  const ratingsCount = useMemo(() => {
    const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    productsData.forEach((p) => {
      const rounded = Math.round(p.rating);
      if (counts[rounded] !== undefined) {
        counts[rounded] += 1;
      }
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
      
      // Rating filter
      const matchesRating = selectedRating ? product.rating === selectedRating : true;
      
      // Tag filter
      const matchesTag = selectedTag ? product.tags.includes(selectedTag) : true;

      return matchesSearch && matchesPrice && matchesCategory && matchesRating && matchesTag;
    });
  }, [searchQuery, priceLimit, selectedCategory, selectedRating, selectedTag]);

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

  // Cart operations
  const handleAddToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1 }];
    });
    
    setToastMessage(`Added "${product.title}" to cart!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  // Clear all filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setPriceLimit(100);
    setSelectedCategory(null);
    setSelectedRating(null);
    setSelectedTag(null);
    setSortBy("default");
    setCurrentPage(1);
  };

  const filtersActive = !!(selectedCategory || selectedRating || selectedTag || searchQuery || priceLimit < 100);

  return (
    <section className={styles.catalogSection}>
      {/* Toast Notification */}
      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}

      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* Left Column: Product Grid */}
          <ProductList 
            sortedProducts={sortedProducts}
            paginatedProducts={paginatedProducts}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            productsPerPage={productsPerPage}
            sortBy={sortBy}
            setSortBy={setSortBy}
            handleResetFilters={handleResetFilters}
            filtersActive={filtersActive}
            handleAddToCart={handleAddToCart}
          />
          
          {/* Right Column: Sidebar */}
          <Sidebar 
            priceLimit={priceLimit}
            setPriceLimit={setPriceLimit}
            setCurrentPage={setCurrentPage}
            cart={cart}
            cartTotal={cartTotal}
            handleRemoveFromCart={handleRemoveFromCart}
            ratingsCount={ratingsCount}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            categoriesCount={categoriesCount}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            recentReviewsData={recentReviewsData}
          />
        </div>
      </div>
    </section>
  );
}
