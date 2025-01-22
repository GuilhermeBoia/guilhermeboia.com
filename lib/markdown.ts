import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
}).use((md) => {
  const defaultRender =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const href =
      tokens[idx].attrs?.find((attr) => attr[0] === "href")?.[1] || "";

    if (href.startsWith("http") || href.startsWith("https")) {
      const aIndex = tokens[idx].attrIndex("target");
      const relIndex = tokens[idx].attrIndex("rel");

      if (aIndex < 0) {
        tokens[idx].attrPush(["target", "_blank"]);
      } else {
        tokens[idx].attrs![aIndex][1] = "_blank";
      }

      if (relIndex < 0) {
        tokens[idx].attrPush(["rel", "noopener noreferrer"]);
      } else {
        tokens[idx].attrs![relIndex][1] = "noopener noreferrer";
      }
    }

    return defaultRender(tokens, idx, options, env, self);
  };

  return md;
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

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

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

export function getAllPosts(): Post[] {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
