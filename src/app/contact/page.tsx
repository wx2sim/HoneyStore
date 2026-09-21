import type { Metadata } from "next";
import ContactHero from "@/components/contact/Hero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us – Hanio Honey Store",
  description:
    "Get in touch with our team for questions about our organic honey products, bulk orders, farm visits, or beekeeping inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
    </main>
  );
}
