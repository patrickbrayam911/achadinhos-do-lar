import type { Metadata } from "next";

import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/services/products";

/**
 * Metadados específicos da página de Quarto.
 */
export const metadata: Metadata = {
  title: "Produtos para Quarto",
  description:
    "Descubra produtos para organização, conforto e decoração para deixar seu quarto mais aconchegante e funcional.",
};

/**
 * Página da categoria Quarto.
 *
 * Rota correspondente:
 * /quarto
 */
export default function QuartoPage() {
  /**
   * Obtém os produtos da categoria quarto
   * através da camada de serviço.
   */
  const bedroomProducts =
    getProductsByCategory("quarto");

  return (
    <main>
      {/* Apresentação da categoria. */}
      <section className="bg-violet-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="font-semibold text-violet-600">
            Achadinhos do Lar
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Produtos para Quarto
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Descubra produtos para organização, conforto e decoração
            para deixar seu quarto mais aconchegante e funcional.
          </p>
        </div>
      </section>

      {/* Produtos disponíveis para a categoria quarto. */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900">
          Achadinhos para seu quarto
        </h2>

        <p className="mt-2 text-gray-600">
          Confira alguns produtos selecionados para seu quarto.
        </p>

        {/* Grid com os produtos retornados pelo serviço. */}
        <div className="mt-8">
          <ProductGrid products={bedroomProducts} />
        </div>
      </section>
    </main>
  );
}