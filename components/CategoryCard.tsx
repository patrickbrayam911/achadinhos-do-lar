import Link from "next/link";

/**
 * Propriedades que o componente CategoryCard precisa receber.
 */
type CategoryCardProps = {
  /**
   * Nome apresentado ao usuário.
   * Exemplo: "Cozinha".
   */
  title: string;

  /**
   * Pequeno texto explicando o conteúdo da categoria.
   */
  description: string;

  /**
   * Ícone temporário da categoria.
   * Posteriormente podemos substituir por imagens ou ícones.
   */
  icon: string;

  /**
   * Rota interna para a página da categoria.
   * Exemplo: "/cozinha".
   */
  href: string;
};

/**
 * Exibe uma categoria disponível no site.
 *
 * O componente é reutilizável: seu conteúdo muda
 * de acordo com as props recebidas.
 */
export function CategoryCard({
  title,
  description,
  icon,
  href,
}: CategoryCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Ícone visual temporário da categoria. */}
      <span
        className="text-4xl"
        aria-hidden="true"
      >
        {icon}
      </span>

      {/* Nome da categoria. */}
      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {title}
      </h3>

      {/* Descrição curta da categoria. */}
      <p className="mt-2 text-gray-600">
        {description}
      </p>

      {/* Navegação interna para a página da categoria. */}
      <Link
        href={href}
        className="mt-4 inline-block font-semibold text-amber-600 hover:text-amber-700"
      >
        Ver produtos
      </Link>
    </article>
  );
}