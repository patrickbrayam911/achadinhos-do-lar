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

    // Caminho da imagem dentro da pasta public/products.
    imageUrl: "/products/air-fryer.png",

    category: "cozinha",
   /**
 * URL externa fictícia utilizada apenas durante
 * o desenvolvimento do componente.
 */
offerUrl: "https://example.com",
  },
  {
    id: "2",
    title: "Cafeteira Elétrica",
    price: 189.9,

    // Caminho da imagem dentro da pasta public/products.
    imageUrl: "/products/cafeteira.png",

    category: "cozinha",
   /**
 * URL externa fictícia utilizada apenas durante
 * o desenvolvimento do componente.
 */
offerUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Jogo de Panelas",
    price: 249.9,
    originalPrice: 299.9,

    // Caminho da imagem dentro da pasta public/products.
    imageUrl: "/products/panelas.png",

    category: "cozinha",
    /**
 * URL externa fictícia utilizada apenas durante
 * o desenvolvimento do componente.
 */
offerUrl: "https://example.com",
  },

    // Produtos para banheiro.
  {
    id: "4",
    title: "Kit Organizador para Banheiro",
    price: 79.9,
    originalPrice: 99.9,
    imageUrl: "/products/organizador-banheiro.png",
    category: "banheiro",
    offerUrl: "https://example.com",
  },
  {
    id: "5",
    title: "Prateleira para Box",
    price: 59.9,
    imageUrl: "/products/prateleira-box.png",
    category: "banheiro",
    offerUrl: "https://example.com",
  },

  // Produtos para quarto.
  {
    id: "6",
    title: "Luminária de Cabeceira",
    price: 89.9,
    originalPrice: 119.9,
    imageUrl: "/products/luminaria.png",
    category: "quarto",
    offerUrl: "https://example.com",
  },
  {
    id: "7",
    title: "Organizador Multiuso",
    price: 69.9,
    imageUrl: "/products/organizador-quarto.png",
    category: "quarto",
    offerUrl: "https://example.com",
  },

  // Produtos para sala.
  {
    id: "8",
    title: "Almofada Decorativa",
    price: 49.9,
    imageUrl: "/products/almofada.png",
    category: "sala",
    offerUrl: "https://example.com",
  },
  {
    id: "9",
    title: "Luminária de Chão",
    price: 179.9,
    originalPrice: 229.9,
    imageUrl: "/products/luminaria-chao.png",
    category: "sala",
    offerUrl: "https://example.com",
  },
];

