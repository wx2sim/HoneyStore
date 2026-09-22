"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost, blogPosts } from "@/data/blogData";
import styles from "./PostDetail.module.css";

// ─── Article body paragraphs (realistic filler content) ───────────────────────
const articleBody = [
  `Honey has been treasured for thousands of years—not only as a sweetener but as a medicine, a preservative, and even a currency. Archaeological evidence shows that bees were kept in ancient Egypt as far back as 2400 BC, and honey was found in the tombs of pharaohs, still edible after millennia. This remarkable longevity is due to honey's unique chemical properties: low water activity, acidic pH, and the presence of hydrogen peroxide all combine to create a truly hostile environment for bacteria.`,
  `Modern science has validated many of the traditional uses of honey. Raw honey contains a rich array of antioxidants, including flavonoids and phenolic acids, which help neutralize free radicals in the body. Studies suggest that regular, moderate consumption of honey may reduce oxidative stress, support heart health, and even aid in wound healing. Manuka honey, derived from the nectar of the tea tree plant in New Zealand and Australia, has become particularly prized for its potent antibacterial activity, attributed largely to its high methylglyoxal (MGO) content.`,
  `Not all honey is created equal, however. The flavor, color, and health properties of honey vary enormously depending on the floral source, geographic region, processing methods, and storage conditions. Wildflower honey is a complex, multi-floral blend that changes character with the seasons and location. Clover honey is mild and sweet, the classic supermarket staple. Buckwheat honey is dark and robust with a malty depth. Acacia honey is almost water-white and barely crystallizes, making it a bartender's favorite for craft cocktails.`,
  `When buying honey, look for raw and unfiltered varieties whenever possible. Commercial processing often involves heating honey to temperatures above 40°C (104°F) to prevent crystallization and facilitate bottling—but this also destroys many of the beneficial enzymes and antioxidants. Raw honey retains its natural pollen content, which can help with local allergy desensitization over time, though evidence here is still preliminary. Look for honey sold in glass jars rather than plastic, which can leach chemicals over time, especially if the honey is left in warm conditions.`,
  `Storing honey properly is simple: keep it in a sealed container at room temperature, away from direct sunlight and humidity. Honey never truly expires—crystallized honey can be gently warmed in a water bath to restore its liquid state without damaging its beneficial properties. In fact, crystallization is a sign of quality: it indicates the honey is raw and has not been excessively heated or filtered.`,
];

const shareLinks = [
  { label: "Facebook", color: "#1877F2", icon: "f" },
  { label: "Twitter / X", color: "#000", icon: "𝕏" },
  { label: "Pinterest", color: "#E60023", icon: "𝑃" },
];

interface Props {
  post: BlogPost;
}

export default function PostDetail({ post }: Props) {
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
  const recentPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 4);

  return (
    <main className={styles.page}>
      {/* ── Hero Banner ──────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/blog">Blog</Link>
            <span>›</span>
            <span className={styles.breadcrumbCurrent}>{post.title}</span>
          </nav>
          <span className={styles.categoryBadge}>
            <span className={styles.badgeDot}>◆</span> {post.category}
          </span>
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <div className={styles.heroMeta}>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              {post.author}
            </span>
            <span className={styles.metaDivider}>·</span>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              {post.date}
            </span>
            <span className={styles.metaDivider}>·</span>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              {post.commentsCount} Comments
            </span>
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────── */}
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* ── Article ─────────────────────────────── */}
          <article className={styles.article}>
            {/* Summary callout */}
            <blockquote className={styles.summaryQuote}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--primary-orange)" className={styles.quoteIcon}>
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .735-2 1.75v9.5C2 15.75 2.5 17 4 18c1 .5 1 1 1 2M21 21c-3 0-7-1-7-8V5c0-1.25.757-2.017 2-2h4c1.25 0 2 .735 2 1.75v9.5c0 1.5-.5 2.75-2 3.75-1 .5-1 1-1 2" />
              </svg>
              <p>{post.desc} Learn more about the fascinating world of honey, from the hive to your table, in this in-depth exploration.</p>
            </blockquote>

            {/* Article paragraphs */}
            {articleBody.map((para, i) => (
              <p key={i} className={styles.bodyPara}>{para}</p>
            ))}

            {/* Inline image */}
            <div className={styles.inlineImageWrapper}>
              <Image
                src={post.image}
                alt={`${post.title} — featured`}
                width={800}
                height={420}
                className={styles.inlineImage}
              />
              <p className={styles.imageCaption}>Raw honey straight from the hive — unfiltered, unheated, and packed with enzymes.</p>
            </div>

            <p className={styles.bodyPara}>
              Whether you are a curious home cook, a health enthusiast, or a dedicated beekeeper, understanding the nuances of honey can deepen your appreciation for one of nature&apos;s most extraordinary gifts. From the hive to the jar, every step of the honey-making process is a collaboration between bees, flowers, seasons, and the careful craft of the beekeeper.
            </p>

            {/* Tags */}
            <div className={styles.tagRow}>
              <span className={styles.tagLabel}>Tags:</span>
              {Array.from(new Set(post.category.split(" ").concat(["Honey", "Organic", "Natural"]))).map((tag) => (
                <Link key={tag} href={`/blog`} className={styles.tag}>{tag}</Link>
              ))}
            </div>

            {/* Share */}
            <div className={styles.shareRow}>
              <span className={styles.shareLabel}>Share:</span>
              {shareLinks.map((s) => (
                <button
                  key={s.label}
                  className={styles.shareBtn}
                  style={{ background: s.color }}
                  aria-label={`Share on ${s.label}`}
                >
                  {s.icon}
                </button>
              ))}
            </div>

            {/* Comments Section */}
            <div className={styles.commentsSection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.headingDot}>◆</span> Leave a Comment
              </h3>
              <form className={styles.commentForm} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="comment-name">Name *</label>
                    <input id="comment-name" type="text" placeholder="Your name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="comment-email">Email *</label>
                    <input id="comment-email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="comment-body">Comment *</label>
                  <textarea id="comment-body" rows={5} placeholder="Share your thoughts..." required />
                </div>
                <button type="submit" className={styles.submitCommentBtn}>Post Comment →</button>
              </form>
            </div>
          </article>

          {/* ── Sidebar ──────────────────────────────── */}
          <aside className={styles.sidebar}>
            {/* Search */}
            <div className={styles.sideWidget}>
              <h4 className={styles.widgetTitle}>Search</h4>
              <form className={styles.sideSearchForm} onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Search articles..." className={styles.sideSearchInput} />
                <button type="submit" className={styles.sideSearchBtn} aria-label="Search">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </button>
              </form>
            </div>

            {/* Recent Posts */}
            <div className={styles.sideWidget}>
              <h4 className={styles.widgetTitle}>Recent Posts</h4>
              <ul className={styles.recentList}>
                {recentPosts.map((rp) => (
                  <li key={rp.id} className={styles.recentItem}>
                    <Link href={`/blog/${rp.id}`} className={styles.recentThumbLink}>
                      <div className={styles.recentThumb}>
                        <Image src={rp.image} alt={rp.title} fill style={{ objectFit: "cover" }} sizes="60px" />
                      </div>
                    </Link>
                    <div className={styles.recentInfo}>
                      <Link href={`/blog/${rp.id}`} className={styles.recentTitle}>{rp.title}</Link>
                      <span className={styles.recentDate}>{rp.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className={styles.sideWidget}>
              <h4 className={styles.widgetTitle}>Categories</h4>
              <ul className={styles.catList}>
                {categories.map((cat) => (
                  <li key={cat} className={styles.catItem}>
                    <Link href="/blog" className={styles.catLink}>
                      <span className={styles.catDot}>◆</span> {cat}
                    </Link>
                    <span className={styles.catCount}>
                      ({blogPosts.filter((p) => p.category === cat).length})
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className={`${styles.sideWidget} ${styles.newsletterWidget}`}>
              <div className={styles.newsletterIcon}>🍯</div>
              <h4 className={styles.widgetTitle} style={{ color: "#fff", textAlign: "center" }}>Newsletter</h4>
              <p className={styles.newsletterText}>Get the freshest honey tips and recipes delivered to your inbox.</p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="your@email.com" className={styles.newsletterInput} />
                <button type="submit" className={styles.newsletterBtn}>Subscribe</button>
              </form>
            </div>
          </aside>
        </div>

        {/* ── Related Posts ──────────────────────────────── */}
        <section className={styles.relatedSection}>
          <h2 className={styles.relatedHeading}>
            <span className={styles.headingDot}>◆</span> Related Posts
          </h2>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((rp) => (
              <article key={rp.id} className={styles.relatedCard}>
                <Link href={`/blog/${rp.id}`} className={styles.relatedImageLink}>
                  <div className={styles.relatedImageBox}>
                    <Image src={rp.image} alt={rp.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className={styles.relatedOverlay} />
                  </div>
                </Link>
                <div className={styles.relatedContent}>
                  <span className={styles.relatedCat}>{rp.category}</span>
                  <Link href={`/blog/${rp.id}`} className={styles.relatedTitle}>{rp.title}</Link>
                  <span className={styles.relatedDate}>{rp.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
