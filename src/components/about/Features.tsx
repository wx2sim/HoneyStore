import Image from "next/image";
import styles from "./Features.module.css";

const featuresData = [
  {
    id: 1,
    title: "100% Organic",
    image: "/assets/about/features/100-organic.png",
  },
  {
    id: 2,
    title: "Original Honey",
    image: "/assets/about/features/original-honey.png",
  },
  {
    id: 3,
    title: "100% Guaranteed",
    image: "/assets/about/features/100-guaranteed.png",
  },
  {
    id: 4,
    title: "Free Shipping",
    image: "/assets/about/features/free-shipping.png",
  },
];

export default function Features() {
  return (
    <section className={styles.featuresSection}>


      <div className={styles.container}>
        <div className={styles.grid}>
          {featuresData.map((feature) => (
            <div key={feature.id} className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <Image src={feature.image} alt={feature.title} width={60} height={60} className={styles.iconImg} />
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
