import { loadPage } from './js/funciones/body.js';
import { responsiveAside, setupResizeListener } from './js/funciones/aside.js';
import { setupSidebarLinks, setupMenuToggle } from './js/funciones/sidebar.js';
import { setupThemeToggle, setupExternalEditorButton } from './js/funciones/navbar.js';

document.addEventListener("DOMContentLoaded", () => {                 // Se asegura de que el html este completamente cargado antes de ejecutar cualquier codigo
  fetch('./components/nav/sidebar-nav.html')                          // Trae el html del nav
    .then(res => res.text())                                          // Lo inserta en otro html
    .then(data => {
      document.getElementById('nav-container').innerHTML = data;      // Nav reutilizable

      const body = document.body;                                     // Rescata html
      const main = document.querySelector('main.content');
      const sidebar = document.getElementById('sidebar');
      const menuBtn = document.getElementById('menu-toggle');
      const pageWrapper = document.querySelector('.page-wrapper');
      const container = document.querySelector('.container');
      const aside = document.getElementById('aside');
      const themeToggle = document.getElementById('theme-toggle');
                                                                      // Otorga funcionalidades
      loadPage('/pages/introduccion.html', main);                     // Carga la primera pagina
      setupMenuToggle(menuBtn, sidebar, pageWrapper, container, aside);      // Abrir y cerrar sidebar
      responsiveAside(container, aside);                              // Ajusta el aside lateral
      setupResizeListener(container, aside);                          // Escucha cambios y ajusta aside
      setupSidebarLinks(sidebar, main);                               // Los enlaces cargan paginas
      setupThemeToggle(themeToggle, body);                            // Alterna tema claro oscuro
      setupExternalEditorButton();                                    // Abre editor en ventana externa
    })
    .catch(err => console.error("Error cargando sidebar:", err));     // Manejo error
});




