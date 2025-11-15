// aside.js

export function createAside() {
  const content = document.querySelector('main.content');
  const aside = document.getElementById('aside');
  if (!aside) return;

  // Limpiar contenido previo
  aside.innerHTML = '';

  // Crear título
  const title = document.createElement('h3');
  title.textContent = 'On this page';
  title.style.color = 'var(--text2-color)';
  aside.appendChild(title);

  // Crear lista
  const ul = document.createElement('ul');
  aside.appendChild(ul);

  const links = [];

  // Función para saber si un elemento es visible (no está oculto)
  function isVisible(element) {
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
  }

  // Seleccionar todos los h2 y agregar solo los visibles
  const headers = content.querySelectorAll('h2');
  headers.forEach(header => {
    if (!isVisible(header)) return; // ignorar elementos ocultos

    // Asegurarse de que tenga id
    if (!header.id) header.id = header.textContent.toLowerCase().replace(/\s+/g, '-');

    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${header.id}`;
    link.textContent = header.textContent;

    li.appendChild(link);
    ul.appendChild(li);
    links.push(link);

    // Click en li simula click en el link
    li.addEventListener('click', () => link.click());
  });

  // Añadir clase active al link clicado
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.stopPropagation();
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // IntersectionObserver para resaltar sección activa
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = aside.querySelector(`a[href="#${id}"]`);
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        if (link) link.classList.add('active');
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -70% 0px',
    threshold: 0
  });

  headers.forEach(header => {
    if (isVisible(header)) observer.observe(header);
  });
}

export function responsiveAside(container, aside) {
  const ancho = window.innerWidth;
  let maxWidth = 80;

  if (ancho > 800 && ancho < 1800) {
    const pasos = Math.floor((1800 - ancho) / 100);
    maxWidth = 80 - pasos * 0.5;
    if (aside) { aside.style.display = 'block'; aside.style.opacity = '1'; }
  } else if (ancho <= 800) {
    maxWidth = 100;
    if (aside) { aside.style.opacity = '0'; aside.style.display = 'none'; }
  }
  if (maxWidth < 54) maxWidth = 54;
  container.style.maxWidth = maxWidth + '%';
}

export function setupResizeListener(container, aside) {
  window.addEventListener('resize', () => responsiveAside(container, aside));
}
