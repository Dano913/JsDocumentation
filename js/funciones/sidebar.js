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

function applyLayout(sidebar, pageWrapper, container, aside) {
  const width = window.innerWidth;                                // Ancho actual del viewport
  const isActive = sidebar.classList.contains('active');          // Comprueba si el sidebar esta activo
  const isMobile = width <= 600;                                  // Vista mobile
  const isTabletSmall = width > 600 && width <= 900;              // Tablet pequeña
  const isTabletLarge = width > 900 && width <= 1000;             // Tablet grande / mini-desktop
  const isDesktopMedium = width > 1000 && width <= 1350;          // Desktop mediano
  const isDesktopLarge = width > 1350 && width <= 1600;           // Desktop grande
  const isDesktopXL = width > 1600 && width <= 1800;              // Desktop extra grande
  const isDesktopXXL = width > 1800;                              // Desktop extra grande

  if (isMobile) {                                                  // Si es mobile
    pageWrapper.style.marginLeft = '0';  
    pageWrapper.style.width = '100%'; 

    if (isActive) {                                                // Si el sidebar esta activo
      container.style.width = '96%'; 
      container.style.marginLeft = '2%';  
    } else {                                                       // Si el sidebar NO esta activo
      container.style.marginLeft = '2%';  
      container.style.width = '96%'; 
    }

    sidebar.style.transform = '';                                  // Resetea transform
    return;                                                        // Sale de la funcion
  }

  if (isTabletSmall) {                                             // Tablet pequeña
    pageWrapper.style.marginLeft = '0';
    pageWrapper.style.width = '100%';

    if (isActive) {
      container.style.marginLeft = '2%';
      container.style.width = '96%';
    } else {
      container.style.marginLeft = '2%';
      container.style.width = '97%';
    }

    sidebar.style.transform = '';
    return;
  }

  container.style.transition = 'margin-left 1s ease, width 1s ease';

  if (isTabletLarge) {                                             // Tablet grande
    if (isActive) {
      pageWrapper.style.transition = 'margin-left 1s ease, width 0.9s ease';
      container.style.transition = 'margin-left 1s ease, width 0.5s ease';
      pageWrapper.style.marginLeft = '240px';
      pageWrapper.style.width = 'calc(100% - 240px)';
      sidebar.style.width = '25%';
      container.style.marginLeft = '0';
      container.style.width = '70%';
      sidebar.style.width = '240px';
      

    } else {
      pageWrapper.style.transition = 'margin-left 1s ease, width 1.2s ease';
      container.style.transition = 'margin-left 1s ease, width 1.3s ease';
      pageWrapper.style.marginLeft = '0';
      pageWrapper.style.width = '100%';
      container.style.marginLeft = '2%';
      container.style.width = '100%';
      aside.style.width = '22%';
    }

    sidebar.style.transform = '';
    return;
  }

  if (isDesktopMedium) {                                           // Desktop mediano

    if (isActive) {
      pageWrapper.style.transition = 'margin-left 1s ease, width 0.9s ease';
      container.style.transition = 'margin-left 1s ease, width 0.8s ease';
      pageWrapper.style.marginLeft = '240px';
      pageWrapper.style.width = 'calc(100% - 240px)';
      container.style.marginLeft = '0';
      container.style.width = '74%';
      sidebar.style.width = '240px';
    } else {
      pageWrapper.style.transition = 'margin-left 1s ease, width 1.1s ease';
      container.style.transition = 'margin-left 1s ease, width 1.8s linear';
      pageWrapper.style.marginLeft = '0';
      pageWrapper.style.width = '100%';
      container.style.marginLeft = '1%';
      container.style.width = '100%';
      aside.style.width = '22%';
    }

    sidebar.style.transform = '';
    return;
  }

  if (isDesktopLarge) {                                            // Desktop grande
    if (isActive) {
      pageWrapper.style.transition = 'margin-left 1s ease, width 0.9s ease';
      container.style.transition = 'margin-left 1s ease, width 0.9s ease';
      pageWrapper.style.marginLeft = '220px';
      pageWrapper.style.width = 'calc(100% - 220px)';
      container.style.marginLeft = '1%';
      container.style.width = '74%';
      sidebar.style.width = '240px';
    } else {
      pageWrapper.style.transition = 'margin-left 1s ease, width 1.1s ease';
      container.style.transition = 'margin-left 1s ease, width 1.8s linear';
      pageWrapper.style.marginLeft = '0';
      pageWrapper.style.width = '100%';
      pageWrapper.style.border = 'none';
      container.style.marginLeft = '0';
      container.style.width = '90%';
      aside.style.width = '22%';
    }
    sidebar.style.transform = '';
    return;
  }

  if (isDesktopXL) {                                               // Desktop extra ancho

    pageWrapper.style.transition = 'margin-left 1s ease, width 1s ease';
  container.style.transition = 'margin-left 1s ease, width 1s ease';
    
    if (isActive) {
      pageWrapper.style.marginLeft = '240px';
      pageWrapper.style.width = 'calc(100% - 240px)';
      container.style.marginLeft = '1%';
      container.style.width = '74%';
      sidebar.style.width = '240px';
    } else {
      pageWrapper.style.marginLeft = '0';
      pageWrapper.style.width = '100%';
      pageWrapper.style.border = 'none';
      container.style.marginLeft = '0';
      container.style.width = '80%';
      aside.style.width = '21%';
    }
    sidebar.style.transform = '';
    return;
  }

  if (isDesktopXXL) {                                                // Desktop ultra mega ancho

    pageWrapper.style.transition = 'margin-left 1s ease, width 1s ease';
  container.style.transition = 'margin-left 1s ease, width 1s ease';
    
    if (isActive) {
      pageWrapper.style.marginLeft = '240px';
      pageWrapper.style.width = 'calc(100% - 240px)';
      container.style.marginLeft = '0';
      container.style.width = '77%';
      sidebar.style.width = '240px';
    } else {
      pageWrapper.style.marginLeft = '0';
      pageWrapper.style.width = '100%';
      pageWrapper.style.border = 'none';
      container.style.marginLeft = '0';
      container.style.width = '80%';
      aside.style.width = '21%';
    }
    sidebar.style.transform = '';
    return;
  }

  sidebar.style.transform = '';                                     
  document.body.style.overflow = '';                                // Restaura scroll
}


export function setupMenuToggle(menuBtn, sidebar, pageWrapper, container, aside) {  // Funcion con los elementos del dom como parametros
  applyLayout(sidebar, pageWrapper, container, aside);         // Aplica layout a los elementos segun tamaño de pantalla y estado de la sidebar

  menuBtn.addEventListener('click', () => {                    // Escucha el click en el boton de menu
    sidebar.classList.toggle('active');                        // Se añade o se quita la clase
    applyLayout(sidebar, pageWrapper, container);              // Se recalcula layout
  });

  container.addEventListener('click', () => {                  // Escucha el click en el contenido principal
    const width = window.innerWidth;                           // Detecta el width
    const isMobile = width <= 800;                             // Detecta si estas en mobile
    const isActive = sidebar.classList.contains('active');     // Detecta si sidebar esta activo
    
    if (isMobile && isActive) {                                // Si se cumplen
      sidebar.classList.remove('active');                      // Quita la clase active 
      applyLayout(sidebar, pageWrapper, container, aside);     // Recalcula layout
    }
  });

  window.addEventListener('resize', () => {                    // Cuando se cambia el tamaño de la ventana
    applyLayout(sidebar, pageWrapper, container, aside);       // Recalcula layout
  });
}

