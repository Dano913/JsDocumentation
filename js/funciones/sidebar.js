import { loadPage } from './body.js';

export function setupSidebarLinks(sidebar, main) {
  const sidebarLinks = sidebar.querySelectorAll('a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        loadPage(href, main);
      }
    });
  });
}

export function setupMenuToggle(menuBtn, sidebar, pageWrapper) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
      pageWrapper.style.marginLeft = '250px';
    } else {
      pageWrapper.style.marginLeft = '0';
    }
  });
}

