"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import styles from "./BlogGrid.module.css";

// SVG Icons for cards
const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const MessageIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// Zig Zag Line SVG
const ZigZagLine = () => (
  <svg width="100%" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.zigzag}>
    <path
      d="M0 6 L10 2 L20 10 L30 2 L40 10 L50 2 L60 10 L70 2 L80 10 L90 2 L100 10 L110 2 L120 10 L130 2 L140 10 L150 2 L160 10 L170 2 L180 10 L190 2 L200 10 L210 2 L220 10 L230 2 L240 10 L250 2 L260 10 L270 2 L280 10 L290 2 L300 6"
      stroke="#FFB236"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function BlogGrid() {
  return (
    <motion.section className={styles.blogSection} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
      <div className={styles.container}>
        {/* Blog Grid */}
        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.card}>
              {/* Card Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Card Content */}
              <div className={styles.content}>
                <h2 className={styles.cardTitle}>{post.title}</h2>

                {/* Category Badge */}
                <div className={styles.categoryRow}>
                  <span className={styles.categoryBadge}>
                    <span className={styles.badgeDiamond}>♦</span> {post.category}
                  </span>
                </div>

                {/* Short Description */}
                <p className={styles.cardDesc}>{post.desc}</p>

                {/* ZigZag Divider */}
                <ZigZagLine />

                {/* Metadata */}
                <div className={styles.metaRows}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <UserIcon /> {post.author}
                    </span>
                    <span className={styles.metaItem}>
                      <CalendarIcon /> {post.date}
                    </span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <MessageIcon /> {post.commentsCount > 0 ? `${post.commentsCount} Comments` : "No Comments"}
                    </span>
                  </div>
                </div>

                {/* Read More */}
                <div className={styles.btnRow}>
                  <Link href={`/blog/${post.id}`} className={styles.readMoreBtn}>
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Container */}
        <div className={styles.paginationWrapper}>
          <div className={styles.pagination}>
            <button className={styles.pagBtn} aria-label="Previous page" disabled>
              &larr; Newer Posts
            </button>
            <button className={`${styles.pagNum} ${styles.pagNumActive}`}>1</button>
            <button className={styles.pagNum}>2</button>
            <span className={styles.pagEllipsis}>...</span>
            <button className={styles.pagNum}>4</button>
            <button className={styles.pagBtn} aria-label="Next page">
              Older Posts &rarr;
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
