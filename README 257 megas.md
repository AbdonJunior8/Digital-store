# Digital Store

Loja virtual feita com **React** e **React Router**, seguindo o layout do Figma e os requisitos do enunciado (que está em `doc/ENUNCIADO.md`).

## Como rodar

```bash
npm install
npm start
```

O projeto abre em http://localhost:3000. Para gerar a versão de produção: `npm run build`.

## Páginas e rotas

| Rota | Página | Descrição |
| --- | --- | --- |
| `/` | `HomePage` | Galeria de imagens, coleções em destaque e 8 produtos em alta |

| `/products` e `/produtos` | `ProductListingPage` | Ordenação, filtros e lista de produtos. Recebe a busca do cabeçalho: `/products?filter=nike` |

| `/product/:id` | `ProductViewPage` | Galeria com miniaturas, `BuyBox`, opções de tamanho/cor e produtos recomendados |

| qualquer outra | `EmptyPage` | Página provisória ("em construção") |

## Estrutura de pastas

```
src/
├── assets/            # logos, ícones e setas (svg)
├── components/
│   ├── BuyBox/
│   ├── Header/        # Header, SearchField e Navigation
│   ├── Footer/        # Footer e FooterInfo
│   ├── FilterGroup/
│   ├── Gallery/
│   ├── Logo/
│   ├── ProductCard/
│   ├── ProductDetails/
│   ├── ProductListing/
│   ├── ProductOptions/
│   └── Section/
├── data/              # products.js e filters.js (dados de exemplo)
├── pages/
│   ├── Layout/        # Header + conteúdo + Footer
│   ├── HomePage/
│   ├── ProductListingPage/
│   ├── ProductViewPage/
│   └── EmptyPage/
├── utils/             # formatPrice.js
├── App.js             # rotas
└── index.js
```

## Decisões do projeto

- **Cores** como variáveis CSS em `src/index.css` (`--primary`, `--dark-gray-2` etc.), usadas em todos os componentes.
- **Busca**: o campo do cabeçalho redireciona para `/products?filter=termo` (clique na lupa ou Enter). A listagem lê o parâmetro com `useSearchParams` e ignora acentos e maiúsculas.
- **Filtros**: dentro de um mesmo grupo vale "ou" (ex.: Nike **ou** Adidas); entre grupos vale "e". O título da secção mostra o total de produtos e muda conforme os filtros.

- **Ordenação**: "Menor preço" e "Maior preço" usam o preço final (com desconto, quando existir).
- **Menu**: `NavLink` do React Router deixa o link da página atual colorido e com linha embaixo.
- **Galeria**: setas desabilitadas na primeira/última imagem, miniaturas opcionais (`showThumbs`) com borda `primary` na selecionada.
- As imagens ficam em `public/` e são chamadas com caminho absoluto (ex.: `/home-slide-1.jpeg`).
