import { Metadata } from "next";
import BlogPage from "@/components/BlogPage";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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

export default function Blog() {
  return (
    <>
      <div className="w-full max-w-6xl flex flex-col h-full px-4">
        <NavBar />
        <main className="flex-1 w-full flex items-center">
          <BlogPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
