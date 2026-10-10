/**
 * Funcionalidades Interativas: Inclinação 3D, Terminal macOS, Relógio ao Vivo, Validação de Formulário & Notificações
 */
(function () {
  'use strict';

  // 1. Sistema de Notificações Toast
  function showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px) scale(0.95)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  window.showToast = showToast;

  // 2. Efeito de Inclinação 3D nos Cartões
  function init3DTilt() {
    const cards = document.querySelectorAll('.project-card, .hero-portrait-frame');

    cards.forEach(card => {
      if (card.dataset.tiltInit) return;
      card.dataset.tiltInit = 'true';

      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  // 3. Brilho Ambiente do Cursor
  function initAmbientGlow() {
    if (window.__ambientGlowInit) return;
    const glow = document.getElementById('ambientGlow');
    if (!glow) return;
    window.__ambientGlowInit = true;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener('mousemove', function (e) {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function animate() {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  // 4. Abas do Terminal macOS & Cópia de Código
  function initTerminal() {
    const terminal = document.getElementById('terminal');
    if (!terminal || terminal.dataset.terminalInit) return;
    terminal.dataset.terminalInit = 'true';

    const tabs = terminal.querySelectorAll('.terminal-tab');
    const codes = terminal.querySelectorAll('.terminal-code');
    const copyBtn = document.getElementById('terminalCopyBtn');

    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        const target = this.getAttribute('data-tab');

        tabs.forEach(t => t.classList.remove('active'));
        codes.forEach(c => c.classList.remove('active'));

        this.classList.add('active');
        const activeCode = document.getElementById(`tabContent-${target}`);
        if (activeCode) activeCode.classList.add('active');
      });
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        const activeCode = document.querySelector('.terminal-code.active');
        if (activeCode) {
          const text = activeCode.innerText;
          navigator.clipboard.writeText(text).then(() => {
            showToast('Código copiado para a área de transferência!');
          }).catch(() => {
            showToast('Snippet selecionado!');
          });
        }
      });
    }
  }

  // 5. Relógio ao Vivo no Bento Grid
  function initClock() {
    const timeEl = document.getElementById('liveClockTime');
    if (!timeEl || timeEl.dataset.clockInit) return;
    timeEl.dataset.clockInit = 'true';

    function updateTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      timeEl.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateTime();
    setInterval(updateTime, 1000);
  }

  // 6. Validação Instantânea do Formulário de Contato & Feedback
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form || form.dataset.formInit) return;
    form.dataset.formInit = 'true';

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Por favor, preencha todos os campos.');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="spin">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        <span>Enviando...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        showToast('Mensagem enviada com sucesso! Responderei em breve.');
      }, 900);
    });
  }

  // 7. Botão Flutuante Voltar ao Topo
  function initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn || btn.dataset.btnInit) return;
    btn.dataset.btnInit = 'true';

    let ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          if (window.scrollY > 600) {
            btn.classList.add('visible');
          } else {
            btn.classList.remove('visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initAll() {
    init3DTilt();
    initAmbientGlow();
    initTerminal();
    initClock();
    initContactForm();
    initBackToTop();
  }

  window.addEventListener('components:loaded', initAll);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
