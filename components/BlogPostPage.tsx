import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

interface Post {
  coverImage?: string;
  title: string;
  date: string;
  content: string;
  selectionColor: string;
}

const BlogPostPage = ({ post }: { post: Post }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.setProperty(
      "--selection-color",
      post.selectionColor
    );
  }, [post.selectionColor]);

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
          <article className="max-w-3xl mx-auto px-4 mt-12 mb-12">
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

        /* Heading styles */
        .prose h1 {
          color: white;
          font-size: 2.5rem;
          font-weight: 600;
          margin-top: 3rem;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .prose h2 {
          color: white;
          font-size: 1.8rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }

        .prose h3 {
          color: white;
          font-size: 1.3rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .prose p {
          margin-bottom: 1.5rem;
          color: #9ca3af;
          font-weight: 300;
        }

        .prose strong {
          color: white;
          font-weight: 400;
        }

        /* Link styles */
        .prose a {
          color: white;
          text-decoration: underline;
          transition: opacity 0.2s;
        }

        .prose a:hover {
          opacity: 0.8;
        }

        /* Figure and image styles */
        .prose figure {
          margin: 2rem 0;
        }

        .prose figure img {
          border-radius: 0.5rem;
          width: 100%;
          height: auto;
          display: block;
        }

        .prose .post-image-full {
          width: 100%;
          border-radius: 0.5rem;
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

        /* List styles */
        .prose ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin: 1.5rem 0;
        }

        .prose ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin: 1.5rem 0;
        }

        .prose li {
          margin-bottom: 0.5rem;
          color: #d1d5db;
        }
      `}</style>
    </div>
  );
};

export default BlogPostPage;
