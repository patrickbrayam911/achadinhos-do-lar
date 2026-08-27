import type { Metadata } from "next";

import { CategoryCard } from "@/components/CategoryCard";

/**
 * Metadados específicos da página inicial.
 */
export const metadata: Metadata = {
  title: "Achadinhos para sua Casa",

  description:
    "Descubra produtos selecionados para cozinha, banheiro, quarto, sala e outros ambientes da sua casa.",
};
/**
 * Categorias disponíveis na página inicial.
 *
 * Posteriormente esses dados poderão vir de um banco
 * ou de outra fonte sem precisarmos reescrever os cards.
 */
const categories = [
  {
    title: "Cozinha",
    description:
      "Utensílios, organização e eletroportáteis para sua cozinha.",
    icon: "🍳",
    href: "/cozinha",
  },
  {
    title: "Banheiro",
    description:
      "Produtos para organização, conforto e praticidade.",
    icon: "🚿",
    href: "/banheiro",
  },
  {
    title: "Quarto",
    description:
      "Itens para deixar seu quarto confortável e organizado.",
    icon: "🛏️",
    href: "/quarto",
  },
  {
    title: "Sala",
    description:
      "Decoração, organização e produtos para sua sala.",
    icon: "🛋️",
    href: "/sala",
  },
];

/**
 * Página inicial do Achadinhos do Lar.
 *
 * Esta é a página correspondente à rota "/".
 */
export default function Home() {
  return (
    <main>
      {/* Hero: principal área de apresentação do site. */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Achadinhos para deixar sua casa ainda melhor
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Descubra produtos selecionados para cozinha, banheiro,
            quarto, sala e muito mais.
          </p>

          <a
            href="#categorias"
            className="mt-8 inline-block rounded-lg bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            Ver categorias
          </a>
        </div>
      </section>

      {/* Área onde posteriormente exibiremos os cards das categorias. */}
      <section
        id="categorias"
        className="mx-auto max-w-7xl px-4 py-16"
      >
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {categories.map((category) => (
    <CategoryCard
      key={category.href}
      title={category.title}
      description={category.description}
      icon={category.icon}
      href={category.href}
    />
  ))}
</div>

        <h2 className="text-3xl font-bold text-gray-900">
          Explore por categoria
        </h2>

        <p className="mt-2 text-gray-600">
          Encontre produtos para cada ambiente da sua casa.
        </p>
      </section>
    </main>
  );
}