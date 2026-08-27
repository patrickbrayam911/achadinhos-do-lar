import type { Product } from "@/types/Product";

/**
 * Produtos fictícios utilizados durante o desenvolvimento.
 *
 * Esses dados serão substituídos futuramente por dados reais.
 */
export const products: Product[] = [
  {
    id: "1",
    title: "Air Fryer Digital",
    price: 399.9,
    originalPrice: 499.9,
    imageUrl: "/products/air-fryer.jpg",
    category: "cozinha",
    offerUrl: "#",
  },
  {
    id: "2",
    title: "Cafeteira Elétrica",
    price: 189.9,
    imageUrl: "/products/cafeteira.jpg",
    category: "cozinha",
    offerUrl: "#",
  },
  {
    id: "3",
    title: "Jogo de Panelas",
    price: 249.9,
    originalPrice: 299.9,
    imageUrl: "/products/panelas.jpg",
    category: "cozinha",
    offerUrl: "#",
  },
];