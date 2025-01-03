"use client";

import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseClasses = `${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col items-center`;

  return (
    <html lang="en" className="bg-[#08070b] text-gray-400 h-full">
      <body className={baseClasses}>{mounted ? children : null}</body>
    </html>
  );
}
