# Developer Landing Page Apple iOS 18 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir uma landing page profissional para desenvolvedor de software Fullstack com estética Apple iOS 18 Dark Glassmorphism, 100% responsiva, usando HTML5, CSS3 e JavaScript puro.

**Architecture:** Estrutura modular desacoplada em CSS por responsabilidades (variáveis/tokens, base, componentes, responsivo) e JavaScript modular (tema/tint, dynamic island, interatividades de widgets e terminal). A foto do desenvolvedor será copiada para assets locais e tratada com efeitos de vidro e luz especular.

**Tech Stack:** HTML5 semântico, CSS3 moderno (Custom Properties, Backdrop-Filter, Flexbox, Grid), JavaScript Vanilla (ES6+), Node.js (apenas para testes de verificação e validação sintática).

**Spec:** [docs/specs/2026-10-02-developer-landing-apple18-design.md](../specs/2026-10-02-developer-landing-apple18-design.md)

## Global Constraints

- Sem frameworks pesados ou bibliotecas externas pesadas; código leve e ultrarrápido (Vanilla).
- Acentos de cores controlados exclusivamente pelo sistema de Tint do iOS 18 (`--tint-color`, `--tint-glow`).
- Vidro fosco (*glassmorphism*) usando `backdrop-filter: blur(...)` com fallback gracioso.
- Imagem do perfil do desenvolvedor carregada de `assets/marco-profile.jpg`.
- Elementos interativos com IDs semânticos únicos para teste e acessibilidade.

## Review Focus

1. **Responsividade em telas pequenas (< 480px)**: A Dynamic Island e os widgets do Bento Grid devem empilhar de forma elegante sem overflow horizontal.
2. **Desempenho dos efeitos de vidro**: O efeito de desfoque e animação de tilt 3D devem rodar a 60fps usando aceleração de hardware (`transform: translate3d`).
3. **Persistência do Tint**: A seleção de cor do usuário deve ser salva no `localStorage` e restaurada sem *flicker*.
4. **Acessibilidade do formulário e botões**: Todos os botões e links devem ter foco visível e rótulos de leitor de tela (`aria-label`).
5. **Cópia do Snippet no Terminal**: Ação com fallback seguro para `navigator.clipboard` com toast de confirmação.

---

### Task 1: Estrutura de Diretórios, Imagens e Assets

**Files:**
- Create: `assets/marcos-profile.jpg` (cópia da imagem enviada pelo usuário)
- Create: `assets/project-distributed.svg`
- Create: `assets/project-fintech.svg`
- Create: `assets/project-cloudai.svg`
- Create: `tests/verify-assets.js`

- [ ] **Step 1: Escrever teste de verificação de assets**
- [ ] **Step 2: Executar teste e validar falha**
- [ ] **Step 3: Copiar foto de Marco e gerar SVGs vetoriais dos projetos**
- [ ] **Step 4: Executar teste de verificação e validar sucesso**

---

### Task 2: Design System, Tokens e CSS Base (iOS 18 Glassmorphism)

**Files:**
- Create: `css/variables.css`
- Create: `css/base.css`
- Create: `tests/verify-css.js`

- [ ] **Step 1: Escrever teste para validar variáveis e tokens CSS necessários**
- [ ] **Step 2: Executar teste e validar falha**
- [ ] **Step 3: Implementar `css/variables.css` e `css/base.css`**
- [ ] **Step 4: Executar teste e validar sucesso**

---

### Task 3: Componentes CSS (Dynamic Island, Hero, Bento Grid, Terminal, Cards, Control Center)

**Files:**
- Create: `css/components.css`
- Create: `css/responsive.css`
- Create: `tests/verify-components-css.js`

- [ ] **Step 1: Escrever teste de validação de classes de componentes**
- [ ] **Step 2: Executar teste e validar falha**
- [ ] **Step 3: Implementar regras de estilo em `css/components.css` e `css/responsive.css`**
- [ ] **Step 4: Executar teste e validar sucesso**

---

### Task 4: Lógica JavaScript (Sistema de Tint, Dynamic Island e Interatividades)

**Files:**
- Create: `js/theme.js`
- Create: `js/dynamic-island.js`
- Create: `js/interactive.js`
- Create: `tests/verify-js.js`

- [ ] **Step 1: Escrever testes unitários para a lógica JS**
- [ ] **Step 2: Executar testes e validar falha**
- [ ] **Step 3: Implementar `js/theme.js`, `js/dynamic-island.js` e `js/interactive.js`**
- [ ] **Step 4: Executar testes e validar sucesso**

---

### Task 5: Estrutura HTML5 Semântica e Montagem da Landing Page

**Files:**
- Create: `index.html`
- Create: `tests/verify-html.js`

- [ ] **Step 1: Escrever teste para validar semântica, meta tags, seções e IDs de `index.html`**
- [ ] **Step 2: Executar teste e validar falha**
- [ ] **Step 3: Implementar `index.html` completo**
- [ ] **Step 4: Executar teste e validar sucesso**

---

### Task 6: Validação Visual no Navegador e Polimento Final

**Files:**
- Modify: `index.html` / `css/*.css` / `js/*.js` (ajustes finos se necessário)

- [x] **Step 1: Iniciar servidor local e abrir no navegador via subagente ou browser**
- [x] **Step 2: Validar renderização visual, Dynamic Island, seletor de Tint e responsividade**
- [x] **Step 3: Confirmar ausência de erros no console do navegador**
