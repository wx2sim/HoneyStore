import Image from "next/image";
import styles from "./Team.module.css";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Co Founder",
    image: "/assets/about/team/team-1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Manager",
    image: "/assets/about/team/team-2.png",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Beekeeper",
    image: "/assets/about/team/team-3.png",
  },
];

export default function Team() {
  return (
    <section className={styles.teamSection}>


      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>EXPERTS</span>
          <h2 className={styles.title}>Meet Our Team</h2>
        </div>

        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.card}>
              <div className={styles.imageBox}>
                <Image src={member.image} alt={member.name} width={300} height={300} className={styles.memberImg} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <div className={styles.socials}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary-orange)"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
                <p className={styles.role}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.btnWrapper}>
          <Link href="/team" className={styles.btn}>
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
