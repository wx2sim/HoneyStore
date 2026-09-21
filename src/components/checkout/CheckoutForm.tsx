"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from "./CheckoutForm.module.css";

type PaymentMethod = "card" | "cod";
type Step = "form" | "success";

export default function CheckoutForm() {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const [step, setStep] = useState<Step>("form");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
  });

  const shipping = cartTotal > 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setStep("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (step === "success") {
    return (
      <div className={styles.successPage}>
        <div className={styles.successCard}>
          <div className={styles.successIconWrapper}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className={styles.successTitle}>Order Placed! 🍯</h1>
          <p className={styles.successSubtitle}>
            Thank you, <strong>{form.firstName}</strong>! Your order has been received and is being prepared.
          </p>
          <div className={styles.successDetail}>
            <span>Order #HNY-{Math.floor(Math.random() * 90000) + 10000}</span>
            <span>A confirmation email was sent to <strong>{form.email}</strong></span>
          </div>
          <div className={styles.successActions}>
            <Link href="/shop" className={styles.continueShopping}>Continue Shopping</Link>
            <Link href="/" className={styles.goHome}>Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className={styles.emptyPage}>
        <div className={styles.emptyCard}>
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="1.5">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <h2>Your cart is empty</h2>
          <p>Add some honey to your cart before checking out!</p>
          <Link href="/shop" className={styles.shopLink}>Go to Shop →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link> <span>›</span>
            <Link href="/shop">Shop</Link> <span>›</span>
            <span>Checkout</span>
          </nav>
          <h1 className={styles.heroTitle}>Checkout</h1>
          <p className={styles.heroSub}>{cartCount} item{cartCount !== 1 ? "s" : ""} in your cart</p>
        </div>
      </div>

      <div className={styles.container}>
        <form className={styles.layout} onSubmit={handleSubmit}>

          {/* ── Left: Form ──────────────────────────────── */}
          <div className={styles.formSide}>

            {/* Contact Info */}
            <section className={styles.formSection}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.stepNum}>1</span> Contact Information
              </h2>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name *</label>
                  <input id="firstName" name="firstName" type="text" placeholder="Jane" value={form.firstName} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name *</label>
                  <input id="lastName" name="lastName" type="text" placeholder="Doe" value={form.lastName} onChange={handleChange} required />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" placeholder="jane@email.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
                </div>
              </div>
            </section>

            {/* Shipping */}
            <section className={styles.formSection}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.stepNum}>2</span> Shipping Address
              </h2>
              <div className={styles.formGroup}>
                <label htmlFor="address">Street Address *</label>
                <input id="address" name="address" type="text" placeholder="123 Honey Lane" value={form.address} onChange={handleChange} required />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="city">City *</label>
                  <input id="city" name="city" type="text" placeholder="Nashville" value={form.city} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="state">State *</label>
                  <input id="state" name="state" type="text" placeholder="TN" value={form.state} onChange={handleChange} required />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="zip">ZIP / Postal Code *</label>
                  <input id="zip" name="zip" type="text" placeholder="38554" value={form.zip} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="country">Country</label>
                  <select id="country" name="country" value={form.country} onChange={handleChange} className={styles.selectInput}>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
              </div>

              {/* Shipping method */}
              <div className={styles.shippingMethods}>
                <label className={`${styles.shippingOption} ${shipping === 0 ? styles.shippingFree : ""}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                  <div>
                    <span className={styles.shippingLabel}>
                      {cartTotal > 50 ? "Free Shipping 🎉" : "Standard Shipping"}
                    </span>
                    <span className={styles.shippingTime}>3–5 business days</span>
                  </div>
                  <span className={styles.shippingPrice}>
                    {shipping === 0 ? <span className={styles.freeTag}>FREE</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </label>
                {cartTotal <= 50 && (
                  <p className={styles.freeShippingHint}>
                    Add <strong>${(50 - cartTotal).toFixed(2)}</strong> more to qualify for free shipping!
                  </p>
                )}
              </div>
            </section>

            {/* Payment */}
            <section className={styles.formSection}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.stepNum}>3</span> Payment Method
              </h2>

              <div className={styles.paymentTabs}>
                <button
                  type="button"
                  className={`${styles.payTab} ${paymentMethod === "card" ? styles.payTabActive : ""}`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                  Credit / Debit Card
                </button>
                <button
                  type="button"
                  className={`${styles.payTab} ${paymentMethod === "cod" ? styles.payTabActive : ""}`}
                  onClick={() => setPaymentMethod("cod")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  Cash on Delivery
                </button>
              </div>

              {paymentMethod === "card" && (
                <div className={styles.cardFields}>
                  <div className={styles.formGroup}>
                    <label htmlFor="cardName">Name on Card *</label>
                    <input id="cardName" name="cardName" type="text" placeholder="Jane Doe" value={form.cardName} onChange={handleChange} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="cardNumber">Card Number *</label>
                    <input
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      value={form.cardNumber}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
                        setForm((prev) => ({ ...prev, cardNumber: v }));
                      }}
                      required
                    />
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="cardExpiry">Expiry *</label>
                      <input
                        id="cardExpiry"
                        name="cardExpiry"
                        type="text"
                        placeholder="MM / YY"
                        maxLength={7}
                        value={form.cardExpiry}
                        onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "$1 / $2");
                          setForm((prev) => ({ ...prev, cardExpiry: v }));
                        }}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="cardCvc">CVC *</label>
                      <input id="cardCvc" name="cardCvc" type="text" placeholder="123" maxLength={4} value={form.cardCvc} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className={styles.secureNote}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                    Your payment info is encrypted and secure
                  </div>
                </div>
              )}

              {paymentMethod === "cod" && (
                <div className={styles.codNote}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF9800" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                  <p>You will pay in cash when your order arrives at your door. No card details needed.</p>
                </div>
              )}
            </section>

            <button type="submit" className={styles.placeOrderBtn}>
              Place Order — ${total.toFixed(2)} →
            </button>
          </div>

          {/* ── Right: Order Summary ─────────────────────── */}
          <aside className={styles.summarySide}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Order Summary</h3>

              <ul className={styles.summaryItems}>
                {cart.map((item) => (
                  <li key={item.id} className={styles.summaryItem}>
                    <div className={styles.summaryItemImage}>
                      <Image src={item.image} alt={item.title} width={56} height={56} style={{ objectFit: "contain" }} />
                      <span className={styles.summaryQtyBadge}>{item.quantity}</span>
                    </div>
                    <div className={styles.summaryItemInfo}>
                      <span className={styles.summaryItemTitle}>{item.title}</span>
                      <span className={styles.summaryItemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={styles.couponRow}>
                <input type="text" placeholder="Coupon code" className={styles.couponInput} />
                <button type="button" className={styles.couponBtn}>Apply</button>
              </div>

              <div className={styles.totalsBlock}>
                <div className={styles.totalRow}>
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className={styles.freeTag}>FREE</span> : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className={`${styles.totalRow} ${styles.grandTotal}`}>
                  <span>Total</span>
                  <span className={styles.grandTotalVal}>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Trust badges */}
              <div className={styles.trustBadges}>
                <div className={styles.trustBadge}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  <span>Secure Checkout</span>
                </div>
                <div className={styles.trustBadge}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                  <span>Fast Delivery</span>
                </div>
                <div className={styles.trustBadge}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9800" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  <span>100% Natural</span>
                </div>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}
