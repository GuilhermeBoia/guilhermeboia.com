import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const postsDirectory = path.join(process.cwd(), "_posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  content: string;
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const htmlContent = md.render(content);

  return {
    slug: realSlug,
    title: data.title,
    date: data.date,
    coverImage: data.coverImage,
    content: htmlContent,
  };
}

export function getAllPosts(): Post[] {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
