/**
 * Cabeçalho principal do site.
 *
 * Este componente será reutilizado em todas as páginas
 * através do layout principal da aplicação.
 */
export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Nome/marca do nosso site. */}
        <a
          href="/"
          className="text-xl font-bold text-gray-900"
        >
          Achadinhos do Lar
        </a>

        {/* Navegação principal do site. */}
        <nav aria-label="Navegação principal">
          <ul className="flex gap-4">
            <li>
              <a href="/cozinha">Cozinha</a>
            </li>

            <li>
              <a href="/banheiro">Banheiro</a>
            </li>

            <li>
              <a href="/quarto">Quarto</a>
            </li>

            <li>
              <a href="/sala">Sala</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}