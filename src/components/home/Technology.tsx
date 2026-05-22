import Image from "next/image";
import styles from "./Technology.module.css";

const stats = [
  { id: 1, number: "228", label: "Total branches" },
  { id: 2, number: "5", label: "Years Experience" },
  { id: 3, number: "10", label: "Award Winning" },
];

export default function Technology() {
  return (
    <section className={styles.techSection}>
      <div className={styles.bgBlob}></div>
      <div className={styles.container}>
        {/* Decorative Triangles */}
        <div className={styles.decorLeft}>
          <Image
            src="/assets/home/technology/triangle shapes (2).png"
            alt=""
            width={80}
            height={80}
            className={styles.triangleImg}
          />
        </div>

        <div className={styles.header}>
          <span className={styles.subtitle}>HOW WE PRODUCE HONEY</span>
          <h2 className={styles.title}>Our Technology</h2>
          <p className={styles.desc}>
            To safely collect honey from a hive, beekeepers typically pacify the bees using a bee smoker.
          </p>
        </div>

        <div className={styles.videoWrapper}>
          <Image 
            src="/assets/home/technology/video-thumbnail.png" 
            alt="Our Technology" 
            width={1000} 
            height={500} 
            className={styles.videoImg}
          />
          <button className={styles.playBtn}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-orange)" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" stroke="var(--primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.statsRow}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.statItem}>
              <h3 className={styles.statNumber}>{stat.number}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className={styles.bottomWave}></div>
    </section>
  );
}
