import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Products</h1>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>-</span>
          <span className={styles.current}>Shop</span>
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
