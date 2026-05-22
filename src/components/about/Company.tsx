import Image from "next/image";
import styles from "./Company.module.css";

export default function Company() {
  return (
    <section className={styles.company}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Side: Circular Image with Glow & Bees */}
          <div className={styles.imageCol}>
            {/* Soft Warm Radial Glow behind the circle */}
            <div className={styles.glowBg}></div>

            {/* Main Circle Image */}
            <div className={styles.imageCircle}>
              <Image
                src="/assets/about/company/company.png"
                alt="About Our Company"
                fill
                priority
                className={styles.mainImg}
              />
            </div>

            {/* Dotted Trails for the bees */}
            <svg className={styles.trailsSvg} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Trail for top-left bee */}
              <path
                d="M 10 100 Q 40 130 80 140"
                stroke="#FFB84C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 6"
                opacity="0.6"
              />
              {/* Trail for bottom-right bee */}
              <path
                d="M 410 360 Q 450 380 480 420"
                stroke="#FFB84C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 6"
                opacity="0.6"
              />
            </svg>

            {/* Decorative Bees */}
            <div className={styles.beeTopLeft}>
              <Image
                src="/assets/about/company/bee.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className={styles.beeBottomRight}>
              <Image
                src="/assets/about/company/upsidedownbee.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className={styles.contentCol}>
            <span className={styles.subtitle}>WHO WE ARE</span>
            <h2 className={styles.title}>About Our Company</h2>

            <p className={styles.desc}>
              Our company was founded in 2001. Our honey is 100% natural. We bring to you honey straight from the hive, unheated, unprocessed, unpasteurized.
            </p>

            <p className={styles.desc}>
              We have been producing honey for many years and we are undeniably proud of the quality of our products.
            </p>

            <p className={styles.desc}>
              The term beekeeper refers to a person who keeps honey bees in beehives, boxes, or other receptacles. The beekeeper does not control the creatures. The beekeeper owns the hives or boxes and associated equipment. The bees are free to forage or leave as they desire.
            </p>

            <button className={styles.videoBtn}>
              <svg className={styles.playIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"></polygon>
              </svg>
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
