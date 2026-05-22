import Image from "next/image";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Testimonials</span>
          <h2 className={styles.title}>Our Happy Customers</h2>
        </div>

        <div className={styles.testimonialCard}>
          {/* Navigation Arrows */}
          <button className={`${styles.navBtn} ${styles.prevBtn}`}>&lt;</button>
          <button className={`${styles.navBtn} ${styles.nextBtn}`}>&gt;</button>

          <div className={styles.content}>
            <div className={styles.quoteIcon}>
              <Image src="/assets/home/testimonials/quote-icon.png" alt="" width={40} height={40} />
            </div>

            <p className={styles.quoteText}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            </p>

            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--primary-orange)" stroke="var(--primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ))}
            </div>

            <div className={styles.customerInfo}>
              <h4 className={styles.customerName}>Jane Doe</h4>
              <span className={styles.customerRole}>Manager</span>
            </div>
          </div>

          <div className={styles.imageBox}>
            <Image
              src="/assets/home/testimonials/customer-1.png"
              alt="Jane Doe"
              width={250}
              height={250}
              className={styles.customerImg}
            />
          </div>
        </div>
      </div>

      {/* Decoratives */}
      <Image src="/assets/home/testimonials/bee.png" alt="" width={180} height={180} className={styles.bee} />
      <div className={styles.bgBlob}></div>
    </section>
  );
}
