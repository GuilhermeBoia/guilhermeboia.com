import { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Projects | Guilherme Boia",
  },
  description:
    "Software Engineer passionate about building great products and sharing knowledge. Explore my projects, insights, and experience in software development.",
  openGraph: {
    title: "Projects",
    description:
      "Software Engineer passionate about building great products and sharing knowledge. Explore my projects, insights, and experience in software development.",
  },
};

export default function Project() {
  return (
    <>
      <div className="w-full max-w-6xl flex flex-col h-full px-4">
        <NavBar />
        <main className="flex-1 w-full flex items-center">
          <ProjectPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
