import { Geist, Geist_Mono } from "next/font/google";
import { ScrollProvider } from "@/components/NavBar";
import "./globals.css";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Guilherme Boia | Software Engineer",
    template: "%s | Guilherme Boia",
  },
  description: "Undergrad Computer Science student just sharing my thoughts and document my journey in tech.",
  openGraph: {
    type: "website",
    url: "https://guilhermeboia.com/",
    title: "Guilherme Boia | Software Engineer",
    description: "Undergrad Computer Science student just sharing my thoughts and document my journey in tech.",
    images: [
      {
        url: "https://guilhermeboia.com/og-image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseClasses = `${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col items-center`;

  return (
    <html lang="en" className="bg-[#08070b] text-gray-400 h-full">
      <body className={baseClasses}>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
