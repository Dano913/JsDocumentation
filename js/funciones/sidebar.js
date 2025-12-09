import { loadPage } from './body.js';

export function setupSidebarLinks(sidebar, main) {        // Funcion para colocar los links con parametros
  const sidebarLinks = sidebar.querySelectorAll('a');     // Los guardar en un variable
  sidebarLinks.forEach(link => {                          // Recorro los links
    link.addEventListener('click', e => {                       // Añado evento de click a cada uno
      e.preventDefault();                                       // Evita comportamiento natural
      sidebarLinks.forEach(l => l.classList.remove('active'));  // Elimina la clase active de todos
      link.classList.add('active');                             // Se añade la clase active solo al clickado
      
      const href = link.getAttribute('href');            // Obtiene el valor de href del link clickado
      if (href.startsWith('#')) {                        // Comprueba si empieza con #(ID dentro de la pagina)
        const target = document.querySelector(href);     // Guarda en variable
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Busca el que coincida con el valor de href que guardo
      } else {
        loadPage(href, main);    // Sino es que es una pagina por eso la carga SPA
      }
    });
  });
}

export function setupMenuToggle(menuBtn, sidebar, pageWrapper) { // Boton de plegar y desplegar sidebar
  menuBtn.addEventListener('click', () => {                      // Se escucha el evento de click
    sidebar.classList.toggle('active');                          // Si no tiene la clase active se la pone y viceversa 

    if (sidebar.classList.contains('active')) {     // Si la sidebar esta abierta
      pageWrapper.style.marginLeft = '250px';       // Mueve el contenido
    } else {
      pageWrapper.style.marginLeft = '0';           // Sino lo deja quieto
    }
  });
}

