/**
 * Alternador Dinâmico de Cor (Tint) iOS 18
 */
(function () {
  'use strict';

  const tints = {
    cyan: {
      color: '#00F0FF',
      glow: 'rgba(0, 240, 255, 0.35)',
      subtle: 'rgba(0, 240, 255, 0.12)'
    },
    violet: {
      color: '#A855F7',
      glow: 'rgba(168, 85, 247, 0.35)',
      subtle: 'rgba(168, 85, 247, 0.12)'
    },
    emerald: {
      color: '#10B981',
      glow: 'rgba(16, 185, 129, 0.35)',
      subtle: 'rgba(16, 185, 129, 0.12)'
    },
    orange: {
      color: '#F97316',
      glow: 'rgba(249, 115, 22, 0.35)',
      subtle: 'rgba(249, 115, 22, 0.12)'
    },
    gold: {
      color: '#F59E0B',
      glow: 'rgba(245, 158, 11, 0.35)',
      subtle: 'rgba(245, 158, 11, 0.12)'
    }
  };

  const STORAGE_KEY = 'apple18_tint_theme';

  function applyTint(tintName) {
    if (!tints[tintName]) tintName = 'cyan';
    const config = tints[tintName];
    const root = document.documentElement;

    root.style.setProperty('--tint-color', config.color);
    root.style.setProperty('--tint-glow', config.glow);
    root.style.setProperty('--tint-subtle', config.subtle);

    // Atualiza o estado ativo nos botões da interface
    document.querySelectorAll('.tint-btn').forEach(btn => {
      if (btn.getAttribute('data-tint') === tintName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    try {
      localStorage.setItem(STORAGE_KEY, tintName);
    } catch (e) {
      // Ignora erro de armazenamento em modo de navegação privada
    }
  }

  function initTheme() {
    let saved = 'cyan';
    try {
      saved = localStorage.getItem(STORAGE_KEY) || 'cyan';
    } catch (e) {}

    applyTint(saved);

    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.tint-btn');
      if (btn) {
        const tint = btn.getAttribute('data-tint');
        if (tint) {
          applyTint(tint);
          if (window.showToast) {
            window.showToast(`iOS 18 Tint: ${tint.toUpperCase()} ativado`);
          }
        }
      }
    });
  }

  window.applyTint = applyTint;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
