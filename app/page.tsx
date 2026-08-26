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