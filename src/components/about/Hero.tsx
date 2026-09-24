"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section className={styles.hero} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} viewport={{ once: true }}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us Honey</h1>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>-</span>
          <span className={styles.current}>About Us</span>
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
    </motion.section>
  );
}
