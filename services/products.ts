import { products } from "@/data/products";

import type {
  Product,
  ProductCategory,
} from "@/types/Product";

/**
 * Retorna os produtos pertencentes a uma determinada categoria.
 *
 * Neste momento os dados vêm de um mock local.
 * Futuramente esta função poderá buscar os produtos
 * em uma fonte externa sem alterar os componentes da interface.
 *
 * @param category Categoria que será utilizada no filtro.
 * @returns Lista de produtos pertencentes à categoria informada.
 */
export function getProductsByCategory(
  category: ProductCategory
): Product[] {
  return products.filter(
    (product) => product.category === category
  );
}