import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guilhermeboia.com"),
  title: {
    template: "%s | Guilherme Boia",
    default: "Guilherme Boia | Developer",
  },
  description:
    "Software Engineer passionate about building great products and sharing knowledge",
  openGraph: {
    title: {
      default: "Guilherme Boia | Developer",
      template: "%s | Guilherme Boia",
    },
    description:
      "Software Engineer passionate about building great products and sharing knowledge",
    url: "https://guilhermeboia.com",
    siteName: "Guilherme Boia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guilherme Boia - Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://guilhermeboia.com",
  },
  keywords: [
    "Software Engineer",
    "Web Development",
    "Product Development",
    "React",
    "Next.js",
    "TypeScript",
    "Guilherme Boia",
  ],
  authors: [{ name: "Guilherme Boia" }],
  creator: "Guilherme Boia",
  publisher: "Guilherme Boia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#08070b] text-gray-400 h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col items-center`}
      >
        <div className="w-full max-w-6xl flex flex-col h-full px-4">
          <NavBar />
          <main className="flex-1 w-full flex items-center">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
