"use client";

import { useEffect, useState } from "react";
import { GradientTitleBig } from "@/components/Titles";
import { BlogCard } from "./BlogCard";
import type { Post } from "@/lib/markdown";

const BlogPage = () => {
  const [mounted, setMounted] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.setProperty("--selection-color", "#FF69B4");

    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="gap-6 lg:gap-8 items-center lg:mt-8">
        <div className="flex flex-col space-y-6 max-w-xl lg:max-w-none mx-auto">
          <div className="space-y-8 sm:space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              <GradientTitleBig
                title="my thoughts."
                fromColor="#FF69B4"
                viaColor="#DA70D6"
                toColor="#9370DB"
              />
              <p className="text-gray-400 text-lg max-w-3xl">
                Sharing thoughts and experiences about software development,
                technology, and life.
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {loading ? (
                <div className="col-span-full flex items-center justify-center py-8">
                  <p className="text-gray-400 text-lg">Loading posts...</p>
                </div>
              ) : posts.length > 0 ? (
                posts.map((post) => (
                  <div key={post.slug} className="flex justify-center">
                    <BlogCard
                      post={{
                        title: post.title,
                        description: post.description,
                        publishDate: new Date(
                          post.date + "T12:00:00"
                        ).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }),
                        image: post.coverImage || "/images/default-post.png",
                        slug: post.slug,
                      }}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-full flex items-center justify-center py-8">
                  <p className="text-gray-400 text-lg">No posts found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
