import Image from "next/image";
import styles from "./About.module.css";
import Link from "next/link";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Left Side: Image */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/home/about/about-image.png"
              alt="About Honey"
              width={500}
              height={500}
              className={styles.mainImg}
            />
            {/* Decorative background for image */}
            <div className={styles.imgBgBlob}></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className={styles.contentCol}>
          <span className={styles.subtitle}>INFORMATION</span>
          <h2 className={styles.title}>About Honey</h2>
          <p className={styles.desc}>
            Over its history as a food, the main uses of honey are in cooking, baking, desserts, as a spread on bread, as an addition to various beverages such as tea, and as a sweetener in some commercial beverages.
          </p>
          <p className={styles.desc}>
            Due to its energy density, honey is an important food for virtually all hunter-gatherer cultures in warm climates, with the Hadza people ranking honey as their favorite food.
          </p>
          <button className={styles.btn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--white)" xmlns="http://www.w3.org/2000/svg" className={styles.playIcon}>
              <circle cx="12" cy="12" r="10" fill="var(--white)" />
              <path d="M10 8L16 12L10 16V8Z" fill="var(--primary-orange)" />
            </svg>
            Watch Video
          </button>
        </div>
      </div>

      {/* Decoratives */}
      <div className={styles.topRightRing}></div>
      <div className={styles.bottomRightDots}></div>
    </section>
  );
}
