import { getPostBySlug } from "@/lib/markdown";
import BlogPostPageClient from "@/components/BlogPostPageClient";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const resolvedParams = await params;

  try {
    const post = await getPostBySlug(resolvedParams.slug);

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
};

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  try {
    const post = await getPostBySlug(resolvedParams.slug);
    return <BlogPostPageClient post={post} />;
  } catch {
    notFound();
  }
}
