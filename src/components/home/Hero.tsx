"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Background Shapes */}
      <div className={styles.bgShapes}>
        <div className={styles.blobLightBg}></div>
        <div className={styles.blobOrange}></div>

        <div className={styles.beeContainer}>
          <Image src="/assets/home/hero/bee-2.png" alt="" width={200} height={200} className={styles.beeIcon} />
          <div className={styles.beePath}></div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Left Content */}
        <div
          className={styles.content}
        >
          <h1 className={styles.title}>
            <span className={styles.highlight}>Natural Honey</span><br />
            online shop
          </h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac laoreet lacus. Morbi auctor quam tempus massa vestibulum aliquet eu vitae ligula.
          </p>
          <Link href="/shop" className={styles.shopBtn}>
            View Products
          </Link>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/home/hero/hero-image.png"
            alt="Natural Honey Jar"
            width={600}
            height={600}
            className={styles.heroImg}
            priority
          />
        </div>
      </div>
    </motion.section>
  );
}
