import { Metadata } from "next";
import Homepage from "@/components/HomePage";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Home | Guilherme Boia",
  },
  description:
    "Undergrad Computer Science student just sharing my thoughts and document my journey in tech.",
  openGraph: {
    title: "Home",
    description:
      "Undergrad Computer Science student just sharing my thoughts and document my journey in tech.",
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
