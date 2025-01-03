import { Metadata } from "next";
import BlogPage from "@/components/BlogPage";

export const metadata: Metadata = {
  title: {
    absolute: "Blog | Guilherme Boia",
  },
  description:
    "Software Engineer passionate about building great products and sharing knowledge. Explore my projects, insights, and experience in software development.",
  openGraph: {
    title: "Blog",
    description:
      "Software Engineer passionate about building great products and sharing knowledge. Explore my projects, insights, and experience in software development.",
  },
};

export default function Home() {
  return <BlogPage />;
}
