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
  const width = window.innerWidth;                                 // Ancho actual del viewport
  const isActive = sidebar.classList.contains('active');          // Comprueba si el sidebar esta activo
  const isMobile = width <= 600;                                  // Vista mobile
  const isTabletSmall = width > 600 && width <= 900;              // Tablet pequeña
  const isTabletLarge = width > 900 && width <= 1000;             // Tablet grande / mini-desktop
  const isDesktopMedium = width > 1000 && width <= 1350;          // Desktop mediano
  const isDesktopLarge = width > 1350 && width <= 1600;           // Desktop grande
  const isDesktopXL = width > 1600 && width <= 1800;                               // Desktop extra grande
  const isDesktopXXL = width > 1800;                             // Desktop extra grande

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

  if (isTabletLarge) {                                             // Tablet grande / mini-desktop
    if (isActive) {
      pageWrapper.style.transition = 'margin-left 1s ease, width 0.9s ease';
      container.style.transition = 'margin-left 1s ease, width 0.5s ease';
      pageWrapper.style.marginLeft = '240px';
      pageWrapper.style.width = 'calc(100% - 230px)';
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
      aside.style.width = '21%';
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
      aside.style.width = '21%';
    }
    sidebar.style.transform = '';
    return;
  }

  if (isDesktopXL) {    

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

  if (isDesktopXXL) {    

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

  sidebar.style.transform = '';                                     // Limpia transform
  document.body.style.overflow = '';                                // Restaura scroll
}


export function setupMenuToggle(menuBtn, sidebar, pageWrapper, container, aside) {
  applyLayout(sidebar, pageWrapper, container, aside);

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
      applyLayout(sidebar, pageWrapper, container, aside);
    }
  });

  // Escucha resize
  window.addEventListener('resize', () => {
    applyLayout(sidebar, pageWrapper, container, aside);
  });
}

