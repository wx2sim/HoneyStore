import type { Metadata } from "next";
import GalleryHero from "@/components/gallery/Hero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery – Hanio Honey Store",
  description:
    "Explore our photo gallery — from golden honey farms and beekeeping to premium honey products straight from the hive.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryGrid />
    </main>
  );
}
