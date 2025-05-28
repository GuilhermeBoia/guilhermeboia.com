import { Metadata } from "next";
import BlogPage from "@/components/BlogPage";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Blog | Guilherme Boia",
  },
  description:
    "Undergrad Computer Science student just sharing my thoughts and document my journey in tech.",
  openGraph: {
    title: "Blog | Guilherme Boia",
    description:
      "Undergrad Computer Science student just sharing my thoughts and document my journey in tech.",
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
