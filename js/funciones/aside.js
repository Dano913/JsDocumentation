/*================================
==  CREACION DE ASIDE DERECHO  ====  AJUSTE RESPONSIVE DEL ASIDE DERECHO  ====  ESCUCHA DE CAMBIOS EN VENTANA PARA AVISAR A RESPONSIVEASIDE  ==
================================*/

/*================================
==  CREACION DE ASIDE DERECHO  ==
================================*/

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

    li.appendChild(link);                                  // Meto link en el li
    ul.appendChild(li);                                    // Meto li en la ul
    links.push(link);                                      // Meto el link en su array
    li.addEventListener('click', () => link.click());      // Escucha un click en el li y ejecuta un click en el link
  });

  links.forEach(link => {                                  // Para cada link de links
    link.addEventListener('click', e => {                  // Escuchar evento click
      e.stopPropagation();                                 // Evita propagacion a elementos padres
      links.forEach(l => l.classList.remove('active'));    // Quita la clase active
      link.classList.add('active');                        // Solo le añade active al elemento clickado    
    });
  });

  const observer = new IntersectionObserver((entries) => {   // Forma fácil eficiente y precisa de saber q contenido entra en pantalla
    entries.forEach(entry => {                               // Por cada uno
      const id = entry.target.id;                            // Guarda su id
      const link = aside.querySelector(`a[href="#${id}"]`);  // Busco el link asociado a ese elemento por su href
      if (entry.isIntersecting) {                            // Si esta entrando
        links.forEach(l => l.classList.remove('active'));    // Quitar la clase active de todos los links
        if (link) link.classList.add('active');              // Ponerselo al target q entro
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -70% 0px',     // Reduce el area de observador
    threshold: 0
  });

  headers.forEach(header => {                           // Para cada header
    if (isVisible(header)) observer.observe(header);    // Si es visible lo observa
  });
}

/*=========================================
==  AJUSTE RESPONSIVE DEL ASIDE DERECHO  ==
=========================================*/

export function responsiveAside(container, aside) {                            // Funcion con 2 parametros
  const ancho = window.innerWidth;                                             // Ancho de pixeles del viewport
  let maxWidth = 80;                                                           // Ancho maximo

  if (ancho > 800) {                                                           // Si el ancho es mayor de 800
    if (ancho < 1800) {                                                        // Si esta entre esos anchos
      const pasos = Math.floor((1800 - ancho) / 100);                          // Calcula cuantos pasos de 100px faltan para llegar a 1800
      maxWidth = 80 - pasos * 0.5;                                             // Por cada 100 pasos menos el contenido se hace 0.5% mas ancho
    }

    if (aside) { aside.style.display = 'block'; aside.style.opacity = '1'; }   // Aseguro que aside muestre ese estilo

  } else if (ancho <= 800) {                                                   // Si el ancho es menor de 800
    maxWidth = 100;                                                            // ancho maximo 100
    if (aside) { aside.style.opacity = '0'; aside.style.display = 'none'; }    // Aseguro
  }

  if (maxWidth < 54) maxWidth = 54;                                            // Si el ancho maximo es menos de 54, ponlo en 54
  container.style.maxWidth = maxWidth + '%';                                   // Aplico el ancho al contenedor
}

/*=================================================================
==  ESCUCHA DE CAMBIOS EN VENTANA PARA AVISAR A RESPONSIVEASIDE  ==
=================================================================*/

export function setupResizeListener(container, aside) {       //  Funcion que adapta el tamaño de los elementos al tamaño de la ventana
  const onResize = () => responsiveAside(container, aside);   // Crea funcion abreviada que llama responsiveAside q cambia los estilos y layout segun ancho de ventana

  window.addEventListener('resize', onResize);                // Evento que escucha los cambios de tamaño de ventana y dispara onresize
  onResize();                                                 // Se llama a onresize antes de que se ejecute nada
}
