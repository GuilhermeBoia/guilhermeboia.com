"use client";

import { useEffect, useState } from "react";
import BlogPostPage from "@/components/BlogPostPage";
import type { Post } from "@/lib/markdown";

interface BlogPostPageClientProps {
  post: Post;
}

export default function BlogPostPageClient({ post }: BlogPostPageClientProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.setProperty("--selection-color", "#85FFB7");
  }, []);

  if (!mounted) {
    return null;
  }

  return <BlogPostPage post={post} />;
}
