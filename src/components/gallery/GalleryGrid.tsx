"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./GalleryGrid.module.css";

const galleryItems = [
  {
    id: 1,
    src: "/assets/about/company/company.png",
    title: "Our Honey Farm",
    category: "Farm",
    wide: true,
  },
  {
    id: 2,
    src: "/assets/about/blog/blog-1.webp",
    title: "Honey Harvesting",
    category: "Process",
    wide: false,
  },
  {
    id: 3,
    src: "/assets/about/blog/blog-2.webp",
    title: "The Sweet Taste",
    category: "Products",
    wide: false,
  },
  {
    id: 4,
    src: "/assets/about/technology/video-thumbnail.png",
    title: "Modern Beekeeping",
    category: "Process",
    wide: false,
  },
  {
    id: 5,
    src: "/assets/home/shop/product-1.png",
    title: "Pure Honey Jar",
    category: "Products",
    wide: false,
  },
  {
    id: 6,
    src: "/assets/about/blog/blog-3.webp",
    title: "Why We Love Honey",
    category: "Farm",
    wide: false,
  },
  {
    id: 7,
    src: "/assets/home/types_of_honey/type-1.png",
    title: "Linden Honey",
    category: "Products",
    wide: false,
  },
  {
    id: 8,
    src: "/assets/home/types_of_honey/type-2.png",
    title: "Jamun Honey",
    category: "Products",
    wide: false,
  },
  {
    id: 9,
    src: "/assets/home/types_of_honey/type-3.png",
    title: "Organic Honey",
    category: "Products",
    wide: true,
  },
];

const categories = ["All", "Farm", "Process", "Products"];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <motion.section className={styles.gallerySection} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
      {/* Decorative dots top-left */}
      <div className={styles.dotsDecor}>
        <Image
          src="/assets/about/decorations/dots.png"
          alt=""
          width={120}
          height={120}
        />
      </div>

      {/* Decorative bee top-right */}
      <div className={styles.beeDecor}>
        <Image
          src="/assets/about/company/bee.png"
          alt=""
          width={90}
          height={90}
        />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>OUR MOMENTS</span>
          <h2 className={styles.title}>Photo Gallery</h2>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={[styles.filterBtn, active === cat ? styles.filterActive : ""].join(" ")}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.grid}>
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`${styles.card} ${item.wide ? styles.cardWide : ""}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className={styles.cardImg}
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className={styles.overlay}>
                <span className={styles.overlayCategory}>{item.category}</span>
                <p className={styles.overlayTitle}>{item.title}</p>
              </div>

              {/* Zoom icon on hover */}
              <div className={styles.overlayIcon}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <Link href="/shop" className={styles.ctaBtn}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            Shop Our Products
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
