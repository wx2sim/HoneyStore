"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductMain.module.css";
import catalogStyles from "@/components/shop/ProductList.module.css"; // Reuse card styles
import { productsData } from "@/data/products";

export default function ProductMain({ product }: { product: any }) {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

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

  // Dynamically get 3 related products from the same category (excluding the current one)
  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
    
  // Fallback if not enough products in the same category
  if (relatedProducts.length < 3) {
    const additional = productsData.filter((p) => p.id !== product.id && !relatedProducts.find(rp => rp.id === p.id));
    relatedProducts.push(...additional.slice(0, 3 - relatedProducts.length));
  }

  return (
    <div className={styles.mainWrapper}>
      {/* Top Details Section */}
      <div className={styles.topSection}>
        
        {/* Gallery */}
        <div className={styles.galleryCol}>
          <div className={styles.mainImageWrapper}>
            <Image 
              src={product.image} 
              alt={product.title} 
              width={400} 
              height={400} 
              className={styles.mainImage}
            />
            <button className={styles.zoomBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>
          </div>
          
          <div className={styles.thumbnails}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={styles.thumbBox}>
                <Image 
                  src={product.image} 
                  alt={`${product.title} Thumbnail ${i}`} 
                  width={80} 
                  height={80} 
                  className={styles.thumbImage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className={styles.infoCol}>
          <div className={styles.ratingRow}>
            {renderStars(product.rating || 5)}
            <span className={styles.reviewsCount}>({product.reviewsCount || 3} customer reviews)</span>
          </div>
          
          <h2 className={styles.price}>
            ${product.price.toFixed(2)}
            {product.maxPrice ? ` – $${product.maxPrice.toFixed(2)}` : ""}
          </h2>
          
          <div className={styles.shortDescription}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          
          <div className={styles.addToCartAction}>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value) || 1)} 
              className={styles.qtyInput}
              min="1"
            />
            <button className={styles.addBtn}>Add to cart</button>
          </div>
          
          <div className={styles.metaList}>
            <div className={styles.metaRow}>
              <strong>SKU:</strong> <span>TBMW-001-{product.id.toString().padStart(3, '0')}</span>
            </div>
            <div className={styles.metaRow}>
              <strong>Categories:</strong> 
              <Link href="#">{product.category}</Link>
            </div>
            <div className={styles.metaRow}>
              <strong>Tags:</strong> 
              <div className={styles.tagPills}>
                {(product.tags || ["#honey", "#natural"]).map((tag: string) => (
                  <Link key={tag} href="#" className={styles.metaTag}>{tag}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className={styles.tabsSection}>
        <div className={styles.tabHeaders}>
          <button 
            onClick={() => setActiveTab("description")} 
            className={`${styles.tabBtn} ${activeTab === "description" ? styles.tabActive : ""}`}
          >
            {activeTab === "description" && <span style={{ color: "var(--primary-orange)", marginRight: "0.5rem" }}>◆</span>}
            Description
          </button>
          <button 
            onClick={() => setActiveTab("reviews")} 
            className={`${styles.tabBtn} ${activeTab === "reviews" ? styles.tabActive : ""}`}
            style={{ color: activeTab === "reviews" ? "var(--text-dark)" : "var(--primary-orange)" }}
          >
            {activeTab === "reviews" && <span style={{ color: "var(--primary-orange)", marginRight: "0.5rem" }}>◆</span>}
            Reviews (3)
          </button>
        </div>
        
        <div className={styles.tabContent}>
          {activeTab === "description" && (
            <div className={styles.descContent}>
              <h3 className={styles.descTitle}>Description</h3>
              <p>Phasellus lobortis massa vitae risus vestibulum, vel ultricies purus placerat. Nam sed fringilla mauris. Vivamus sodales, eu venenatis tellus viverra, vitae pharetra velit vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sed gravida lectus. Aliquam tristique aliquet mauris sit amet egestas. Nullam et dictum enim, vitae faucibus enim. Mauris sagittis neque massa, ac auctor lorem varius quis. In feugiat ipsum in est vehicula convallis.</p>
              <br/>
              <p>Aenean sed enim malesuada, mattis turpis et, rhoncus neque. Ut ultrices sodales nisl at mollis. Duis ut lobortis nisl. Nulla ut pellentesque lacus, eget sollicitudin sapien. Aenean consequat blandit est, in tincidunt nunc lacinia quis. Mauris condimentum leo id quam condimentum, nec tristique odio ullamcorper. Cras felis dui, scelerisque quis feugiat non, consequat quis elit. Vivamus at nisl congue, ultrices est non, placerat ligula. Nulla dapibus, eros in vulputate convallis, magna ante dapibus turpis, at sodales lorem diam sit amet ligula. Donec dui nunc, pharetra eu ante ac, elementum tincidunt orci.</p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className={styles.descContent}>
              <p>Reviews content here...</p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      <div className={styles.relatedSection}>
        <h3 className={styles.relatedTitle}>Related products</h3>
        <div className={catalogStyles.productsGrid}>
          {relatedProducts.map((product) => (
            <div key={product.id} className={catalogStyles.productCard}>
              {product.onSale && (
                <div className={catalogStyles.saleBadge}>
                  <span>SALE</span>
                </div>
              )}
              <div className={catalogStyles.productImageBox}>
                <Link href={`/product/${product.id}`} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src={product.image} alt={product.title} width={240} height={240} className={catalogStyles.productImg} />
                </Link>
              </div>
              <div className={catalogStyles.productInfo}>
                <Link href={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <h3 className={catalogStyles.productTitle}>{product.title}</h3>
                </Link>
                {renderStars(product.rating)}
                <div className={catalogStyles.priceRow}>
                  <span className={catalogStyles.currentPrice}>
                    ${product.price.toFixed(2)}
                    {product.maxPrice ? ` – $${product.maxPrice.toFixed(2)}` : ""}
                  </span>
                </div>
                <button className={catalogStyles.addToCartBtn}>
                  {product.maxPrice ? "Select options" : "Add to cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
