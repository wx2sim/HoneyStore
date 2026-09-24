import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanio",
  description: "Shop premium organic honey, wildflower honey, raw honey and more at Wanio. Free shipping on orders over $50.",
};

import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import CartDrawer from "@/components/global/CartDrawer";
import PageTransition from "@/components/global/PageTransition";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning>
        <CartProvider>
          <Header />
          <CartDrawer />
          <PageTransition />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
