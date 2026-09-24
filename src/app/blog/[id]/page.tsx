import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blogData";
import PostDetail from "@/components/blog/PostDetail";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id.toString() === id);
  if (!post) return { title: "Wanio" };
  return {
    title: "Wanio",
    description: post.desc,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id.toString() === id);
  if (!post) notFound();
  return <PostDetail post={post} />;
}
