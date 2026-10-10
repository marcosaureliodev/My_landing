/**
 * Component Loader para a Landing Page (Apple iOS 18 Design)
 * Carrega componentes HTML assincronamente e dispara evento de ciclo de vida.
 */
(function () {
  'use strict';

  async function loadComponents() {
    const placeholders = document.querySelectorAll('[data-component]');
    if (!placeholders.length) return;

    const loadPromises = Array.from(placeholders).map(async (placeholder) => {
      const src = placeholder.getAttribute('data-component');
      if (!src) return;

      try {
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`Falha ao carregar ${src}: HTTP ${response.status}`);
        }
        const html = await response.text();
        
        // Substitui o placeholder diretamente pelo HTML do componente
        const temp = document.createElement('div');
        temp.innerHTML = html.trim();
        
        if (temp.firstElementChild) {
          placeholder.replaceWith(...temp.childNodes);
        } else {
          placeholder.outerHTML = html;
        }
      } catch (err) {
        console.error(`[ComponentLoader] Erro ao carregar componente "${src}":`, err);
        placeholder.innerHTML = `<div class="component-load-error" style="padding:1rem;color:#f87171;font-size:0.875rem;">Erro ao carregar componente: ${src}</div>`;
      }
    });

    await Promise.all(loadPromises);

    // Notifica scripts e ouvintes que todos os componentes estão no DOM
    const event = new CustomEvent('components:loaded', { bubbles: true, cancelable: true });
    window.dispatchEvent(event);
    document.dispatchEvent(event);

    // Suporte a navegação por âncora pós-carregamento (ex: #projects, #contact)
    if (window.location.hash) {
      try {
        const target = document.querySelector(window.location.hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } catch (e) {
        // Ignora seletores de hash inválidos
      }
    }
  }

  window.loadComponents = loadComponents;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
  } else {
    loadComponents();
  }
})();
