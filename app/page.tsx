import { Metadata } from "next";
import Homepage from "@/components/HomePage";

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
  return <Homepage />;
}
