export function runJsEditor() {                                 // Abre el editor de js
  const editor = document.getElementById("editor");             // Rescato html de ruleta.html
  const preview = document.getElementById("preview");           // Rescato html de ruleta.html

  if (!editor || !preview) return;                              // Si no existen no se ejecuta nada

  function render() {                                           // Funcion de renderizar el editor
    const js = editor.innerText;                                // Obtiene el texto del editor

    const blob = new Blob([js], { type: "text/javascript" });   // Guarda el codigo js de manera temporal
    const blobURL = URL.createObjectURL(blob);                  // Se crea una url que apunta a ese archivo temporal

    preview.srcdoc = `<!DOCTYPE html>           
      <html>
        <body>
          <script src="${blobURL}"></script>
        </body>
      </html>`
    ;                 // srdoc reemplaza el contenido del iframe con un HTML
                      // Este HTML carga el script generado por el usuario. 
  }                   // El codigo js se ejecuta aisladamente sin afectar a lo de fuera.

  render();                                   // LLamo a la funcion para que se ejecute el codigo
  editor.addEventListener("input", render);   // Reejecuta cuando actualizo el codigo
}

export function setupThemeToggle(themeToggle, body) {               // Funcion del themetoggle
  if (!themeToggle) return;                                         // Si no existe termina 

  if (localStorage.getItem("theme") === "dark") {                   // Si el tema esta guardado en el localstorage 
    body.classList.add("dark-theme");                               // Lo pone
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';      // Cambia el icono a sol
  }

  themeToggle.addEventListener("click", () => {                     // Escucha el evento click en el boton de themetoggle
    body.classList.toggle("dark-theme");                            // Activa o desactiva el darktheme
    if (body.classList.contains("dark-theme")) {                    
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';    // Coloca el sol
      localStorage.setItem("theme", "dark");                        // Guarda el tema
    } else {
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';   // Coloca la luna
      localStorage.setItem("theme", "light");                       // Guarda el tema
    }
  });
}

export function setupExternalEditorButton() {                          // COnfigura el boton del editor
  const externalBtn = document.getElementById("external-window-btn");  // Rescato el html
  if (!externalBtn) {                                                  // Si no existe termina
    console.error("⚠️ No se encontró el botón external-window-btn");
    return;
  }
  externalBtn.addEventListener("click", () => {                        // Escucha el click
    window.open(                                                       // Abre una ventana
      "./components/editor/editor.html",                               // Con el html
      "VentanaEditor",                                                 // Si ya existe se reutiliza la ventana
      "width=1000,height=700,resizable=yes,scrollbars=yes"             // Estilos
    );
  });
}
