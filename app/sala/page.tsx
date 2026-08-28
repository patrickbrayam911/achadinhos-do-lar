import type { Metadata } from "next";

import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/services/products";

/**
 * Metadados específicos da página de Sala.
 */
export const metadata: Metadata = {
  title: "Produtos para Sala",
  description:
    "Descubra decoração, organização, iluminação e produtos selecionados para deixar sua sala mais confortável e aconchegante.",
};

/**
 * Página da categoria Sala.
 *
 * Rota correspondente:
 * /sala
 */
export default function SalaPage() {
  /**
   * Obtém os produtos da categoria sala
   * através da camada de serviço.
   */
  const livingRoomProducts =
    getProductsByCategory("sala");

  return (
    <main>
      {/* Apresentação da categoria. */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="font-semibold text-amber-600">
            Achadinhos do Lar
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Produtos para Sala
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Descubra itens de decoração, organização e produtos
            selecionados para deixar sua sala mais confortável,
            bonita e aconchegante.
          </p>
        </div>
      </section>

      {/* Produtos disponíveis para a categoria sala. */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900">
          Achadinhos para sua sala
        </h2>

        <p className="mt-2 text-gray-600">
          Confira alguns produtos selecionados para sua sala.
        </p>

        {/* Grid com os produtos retornados pelo serviço. */}
        <div className="mt-8">
          <ProductGrid products={livingRoomProducts} />
        </div>
      </section>
    </main>
  );
}