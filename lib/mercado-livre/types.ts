/**
 * Representa um resultado individual retornado
 * pelo recurso de produtos mais vendidos.
 *
 * O ID será utilizado posteriormente para consultar
 * informações adicionais sobre o produto/item.
 */
export type MercadoLivreHighlight = {
  id: string;
  position: number;
  type: string;
};

/**
 * Estrutura mínima da resposta do endpoint /highlights.
 *
 * Tipamos apenas os dados que nossa aplicação
 * realmente precisa neste momento.
 */
export type MercadoLivreHighlightsResponse = {
  content: MercadoLivreHighlight[];
};