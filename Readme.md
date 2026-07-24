# Bean Scene — Cafeteria de Especialidade

Landing page de uma cafeteria premium, com design system próprio, cardápio filtrável, carrossel de depoimentos e formulário de assinatura.

## Tecnologias utilizadas

- React + Vite
- Framer Motion (microinterações e animações de scroll)
- CSS Modules + CSS custom properties (design tokens)
- Google Fonts (Playfair Display, Clicker Script, Inter)

## Estrutura do projeto

```
src/
  assets/images/    # imagens organizadas por categoria (produtos, avatares, ícones, decorativos, backgrounds)
  styles/           # tokens de design, reset e estilos globais
  data/             # conteúdo do site (produtos, cardápio, depoimentos, links)
  constants/        # categorias do cardápio
  hooks/            # lógica de filtro, carrossel e newsletter
  utils/            # formatação de preço e validação de e-mail
  components/
    ui/             # componentes de design system (Button, Card, Badge...)
    sections/       # seções da página (Header, Hero, About, Menu...)
```

## Como rodar localmente

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (gera a pasta dist/)
npm run preview  # pré-visualiza o build de produção
```
