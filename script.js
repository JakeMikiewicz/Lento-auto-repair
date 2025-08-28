document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting Lento Auto Repair! We will get back to you shortly.');
});

const toolbar = document.querySelector('.filters');
toolbar?.addEventListener('keydown', (e) => {
  if (!['ArrowLeft','ArrowRight'].includes(e.key)) return;
  const buttons = Array.from(toolbar.querySelectorAll('[data-filter]'));
  const i = buttons.indexOf(document.activeElement);
  if (i === -1) return;
  e.preventDefault();
  const next = e.key === 'ArrowRight' ? (i + 1) % buttons.length : (i - 1 + buttons.length) % buttons.length;
  buttons[next].focus();
});
// Ensure first filter button is tabbable immediately
document.querySelector('.filters [data-filter]')?.setAttribute('tabindex','0');

const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Reveal on scroll: if reduced motion, show immediately (no slide-in)
if (prefersReduced) {
  document.querySelectorAll('.reveal').forEach(t => t.classList.add('visible'));
} else {
  // (keep your existing IntersectionObserver reveal)
}

// Testimonials: stop auto-advance if reduced motion
if (!prefersReduced) {
  setInterval(() => {
    if (document.hasFocus() && slides.length) { idx = (idx + 1) % slides.length; showSlide(idx); }
  }, 6000);
}