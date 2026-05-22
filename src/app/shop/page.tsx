import React from "react";
import Hero from "@/components/shop/Hero";
import Catalog from "@/components/shop/Catalog";

export default function ShopPage() {
  return (
    <div style={{ backgroundColor: "var(--white)", minHeight: "100vh", position: "relative" }}>
      <Hero />
      <Catalog />
    </div>
  );
}
