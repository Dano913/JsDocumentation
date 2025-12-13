// ruleta.js
const paginasEjercicios = [                                                   // Guardo en una constante las paginas a las que estoy llamando
  './pages/ejercicios.html',
  './pages/ejerciciosDOM.html',
  './pages/ejerciciosasincronia.html',
];

const boton = document.getElementById('girarRuleta');                         // Rescato el boton html
const contenedor = document.getElementById('ejercicioSeleccionado');          // Rescato el div html

// Eliminar aside derecho solo en esta página
function eliminarAsideDerecho() {                                             // Funcion de eliminar aside porque no la necesito en la ruleta
  const asideDerecho = document.getElementById('aside');                      // Rescato el html
  if (asideDerecho) {                                                         // Compruebo que existe
    asideDerecho.remove();                                                    // Lo elimino
  }
}

function ajustarAnchosSegunSidebar() {                                        // Función de ajustar los anchos segun el despliegue de la sidebar
  const sidebar = document.querySelector('.sidebar');                         // Rescato html
  const mainContent = document.querySelector('.content');
  const mainContainer = document.querySelector('.container');
  const mainWrapper = document.querySelector('.page-wrapper');

  if (!sidebar || !mainContent || !mainContainer || !mainWrapper) return;     // Comprueba si cualquiera de los elementos no existe para cortar la ejecución

  const isSidebarDesplegada = sidebar.classList.contains('active');           // Guarda en variable el hecho de que existe la clase active

  if (isSidebarDesplegada) {                                                  // Estilos para sidebar desplegada
    // Sidebar desplegada → dejamos espacio
    mainContent.style.width = '100%';
    mainContainer.style.setProperty('width', '95%', 'important');
    mainContainer.style.setProperty('max-width', '95%', 'important');
    mainWrapper.style.width = '85%';
  } else {                                                                    // Estilos para sidebar plegada
    mainContent.style.width = '95%';
    mainContainer.style.setProperty('width', '100%', 'important');
    mainContainer.style.setProperty('max-width', '100%', 'important');
    mainWrapper.style.width = '100%';
  }
}
eliminarAsideDerecho();           // Llamamos a las funciones cuando la pagina se carga
ajustarAnchosSegunSidebar();

async function obtenerEjercicios(url) {                   // Función para extraer los ejercicios de un HTML
  const res = await fetch(url);                           // Obtiene el html
  const text = await res.text();                                     

  const tempDiv = document.createElement('div');          // Crea elemento temporal
  tempDiv.innerHTML = text;                               // Coloca el texto

  const divsEx = Array.from(tempDiv.querySelectorAll('div.ex')).filter(div => {  
    return div.querySelector('div.solucion');             // Selecciona los divs en tempDiv con clase ex y saca los que tengan un div con clase solución
  });

  divsEx.forEach(div => {                                 
    const h3 = div.querySelector('h3');                   // De cada div seleccionado
    if (h3) h3.remove();                                  // Guarda los h3 y los elimina
    div.querySelectorAll('div.solucion').forEach(s => s.remove());
  });

  return divsEx.map(div => div.innerHTML);                // Devuelve los divs con map
}

async function mostrarEjercicio() {                                                         // Función para mostrar un ejercicio aleatorio
  const pagina = paginasEjercicios[Math.floor(Math.random() * paginasEjercicios.length)];   // Saca un numero decimal entre 0 y 1, multiplica por el numero de paginas y redondea hacia abajo. En este caso siempre selecciona la misma porque solo hay una 
  const ejercicios = await obtenerEjercicios(pagina);                                       // Guarda en una variable la url de la pagina obtenida

  if (ejercicios.length === 0) {
    contenedor.innerHTML = '<p>No se encontraron ejercicios en esta página.</p>';
    return;
  }

  const ejercicioAleatorio = ejercicios[Math.floor(Math.random() * ejercicios.length)];     // Hago lo mismo para seleccionar un ejercicio al azar
  contenedor.innerHTML = `<div class="ex">${ejercicioAleatorio}</div>`;                     // Inserto en el html
  Prism.highlightAll();                                                                     // Meto colores a los codigos de javascript
}
boton.addEventListener('click', mostrarEjercicio);                                           // Llamo al evento del boton al clickar

const sidebar = document.querySelector('.sidebar');               // Rescato html
let lastState = null;                                             // Guardo el ultimo estado conocido de la sidebar

if (sidebar) {                                                    // Compruebo q exista
  const observer = new MutationObserver(() => {                   // Observo cambios en el dom
    const isActive = sidebar.classList.contains('active');        // Guardo variable cuando la clase es activa
    const currentState = isActive ? 'desplegada' : 'plegada';     // Indico desplegada

    if (currentState !== lastState) {      // Si el estado actual no es el ultimo
      lastState = currentState;            // Iguala el ultimo estado al actual 
      ajustarAnchosSegunSidebar();         // Ejecuta la funcion de ajustar anchos
    }
  });

  observer.observe(sidebar, {       // Le dice al mutationObserver que elemento hay que observar
    attributes: true,               // Que tipo de cambio detectar
    attributeFilter: ['class']      // Que atributo concreto vigilar
  });
}

