import type { Metadata } from "next";

/**
 * Metadados específicos da página de Sala.
 */
export const metadata: Metadata = {
  title: "Produtos para Sala",

  description:
    "Descubra produtos de decoração, organização e utilidades para deixar sua sala mais bonita, confortável e funcional.",
};

/**
 * Página da categoria Sala.
 *
 * Rota correspondente:
 * /sala
 */
export default function SalaPage() {
  return (
    <main>
      {/* Apresentação da categoria. */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="font-semibold text-emerald-600">
            Achadinhos do Lar
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Produtos para Sala
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Encontre produtos de decoração, organização e utilidades
            para deixar sua sala mais bonita e confortável.
          </p>
        </div>
      </section>

      {/* Futuramente receberá os produtos da categoria. */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900">
          Achadinhos para sua sala
        </h2>

        <p className="mt-2 text-gray-600">
          Em breve, você encontrará aqui nossa seleção de produtos
          para sala.
        </p>
      </section>
    </main>
  );
}