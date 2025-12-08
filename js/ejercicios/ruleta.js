// ruleta.js
const paginasEjercicios = [
  './pages/ejercicios.html',
];

const boton = document.getElementById('girarRuleta');
const contenedor = document.getElementById('ejercicioSeleccionado');

// Eliminar aside derecho solo en esta página
function eliminarAsideDerecho() {
  const asideDerecho = document.getElementById('aside');
  if (asideDerecho) {
    asideDerecho.remove();
    console.log('Aside derecho eliminado');
  }
}

// Ajustar anchos según estado de sidebar
function ajustarAnchosSegunSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.content');
  const mainContainer = document.querySelector('.container');
  const mainWrapper = document.querySelector('.page-wrapper');

  if (!sidebar || !mainContent || !mainContainer || !mainWrapper) return;

  const isSidebarDesplegada = sidebar.classList.contains('active');

  if (isSidebarDesplegada) {
    // Sidebar desplegada → dejamos espacio
    mainContent.style.width = '100%';
    mainContainer.style.setProperty('width', '95%', 'important');
    mainContainer.style.setProperty('max-width', '95%', 'important');
    mainWrapper.style.width = '85%';
  } else {
    // Sidebar plegada → ocupar todo el espacio
    mainContent.style.width = '95%';
    mainContainer.style.setProperty('width', '100%', 'important');
    mainContainer.style.setProperty('max-width', '100%', 'important');
    mainWrapper.style.width = '100%';
  }
}

// Llamamos al cargar la página
eliminarAsideDerecho();
ajustarAnchosSegunSidebar();

// Función para extraer los ejercicios de un HTML
async function obtenerEjercicios(url) {
  const res = await fetch(url);
  const text = await res.text();

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = text;

  const divsEx = Array.from(tempDiv.querySelectorAll('div.ex')).filter(div => {
    return div.querySelector('div.solucion');
  });

  // Eliminamos h3 y div.solucion dentro de cada div
  divsEx.forEach(div => {
    const h3 = div.querySelector('h3');
    if (h3) h3.remove();
    const solucion = div.querySelector('div.solucion');
    if (solucion) solucion.remove();
  });

  return divsEx.map(div => div.innerHTML);
}

// Función para mostrar un ejercicio aleatorio
async function mostrarEjercicio() {
  const pagina = paginasEjercicios[Math.floor(Math.random() * paginasEjercicios.length)];
  const ejercicios = await obtenerEjercicios(pagina);

  if (ejercicios.length === 0) {
    contenedor.innerHTML = '<p>No se encontraron ejercicios en esta página.</p>';
    return;
  }

  const ejercicioAleatorio = ejercicios[Math.floor(Math.random() * ejercicios.length)];
  contenedor.innerHTML = `<div class="ex">${ejercicioAleatorio}</div>`;
  Prism.highlightAll();
}

// Evento del botón
boton.addEventListener('click', mostrarEjercicio);

// Observador de la sidebar para ajustar anchos y mostrar estado en consola
const sidebar = document.querySelector('.sidebar');
let lastState = null;

if (sidebar) {
  const observer = new MutationObserver(() => {
    const isActive = sidebar.classList.contains('active');
    const currentState = isActive ? 'desplegada' : 'plegada';

    if (currentState !== lastState) {
      console.log(`Sidebar ${currentState}`);
      lastState = currentState;
      ajustarAnchosSegunSidebar();
    }
  });

  observer.observe(sidebar, {
    attributes: true,
    attributeFilter: ['class']
  });

  // Estado inicial
  lastState = sidebar.classList.contains('active') ? 'desplegada' : 'plegada';
  console.log(`Sidebar ${lastState} (inicial)`);
}

