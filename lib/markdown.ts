import fs from "fs/promises";
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
  description: string;
  date: string;
  coverImage?: string;
  selectionColor: string;
  content: string;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  const fileContents = await fs.readFile(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const htmlContent = md.render(content);

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    date: data.date,
    coverImage: data.coverImage,
    selectionColor: data.selectionColor,
    content: htmlContent,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await fs.readdir(postsDirectory);
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
