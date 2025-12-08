// ruleta.js
const paginasEjercicios = [
  './pages/ejercicios.html',
  './pages/ejerciciosDOM.html',
  './pages/ejerciciosasincronia.html'
];

const boton = document.getElementById('girarRuleta');
const contenedor = document.getElementById('ejercicioSeleccionado');

// Ocultar aside derecho solo cuando se carga la ruleta
function ocultarAsideDerecho() {
  const asideDerecho = document.getElementById('aside');
  const mainContent = document.querySelector('.content');
  const mainContainer = document.querySelector('.container');
  const mainWrapper = document.querySelector('.page-wrapper');

  if (asideDerecho) {
    asideDerecho.style.width = '5%';
    asideDerecho.style.border = '3px solid blue';
  }
  if (mainContent) {
    mainContent.style.width = '100%'; 
    mainContent.style.border = '3px solid blue';
  }

  if (mainContainer) {
    mainContainer.style.setProperty('width', '2000px', 'important');
    mainContainer.style.border = '3px solid red';
  }
  mainWrapper.style.width = '100%';
  mainWrapper.style.border = '3px solid green';
}

// Llamamos la función al cargar ruleta
ocultarAsideDerecho();

// Función para extraer los ejercicios de un HTML
async function obtenerEjercicios(url) {
  const res = await fetch(url);
  const text = await res.text();

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = text;

  // Seleccionamos solo los div con class="ex"
  const divsEx = Array.from(tempDiv.querySelectorAll('div.ex'));

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

const sidebar = document.querySelector('.sidebar');
const pageWrapper = document.querySelector('.page-wrapper');

let lastState = null;

if (sidebar) {
  const observer = new MutationObserver(() => {
    const isActive = sidebar.classList.contains('active');
    const currentState = isActive ? 'desplegada' : 'plegada';

    if (currentState !== lastState) {
      console.log(`Sidebar ${currentState}`);
      lastState = currentState;
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




