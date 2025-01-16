import { Geist, Geist_Mono } from "next/font/google";
import { ScrollProvider } from "@/components/NavBar";
import "./globals.css";

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
