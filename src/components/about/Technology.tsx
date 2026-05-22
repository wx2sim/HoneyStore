import Image from "next/image";
import styles from "./Technology.module.css";

const stats = [
  { id: 1, number: "30", label: "Happy Customers" },
  { id: 2, number: "0", label: "Finished Projects" },
  { id: 3, number: "1", label: "Worldwide Branches" },
];

export default function Technology() {
  return (
    <section className={styles.techSection}>
      {/* Decorative Top Wave - White to Light Yellow */}
      <div className={styles.topWave}>
        <Image
          src="/assets/about/technology/waveSvg.svg"
          alt=""
          fill
          className={styles.waveImg}
          priority
        />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>HOW WE PRODUCE HONEY</span>
          <h2 className={styles.title}>Our Technology</h2>
          <p className={styles.desc}>
            To safely collect honey from a hive, beekeepers typically pacify the bees using a bee smoker.
          </p>
        </div>

        <div className={styles.videoWrapper}>
          <Image
            src="/assets/about/technology/video-thumbnail.png"
            alt="Our Technology"
            width={1000}
            height={500}
            className={styles.videoImg}
          />
          <button className={styles.playBtn}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-orange)" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" stroke="var(--primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Decorative Bottom Wave - Light Yellow to White */}
      <div className={styles.bottomWave}>
        <Image 
          src="/assets/about/technology/waveSvg.svg" 
          alt="" 
          fill 
          className={styles.waveImgBottom} 
          priority 
        />
      </div>
    </section>
  );
}

