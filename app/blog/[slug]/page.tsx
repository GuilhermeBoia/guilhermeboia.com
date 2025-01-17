import { getPostBySlug } from "@/lib/markdown";
import BlogPostPageClient from "@/components/BlogPostPageClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug);

    return {
      title: `${post.title} | Blog`,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
    };
  } catch {
    return {
      title: "Post Not Found | Blog",
      description: "The requested blog post could not be found.",
    };
  }
}

export default async function Post({ params }: Props) {
  try {
    const post = getPostBySlug(params.slug);
    return <BlogPostPageClient post={post} />;
  } catch {
    notFound();
  }
}
