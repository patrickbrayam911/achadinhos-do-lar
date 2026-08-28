/**
 * Tipos pertencentes exclusivamente à integração
 * com o Mercado Livre.
 */
/**
 * Tipos utilizados pela integração com o Mercado Livre.
 */
import type {
  MercadoLivreHighlightsResponse,
} from "./types";

/**
 * URL base utilizada pelas APIs do Mercado Livre.
 */
const MERCADO_LIVRE_API_URL =
  "https://api.mercadolibre.com";

/**
 * Identificador do site brasileiro do Mercado Livre.
 */
const MERCADO_LIVRE_SITE_ID = "MLB";

/**
 * Retorna o access token utilizado para autenticação
 * com a API do Mercado Livre.
 *
 * @throws Error quando o token não estiver configurado.
 */
function getAccessToken(): string {
  const accessToken =
    process.env.MERCADO_LIVRE_ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error(
      "MERCADO_LIVRE_ACCESS_TOKEN não está configurado."
    );
  }

  return accessToken;
}

/**
 * Busca os produtos/itens mais vendidos de uma
 * categoria do Mercado Livre.
 *
 * @param categoryId ID oficial da categoria no Mercado Livre.
 * @returns Resposta do recurso de highlights.
 *
 * @throws Error quando a API responder com erro HTTP.
 */
export async function getCategoryHighlights(
  categoryId: string
): Promise<MercadoLivreHighlightsResponse> {
  const accessToken = getAccessToken();

  /**
   * Protege a construção da URL contra caracteres
   * inesperados no ID da categoria.
   */
  const safeCategoryId =
    encodeURIComponent(categoryId);

  /**
   * Monta o endpoint de produtos mais vendidos
   * para uma determinada categoria.
   */
  const url =
    `${MERCADO_LIVRE_API_URL}/highlights/` +
    `${MERCADO_LIVRE_SITE_ID}/category/${safeCategoryId}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  /**
   * fetch() não lança uma exceção automaticamente
   * para respostas HTTP como 401, 404 ou 500.
   */
  if (!response.ok) {
    throw new Error(
      `Erro ao consultar Mercado Livre: HTTP ${response.status}`
    );
  }

  /**
   * Converte o JSON recebido para o tipo que
   * representa a resposta externa.
   *
   * Observação: "as" fornece tipagem ao TypeScript,
   * mas não realiza validação dos dados em runtime.
   */
  const data =
    (await response.json()) as MercadoLivreHighlightsResponse;

  return data;
}