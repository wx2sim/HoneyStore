"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.headerOpen : ""}`}>
      <div className={styles.container}>
        {/* Hamburger Menu Toggle (on Left in Mobile) */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </button>

        {/* Logo (Centered in Mobile) */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/assets/home/header/logo.png"
            alt="Hania Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation & Mobile Menu Drawer */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          {/* Mobile Drawer Top Search & Cart Row */}
          <div className={styles.mobileSearchRow}>
            <div className={styles.searchBarWrapper}>
              <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="Search..." className={styles.mobileSearchInput} />
            </div>
            <button className={styles.iconBtn} aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </button>
          </div>

          {/* Mobile Drawer Contact & Location Block */}
          <div className={styles.mobileContactRow}>
            <div className={styles.mobileLocBlock}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <div>
                <p style={{ fontWeight: 700, fontSize: "13px", color: "var(--text-dark)", margin: 0 }}>202 Honey Springs Rd, Crawford, TN 38554</p>
              </div>
            </div>
            <div className={styles.mobilePhoneBlock}>
              <span style={{ fontWeight: 800, fontSize: "14px", color: "var(--text-dark)" }}>800.275.8777</span>
              <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>Call Us</span>
            </div>
          </div>

          {/* Menu Items */}
          <div className={styles.menuLinksList}>
            <Link href="/" className={`${styles.menuLink} ${styles.active}`} onClick={closeMenu}>
              <span>Home</span> <span className={styles.caret}>▾</span>
            </Link>
            <Link href="/about" className={styles.menuLink} onClick={closeMenu}>
              <span>About Us</span> <span className={styles.caret}>▾</span>
            </Link>
            <Link href="/shop" className={styles.menuLink} onClick={closeMenu}>
              <span>Shop</span> <span className={styles.caret}>▾</span>
            </Link>
            <Link href="/blog" className={styles.menuLink} onClick={closeMenu}>
              <span>Blog</span> <span className={styles.caret}>▾</span>
            </Link>
            <Link href="/gallery" className={styles.menuLink} onClick={closeMenu}>
              <span>Gallery</span> <span className={styles.caret}>▾</span>
            </Link>
            <Link href="/contact" className={styles.menuLink} onClick={closeMenu}>
              <span>Contact Us</span> <span className={styles.caret}>▾</span>
            </Link>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <div className={`${styles.locationBlock} ${styles.desktopOnly}`}>
            <svg className={styles.locIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <div className={styles.locText}>
              <span>202 Honey Springs Rd,</span>
              <span>Crawford, TN 38554</span>
            </div>
          </div>

          <div className={`${styles.contactBlock} ${styles.desktopOnly}`}>
            <span className={styles.phone}>800.275.8777</span>
            <span className={styles.callUs}>Call Us</span>
          </div>

          <div className={`${styles.icons} ${styles.desktopOnly}`}>
            <button className={styles.iconBtn} aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <button className={styles.iconBtn} aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
