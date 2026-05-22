import Image from "next/image";
import styles from "./Features.module.css";

const featureData = [
  {
    id: 1,
    title: "11:00 am - 8:00 pm",
    desc: "Working Hours",
    hasDottedLine: false,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    id: 2,
    title: "Honey Springs 555",
    desc: "Get Directions",
    hasDottedLine: true,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--primary-orange)" stroke="var(--primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none"></path>
        <circle cx="12" cy="10" r="3" fill="var(--white)"></circle>
      </svg>
    )
  },
  {
    id: 3,
    title: "(555) 111-4442",
    desc: "Call Us Now",
    hasDottedLine: true,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--primary-orange)" stroke="var(--primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none"></path>
      </svg>
    )
  }
];

export default function Features() {
  return (
    <section className={styles.features}>
      {/* Background Shapes */}
      <div className={styles.bgShapes}>
        <Image src="/assets/home/features/bg-blob-left.png" alt="" width={250} height={250} className={styles.blobLeft} />
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {featureData.map((feature) => (
            <div key={feature.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={feature.hasDottedLine ? `${styles.desc} ${styles.dottedLine}` : styles.desc}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
