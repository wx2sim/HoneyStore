import Image from "next/image";
import styles from "./Blog.module.css";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "How honey are made in factory?",
    author: "Admin",
    date: "Dec 25, 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/assets/home/blog/post-1.webp",
  },
  {
    id: 2,
    title: "The sweet taste of honey",
    author: "Admin",
    date: "Nov 12, 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/assets/home/blog/post-2.webp",
  },
  {
    id: 3,
    title: "Why we love honey?",
    author: "Admin",
    date: "Oct 05, 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/assets/home/blog/post-3.webp",
  }
];

export default function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.topWave}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Our News</span>
          <h2 className={styles.title}>Our Blog</h2>
        </div>

        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.card}>
              <div className={styles.imageBox}>
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className={styles.blogImg} />
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.author}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    {post.author}
                  </span>
                  <span className={styles.date}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {post.date}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardDesc}>{post.desc}</p>
                <Link href="/blog" className={styles.readMoreBtn}>
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative */}
      <Image src="/assets/home/blog/dots.png" alt="" width={150} height={150} className={styles.dots} />

      {/* Bottom Wave Divider */}
      <div className={styles.bottomWave}></div>
    </section>
  );
}
