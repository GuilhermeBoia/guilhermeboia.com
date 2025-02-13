"use client";

import Link from "next/link";
import { GradientTitleBig } from "@/components/Titles";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.setProperty("--selection-color", "#FF69B4");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="w-full max-w-6xl flex flex-col h-full px-4">
        <NavBar />
        <main className="flex-1 w-full flex items-center">
          <div className="flex-1 w-full flex items-center justify-center">
            <div className="max-w-3xl w-full space-y-12 px-4">
              <div className="flex flex-col items-center space-y-8 text-center">
                <div>
                  <GradientTitleBig
                    title="404"
                    fromColor="#FF69B4"
                    viaColor="#DA70D6"
                    toColor="#9370DB"
                  />
                  <h2 className="text-2xl font-medium text-white mt-6">
                    Post Not Found
                  </h2>
                  <p className="text-gray-400 mt-4 text-lg max-w-lg mx-auto">
                    the blog post you&apos;re looking for doesn&apos;t exist.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="px-6 py-3 text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
