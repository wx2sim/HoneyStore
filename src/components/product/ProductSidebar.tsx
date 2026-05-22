import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/shop/Sidebar.module.css";

// Mock data matching the screenshot
const recentReviewsData = [
  {
    id: 1,
    title: "Jamun Honey",
    rating: 5,
    author: "Alex",
    image: "/assets/shop/products/jamun-honey.png"
  },
  {
    id: 2,
    title: "Wild Honey",
    rating: 5,
    author: "Alex",
    image: "/assets/shop/products/wild-honey.png"
  },
  {
    id: 3,
    title: "Flavored Creamy Cinnamon Honey",
    rating: 4,
    author: "Alex",
    image: "/assets/shop/products/flavored-creamy-mango-honey.png" // placeholder mapping
  }
];

const tags = ["#help", "#hive", "#honey", "#local", "#nature", "#original", "#raw", "#rock", "#sweet", "#wildflower"];

export default function ProductSidebar() {
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
    <aside className={styles.sidebarCol}>
      {/* Widget 1: Cart */}
      <div className={styles.widget}>
        <div className={styles.widgetRibbon}></div>
        <h3 className={styles.widgetTitle}>
          <span style={{ color: "var(--primary-orange)", marginRight: "0.5rem", fontSize: "1rem" }}>◆</span>
          Cart
        </h3>
        <div className={styles.widgetContent}>
          <p className={styles.emptyCartText} style={{ textAlign: "center", padding: "1rem 0" }}>
            No products in the cart.
          </p>
        </div>
      </div>

      {/* Widget 2: Product categories (Dropdown style) */}
      <div className={styles.widget}>
        <div className={styles.widgetRibbon}></div>
        <h3 className={styles.widgetTitle}>
          <span style={{ color: "var(--primary-orange)", marginRight: "0.5rem", fontSize: "1rem" }}>◆</span>
          Product categories
        </h3>
        <div className={styles.widgetContent}>
          <select 
            className={styles.searchInputField} 
            style={{ width: "100%", cursor: "pointer", appearance: "auto" }}
          >
            <option>Creamed Honey (9)</option>
            <option>Raw Honey (12)</option>
            <option>Wild Honey (8)</option>
          </select>
        </div>
      </div>

      {/* Widget 3: Recent Reviews */}
      <div className={styles.widget}>
        <div className={styles.widgetRibbon}></div>
        <h3 className={styles.widgetTitle}>
          <span style={{ color: "var(--primary-orange)", marginRight: "0.5rem", fontSize: "1rem" }}>◆</span>
          Recent reviews
        </h3>
        <div className={styles.widgetContent}>
          <div className={styles.recentReviewsList}>
            {recentReviewsData.map((review) => (
              <div key={review.id} className={styles.reviewItem}>
                <div className={styles.reviewImgBox}>
                  <Image src={review.image} alt={review.title} width={40} height={40} className={styles.reviewImg} />
                </div>
                <div className={styles.reviewInfo}>
                  <h4 className={styles.reviewProdTitle}>{review.title}</h4>
                  {renderStars(review.rating)}
                  <span className={styles.reviewAuthorText}>by {review.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Widget 4: Product tags */}
      <div className={styles.widget}>
        <div className={styles.widgetRibbon}></div>
        <h3 className={styles.widgetTitle}>
          <span style={{ color: "var(--primary-orange)", marginRight: "0.5rem", fontSize: "1rem" }}>◆</span>
          Product tags
        </h3>
        <div className={styles.widgetContent}>
          <div className={styles.tagsCloud}>
            {tags.map((tag) => (
              <span
                key={tag}
                className={styles.tagItem}
                style={{ color: "var(--primary-orange)", background: "rgba(255, 152, 0, 0.05)", fontWeight: 700 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

    </aside>
  );
}
