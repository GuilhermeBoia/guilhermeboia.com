import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoria | Guilherme Boia",
  description:
    "Automatize processos, organize dados e entregue resultados profissionais. Transforme seu negócio com tecnologia e IA.",
  keywords: "consultoria, automação, IA, inteligência artificial, desenvolvimento web, processos, dados, dashboard, relatórios",
  openGraph: {
    title: "Consultoria | Guilherme Boia",
    description:
      "Automatize processos, organize dados e entregue resultados profissionais. Transforme seu negócio com tecnologia e IA.",
    type: "website",
    locale: "pt_BR",
    url: "https://guilhermeboia.com/bio",
    siteName: "Guilherme Boia - Consultoria",
    images: [
      {
        url: "https://guilhermeboia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guilherme Boia - Consultoria",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}