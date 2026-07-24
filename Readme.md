# ☕ Bean Scene

Landing page de uma cafeteria de especialidade, construída como uma aplicação React moderna, com design system próprio, microinterações e conteúdo 100% em português.

O projeto nasceu de uma refatoração completa: o site original era uma página estática em HTML/CSS/JS puro, sem responsividade, com textos em inglês e um filtro de cardápio decorativo. Ele foi redesenhado do zero — identidade visual, experiência de uso e código — e migrado para React.

## Sobre o projeto

A Bean Scene é uma marca fictícia de cafeteria. O site apresenta a loja, conta sua história, destaca os produtos mais pedidos, mostra o cardápio completo (com filtro por categoria), reúne depoimentos de clientes e permite assinar uma newsletter — tudo em uma única página de rolagem (SPA).

**Principais funcionalidades:**

- 🔍 Cardápio com filtro funcional por categoria (quentes, gelados, salgados, sobremesas)
- 🎠 Carrossel de depoimentos com navegação por setas e indicadores
- ✉️ Formulário de newsletter com validação de e-mail e persistência local (inscrever/cancelar)
- 📱 Layout responsivo, do celular ao desktop
- ♿ Acessibilidade: navegação por teclado, foco visível, leitura por leitor de tela e suporte a `prefers-reduced-motion`
- ✨ Animações suaves de entrada e transição com Framer Motion

## Tecnologias utilizadas

| Categoria | Tecnologia |
|---|---|
| Biblioteca de UI | [React](https://react.dev/) |
| Build tool / dev server | [Vite](https://vitejs.dev/) |
| Animações | [Framer Motion](https://www.framer.com/motion/) |
| Estilização | CSS Modules + CSS Custom Properties (design tokens) |
| Linting | ESLint (`eslint-plugin-react`, `eslint-plugin-react-hooks`) |
| Formatação | Prettier |
| Fontes | Google Fonts — Playfair Display, Clicker Script e Inter |

Não há back-end: o site é 100% estático e o build final (`npm run build`) pode ser hospedado em qualquer serviço de arquivos estáticos (Vercel, Netlify, GitHub Pages, etc).

## Estrutura do projeto

```
src/
├── assets/images/        # imagens organizadas por categoria
│   ├── produtos/          # fotos dos itens do cardápio
│   ├── avatares/          # fotos dos depoimentos
│   ├── icones/            # ícones de redes sociais
│   ├── decorativos/       # elementos gráficos
│   └── backgrounds/       # imagens de fundo das seções
├── styles/                # tokens de design (cores, tipografia, espaçamento), reset e estilos globais
├── data/                  # conteúdo do site (produtos, cardápio, depoimentos, links do rodapé)
├── constants/             # categorias do cardápio
├── hooks/                 # lógica reutilizável (filtro de menu, carrossel, newsletter)
├── utils/                 # funções auxiliares (formatação de preço, validação de e-mail)
└── components/
    ├── ui/                 # design system: Button, Card, Badge, Input, SectionHeading...
    └── sections/           # seções da página: Header, Hero, About, Menu, Footer...
```

Cada componente vive em sua própria pasta, junto com seu arquivo `.module.css`, mantendo estilos isolados e fáceis de encontrar.

## Como rodar o projeto localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# 1. Instale as dependências
npm install

# 2. Rode o ambiente de desenvolvimento
npm run dev
```

Depois disso, acesse `http://localhost:5173` no navegador.

### Outros comandos disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot-reload |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Sobe um servidor local para testar o build de produção |
| `npm run lint` | Roda o ESLint em todo o projeto |

## Design system

A identidade visual segue uma paleta inspirada em cafeterias premium (tons de espresso, dourado sóbrio e creme), com hierarquia tipográfica combinando serifa (Playfair Display) e sans-serif (Inter). Todos os tokens de cor, tipografia, espaçamento e sombra ficam centralizados em `src/styles/theme.css`, o que garante consistência visual em todo o site e facilita futuras mudanças de marca.
