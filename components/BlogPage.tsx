"use client";

import { useEffect, useState } from "react";
import { GradientTitleBig } from "@/components/Titles";
import { BlogCard } from "./BlogCard";

const BlogPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.setProperty("--selection-color", "#85FFB7");
  }, []);

  if (!mounted) {
    return null;
  }

  const post = {
    title: "How is life post YC?",
    description: "I compiled some of the learnings from my own experience",
    publishDate: "Dec 24, 2024",
    image: "/images/post.png",
    slug: "teste",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-white">
      <div className="max-w-3xl w-full space-y-12">
        <div className="flex flex-col space-y-6">
          <div>
            <GradientTitleBig
              title="Guilherme Boia"
              fromColor="#FF69B4"
              viaColor="#DA70D6"
              toColor="#9370DB"
            />
            <p className="text-gray-400 mt-4 text-lg">
              Software Engineer passionate about building great products and
              sharing knowledge
            </p>
          </div>
          <div>
            <BlogCard post={post} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
