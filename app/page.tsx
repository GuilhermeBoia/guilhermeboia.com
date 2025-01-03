import { Metadata } from "next";
import Homepage from "@/components/HomePage";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Home | Guilherme Boia",
  },
  description:
    "Software Engineer passionate about building great products and sharing knowledge. Explore my projects, insights, and experience in software development.",
  openGraph: {
    title: "Home",
    description:
      "Software Engineer passionate about building great products and sharing knowledge. Explore my projects, insights, and experience in software development.",
  },
};

export default function Home() {
  return (
    <>
      <div className="w-full max-w-6xl flex flex-col h-full px-4">
        <NavBar />
        <main className="flex-1 w-full flex items-center">
          <Homepage />
        </main>
        <Footer />
      </div>
    </>
  );
}
