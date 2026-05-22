import Image from "next/image";
import styles from "./Services.module.css";

const servicesData = [
  {
    id: 1,
    title: "Honey production",
    desc: "We have been producing honey for many years and we are undeniably proud of the quality of our products.",
    image: "/assets/home/services/serv 1.png"
  },
  {
    id: 2,
    title: "Beekeeping course",
    desc: "Everything you need to know about beekeeping in our overwhelming online course.",
    image: "/assets/home/services/serv 2.png"
  },
  {
    id: 3,
    title: "Swarm removing",
    desc: "We also provide a service for removing bee swarms. Just give us a call and we will deal with it right away.",
    image: "/assets/home/services/serv 3.png"
  }
];

export default function Services() {
  return (
    <section className={styles.services}>
      {/* Decorative Hexagons */}
      <Image
        src="/assets/home/services/5HexaShapes.png"
        alt=""
        width={220}
        height={200}
        className={styles.hexagonsTopLeft}
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>WHAT WE DO</span>
          <h2 className={styles.title}>Our Services</h2>
        </div>

        <div className={styles.grid}>
          {servicesData.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={service.image} alt={service.title} width={80} height={80} className={styles.serviceImg} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bee */}
      <div className={styles.beeContainer}>
        <Image src="/assets/home/services/upsidedownbee.png" alt="" width={120} height={120} className={styles.bee} />
        <div className={styles.beePath}></div>
      </div>
    </section>
  );
}
