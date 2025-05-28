import { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Contact | Guilherme Boia",
  },
  description:
    "Get in touch with me to discuss projects, opportunities, or just to chat about technology and software development.",
  openGraph: {
    title: "Contact | Guilherme Boia",
    description:
      "Get in touch with me to discuss projects, opportunities, or just to chat about technology and software development.",
  },
};

export default function Contact() {
  return (
    <>
      <div className="w-full max-w-6xl flex flex-col h-full px-4">
        <NavBar />
        <main className="flex-1 w-full flex items-center justify-center p-6 ">
          <ContactPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
