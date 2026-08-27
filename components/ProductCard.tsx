import type { Product } from "@/types/Product";

/**
 * Props recebidas pelo ProductCard.
 */
type ProductCardProps = {
  product: Product;
};

/**
 * Formatador monetário utilizado para exibir preços
 * no padrão brasileiro.
 */
const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/**
 * Card responsável por apresentar um produto.
 */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Placeholder temporário da imagem. */}
      <div
        className="flex aspect-square items-center justify-center bg-gray-100 text-gray-400"
        aria-hidden="true"
      >
        Imagem do produto
      </div>

      <div className="p-5">
        {/* Nome do produto. */}
        <h3 className="text-lg font-semibold text-gray-900">
          {product.title}
        </h3>

        <div className="mt-4">
          {/* Preço anterior aparece somente quando existir. */}
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through">
              {currencyFormatter.format(product.originalPrice)}
            </p>
          )}

          {/* Preço atual. */}
          <p className="text-2xl font-bold text-gray-900">
            {currencyFormatter.format(product.price)}
          </p>
        </div>

        {/* Futuramente este será o link rastreável de afiliado. */}
        <a
          href={product.offerUrl}
          className="mt-5 inline-block w-full rounded-lg bg-amber-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-amber-600"
        >
          Ver oferta
        </a>
      </div>
    </article>
  );
}