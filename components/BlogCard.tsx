import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  description: string;
  publishDate: string;
  image: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, description, publishDate, image, slug } = post;

  return (
    <div className="w-72 relative">
      <Link href={`/blog/${slug}`} className="block">
        <article
          className="relative flex flex-col overflow-hidden rounded-2xl bg-[#08070b]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-32 max-w-[288px] overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover brightness-90"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="flex flex-col space-y-3 p-6">
            <h3 className="text-lg font-medium text-white transition-colors duration-200">
              {title}
            </h3>
            <p className="text-sm text-gray-400 transition-colors duration-200">
              {description}
            </p>
            <div className="text-xs text-gray-500">{publishDate}</div>
          </div>

          <span
            className={`absolute -inset-4 bg-gray-400 rounded-4xl transition-all duration-300 ease-in-out transform 
              ${isHovered ? "scale-100 opacity-10" : "scale-90 opacity-0"}`}
          />
        </article>
      </Link>
    </div>
  );
};

export { BlogCard };
export type { BlogPost, BlogCardProps };
