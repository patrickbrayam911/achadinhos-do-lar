import type { Metadata } from "next";

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

      {/* Futuramente receberá os produtos da categoria. */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900">
          Achadinhos para seu banheiro
        </h2>

        <p className="mt-2 text-gray-600">
          Em breve, você encontrará aqui nossa seleção de produtos
          para banheiro.
        </p>
      </section>
    </main>
  );
}