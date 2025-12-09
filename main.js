import { loadPage } from './js/funciones/body.js';
import { responsiveAside, setupResizeListener } from './js/funciones/aside.js';
import { setupSidebarLinks, setupMenuToggle } from './js/funciones/sidebar.js';
import { setupThemeToggle, setupExternalEditorButton } from './js/funciones/navbar.js';

document.addEventListener("DOMContentLoaded", () => { 
  fetch('./components/nav/sidebar-nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('nav-container').innerHTML = data;

      const body = document.body;
      const main = document.querySelector('main.content');
      const sidebar = document.getElementById('sidebar');
      const menuBtn = document.getElementById('menu-toggle');
      const pageWrapper = document.querySelector('.page-wrapper');
      const container = document.querySelector('.container');
      const aside = document.getElementById('aside');
      const themeToggle = document.getElementById('theme-toggle');

      loadPage('/pages/introduccion.html', main);
      setupMenuToggle(menuBtn, sidebar, pageWrapper);
      responsiveAside(container, aside);
      setupResizeListener(container, aside);
      setupSidebarLinks(sidebar, main);
      setupThemeToggle(themeToggle, body);
      setupExternalEditorButton();
    })
    .catch(err => console.error("Error cargando sidebar:", err));
});




