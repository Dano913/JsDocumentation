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

function applyLayout(sidebar, pageWrapper, container) {
  const width = window.innerWidth;
  const isActive = sidebar.classList.contains('active');
  const isMobile = width <= 800;

  if (isMobile) {
    pageWrapper.style.marginLeft = '0';  
    pageWrapper.style.width = '100%';  
    
    container.style.transition = 'margin-left 0.3s ease, width 0.3s ease';
    
    if(isActive) { 
      container.style.width = '100%'; 
      container.style.marginLeft = '9%';  
    } else {
      container.style.marginLeft = '2%';  
      container.style.width = '96%'; 
    }
    sidebar.style.transform = ''; 
    return;
  }

  if (isActive) {
    pageWrapper.style.marginLeft = '250px';
    pageWrapper.style.width = 'calc(100% - 270px)';
    container.style.marginLeft = '2%';
    container.style.width = '80%';
  } else {
    pageWrapper.style.marginLeft = '0';
    pageWrapper.style.width = '100%';
    container.style.marginLeft = '0';
    container.style.width = '100%';
  }

  sidebar.style.transform = '';
  document.body.style.overflow = '';
}

export function setupMenuToggle(menuBtn, sidebar, pageWrapper, container) {
  applyLayout(sidebar, pageWrapper, container);

  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    applyLayout(sidebar, pageWrapper, container);
  });

  container.addEventListener('click', () => {
    const width = window.innerWidth;
    const isMobile = width <= 800;
    const isActive = sidebar.classList.contains('active');
    
    if (isMobile && isActive) {
      sidebar.classList.remove('active');
      applyLayout(sidebar, pageWrapper, container);
    }
  });

  // Escucha resize
  window.addEventListener('resize', () => {
    applyLayout(sidebar, pageWrapper, container);
  });
}

