import type { Metadata } from "next";

import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";

/**
 * Metadados específicos da página de Cozinha.
 */
export const metadata: Metadata = {
  title: "Produtos para Cozinha",

  description:
    "Descubra utensílios, organização, eletroportáteis e produtos selecionados para deixar sua cozinha mais prática e funcional.",
};

/**
 * Página da categoria Cozinha.
 *
 * Rota correspondente:
 * /cozinha
 */
export default function CozinhaPage() {
  /**
   * Seleciona somente produtos pertencentes
   * à categoria cozinha.
   */
 const kitchenProducts = products.filter(
  (product) => product.category === "cozinha"
);

  return (
    <main>
      {/* Apresentação da categoria. */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="font-semibold text-amber-600">
            Achadinhos do Lar
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Produtos para Cozinha
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Descubra utensílios, itens de organização e produtos
            selecionados para deixar sua cozinha mais prática,
            organizada e funcional.
          </p>
        </div>
      </section>

      {/* Produtos disponíveis para a categoria. */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900">
          Achadinhos para sua cozinha
        </h2>

        <p className="mt-2 text-gray-600">
          Confira alguns produtos selecionados para sua cozinha.
        </p>

        {/* Envia os produtos filtrados para o grid. */}
        <div className="mt-8">
          <ProductGrid products={kitchenProducts} />
        </div>
      </section>
    </main>
  );
}