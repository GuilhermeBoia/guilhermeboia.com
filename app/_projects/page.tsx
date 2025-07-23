import { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Projects | Guilherme Boia",
  },
  description:
    "Undergrad Computer Science student just sharing my thoughts and document my journey in tech.",
  openGraph: {
    title: "Projects | Guilherme Boia",
    description:
      "Undergrad Computer Science student just sharing my thoughts and document my journey in tech.",
    images: [
      {
        url: "https://guilhermeboia.com/og-image.png",
      },
    ],
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
