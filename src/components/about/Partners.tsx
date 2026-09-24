"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Partners.module.css";

const partnersData = [
  { id: 1, image: "/assets/about/partners/partner-1.png", alt: "Partner 1" },
  { id: 2, image: "/assets/about/partners/partner-2.png", alt: "Partner 2" },
  { id: 3, image: "/assets/about/partners/partner-3.png", alt: "Partner 3" },
  { id: 4, image: "/assets/about/partners/partner-4.png", alt: "Partner 4" },
];

// Quadruple array to create smooth seamless infinite looping
const duplicatedPartners = [...partnersData, ...partnersData, ...partnersData, ...partnersData];

export default function Partners() {
  return (
    <motion.section className={styles.partnersSection} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} viewport={{ once: true }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>IN CONJUNCTION</span>
          <h2 className={styles.title}>Our Partners</h2>
        </div>

        {/* Marquee Loop Moving Left to Right */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {duplicatedPartners.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className={styles.logoWrapper}>
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  width={220}
                  height={100}
                  className={styles.logoImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
