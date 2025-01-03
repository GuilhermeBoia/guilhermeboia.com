import { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";

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

export default function Home() {
  return <ProjectPage />;
}
