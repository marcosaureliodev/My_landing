/**
 * Máquina de Estados & Interações do Dynamic Island Apple
 */
(function () {
  'use strict';

  function initDynamicIsland() {
    const island = document.getElementById('dynamicIsland');
    const closeBtn = document.getElementById('islandCloseBtn');
    if (!island) return;
    if (island.dataset.islandInitialized) return;
    island.dataset.islandInitialized = 'true';

    let isExpanded = false;

    function expand() {
      if (isExpanded) return;
      isExpanded = true;
      island.classList.add('island-expanded');
      island.setAttribute('aria-expanded', 'true');
    }

    function collapse() {
      if (!isExpanded) return;
      isExpanded = false;
      island.classList.remove('island-expanded');
      island.setAttribute('aria-expanded', 'false');
    }

    // Abre ao clicar no island quando recolhido
    island.addEventListener('click', function (e) {
      // Não recolhe se o clique for em botões dentro da visão expandida
      if (e.target.closest('.island-close-btn') || e.target.closest('.tint-btn') || e.target.closest('.island-nav-link')) {
        return;
      }
      if (!isExpanded) {
        expand();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        collapse();
      });
    }

    // Recolhe ao clicar fora do island
    document.addEventListener('click', function (e) {
      if (isExpanded && !island.contains(e.target)) {
        collapse();
      }
    });

    // Recolhe ao pressionar a tecla Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isExpanded) {
        collapse();
      }
    });

    // Recolhe ao clicar em qualquer link de navegação interno
    island.querySelectorAll('.island-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        setTimeout(collapse, 150);
      });
    });
  }

  window.addEventListener('components:loaded', initDynamicIsland);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDynamicIsland);
  } else {
    initDynamicIsland();
  }
})();
