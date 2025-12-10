export function createAside() {
  const content = document.querySelector('main.content');  // Rescato html
  const aside = document.getElementById('aside');          // Rescato html
  if (!aside) return;                                      // Si no existe termina

  aside.innerHTML = '';                                    // Borro el contenido

  const title = document.createElement('h3');              // Creo h3
  title.textContent = 'On this page';                      // Pongo el titulo
  title.style.color = 'var(--text2-color)';                // Le doy estilo
  aside.appendChild(title);                                // Meto el titulo en el aside
  const ul = document.createElement('ul');                 // Creo ul
  aside.appendChild(ul);                                   // Meto la ul en el aside

  const links = [];                                        // Inicializa el array de links

  function isVisible(element) {                            // Comprueba si el objeto es visible con estas condiciones
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
  }

  const headers = content.querySelectorAll('h2');          // Rescato h2
  headers.forEach(header => {                              // Para cada uno
    if (!isVisible(header)) return;                        // ignorar elementos ocultos

                                                           // Asigna un id al h2
    if (!header.id) header.id = header.textContent.toLowerCase().replace(/\s+/g, '-');

    const li = document.createElement('li');               // Creo li
    const link = document.createElement('a');              // Creo a
    link.href = `#${header.id}`;                           // Relaciona el atributo href del link con el id del header
    link.textContent = header.textContent;                 // Equipara el contenido del header con el del link

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
