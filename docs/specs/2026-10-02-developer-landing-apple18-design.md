# Especificação de Design: Landing Page Developer iOS 18 Glassmorphism

**Data**: 2026-10-02  
**Autor**: Antigravity & Marco  
**Público-alvo**: Recrutadores, clientes, founders e tech leads em busca de um Fullstack & Software Engineer sênior.

---

## 1. Visão Geral do Produto
Uma landing page moderna, rápida e esteticamente impecável inspirada na linguagem de design do **Apple iOS 18** e **visionOS**, utilizando **HTML5 semântico, CSS3 moderno (Vanilla) e JavaScript puro (ES6+)**.

O design utiliza o conceito de **Dark Glassmorphism** (vidro fosco translúcido sobre fundo escuro OLED), com cantos curvilíneos suaves (*squircles*), iluminação especular (*specular highlights*), tipografia precisa e microinterações fluidas.

---

## 2. Paleta de Cores e Tokens de Estilo

### 2.1 Cores Base
- **Fundo Primário**: `#090A0F` (Dark OLED)
- **Superfície Glass 1 (Cards)**: `rgba(255, 255, 255, 0.04)` com `backdrop-filter: blur(24px) saturate(180%)`
- **Superfície Glass 2 (Hover/Active)**: `rgba(255, 255, 255, 0.08)` com `backdrop-filter: blur(32px) saturate(200%)`
- **Borda Especular (Hairline)**: `1px solid rgba(255, 255, 255, 0.12)`
- **Borda de Destaque**: `1px solid rgba(255, 255, 255, 0.25)`
- **Texto Principal**: `#FFFFFF`
- **Texto Secundário**: `rgba(255, 255, 255, 0.65)`
- **Texto Terciário**: `rgba(255, 255, 255, 0.40)`

### 2.2 Sistema de Tinting Dinâmico (iOS 18 Theme Tints)
Variáveis reativas no CSS controladas via JavaScript:
- `--tint-cyan`: `#00F0FF` (Padrão - Cyber Cyan)
- `--tint-violet`: `#A855F7` (Electric Violet)
- `--tint-emerald`: `#10B981` (Apple Emerald)
- `--tint-orange`: `#F97316` (Sunset Orange)
- `--tint-gold`: `#F59E0B` (Starlight Gold)

---

## 3. Arquitetura de Componentes

### 3.1 Header & Dynamic Island
- **Floating Island**: Posicionada no topo central, com formato de pílula preta com borda translúcida.
- **Interatividade**:
  - Estado colapsado: exibe status verde pulsante *"Disponível para projetos"* e indicador de tint ativo.
  - Estado expandido (ao clique ou hover): expande fluidamente (com curva *spring*) revelando menu rápido de navegação, relógio ao vivo com fuso horário e seletor com 5 opções de Tint para a página inteira.

### 3.2 Hero Section
- **Foto de Perfil**: Foto real do desenvolvedor em moldura squircle com chanfro luminoso e iluminação radial atrás da foto reagindo à cor do Tint.
- **Badge Verificado**: Selo holográfico *"Verified Fullstack Engineer"*.
- **Headlines**:
  - Título: *"Construindo softwares escaláveis com arquitetura limpa e interfaces de alta precisão."*
  - Subtítulo com foco em stack moderna: Node.js, TypeScript, React/Next.js, Python, Docker & Cloud Architecture.
- **Botões de Ação**:
  - Primário (Tint Filled): *"Explorar Projetos"*
  - Secundário (Glassmorphic): *"Entrar em Contato"*
- **Métricas Rápidas (Glass Pills)**:
  - 8+ Anos de Código
  - 30+ Projetos Entregues
  - 99.9% Foco em Qualidade e Resiliência

### 3.3 Bento Grid de Widgets (iOS 18 Style)
- **Widget Tech Stack (2x2)**: Grid de badges interativas com ícones das principais tecnologias com indicação de proficiência e categorias (Backend, Frontend, DevOps, DB).
- **Widget Filosofia de Engenharia (2x1)**: Princípios fundamentais: TDD, Clean Architecture, APIs REST/GraphQL escaláveis e observabilidade.
- **Widget Status em Tempo Real (1x1)**: Relógio local sincronizado, status de trabalho e tempo de resposta típico (< 2 horas).
- **Widget Terminal macOS (2x2)**:
  - Header da janela com botões clássicos (vermelho, amarelo, verde).
  - Abas: `developer.ts`, `architecture.json`, `terminal.sh`.
  - Código formatado com syntax highlighting.
  - Botão de copiar snippet com notificação flutuante estilo pill da Apple.

### 3.4 Projetos em Destaque (App Store / VisionOS Feature Cards)
- Cards com efeito 3D tilt ao passar o mouse.
- Cada projeto contém:
  1. Imagem de capa ilustrativa gerada em alta definição.
  2. Tags das tecnologias utilizadas.
  3. Resumo da solução e problema de negócio resolvido.
  4. Métrica de impacto (ex: redução de latência, volume de requisições).
  5. Links para demo e repositório.

### 3.5 Control Center (Contato e Conexões)
- Painel modular com botões táteis no formato de ícones grandes do Control Center do iOS 18:
  - LinkedIn
  - GitHub
  - WhatsApp
  - Email direto
- Formulário de contato embutido com campos em vidro, validação instantânea no frontend e feedback de envio com animação suave.

### 3.6 Footer
- Assinatura refinada: *"Projetado com a estética Apple iOS 18. Criado com HTML5, CSS e JS puros."*
- Botão "Voltar ao topo" estilo pill flutuante.

---

## 4. Requisitos Técnicos e Performance
- Sem frameworks pesados (100% vanilla para máxima velocidade de carregamento).
- Design responsivo (mobile-first, tablet, notebook e monitores ultrawide).
- Acessibilidade (WCAG AA, suporte a navegação por teclado e leitor de tela).
- Efeito de brilho de mouse (*cursor follower glow*) suave e otimizado com `requestAnimationFrame`.
