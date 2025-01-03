import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Post {
  coverImage?: string;
  title: string;
  date: string;
  content: string;
}

const BlogPostPage = ({ post }: { post: Post }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.setProperty("--selection-color", "#85FFB7");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Hero Section - Removido o -mx-4 e ajustado para ocupar toda a largura */}
      <div className="relative h-screen w-full flex items-center justify-center">
        {/* Hero Background - Ajustada a opacidade e o gradiente */}
        {post.coverImage && (
          <div className="absolute inset-0">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08070b]/50 to-[#08070b]" />
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
            {post.title}
          </h1>
          <div className="text-gray-200">
            <time dateTime={post.date} className="text-lg">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="relative bg-[#08070b]">
        <div className="max-w-3xl mx-auto px-4 py-24">
          <div className="prose prose-invert prose-lg">
            <div
              className="text-gray-300 text-lg leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>

      {/* Article styles */}
      <style jsx global>{`
        .prose h2 {
          color: white;
          font-size: 2rem;
          font-weight: 500;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .prose p {
          margin-bottom: 1.5rem;
        }

        .prose blockquote {
          color: #e2e8f0;
          border-left: 4px solid #475569;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
        }

        .prose code {
          background-color: #1e293b;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
          color: #f1f5f9;
        }

        .prose pre {
          background-color: #1e293b;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        .prose pre code {
          background-color: transparent;
          padding: 0;
          border-radius: 0;
        }

        .prose a {
          color: #60a5fa;
          text-decoration: none;
        }

        .prose a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default BlogPostPage;
