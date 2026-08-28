import type { Metadata } from "next";

import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/services/products";

/**
 * Metadados específicos da página de Banheiro.
 */
export const metadata: Metadata = {
  title: "Produtos para Banheiro",
  description:
    "Descubra produtos para organização, conforto e praticidade para deixar seu banheiro mais funcional e organizado.",
};

/**
 * Página da categoria Banheiro.
 *
 * Rota correspondente:
 * /banheiro
 */
export default function BanheiroPage() {
  /**
   * Obtém os produtos da categoria banheiro
   * através da camada de serviço.
   */
  const bathroomProducts =
    getProductsByCategory("banheiro");

  return (
    <main>
      {/* Apresentação da categoria. */}
      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="font-semibold text-sky-600">
            Achadinhos do Lar
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Produtos para Banheiro
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Encontre produtos para organização, conforto e
            praticidade para deixar seu banheiro mais funcional.
          </p>
        </div>
      </section>

      {/* Produtos disponíveis para a categoria banheiro. */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900">
          Achadinhos para seu banheiro
        </h2>

        <p className="mt-2 text-gray-600">
          Confira alguns produtos selecionados para seu banheiro.
        </p>

        {/* Grid com os produtos retornados pelo serviço. */}
        <div className="mt-8">
          <ProductGrid products={bathroomProducts} />
        </div>
      </section>
    </main>
  );
}