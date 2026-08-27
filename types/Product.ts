/**
 * Representa um produto exibido no Achadinhos do Lar.
 *
 * Este tipo pertence à nossa aplicação e não depende
 * diretamente do formato utilizado por APIs externas.
 */
export type Product = {
  /**
   * Identificador único do produto.
   */
  id: string;

  /**
   * Nome apresentado ao usuário.
   */
  title: string;

  /**
   * Preço atual do produto.
   *
   * Armazenamos como number para permitir cálculos.
   */
  price: number;

  /**
   * Preço anterior, quando existir uma promoção.
   */
  originalPrice?: number;

  /**
   * Caminho ou URL da imagem do produto.
   */
  imageUrl: string;

  /**
   * Categoria interna do produto.
   */
  category: string;

  /**
   * URL para onde o usuário será direcionado
   * ao clicar em "Ver oferta".
   */
  offerUrl: string;
};