import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/blog/Hero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Wanio",
  description: "Read our latest news, articles, and recipes involving natural honey, beekeeping, and healthy living.",
};

export default function BlogPage() {
  return (
    <main style={{ backgroundColor: "var(--white)", minHeight: "100vh", position: "relative" }}>
      <Hero />
      <BlogGrid />
    </main>
  );
}
