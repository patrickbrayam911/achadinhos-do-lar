import Image from "next/image";

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
  /**
   * Guardamos o preço original em uma variável local.
   *
   * Isso facilita a validação e permite que o TypeScript
   * faça o narrowing do tipo number | undefined.
   */
  const originalPrice = product.originalPrice;

  /**
   * Existe desconto somente quando há um preço original
   * e ele é maior que o preço atual.
   */
  const hasDiscount =
    originalPrice !== undefined &&
    originalPrice > product.price;

  /**
   * Calcula o percentual somente quando existe
   * uma promoção válida.
   */
  const discountPercentage = hasDiscount
    ? Math.round(
        ((originalPrice - product.price) / originalPrice) * 100
      )
    : 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Área da imagem do produto. */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4"
        />

        {/* Selo exibido somente quando existe desconto válido. */}
        {hasDiscount && (
          <span className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
            {discountPercentage}% OFF
          </span>
        )}
      </div>

     <div className="flex flex-1 flex-col p-5">
        {/* Nome do produto. */}
        <h3 className="text-lg font-semibold text-gray-900">
          {product.title}
        </h3>

        <div className="mt-auto pt-4">
          {/* Preço anterior aparece somente em promoções válidas. */}
          {hasDiscount && (
            <p className="text-sm text-gray-500 line-through">
              {currencyFormatter.format(originalPrice)}
            </p>
          )}

          {/* Preço atual do produto. */}
          <p className="text-2xl font-bold text-gray-900">
            {currencyFormatter.format(product.price)}
          </p>
        </div>

        {/* Futuramente receberá o link real/rastreável da oferta. */}
        {/* Link externo para a página da oferta. */}
<a
  href={product.offerUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 inline-block w-full rounded-lg bg-amber-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
>
  Ver oferta
</a>
      </div>
    </article>
  );
}