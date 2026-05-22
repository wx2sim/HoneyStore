import Image from "next/image";
import styles from "./TypesOfHoney.module.css";
import Link from "next/link";

const honeyTypes = [
  {
    id: 1,
    title: "Linden Honey",
    desc: "Linden honey has a strong and very distinctive aroma. At first sniff...",
    image: "/assets/home/types_of_honey/type-1.png",
    bgColor: "#FFFFFF",
  },
  {
    id: 2,
    title: "Jamun Honey",
    desc: "Jamun honey is famous for its antihypoxic activity. A specific dose...",
    image: "/assets/home/types_of_honey/type-2.png",
    bgColor: "#FFA5A5",
  },
  {
    id: 3,
    title: "Organic Honey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/home/types_of_honey/type-3.png",
    bgColor: "#FFF2D1",
  },
  {
    id: 4,
    title: "Sweet Honey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/home/types_of_honey/type-4.png",
    bgColor: "#FFF2D1",
  }
];

export default function TypesOfHoney() {
  return (
    <section className={styles.typesSection}>
      <div className={styles.bgBlob}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Our Products</span>
          <h2 className={styles.title}>Types Of Honey</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </p>
        </div>

        <div className={styles.grid}>
          {honeyTypes.map((type) => (
            <div key={type.id} className={styles.card} style={{ backgroundColor: type.bgColor }}>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{type.title}</h3>
                <p className={styles.cardDesc}>{type.desc}</p>
                <Link href="/shop" className={styles.readMoreBtn}>
                  Learn more
                </Link>
              </div>
              <div className={styles.imageBox}>
                <Image src={type.image} alt={type.title} fill className={styles.productImg} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative */}
      <Image src="/assets/home/types_of_honey/beeShape.png" alt="" width={150} height={150} className={styles.bee} />
      <Image src="/assets/home/types_of_honey/dots.png" alt="" width={150} height={150} className={styles.dots} />
      <Image src="/assets/home/types_of_honey/3Hexa.png" alt="" width={180} height={180} className={styles.hexa} />
    </section>
  );
}
