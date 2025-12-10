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

export function copyExButton() {                                                     // Funcion para el boton de copiar script
  const h2Elements = document.querySelectorAll('.ex h2');                            // Selecciona los h2 que estan en un contenedor con clase ex

  h2Elements.forEach(h2 => {                                                         // Para cada uno
      if (h2.dataset.hasButton) return;                                              // Verifica si ya se añadio un boton para no duplicarlo
      h2.dataset.hasButton = true;                                                   // Marca el h2 como q tiene boton

      const button = document.createElement('button');                               // Crea el button
      button.classList.add('btn-copiar-ejercicio');                                  // Da clase
      button.style.width = '40px';                                                   // Estilo
      button.style.transition = 'width 0.4s ease, background-color 0.3s ease';       // Estilo

      const icon = document.createElement('span');                                   // Crea un span
      icon.classList.add('icon-copy');                                               // Da clase
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
      `;                                                                             // Inserta un svg para representar el icono
      button.appendChild(icon);                                                      // Meto el icon el button

      const text = document.createElement('span');                                   // Creo span
      text.classList.add('text-hover');                                              // Da clase
      text.textContent = 'Copia el código!';                                         // Inserto texto
      text.style.marginLeft = '8px';                                                 // Estilo
      button.appendChild(text);                                                      // Meto el texto en el boton

      button.addEventListener('mouseenter', () => {                                  // Al pasar el raton por encima
          const fullWidth = icon.offsetWidth + 8 + text.offsetWidth + 24;            // Suma el ancho del texto y del icono en una variable
          button.style.width = fullWidth + 'px';                                     // Aplico la variable al estilo del boton
      });

      button.addEventListener('mouseleave', () => {                                  // Detecta la salida del raton de su campo
          button.style.width = '40px';                                               // El ancho vuelve a la normalidad
      });

      button.addEventListener('click', () => {                                       // Escucha el click
          const container = h2.closest('.ex');                                       // Guarda en variable el contenedor mas cercano al h2 seleccionado
          if (!container) return;                                                    // Si no hay container termina

          const script = container.querySelector('script');                          // Guarda en variable el primer script que encuentra en el contenedor ex
          if (!script) return;                                                       // Si no hay script termina

          const limpiarScript = contenido => contenido                               // Funcion que limpia el contenido de script
            .replace(/if\s*\([^)]*container[^)]*\)\s*\{(?:[^{}]|\{[^{}]*\})*\}/gs, '') // Elimina bloques if relacionados con "container"
            .replace(/if\s*\([^)]*container[^)]*\)\s*\{[\s\S]*?\n\}/g, '')             // Variante para eliminar if con "container"
            .replace(/^\s*.*document\.createElement.*$/gm, '')                         // Elimina líneas con document.createElement
            .replace(/const\s+\w+\s*=\s*document\.getElementById\(.*?\);?/g, '')       // Elimina const x = document.getElementById(...)
            .replace(/^\s*.*innerText\s*=.*?;\s*$/gm, '')                              // Elimina asignaciones a innerText
            .replace(/^\s*.*appendChild.*$/gm, '')                                     // Elimina líneas con appendChild
            .replace(/^\s*.*classList\.add.*$/gm, '')                                  // Elimina líneas con classList.add
            .replace(/^\s*.*textContent.*$/gm, '')                                     // Elimina líneas que modifican textContent
            .replace(/^\s*.*style\..*$/gm, '')                                         // Elimina modificaciones de estilos inline
            .replace(/^\s*.*innerHTML.*$/gm, '')                                       // Elimina líneas donde se usa innerHTML
            .replace(/^\s*.*container.*$/gm, '')                                       // Elimina líneas que contengan "container"
            .replace(/^\s*.*contenedor.*$/gm, '')                                      // Elimina líneas que contengan "contenedor"
            .replace(/document\.getElementById\(.*?\);?/g, '')                         // Elimina llamadas a getElementById
            .replace(/\w+\.forEach\s*\([^)]*\)\s*=>\s*\{\s*(?:[\r\n\s]*)\s*\}/g, '')   // Elimina forEach con cuerpo vacío
            .replace(/{\s*}/g, '')                                                     // Elimina bloques "{}" vacíos
            .replace(/\n{2,}/g, '\n')                                                  // Reduce saltos de línea múltiples a uno solo
            .replace(/^\s*\n/gm, '')                                                   // Elimina líneas en blanco con espacios
            .trim();                                                                   // Quita espacios al inicio y final


          const textoACopiar = script.src                                          // Guarda el texto a copiar accediendo al atributo src del script
              ? fetch(script.src).then(res => res.text()).then(limpiarScript)      // Si existe hace una peticion fetch para descargar contenido, conviertela respuesta en texto y lo pasa a la funcion para que lo limpie
              : limpiarScript(script.textContent);                                 // Sino se limpia el contenido directamente porque ya esta en la pagina 

          Promise.resolve(textoACopiar).then(t => {              // Debido a que textocopiar puede ser string si el script es inline y promesa si el script externo y necesitamos hacer fetch, promise.resolver hara que se trate como una promesa si o si
              navigator.clipboard.writeText(t).then(() => {      // API del navegador para acceder al portapapeles y copia el contenido
                  text.textContent = 'Código Copiado';           // Se inserta el texto
                  button.classList.add('copiado');               // Se le atribuye la clase copiado al boton

                  setTimeout(() => {                             // Despues de 2000 milisegundas
                      text.textContent = 'Copia el código!';     // Muestra el texto original
                      button.classList.remove('copiado');        // Le quita la clase copiado
                  }, 2000);
              });
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
      copyBtn.style.background = "var(--bg2-color)";
      copyBtn.style.border = "none";
      copyBtn.style.padding = "4px 10px";
      copyBtn.style.borderRadius = "4px";
      copyBtn.style.cursor = "pointer";
      copyBtn.style.zIndex = "10";
      copyBtn.style.color = "var(--text-color)";

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
