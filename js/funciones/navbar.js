export function runJsEditor() {
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");

  if (!editor || !preview) return;

  function render() {
    const js = editor.innerText;
    const iframeWindow = preview.contentWindow;

    const blob = new Blob([js], { type: "text/javascript" });
    const blobURL = URL.createObjectURL(blob);

    preview.srcdoc = `<!DOCTYPE html>
      <html>
        <body>
          <script src="${blobURL}"></script>
        </body>
      </html>`
    ;
  }

  render();
  editor.addEventListener("input", render);
}

export function setupThemeToggle(themeToggle, body) {
  if (!themeToggle) return;

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

export function setupExternalEditorButton() {
  const externalBtn = document.getElementById("external-window-btn");
  if (!externalBtn) {
    console.error("⚠️ No se encontró el botón external-window-btn");
    return;
  }
  externalBtn.addEventListener("click", () => {
    window.open(
      "./components/editor/editor.html",
      "VentanaEditor",
      "width=1000,height=700,resizable=yes,scrollbars=yes"
    );
  });
}
