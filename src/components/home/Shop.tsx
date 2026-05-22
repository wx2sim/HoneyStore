import Image from "next/image";
import styles from "./Shop.module.css";
import Link from "next/link";

const shopData = [
  {
    id: 1,
    name: "Hanio",
    category: "Pure Natural Honey",
    price: "$29.00",
    image: "/assets/home/shop/product-1.png",
    rating: 5
  },
  {
    id: 2,
    name: "Honia",
    category: "Organic Honey",
    price: "$35.00",
    image: "/assets/home/shop/product-2.png",
    rating: 5
  },
  {
    id: 3,
    name: "Hanio",
    category: "Pure Natural Honey",
    price: "$25.00",
    image: "/assets/home/shop/product-3.png",
    rating: 5
  }
];

export default function Shop() {
  return (
    <section className={styles.shop}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Our Products</span>
          <h2 className={styles.title}>Online Shop</h2>
        </div>

        <div className={styles.grid}>
          {shopData.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageBox}>
                <div className={styles.imageBackdrop}></div>
                <Image src={product.image} alt={product.name} width={220} height={220} className={styles.productImg} />
                <span className={styles.badge}>Best Seller</span>
              </div>
              <div className={styles.content}>
                <div className={styles.metaRow}>
                  <span className={styles.category}>{product.category}</span>
                  <div className={styles.rating}>
                    {Array.from({ length: product.rating }).map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--primary-orange)" stroke="var(--primary-orange)" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    ))}
                  </div>
                </div>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.footerRow}>
                  <span className={styles.price}>{product.price}</span>
                  <button className={styles.addToCartBtn} aria-label="Add to cart">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <Image src="/assets/images/dots.png" alt="" width={100} height={100} className={styles.dots} />
      <div className={styles.circleBg}></div>
    </section>
  );
}
