import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/shop/Hero.module.css";

export default function ProductHero({ product }: { product: any }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>{product.title}</h1>
        <div className={styles.breadcrumb} style={{ textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <Link href="/shop">Products</Link>
          <span className={styles.separator}>/</span>
          <Link href="/shop">{product.category}</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{product.title}</span>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className={styles.bottomWave}>
        <Image 
          src="/assets/about/hero/waveSvgreverse.svg" 
          alt="" 
          fill 
          className={styles.waveImg} 
          priority 
        />
      </div>
    </section>
  );
}
