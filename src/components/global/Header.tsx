"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { useCart } from "@/context/CartContext";
import { productsData } from "@/data/products";
import { blogPosts } from "@/data/blogData";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { cartCount, openCart } = useCart();

  const isActivePath = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const openSearch = () => {
    setIsSearchOpen(true);
    setTimeout(() => searchInputRef.current?.focus(), 50);
  };
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  // Close search overlay on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Live search results
  const trimmed = searchQuery.trim().toLowerCase();
  const productResults = trimmed
    ? productsData.filter((p) => p.title.toLowerCase().includes(trimmed)).slice(0, 4)
    : [];
  const blogResults = trimmed
    ? blogPosts.filter((b) => b.title.toLowerCase().includes(trimmed)).slice(0, 3)
    : [];
  const hasResults = productResults.length > 0 || blogResults.length > 0;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trimmed) {
      closeSearch();
      router.push(`/shop?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <>
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
              src="/assets/home/header/headerlogo.png"
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
              <form className={styles.searchBarWrapper} onSubmit={(e) => {
                e.preventDefault();
                const val = (e.currentTarget.querySelector("input") as HTMLInputElement)?.value?.trim();
                if (val) { closeMenu(); router.push(`/shop?q=${encodeURIComponent(val)}`); }
              }}>
                <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" placeholder="Search products..." className={styles.mobileSearchInput} />
              </form>
              <button className={styles.iconBtn} aria-label="Cart" onClick={() => { closeMenu(); openCart(); }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
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
              <Link href="/" className={`${styles.menuLink} ${isActivePath("/") ? styles.active : ""}`} onClick={closeMenu}>
                <span>Home</span> <span className={styles.caret}>▾</span>
              </Link>
              <Link href="/about" className={`${styles.menuLink} ${isActivePath("/about") ? styles.active : ""}`} onClick={closeMenu}>
                <span>About Us</span> <span className={styles.caret}>▾</span>
              </Link>
              <Link href="/shop" className={`${styles.menuLink} ${isActivePath("/shop") ? styles.active : ""}`} onClick={closeMenu}>
                <span>Shop</span> <span className={styles.caret}>▾</span>
              </Link>
              <Link href="/blog" className={`${styles.menuLink} ${isActivePath("/blog") ? styles.active : ""}`} onClick={closeMenu}>
                <span>Blog</span> <span className={styles.caret}>▾</span>
              </Link>
              <Link href="/gallery" className={`${styles.menuLink} ${isActivePath("/gallery") ? styles.active : ""}`} onClick={closeMenu}>
                <span>Gallery</span> <span className={styles.caret}>▾</span>
              </Link>
              <Link href="/contact" className={`${styles.menuLink} ${isActivePath("/contact") ? styles.active : ""}`} onClick={closeMenu}>
                <span>Contact Us</span> <span className={styles.caret}>▾</span>
              </Link>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className={styles.actions}>
            <div className={`${styles.locationBlock} ${styles.desktopOnly}`}>
              <svg className={styles.locIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <div className={styles.locText}>
                <span>City 1st Nov,</span>
                <span>Berrouaghia , Medea , ALgeria</span>
              </div>
            </div>

            <div className={`${styles.contactBlock} ${styles.desktopOnly}`}>
              <span className={styles.phone}>+213798778566</span>
              <span className={styles.callUs}>Call Us</span>
            </div>

            <div className={`${styles.icons} ${styles.desktopOnly}`}>
              <button className={styles.iconBtn} aria-label="Search" onClick={openSearch}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
              <button className={`${styles.iconBtn} ${styles.cartIconBtn}`} aria-label="Cart" onClick={openCart}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className={styles.searchOverlay} role="dialog" aria-label="Search">
          <div className={styles.searchOverlayBackdrop} onClick={closeSearch} />
          <div className={styles.searchPanel}>
            <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products or articles..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
              />
              {searchQuery && (
                <button type="button" className={styles.clearBtn} onClick={() => setSearchQuery("")} aria-label="Clear">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
              )}
              <button type="submit" className={styles.searchSubmitBtn}>Search</button>
            </form>

            {/* Live Results */}
            {trimmed && (
              <div className={styles.searchResults}>
                {!hasResults && (
                  <p className={styles.noResults}>No results for &quot;{searchQuery}&quot;</p>
                )}
                {productResults.length > 0 && (
                  <div className={styles.resultGroup}>
                    <span className={styles.resultGroupLabel}>Products</span>
                    {productResults.map((p) => (
                      <Link
                        key={p.id}
                        href={`/product/${p.id}`}
                        className={styles.resultItem}
                        onClick={closeSearch}
                      >
                        <Image src={p.image} alt={p.title} width={36} height={36} style={{ objectFit: "contain", borderRadius: 6, background: "#F9FAFB" }} />
                        <div className={styles.resultInfo}>
                          <span className={styles.resultTitle}>{p.title}</span>
                          <span className={styles.resultMeta}>${p.price.toFixed(2)} · {p.category}</span>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                      </Link>
                    ))}
                  </div>
                )}
                {blogResults.length > 0 && (
                  <div className={styles.resultGroup}>
                    <span className={styles.resultGroupLabel}>Articles</span>
                    {blogResults.map((b) => (
                      <Link
                        key={b.id}
                        href={`/blog/${b.id}`}
                        className={styles.resultItem}
                        onClick={closeSearch}
                      >
                        <div className={styles.resultBlogThumb}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF9800" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                        </div>
                        <div className={styles.resultInfo}>
                          <span className={styles.resultTitle}>{b.title}</span>
                          <span className={styles.resultMeta}>{b.category} · {b.date}</span>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                      </Link>
                    ))}
                  </div>
                )}
                {hasResults && (
                  <div className={styles.searchFooter}>
                    <button type="button" className={styles.seeAllBtn} onClick={handleSearchSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>}>
                      See all results for &quot;{searchQuery}&quot; →
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
