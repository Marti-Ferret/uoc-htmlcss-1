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

// Carrega l'iframe de YouTube només quan l'usuari clica la miniatura
document.querySelectorAll('.youtube-facade').forEach(facade => {
  facade.addEventListener('click', () => {
    const videoId = facade.dataset.videoid;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.width = '1278';
    iframe.height = '719';
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('title', facade.querySelector('img').alt);
    facade.replaceWith(iframe);
  });
});

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
