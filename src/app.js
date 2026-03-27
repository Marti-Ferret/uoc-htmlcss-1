// Zoom de les fotos de la galeria quan fas clic
import mediumZoom from 'medium-zoom';

mediumZoom('.galeria-foto img', {
  margin: 24,
  background: 'rgba(0,0,0,0.85)',
});

// Obre i tanca el menú al mòbil
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('obert');
    const isOpen = nav.classList.contains('obert');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}

// Ressalta l'enllaç del menú que correspon a la pàgina actual
const path = window.location.pathname;
document.querySelectorAll('.barra-nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (
    (href === '/' && path === '/') ||
    (href !== '/' && path.startsWith(href))
  ) {
    link.classList.add('actiu');
  }
});
