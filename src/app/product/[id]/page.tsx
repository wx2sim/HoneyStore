import React from "react";
import ProductHero from "@/components/product/ProductHero";
import ProductMain from "@/components/product/ProductMain";
import ProductSidebar from "@/components/product/ProductSidebar";
import catalogStyles from "@/components/shop/Catalog.module.css";
import { productsData } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productsData.find(p => p.id.toString() === id);
  
  if (!product) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: "#FDFDF9", minHeight: "100vh", position: "relative" }}>
      <ProductHero product={product} />
      <section className={catalogStyles.catalogSection}>
        <div className={catalogStyles.container}>
          <div className={catalogStyles.layoutGrid}>
            <ProductMain product={product} />
            <ProductSidebar />
          </div>
        </div>
      </section>
    </div>
  );
}
