import { createAside } from './aside.js';
import { runJsEditor } from './navbar.js';

export function normalizeCodeBlocks(container = document) {               // Funcion con 2 parametros
  container.querySelectorAll('pre code').forEach(block => {               // Selecciona los html e itera sobre cada bloque encontrado
    let lines = block.textContent.split('\n');                            // Obtiene el texto del bloque y hace un array de lineas segun los saltos \n
    let minIndent = Math.min(                                             // Cantidad mínima de espacios al inicio de cada linea no vacia
      ...lines                                                            // Math.min busca el valor más pequeño del array  ...lines es el array descompuesto para pasarlo como lista de argumentos
        .filter(l => l.trim().length > 0)                                 // Filtra lineas que no esten vacias despues de quitar espacios                      
        .map(l => l.match(/^(\s*)/)[0].length)                            // Para cada linea calcula la identacion inicial 
    );
    block.textContent = lines.map(l => l.slice(minIndent)).join('\n');    // Actualiza el contenido del bloque, mapea las lineas y elimina el indent            
  });
}

export function executeScripts(container) {                                          // Funcion de ejecutar scripts con parametro
  container.querySelectorAll('script:not([type="module"])').forEach(oldScript => {   // Selecciona los elementos script que no tengan type module
    const newScript = document.createElement("script");                              // Para cada uno, crea otro script porque los scripts directamente con innerHTML no se ejecutan automaticamente
    newScript.textContent = oldScript.textContent;                                   // Copia el contenido del antiguo al nuevo
    document.body.appendChild(newScript);                                            // Mete el nuevo en el body
  });
}

export function extraerEjercicio(codigoCompleto, numero) {        // Funcion para detectar el bloque de ejercicio que quiero copiar
  const inicio = `console.log("%c===== Ejercicio ${numero}:`;     // Define inicio

  const idxInicio = codigoCompleto.indexOf(inicio);               // Busca el inicio dentro del string
  if (idxInicio === -1) return "";                                // Si no hay inicio no devuelve nada

  const resto = codigoCompleto.slice(idxInicio);                  // Corta el texto desde el inicio

  const finRegex = /\n\s*\n\s*\n/;                                // Detecta el fin que son 3 lineas vacias
  const match = resto.search(finRegex);                           // Busca y guarda el patron finRegex dentro de Resto

  const bloque = match !== -1 ? resto.slice(0, match) : resto;    // Si encuentra ese patron q es el final, corta, sino devuelve hasta el final del texto

  return bloque.trim();                                           // Quita espacios y saltos de línea al inicio y final
}

export function copyExButton() {                                               // Funcion para el boton de copiar script
  const h2Elements = document.querySelectorAll('.ex h2');                      // Selecciona los h2 que estan en un contenedor con clase ex

  h2Elements.forEach(h2 => {                                                   // Para cada uno
      if (h2.dataset.hasButton) return;                                        // Verifica si ya se añadio un boton para no duplicarlo
      h2.dataset.hasButton = true;                                             // Marca el h2 como q tiene boton

      const button = document.createElement('button');                         // Crea el button
      button.classList.add('btn-copiar-ejercicio');                            // Da clase
      button.style.width = '40px';                                             // Estilo
      button.style.transition = 'width 0.4s ease, background-color 0.3s ease'; // Estilo

      const icon = document.createElement('span');                             // Crea un span
      icon.classList.add('icon-copy');                                         // Da clase
      icon.innerHTML = `
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" height="18" viewBox="0 0 24 24" fill="none" 
          stroke="var(--text-color)" stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      `;                                                                       // Inserta un svg para representar el icono
      button.appendChild(icon);                                             // Meto el icon el button

      const text = document.createElement('span');                          // Creo span
      text.classList.add('text-hover');                                     // Da clase
      text.textContent = 'Copia el código!';                                // Inserto texto
      text.style.marginLeft = '8px';                                        // Estilo
      button.appendChild(text);                                             // Meto el texto en el boton

      button.addEventListener('mouseenter', () => {                         // Al pasar el raton por encima
          const fullWidth = icon.offsetWidth + 8 + text.offsetWidth + 24;   // Suma el ancho del texto y del icono en una variable
          button.style.width = fullWidth + 'px';                            // Aplico la variable al estilo del boton
      });

      button.addEventListener('mouseleave', () => {                         // Detecta la salida del raton de su campo
          button.style.width = '40px';                                      // El ancho vuelve a la normalidad
      });

      button.addEventListener('click', async () => {                                                // Escucha el click y ejecuta una funcion asíncrona
        const tituloEjercicio = h2.textContent.trim();                                              // Quita espacios al principio y final del contenido de h2 para definir cual es el titulo del ejercicio
        const codigoCompleto = await fetch('/js/ejercicios/ejercicios.js').then(r => r.text());     // Se pide el archivo ejercicio.js pero no se bloquea lap agina mientras lo obtiene porque es async. Text convierte el archivo en string
        const bloqueEjercicio = extraerEjercicio(codigoCompleto, tituloEjercicio.match(/\d+/)[0]);  // Detecta el bloque del ejercicio con tituloEjercicio en la variable codigoCompleto

        const limpiarScript = contenido => contenido                            // Funcion que limpia el contenido de script
          .replace(/"%c===== Ejercicio \d+: (.*?) ====="/g, '"$1"')                  // Busca el bloque y lo sustituye por el titulo limpio
          .replace(/console\.log\(\s*"(.*?)".*?\);/, 'console.log("$1");')           // Detecta un console.log con texto y parametros, y lo sustituye por otro con el texto capturado
          .replace(/if\s*\([^)]*container[^)]*\)\s*\{(?:[^{}]|\{[^{}]*\})*\}/gs, '') // Elimina bloques if relacionados con "container"
          .replace(/if\s*\([^)]*container[^)]*\)\s*\{[\s\S]*?\n\}/g, '')             // Variante para eliminar if con "container"
          .replace(/^\s*.*document\.createElement.*$/gm, '')                         // Elimina líneas con document.createElement
          .replace(/const\s+\w+\s*=\s*document\.getElementById\(.*?\);?/g, '')       // Elimina const x = document.getElementById(...)
          .replace(/^\s*.*innerText\s*=.*?;\s*$/gm, '')                              // Elimina asignaciones a innerText
          .replace(/^\s*.*appendChild.*$/gm, '')                                     // Elimina líneas con appendChild
          .replace(/^\s*.*classList\.add.*$/gm, '')                                  // Elimina líneas con classList.add
          .replace(/^\s*.*textContent.*$/gm, '')                                     // Elimina líneas que modifican textContent
          .replace(/^\s*.*style\..*$/gm, '')                                         // Elimina modificaciones de estilos inline
          .replace(/^\s*\w+\.innerHTML\s*=\s*`[\s\S]*?`;/gm, '')                     // Elimina líneas donde se usa innerHTML
          .replace(/^\s*.*container.*$/gm, '')                                       // Elimina líneas que contengan "container"
          .replace(/^\s*.*contenedor.*$/gm, '')                                      // Elimina líneas que contengan "contenedor"
          .replace(/document\.getElementById\(.*?\);?/g, '')                         // Elimina llamadas a getElementById
          .replace(/\w+\.forEach\s*\([^)]*\)\s*=>\s*\{\s*(?:[\r\n\s]*)\s*\}/g, '')   // Elimina forEach con cuerpo vacío
          .replace(/{\s*}/g, '')                                                     // Elimina bloques "{}" vacíos
          .replace(/\n{2,}/g, '\n')                                                  // Reduce saltos de línea múltiples a uno solo
          .replace(/^\s*\n/gm, '')                                                   // Elimina líneas en blanco con espacios
          .trim();                                                                   // Quita espacios al inicio y final


        const textoACopiar = limpiarScript(bloqueEjercicio);      // Guarda el resultado de eejcutar la funcion sobre el bloque del ejercicio
        navigator.clipboard.writeText(textoACopiar).then(() => {  // Copia a portapapeles y devuelve una promesa con then
            text.textContent = 'Código Copiado';                  // Una vez completada la copia se cambia el contenido del boton
            button.classList.add('copiado');                      // Se le cambia la clase
            setTimeout(() => {                                    // Pasaddo un cierto tiempo
                text.textContent = 'Copia el código!';            // Vuelve el texto
                button.classList.remove('copiado');               // Vuelve la clase
            }, 2000);
        });
      });
      h2.appendChild(button);                                    // Meto el boton en el h2
  });
}

export function copyCodeButton() {                                               // Funcion de copiar codigo a cada bloque de que tenga codigo
  const codeBlocks = document.querySelectorAll("pre code.language-javascript");  // Selecciona los divs con la clase correspondiente

  codeBlocks.forEach(codeBlock => {                        // Por cada bloque detectado

      if (codeBlock.dataset.hasCopyBtn) return;            // Si el bloque ya tiene un boton, salta al siguiente
      codeBlock.dataset.hasCopyBtn = true;                 // Sino lo marca como true

      const copyBtn = document.createElement("button");    // Rescato el html
      copyBtn.textContent = "Copy";                        // Mete texto
      copyBtn.style.position = "absolute";                 // Estilos
      copyBtn.style.top = "5px";
      copyBtn.style.right = "5px";
      copyBtn.style.background = "var(--code-block)";
      copyBtn.style.border = "none";
      copyBtn.style.padding = "4px 10px";
      copyBtn.style.borderRadius = "4px";
      copyBtn.style.cursor = "pointer";
      copyBtn.style.zIndex = "10";
      copyBtn.style.color = "#b4b8e6";

      const pre = codeBlock.parentElement;                 // Selecciona el pre que es padre de code
      pre.style.position = "relative";                     // Le pone relative

      pre.appendChild(copyBtn);                            // Mete el boton en el pre

      copyBtn.addEventListener("click", () => {            // Escucha el evento click
        const code = codeBlock.innerText;                  // Guarda el codigo del bloque en una variable
        navigator.clipboard.writeText(code)                // Lo copia al portapapeles
          .then(() => {
              const originalText = copyBtn.textContent;    // Guarda el texto original del boton
              copyBtn.textContent = "Copied!";             // Lo iguala a Copied
              setTimeout(() => {                           // Fija un temporizador
                  copyBtn.textContent = originalText;      // Para que vuelva al original
              }, 2000);
          })
          .catch(err => {                                  // Si hay error escribe temporalmente error en el boton
              copyBtn.textContent = "Error";           
              setTimeout(() => {                           // Fija temporizador para que vuelva al original
                  copyBtn.textContent = "Copiar";
              }, 2000);
          });
      });
  });
}

export function loadPage(url, main) {          // Funcion de cargar pagina con parametros
  return new Promise((resolve, reject) => {    // Devuelve una promesa que puede llamar al resolver si todo sale correctamente o al reject si hay un error
    fetch(url)                                 // Solicita el contenido html
      .then(res => res.text())                 // Convierte la respuesta en otro html
      .then(html => {                          
        main.innerHTML = html;                 // Inserta el contenido html en el main
        window.scrollTo({                      // Cada vez que se carga una pagina se resetea el scroll
          top: 0,
          left: 0,
          behavior: "instant"
        });
        window.currentPage = url;              // Guarda la pagina actual para otras funciones
        normalizeCodeBlocks(main);             // Ajusta indentacion de bloques
        executeScripts(main);                  // Ejecuta los scripts q no sean modulos
        createAside();                         // Crea aside
        Prism.highlightAll();                  // Da colores al codigo
        runJsEditor();                         // Inicia el editor
        copyCodeButton();                      // Agrega botones
        copyExButton();

        const moduleScripts = main.querySelectorAll('script[type="module"]');   // Selecciona los scripts con type module
        const modulePromises = Array.from(moduleScripts).map(async script => {  // Convierte cada script en una funcion async que devuelve una promesa aunque no se retorne nada explicito 
          try {
            const mod = await import(script.src);                  // El import devuelve una promesa que carga el modulo. Await suspende la funcion hasta que el módulo se cargue
            if (mod.init) mod.init();                              // Algunos modulos exportan l a funcion init, si existe la ejecutas
          } catch (err) {
            return console.error("Error cargando módulo:", err);   // Capturaerror de impor o init
          }
        });

        Promise.all(modulePromises)                           // Espera a que las funciones async terminen
          .then(() => resolve())                              // Nunca rechaza porque esun trycatch, promise.all no falla, hago directamente resolve()
          .catch(err => {
            console.error("Error cargando módulos:", err);    // Capturo error
            resolve();                                        // Resuelvo
          });
      })
      .catch(err => {
        console.error("Error cargando página:", err);         // Capturo error
        reject(err);                                          // Rechazo
      });
  });
}

export function createFloatingNav(main) { // Función que crea un div flotante para pasar de página
  const navDiv = document.createElement('div'); // Crea el div
  navDiv.style.position = 'fixed';
  navDiv.style.bottom = '30px';
  navDiv.style.left = '50%';
  navDiv.style.transform = 'translateX(-50%)';
  navDiv.style.display = 'flex';
  navDiv.style.alignItems = 'center';
  navDiv.style.gap = '20px';
  navDiv.style.zIndex = '1000';
  navDiv.style.background = 'var(--bg2-color)';
  navDiv.style.border = '2px solid var(--text-color)';
  navDiv.style.borderRadius = '10px';
  navDiv.style.padding = '2px 10px';

  const prevBtn = document.createElement('button');
  prevBtn.textContent = '⬅';
  prevBtn.style.fontSize = '24px';
  prevBtn.style.cursor = 'pointer';
  prevBtn.style.border = 'none';
  prevBtn.style.background = 'transparent';
  prevBtn.style.color = 'var(--text-color)';

  const pageNumber = document.createElement('span');
  pageNumber.style.fontWeight = 'bold';
  pageNumber.style.fontSize = '16px';

  const nextBtn = document.createElement('button');
  nextBtn.textContent = '➡';
  nextBtn.style.fontSize = '24px';
  nextBtn.style.cursor = 'pointer';
  nextBtn.style.border = 'none';
  nextBtn.style.background = 'transparent';
  nextBtn.style.color = 'var(--text-color)';

  navDiv.append(prevBtn, pageNumber, nextBtn);
  main.parentElement.appendChild(navDiv);

  const pages = [
    '/pages/introduccion.html',
    '/pages/datos.html',
    '/pages/objetos.html',
    '/pages/arrays.html',
    '/pages/condicionales.html',
    '/pages/bucles.html',
    '/pages/funciones.html',
    '/pages/ejercicios.html',
    '/pages/dom.html',
    '/pages/eventos.html',
    '/pages/date.html',
    '/pages/crud.html',
    '/pages/ejerciciosdom.html',
    '/pages/rockpage.html',
    '/pages/vite.html',
    '/pages/practicaguiada.html',
    '/pages/es6.html',
    '/pages/asincronia.html',
    '/pages/ejerciciosasincronia.html',
    '/pages/jscomponents.html',
    '/pages/navystorage.html',
    '/pages/ruleta.html'
  ];

  let currentIndex = 0;

  function updatePageNumber() {
    pageNumber.textContent = `${currentIndex + 1} / ${pages.length}`;
  }

  function goToPage(index) {
    if (index < 0) index = 0;
    if (index >= pages.length) index = pages.length - 1;
    currentIndex = index;
    loadPage(pages[currentIndex], main).then(() => updatePageNumber());
  }

  prevBtn.addEventListener('click', () => goToPage(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToPage(currentIndex + 1));

  function normalize(path) {
    let p = path.toLowerCase();
    if (!p.endsWith('.html')) p += '.html';
    return p;
  }

  function syncWithCurrentPage() {
    if (!window.currentPage) return;
    const normalized = normalize(window.currentPage);
    const index = pages.findIndex(p => p.toLowerCase() === normalized);
    if (index !== -1 && index !== currentIndex) {
      currentIndex = index;
      updatePageNumber();
    }
  }

  const observer = new MutationObserver(syncWithCurrentPage);
  observer.observe(main, { childList: true, subtree: true });

  syncWithCurrentPage();
  updatePageNumber();
}





