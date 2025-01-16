import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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

  const formattedDate = new Date(post.date + "T12:00:00").toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="w-full">
      <div className="relative">
        {/* Hero Section with NavBar */}
        <div className="relative h-screen w-full">
          {/* Background Image */}
          {post.coverImage && (
            <div className="absolute inset-0">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover brightness-50"
                sizes="100vw"
              />
            </div>
          )}

          <div className="absolute top-0 left-0 right-0 z-10">
            <NavBar />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-4">
            <time dateTime={post.date} className="text-gray-300 mb-6">
              {formattedDate}
            </time>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white text-center max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>

        <div className="bg-[#08070b]">
          <article className="max-w-3xl mx-auto px-4 py-24">
            <div className="prose prose-invert prose-lg mx-auto">
              <div
                className="text-gray-300 text-lg leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
        </div>
      </div>
      <Footer />

      <style jsx global>{`
        .prose {
          max-width: 100%;
        }

        .prose h2 {
          color: white;
          font-size: 2rem;
          font-weight: 500;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .prose p {
          margin-bottom: 1.5rem;
          color: #d1d5db;
        }

        .prose a {
          color: #60a5fa;
          text-decoration: none;
        }

        .prose a:hover {
          text-decoration: underline;
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
      `}</style>
    </div>
  );
};

export default BlogPostPage;
