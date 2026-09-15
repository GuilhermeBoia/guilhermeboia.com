import { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./palestra.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: { absolute: "Palestra | Guilherme Bóia" },
  description:
    "Quem sou eu, por que faço Ciência da Computação e o que aprendi no caminho.",
  robots: { index: false, follow: false },
};

export default function PalestraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${archivo.variable} contents`}>{children}</div>;
}
