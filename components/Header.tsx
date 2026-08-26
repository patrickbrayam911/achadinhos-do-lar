// Componente do Next.js utilizado para navegação interna.
import Link from "next/link";

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
        {/* Link interno para a página inicial. */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-900"
        >
          Achadinhos do Lar
        </Link>

        {/* Navegação principal do site. */}
        <nav aria-label="Navegação principal">
          <ul className="flex gap-4">
            <li>
              <Link href="/cozinha">
                Cozinha
              </Link>
            </li>

            <li>
              <Link href="/banheiro">
                Banheiro
              </Link>
            </li>

            <li>
              <Link href="/quarto">
                Quarto
              </Link>
            </li>

            <li>
              <Link href="/sala">
                Sala
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}