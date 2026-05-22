import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  priceLimit: number;
  setPriceLimit: (val: number) => void;
  setCurrentPage: (val: number) => void;
  cart: { id: number; title: string; price: number; image: string; quantity: number }[];
  cartTotal: number;
  handleRemoveFromCart: (id: number) => void;
  ratingsCount: Record<number, number>;
  selectedRating: number | null;
  setSelectedRating: (val: number | null) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  categoriesCount: Record<string, number>;
  selectedCategory: string | null;
  setSelectedCategory: (val: string | null) => void;
  selectedTag: string | null;
  setSelectedTag: (val: string | null) => void;
  recentReviewsData: { id: number; title: string; rating: number; author: string; image: string }[];
}

export default function Sidebar(props: SidebarProps) {
  const [searchInput, setSearchInput] = useState(props.searchQuery);

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
      {/* Widget: Search Products */}
      <div className={styles.widget}>
        <div className={styles.widgetRibbon}></div>
        <h3 className={styles.widgetTitle}>Search by products</h3>
        <div className={styles.widgetContent}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.setSearchQuery(searchInput);
              props.setCurrentPage(1);
            }}
            className={styles.searchForm}
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className={styles.searchInputField}
            />
            <button type="submit" className={styles.searchSubmitBtn}>
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Widget 1: Filter by Price */}
      <div className={styles.widget}>
        <div className={styles.widgetRibbon}></div>
        <h3 className={styles.widgetTitle}>Filter by price</h3>
        <div className={styles.widgetContent}>
          <input
            type="range"
            min="10"
            max="100"
            value={props.priceLimit}
            onChange={(e) => {
              props.setPriceLimit(Number(e.target.value));
              props.setCurrentPage(1);
            }}
            className={styles.priceSlider}
          />
          <div className={styles.priceFilterValues}>
            <span>Price: $10 — ${props.priceLimit}</span>
          </div>
          <button 
            onClick={() => props.setCurrentPage(1)} 
            className={styles.widgetBtn}
          >
            Filter
          </button>
        </div>
      </div>

      {/* Widget 2: Cart */}
      <div className={styles.widget}>
        <div className={styles.widgetRibbon}></div>
        <h3 className={styles.widgetTitle}>Cart</h3>
        <div className={styles.widgetContent}>
          {props.cart.length > 0 ? (
            <div className={styles.cartWidgetList}>
              {props.cart.map((item) => (
                <div key={item.id} className={styles.cartWidgetItem}>
                  <div className={styles.cartItemImgBox}>
                    <Image src={item.image} alt={item.title} width={45} height={45} className={styles.cartItemImg} />
                  </div>
                  <div className={styles.cartItemInfo}>
                    <h4 className={styles.cartItemTitle}>{item.title}</h4>
                    <span className={styles.cartItemPrice}>
                      {item.quantity} &times; ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => props.handleRemoveFromCart(item.id)}
                    className={styles.cartItemRemove}
                    title="Remove item"
                  >
                    &times;
                  </button>
                </div>
              ))}
              <div className={styles.cartWidgetTotal}>
                <span>Subtotal:</span>
                <strong>${props.cartTotal.toFixed(2)}</strong>
              </div>
              <div className={styles.cartWidgetActions}>
                <Link href="/cart" className={styles.cartViewBtn}>
                  View Cart
                </Link>
                <Link href="/checkout" className={styles.cartCheckoutBtn}>
                  Checkout
                </Link>
              </div>
            </div>
          ) : (
            <p className={styles.emptyCartText}>No products in the cart.</p>
          )}
        </div>
      </div>

      {/* Widget 3: Average Rating */}
      <div className={styles.widget}>
        <div className={styles.widgetRibbon}></div>
        <h3 className={styles.widgetTitle}>Average rating</h3>
        <div className={styles.widgetContent}>
          <ul className={styles.ratingFilterList}>
            {[5, 4, 3, 2, 1].map((rating) => (
              <li
                key={rating}
                onClick={() => {
                  props.setSelectedRating(props.selectedRating === rating ? null : rating);
                  props.setCurrentPage(1);
                }}
                className={`${styles.ratingFilterItem} ${props.selectedRating === rating ? styles.ratingActive : ""}`}
              >
                {renderStars(rating)}
                <span className={styles.ratingCount}>({props.ratingsCount[rating] || 0})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>



      {/* Widget 5: Product Categories */}
      <div className={styles.widget}>
        <div className={styles.widgetRibbon}></div>
        <h3 className={styles.widgetTitle}>Product categories</h3>
        <div className={styles.widgetContent}>
          <ul className={styles.categoryList}>
            {Object.keys(props.categoriesCount).map((categoryName) => (
              <li
                key={categoryName}
                onClick={() => {
                  props.setSelectedCategory(props.selectedCategory === categoryName ? null : categoryName);
                  props.setCurrentPage(1);
                }}
                className={`${styles.categoryItem} ${props.selectedCategory === categoryName ? styles.categoryActive : ""}`}
              >
                <span className={styles.categoryNameText}>{categoryName}</span>
                <span className={styles.categoryCount}>({props.categoriesCount[categoryName]})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Widget 6: Recent Reviews */}
      <div className={styles.widget}>
        <div className={styles.widgetRibbon}></div>
        <h3 className={styles.widgetTitle}>Recent reviews</h3>
        <div className={styles.widgetContent}>
          <div className={styles.recentReviewsList}>
            {props.recentReviewsData.map((review) => (
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

      {/* Widget 7: Product Tags */}
      <div className={styles.widget}>
        <div className={styles.widgetRibbon}></div>
        <h3 className={styles.widgetTitle}>Product tags</h3>
        <div className={styles.widgetContent}>
          <div className={styles.tagsCloud}>
            {["Honey", "Organic", "Natural", "Raw", "Fresh", "Sweet"].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  props.setSelectedTag(props.selectedTag === tag ? null : tag);
                  props.setCurrentPage(1);
                }}
                className={`${styles.tagItem} ${props.selectedTag === tag ? styles.tagActive : ""}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

    </aside>
  );
}
