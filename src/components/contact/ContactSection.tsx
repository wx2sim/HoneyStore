"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ContactSection.module.css";

const infoCards = [
  {
    id: 1,
    title: "Our Address",
    text: "202 Honey Springs Rd, Crawford, TN 38554",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Phone Number",
    text: "+1 800 275 8777",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.05 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Email Address",
    text: "info@haniostore.com",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <motion.section className={styles.contactSection} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
      {/* Decorative bee */}
      <div className={styles.beeDecor}>
        <Image src="/assets/about/company/bee.png" alt="" width={88} height={88} />
      </div>

      {/* Decorative dots */}
      <div className={styles.dotsDecor}>
        <Image src="/assets/about/decorations/dots.png" alt="" width={110} height={110} />
      </div>

      <div className={styles.container}>
        {/* ── Header ── */}
        <div className={styles.header}>
          <span className={styles.subtitle}>GET IN TOUCH</span>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.desc}>
            We&apos;d love to hear from you! Whether you have questions about our honey, want to visit our apiary, or are interested in our beekeeping courses — reach out anytime.
          </p>
        </div>

        {/* ── Info Cards ── */}
        <div className={styles.infoCards}>
          {infoCards.map((card) => (
            <div key={card.id} className={styles.infoCard}>
              <div className={styles.iconCircle}>{card.icon}</div>
              <h3 className={styles.infoCardTitle}>{card.title}</h3>
              <p className={styles.infoCardText}>{card.text}</p>
            </div>
          ))}
        </div>

        {/* ── Main Two-Column: Map + Form ── */}
        <div className={styles.mainGrid}>

          {/* Left: Map + Socials */}
          <div className={styles.mapCol}>
            <div className={styles.mapBox}>
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206714.44648986247!2d-85.71539044558547!3d36.25568024609707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864f4b5e2c74879%3A0x10c50c1ef78a2c9b!2sCrawford%2C%20TN%2038554!5e0!3m2!1sen!2sus!4v1695000000000!5m2!1sen!2sus"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className={styles.socialRow}>
              <p className={styles.socialRowTitle}>Follow Us</p>
              <div className={styles.socialIcons}>
                {/* Facebook */}
                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* Twitter / X */}
                <a href="#" className={styles.socialIcon} aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className={styles.socialIcon} aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={styles.formCol}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              <p className={styles.formSubtitle}>Fill in the form below and we&apos;ll get back to you within 24 hours.</p>
            </div>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              {/* Name + Email row */}
              <div className={styles.formRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className={styles.input}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    className={styles.input}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Phone + Subject row */}
              <div className={styles.formRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="contact-phone">Phone (optional)</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    className={styles.input}
                    placeholder="+1 800 000 0000"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="contact-subject">Subject</label>
                  <div className={styles.selectWrapper}>
                    <select id="contact-subject" className={styles.select} defaultValue="">
                      <option value="" disabled>Select a topic</option>
                      <option>Honey Products</option>
                      <option>Bulk / Wholesale</option>
                      <option>Beekeeping Course</option>
                      <option>Visit Our Farm</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className={styles.textarea}
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              {/* Consent */}
              <label className={styles.checkRow}>
                <input type="checkbox" required />
                I agree to the privacy policy and consent to being contacted by the Hanio team.
              </label>

              {/* Submit */}
              <button type="submit" className={styles.submitBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
