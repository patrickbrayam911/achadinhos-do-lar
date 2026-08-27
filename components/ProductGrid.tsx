import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/types/Product";

/**
 * Propriedades recebidas pelo componente ProductGrid.
 */
type ProductGridProps = {
  products: Product[];
};

/**
 * Exibe uma coleção de produtos em um grid responsivo.
 *
 * Quando não existem produtos, apresenta um estado vazio
 * em vez de deixar a área da página sem conteúdo.
 */
export function ProductGrid({ products }: ProductGridProps) {
  /**
   * Renderização condicional:
   * se não houver produtos, interrompemos a função aqui
   * retornando uma mensagem apropriada.
   */
  if (products.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
        <p className="text-gray-600">
          Nenhum produto encontrado nesta categoria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}