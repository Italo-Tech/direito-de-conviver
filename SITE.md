# Prompt: Site Institucional — Conviver

## Objetivo

Crie um site institucional completo, responsivo e fiel ao wireframe descrito abaixo para a empresa **Conviver — Transporte Assistido Familiar e Intermediação de Convivência**, localizada em São Paulo - SP.

---

## Identidade Visual

### Paleta de Cores
- **Azul marinho (primária):** `#1A2B5F`
- **Dourado/âmbar (destaque):** `#C89B3C`
- **Verde-teal (ícone criança no logo):** `#2A8C7E`
- **Branco:** `#FFFFFF`
- **Cinza claro (fundos secundários):** `#F5F5F5`
- **Cinza texto:** `#444444`

### Tipografia
- **Títulos:** fonte serif elegante (ex: `Playfair Display` ou `Cormorant Garamond`) — via Google Fonts
- **Corpo e menus:** fonte sans-serif limpa (ex: `Lato` ou `Nunito`) — via Google Fonts
- Títulos de seção em **azul marinho**, destaques em **dourado**

### Logo
- Usar o arquivo de imagem da logo fornecido: `logo-conviver.png`
- A logo contém três figuras humanas estilizadas em arco (azul marinho, dourado e azul), uma balança da justiça ao centro e uma figura verde com braços abertos (representando a criança)
- Abaixo: o nome **"Conviver"** em serif azul marinho, linha decorativa dourada e o slogan em letras espaçadas: *"É o direito de conectar e o respeito que protege."*
- No header, usar versão compacta da logo (ícone + nome + subtítulo pequeno)

---

## Estrutura Geral

O site é uma **single page** com âncoras para cada seção, mais páginas internas acessíveis pelo menu. Deve ser **100% responsivo** (mobile-first).

---

## Header / Navegação

- **Fixo no topo** com fundo branco e sombra sutil ao rolar
- **Esquerda:** logo compacta (ícone + "Conviver" + subtítulo "Transporte Assistido Familiar e Intermediação de Convivência")
- **Centro:** menu de navegação horizontal com os itens:
  - Início
  - Quem Somos
  - Serviços *(com dropdown)*
  - Área do Judiciário
  - Informações *(com dropdown)*
  - Contato
- **Direita:** botão CTA destacado em azul marinho com ícone do WhatsApp: **"Fale Conosco"**
- Em mobile: hamburguer menu com drawer lateral

---

## Seção 1 — Hero (Início)

**Layout:** duas colunas (texto à esquerda, imagem à direita com recorte orgânico em curva)

**Coluna esquerda:**
- Tag label pequena em dourado: *"Direito de Conviver"*
- Título principal grande:
  ```
  DIREITO DE
  Conviver
  ```
  Em maiúsculas, serif bold, azul marinho. A palavra "Conviver" maior e em destaque
- Linha decorativa dourada sob o título
- Subtítulo em dourado, italic: *"O direito que conecta. O respeito que protege."*
- Parágrafo de texto:
  > "O direito de Conviver atua na promoção da convivência familiar segura e no cumprimento de determinações judiciais, oferecendo transporte assistido e intermediação de convívio com ética, imparcialidade e respeito."
- Dois botões lado a lado:
  - **[📅 Solicitar Atendimento]** — fundo azul marinho, texto branco
  - **[Saiba Mais >]** — fundo dourado, texto branco

**Coluna direita:**
- Foto de pai/mãe com criança em ambiente externo ensolarado (usar placeholder: `https://images.unsplash.com/photo-1543342384-1f1350e27861?w=700`)
- Recorte com curva orgânica na borda esquerda da imagem (usando `clip-path` ou SVG)
- Sobre a imagem, no canto inferior esquerdo: três ícones em cartões flutuantes com fundo azul marinho semitransparente:
  - 🚗 **Transporte Assistido Familiar**
  - 👥 **Intermediação de Convivência**
  - 🛡️ **Proteção e Respeito em Cada Encontro**

---

## Seção 2 — Nossos Serviços

**Fundo:** branco

**Cabeçalho da seção:**
- Label pequena em dourado: *"Nossos Serviços"* com linhas decorativas laterais
- Título: *"Atuação especializada para cada fase do processo"*

**Grid de 5 cards** (linha única no desktop, scroll/wrap no mobile), cada card com:
- Ícone centralizado em círculo com borda azul marinho
- Título em bold azul marinho
- Parágrafo descritivo em cinza

**Cards:**

1. 🚗 **Transporte Assistido Familiar**
   > "Realizamos o transporte seguro de crianças e adolescentes para visitas familiares, seguindo as determinações judiciais."

2. 👥 **Intermediação de Convivência**
   > "Facilitamos a convivência familiar de forma neutra e profissional, promovendo um ambiente seguro, respeitoso e acolhedor."

3. 📄 **Relatórios para o Judiciário**
   > "Elaboramos relatórios técnicos objetivos e imparciais para apoio ao Poder Judiciário e órgãos competentes."

4. 👤❤️ **Acompanhamento de Visitas**
   > "Acompanhamento profissional durante visitas supervisionadas, sempre com foco na segurança da criança."

5. ⚖️ **Apoio ao Cumprimento Judicial**
   > "Atuamos no cumprimento de decisões judiciais, acordos homologados e planos de convivência familiar."

**Botão centralizado abaixo:** `[ Ver Todos os Serviços > ]` — borda azul marinho, fundo branco

---

## Seção 3 — Quem Somos

**Layout:** duas colunas

**Coluna esquerda (imagem):**
- Foto de mãos adultas formando telhado sobre família de papel (silhueta), representando proteção
- Usar placeholder: `https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=700`

**Coluna direita (texto):**
- Label pequena dourada: *"Quem Somos"*
- Título: *"Compromisso com o que realmente importa: a família."*
- Parágrafo 1:
  > "O direito de Conviver nasceu com o propósito de garantir o direito fundamental à convivência familiar, oferecendo suporte profissional às famílias e ao Poder Judiciário."
- Parágrafo 2:
  > "Nossas ações são pautadas na ética, responsabilidade, imparcialidade e respeito, sempre priorizando o melhor interesse da criança e do adolescente."
- Botão: `[ Conheça Nossa História > ]` — fundo azul marinho, texto branco

---

## Seção 4 — Números / Estatísticas

**Fundo:** azul marinho escuro (`#1A2B5F`)
**Layout:** 4 colunas com ícone + número + descrição, texto branco

| Ícone | Número | Descrição |
|-------|--------|-----------|
| 👥 | **+1.200** | Famílias atendidas com acolhimento e respeito |
| 📄 | **+3.500** | Acompanhamentos realizados |
| 🛡️ | **+98%** | De avaliações positivas das famílias e parceiros |
| ⚖️ | **100%** | Compromisso com decisões judiciais e proteção integral |

---

## Seção 5 — Área do Judiciário

**Layout:** três colunas

**Coluna esquerda (texto):**
- Label pequena dourada: *"Área do Judiciário"*
- Título: *"Parceria e confiança com o Poder Judiciário"*
- Parágrafo:
  > "O direito de Conviver é parceira de órgãos e profissionais que atuam na garantia dos direitos da criança e do adolescente."
- Lista com ícone ✅ dourado:
  - Varas da Família
  - Ministério Público
  - Defensoria Pública
  - Advogados
  - Conselhos Tutelares
- Botão: `[ Saiba Mais ]` — fundo dourado, texto branco

**Coluna central (imagem):**
- Foto de balança da justiça sobre mesa com martelo de juiz
- Placeholder: `https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=500`

**Coluna direita (card):**
- Card com fundo azul marinho
- Título branco: *"Documentos e Relatórios"*
- Subtítulo cinza claro:
  > "Elaboração de registros e relatórios técnicos com clareza, objetividade e responsabilidade."
- Lista com ícones ✅:
  - Relatórios de acompanhamento
  - Registros de ocorrências
  - Controle de visitas
  - Comprovantes de atendimento
- Botão: `[ Acessar Informações > ]` — fundo dourado, texto branco

---

## Seção 6 — CTA (Call to Action)

**Fundo:** verde-teal escuro (`#1F6B60`) ou azul marinho com tom esverdeado
**Layout:** linha horizontal com texto à esquerda e botão à direita

- Ícone de calendário/chat à esquerda
- Texto:
  - **Título:** *"Precisa de atendimento ou informações sobre nossos serviços?"*
  - Subtítulo: *"Entre em contato conosco. Estamos prontos para ajudar."*
- **Botão à direita:** `[ 💬 Falar no WhatsApp ]` — fundo branco, texto azul marinho ou verde

---

## Footer

**Fundo:** azul marinho escuro. Dividido em 4 colunas:

**Coluna 1 — Logo e Slogan:**
- Logo completa em versão clara (branco/dourado)
- Subtítulo: *"Transporte Assistido Familiar e Intermediação de Convivência"*
- Slogan em itálico: *"O direito que conecta. O respeito que protege."*

**Coluna 2 — Navegação:**
- Título: **NAVEGAÇÃO**
- Links: Início, Quem Somos, Serviços, Área do Judiciário, Informações, Contato

**Coluna 3 — Serviços:**
- Título: **SERVIÇOS**
- Links:
  - Transporte Assistido Familiar
  - Intermediação de Convivência
  - Acompanhamento de Visitas
  - Relatórios para o Judiciário
  - Apoio ao Cumprimento Judicial

**Coluna 4 — Contato:**
- Título: **CONTATO**
- 📞 (11) 99999-0000
- ✉️ contato@direitodeconviver.com.br
- 📍 São Paulo - SP
- 🕐 Seg a Sex: 8h às 18h

**Rodapé inferior:**
- Linha divisória
- Esquerda: `© 2024 Conviver — Todos os direitos reservados.`
- Direita: `Desenvolvido com ❤️ para conexões que protegem.`

**Botão flutuante fixo:** ícone do WhatsApp (verde) no canto inferior direito da tela

---

## Requisitos Técnicos

### Tecnologia
- **HTML5 + CSS3 + JavaScript vanilla** (sem frameworks obrigatórios)
- Ou **React** se preferir componentes reutilizáveis
- Google Fonts para tipografia
- CSS Variables para toda a paleta de cores
- CSS Grid e Flexbox para layouts responsivos

### Responsividade
- **Mobile:** < 768px — layout em coluna única, menu hamburguer
- **Tablet:** 768px–1024px — layout em 2 colunas onde aplicável
- **Desktop:** > 1024px — layout completo conforme wireframe

### Comportamentos / Interações
- Header fixo com sombra ao fazer scroll (`position: sticky`)
- Scroll suave entre seções (`scroll-behavior: smooth`)
- Animações de entrada ao rolar (Intersection Observer API): fade-in + slide-up nos cards e seções
- Contador animado nos números da seção de estatísticas (contagem de 0 até o valor final ao entrar na viewport)
- Hover nos cards de serviços: elevação + borda dourada
- Botão WhatsApp flutuante com pulse animation
- Dropdown do menu com transição suave

### Imagens Placeholder (substituir pelas originais depois)
- **Hero:** `https://images.unsplash.com/photo-1543342384-1f1350e27861?w=800&q=80`
- **Quem Somos:** `https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=700&q=80`
- **Área do Judiciário:** `https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&q=80`
- **Logo:** arquivo local `logo-conviver.png` (fornecido pelo cliente)

### Acessibilidade
- `alt` descritivo em todas as imagens
- Contraste WCAG AA em todos os textos
- Navegação por teclado funcional
- `aria-label` nos botões de ação

---

## Arquivos a Gerar

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── logo-conviver.png  ← (inserir arquivo real)
```

> **Nota:** Todas as imagens usam URLs do Unsplash como placeholder. Substitua pelos arquivos reais fornecidos pelo cliente antes do deploy. A logo deve ser inserida na pasta `assets/`.