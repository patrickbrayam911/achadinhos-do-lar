import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importa nosso componente de cabeçalho.
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadados padrão compartilhados pela aplicação.
 */
export const metadata: Metadata = {
  title: {
    /**
     * Utilizado quando uma página não fornece
     * seu próprio título.
     */
    default: "Achadinhos do Lar",

    /**
     * Quando uma página define um title, o Next.js
     * utiliza este template.
     *
     * Exemplo:
     * "Produtos para Cozinha | Achadinhos do Lar"
     */
    template: "%s | Achadinhos do Lar",
  },

  description:
    "Descubra produtos, ofertas e achadinhos para cozinha, banheiro, quarto, sala e outros ambientes da sua casa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
  {/* Cabeçalho compartilhado entre todas as páginas. */}
  <Header />

  {/* Aqui será renderizada a página atual. */}
  {children}
</body>
    </html>
  );
}
