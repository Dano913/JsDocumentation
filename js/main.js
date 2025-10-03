document.addEventListener("DOMContentLoaded", () => { 
 
  function agregarBotonesCopiar() {
    const codeBlocks = document.querySelectorAll("pre code.language-javascript");

    codeBlocks.forEach(codeBlock => {
        // Evitar duplicados
        if (codeBlock.dataset.hasCopyBtn) return;
        codeBlock.dataset.hasCopyBtn = true;

        const copyBtn = document.createElement("button");
        copyBtn.textContent = "Copy";
        copyBtn.style.position = "absolute";
        copyBtn.style.top = "5px";
        copyBtn.style.right = "5px";
        copyBtn.style.background = "var(--bg2-color)";
        copyBtn.style.border = "none";
        copyBtn.style.padding = "4px 10px";
        copyBtn.style.borderRadius = "4px";
        copyBtn.style.cursor = "pointer";
        copyBtn.style.zIndex = "10";
        copyBtn.style.color = "var(--text-color)";

        const pre = codeBlock.parentElement;
        pre.style.position = "relative";

        pre.appendChild(copyBtn);

        copyBtn.addEventListener("click", () => {
            const code = codeBlock.innerText;
            navigator.clipboard.writeText(code)
                .then(() => {
                    // Cambiar texto a "Copied!" temporalmente
                    const originalText = copyBtn.textContent;
                    copyBtn.textContent = "Copied!";
                    setTimeout(() => {
                        copyBtn.textContent = originalText;
                    }, 2000); // vuelve a "Copiar" después de 2 segundos
                })
                .catch(err => {
                    copyBtn.textContent = "Error";
                    setTimeout(() => {
                        copyBtn.textContent = "Copiar";
                    }, 2000);
                });
        });
    });
}


  // Función para generar el TOC dinámico
  function generateTOC() {
  const content = document.querySelector('main.content');
  const toc = document.getElementById('toc');
  if (!toc) return; // Si no existe el TOC en la página, salir
  toc.innerHTML = ''; // Limpiar TOC anterior

  const title = document.createElement('h3');
  title.textContent = 'On this page';
  title.style.color = '#aad1b1'; 
  toc.appendChild(title);

  const ul = document.createElement('ul');

  const headers = content.querySelectorAll('h2');
  headers.forEach(header => {
    if (!header.id) {
      header.id = header.textContent.toLowerCase().replace(/\s+/g, '-');
    }

    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${header.id}`;
    link.textContent = header.textContent;

    li.appendChild(link);
    ul.appendChild(li);
  });

  toc.appendChild(ul);

  // 🔹 Añadir comportamiento de "active" a los links del TOC
  const tocLinks = toc.querySelectorAll('a');
  tocLinks.forEach(link => {
    link.addEventListener('click', e => {
      // Quitar "active" de todos
      tocLinks.forEach(l => l.classList.remove('active'));
      // Poner "active" en el clicado
      link.classList.add('active');
    });
  });
}


  // 🔹 Cargar el sidebar y navbar
  fetch('/nav/sidebar-nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('nav-container').innerHTML = data;

      const menuBtn = document.getElementById('menu-toggle');
      const sidebar = document.getElementById('sidebar');
      const pageWrapper = document.querySelector('.page-wrapper');
      const container = document.querySelector('.container');
      const toc = document.getElementById('toc');

      function ajustarContainerYToc() {
      const ancho = window.innerWidth;
      let maxWidth = 80;

      if (ancho > 800 && ancho < 1800) {
        const pasos = Math.floor((1800 - ancho) / 100);
        maxWidth = 80 - pasos * 0.5;

        if (toc) {
          toc.style.display = 'block';
          toc.style.opacity = '1';
        }
      } else if (ancho <= 800) {
        maxWidth = 100;
        if (toc) {
          toc.style.opacity = '0';
          toc.style.display = 'none';
        }
      }

      if (maxWidth < 54) maxWidth = 54;
      container.style.maxWidth = maxWidth + '%';
    }

    ajustarContainerYToc();

    // Ejecutar al redimensionar la ventana
    window.addEventListener('resize', ajustarContainerYToc);


    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active'); // muestra/oculta sidebar

      if (sidebar.classList.contains('active')) {
        pageWrapper.style.marginLeft = '250px'; // empuja contenido
      } else {
        pageWrapper.style.marginLeft = '0'; // vuelve a la posición inicial
      }
    });

    // Capturar enlaces del sidebar
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        // 🔹 Quitar clase active a todos
        sidebarLinks.forEach(l => l.classList.remove('active'));
        // 🔹 Agregar clase active al enlace actual
        link.classList.add('active');

        const href = link.getAttribute('href');

        if (href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          fetch(href)
            .then(res => res.text())
            .then(html => {
              const main = document.querySelector('main.content');
              main.innerHTML = html;

              // Ejecutar scripts de la página cargada dinámicamente
              main.querySelectorAll('script').forEach(oldScript => {
                const newScript = document.createElement("script");
                if (oldScript.src) newScript.src = oldScript.src;
                else newScript.textContent = oldScript.textContent;
                document.body.appendChild(newScript);
                setTimeout(() => document.body.removeChild(newScript), 50);
              });
              
              document.querySelectorAll('pre code').forEach(block => {
                let lines = block.textContent.split('\n');
                let minIndent = Math.min(
                  ...lines.filter(l => l.trim().length > 0).map(l => l.match(/^(\s*)/)[0].length)
                );
                block.textContent = lines.map(l => l.slice(minIndent)).join('\n');
              });

              // 🔹 Generar TOC después de cargar la página
              generateTOC();
              Prism.highlightAll();
              inicializarEditorJS();
              agregarBotonesCopiar();
            })
            .catch(err => console.error("Error cargando página:", err));
        }
      });
    });


    // Cargar introduccion.html al inicio
    fetch('/pages/introduccion.html')
      .then(res => res.text())
      .then(html => {
        const main = document.querySelector('main.content');
        main.innerHTML = html;

        main.querySelectorAll('script').forEach(oldScript => {
          const newScript = document.createElement("script");
          if (oldScript.src) newScript.src = oldScript.src;
          else newScript.textContent = oldScript.textContent;
          document.body.appendChild(newScript);
          setTimeout(() => document.body.removeChild(newScript), 50);
        });

        document.querySelectorAll('pre code').forEach(block => {
          let lines = block.textContent.split('\n');
          let minIndent = Math.min(
            ...lines.filter(l => l.trim().length > 0).map(l => l.match(/^(\s*)/)[0].length)
          );
          block.textContent = lines.map(l => l.slice(minIndent)).join('\n');
        });

        // 🔹 Generar TOC al cargar la página inicial
        generateTOC();
        Prism.highlightAll();
        inicializarEditorJS();
        agregarBotonesCopiar();
      })
      .catch(err => console.error("Error cargando página inicial:", err));

    // Inicializar toggle de tema
    if (themeToggle) {
      if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      }

      themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        if (body.classList.contains("dark-theme")) {
          themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
          localStorage.setItem("theme", "dark");
        } else {
          themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
          localStorage.setItem("theme", "light");
        }
      });
    }
  })
  .catch(err => console.error("Error cargando sidebar:", err));
});


function inicializarEditorJS() {
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");

  if (!editor || !preview) return; // no estamos en funciones.html

  function render() {
  const js = editor.innerText;
  const iframeWindow = preview.contentWindow;

  // Crear un blob con el código JS
  const blob = new Blob([js], { type: "text/javascript" });
  const blobURL = URL.createObjectURL(blob);

  // Inyectar un HTML base con el script apuntando al blob
  preview.srcdoc = `<!DOCTYPE html>
    <html>
      <body>
        <script src="${blobURL}"></script>
      </body>
    </html>`;
  }


  render();
  editor.addEventListener("input", render);
}



