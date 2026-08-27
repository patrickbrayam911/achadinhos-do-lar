import type { Metadata } from "next";

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
            Descubra itens para organização, conforto e decoração
            para deixar seu quarto ainda mais aconchegante.
          </p>
        </div>
      </section>

      {/* Futuramente receberá os produtos da categoria. */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900">
          Achadinhos para seu quarto
        </h2>

        <p className="mt-2 text-gray-600">
          Em breve, você encontrará aqui nossa seleção de produtos
          para quarto.
        </p>
      </section>
    </main>
  );
}