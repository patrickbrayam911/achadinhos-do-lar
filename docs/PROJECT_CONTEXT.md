# Contexto do Projeto — Achadinhos do Lar

## 1. Objetivo do projeto

Achadinhos do Lar é uma aplicação web desenvolvida para apresentar
produtos e ofertas relacionados a diferentes ambientes da casa.

As categorias iniciais são:

- Cozinha
- Banheiro
- Quarto
- Sala

O projeto está sendo desenvolvido também com objetivo educacional,
aplicando conceitos de desenvolvimento Web Full Stack, arquitetura,
TypeScript, Next.js, integração com APIs, segurança, SEO e
acessibilidade.

---

## 2. Stack atual

O projeto utiliza:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js App Router
- ESLint
- npm

A estrutura utiliza os diretórios diretamente na raiz do projeto,
sem `src/`.

---

## 3. Interface implementada

A aplicação possui uma página inicial e páginas individuais para as
categorias:

- `/`
- `/cozinha`
- `/banheiro`
- `/quarto`
- `/sala`

A página inicial apresenta um Hero e cards para navegação entre
categorias.

As páginas de categoria possuem conteúdo introdutório e uma listagem
de produtos.

---

## 4. Componentes principais

### Header

Localizado em:

`components/Header.tsx`

Responsável pela navegação principal da aplicação.

Links internos utilizam `next/link`.

### CategoryCard

Localizado em:

`components/CategoryCard.tsx`

Representa uma categoria na página inicial.

### ProductCard

Localizado em:

`components/ProductCard.tsx`

Responsável pela apresentação individual de um produto.

Atualmente apresenta:

- imagem;
- título;
- preço atual;
- preço original quando existe promoção;
- percentual de desconto;
- botão/link para visualizar a oferta.

Utiliza `next/image`.

Links de ofertas externas utilizam `<a>`.

### ProductGrid

Localizado em:

`components/ProductGrid.tsx`

Recebe um array de `Product` e apresenta os produtos em um grid
responsivo.

Também possui estado vazio para categorias sem produtos.

---

## 5. Modelo interno de produto

O domínio da aplicação possui um tipo próprio:

`types/Product.ts`

O tipo `Product` representa os dados necessários para a interface.

A aplicação não deve utilizar diretamente tipos de APIs externas nos
componentes.

Existe também o tipo `ProductCategory`, que restringe as categorias
aceitas pela aplicação.

---

## 6. Dados mockados

Atualmente existem produtos locais em:

`data/products.ts`

Esses dados permitem desenvolver e testar a aplicação sem depender da
API do Mercado Livre.

Os mocks não devem ser removidos durante as primeiras etapas da
integração externa.

---

## 7. Service de produtos

Existe uma camada de serviço em:

`services/products.ts`

Atualmente ela disponibiliza:

`getProductsByCategory(category)`

A função recebe uma `ProductCategory` e retorna os produtos
correspondentes.

No momento, a fonte dos dados ainda é o mock local.

A intenção é permitir que futuramente a implementação utilize uma
fonte externa sem acoplar as páginas diretamente à API.

---

## 8. Integração Mercado Livre

Foi iniciada uma camada específica em:

`lib/mercado-livre/`

Estrutura atual:

```text
lib/
└── mercado-livre/
    ├── client.ts
    ├── mapper.ts
    └── types.ts