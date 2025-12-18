// ruleta.js
const paginasEjercicios = [                                                   // Guardo en una constante las paginas a las que estoy llamando
  './pages/ejercicios.html',
  './pages/ejerciciosDOM.html',
  './pages/ejerciciosasincronia.html',
];

const boton = document.getElementById('girarRuleta');                         // Rescato el boton html
const contenedor = document.getElementById('ejercicioSeleccionado');          // Rescato el div html



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

  const h1 = document.querySelector('h1');                           // Rescata el html
  if (h1) {                                                          // Comprueba q exista
    let tipo = '';                                                   // Inicializa variable
    if (pagina.includes('DOM')) tipo = ' - DOM';                     // Si la pagina incluye la palabra DOM, le pone tipo dom al ejercicio
    else if (pagina.includes('asincronia')) tipo = ' - Asincronía';  // Lo mismo con sincronia
    else tipo = ' - Base';                                           // y ejercicio base
    h1.textContent = `Ejercicio${tipo}`;                             // Mete el tipo dinamicamente en el h1
  }
}
boton.addEventListener('click', mostrarEjercicio);                   // Llamo al evento del boton al clickar

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

