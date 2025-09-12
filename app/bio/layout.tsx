import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoria em Tecnologia | Guilherme Boia",
  description:
    "Automatize processos, organize dados e entregue resultados profissionais. Transforme seu negócio com tecnologia e IA.",
  keywords: "consultoria, automação, IA, inteligência artificial, desenvolvimento web, processos, dados, dashboard, relatórios",
  openGraph: {
    title: "Consultoria em Tecnologia | Guilherme Boia",
    description:
      "Automatize processos repetitivos, organize seus dados em um só lugar e entregue resultados profissionais que impressionam e te diferenciam do mercado. Consultoria personalizada para sua empresa.",
    type: "website",
    locale: "pt_BR",
    url: "https://guilhermeboia.com/bio",
    siteName: "Guilherme Boia - Consultoria em Tecnologia",
    images: [
      {
        url: "https://guilhermeboia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guilherme Boia - Consultoria em Tecnologia",
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