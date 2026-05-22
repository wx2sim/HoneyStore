import Image from "next/image";
import styles from "./Partners.module.css";

const partnersData = [
  { id: 1, image: "/assets/about/partners/partner-1.png", alt: "Partner 1" },
  { id: 2, image: "/assets/about/partners/partner-2.png", alt: "Partner 2" },
  { id: 3, image: "/assets/about/partners/partner-3.png", alt: "Partner 3" },
  { id: 4, image: "/assets/about/partners/partner-4.png", alt: "Partner 4" },
];

export default function Partners() {
  return (
    <section className={styles.partnersSection}>


      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>IN CONJUNCTION</span>
          <h2 className={styles.title}>Our Partners</h2>
        </div>

        <div className={styles.grid}>
          {partnersData.map((partner) => (
            <div key={partner.id} className={styles.logoWrapper}>
              <Image src={partner.image} alt={partner.alt} width={150} height={150} className={styles.logoImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
