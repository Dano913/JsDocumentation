import { createAside } from './aside.js';
import { runJsEditor } from './navbar.js';

export function normalizeCodeBlocks(container = document) {
  container.querySelectorAll('pre code').forEach(block => {
    let lines = block.textContent.split('\n');
    let minIndent = Math.min(
      ...lines
        .filter(l => l.trim().length > 0)
        .map(l => l.match(/^(\s*)/)[0].length)
    );
    block.textContent = lines.map(l => l.slice(minIndent)).join('\n');
  });
}

export function executeScripts(container) {
  container.querySelectorAll('script').forEach(oldScript => {
    const newScript = document.createElement("script");
    if (oldScript.src) newScript.src = oldScript.src;
    else newScript.textContent = oldScript.textContent;

    document.body.appendChild(newScript);

    setTimeout(() => document.body.removeChild(newScript), 50);
  });
}

export function copyExButton() { 
  const h2Elements = document.querySelectorAll('.ex h2');

  h2Elements.forEach(h2 => {
      if (h2.dataset.hasButton) return;
      h2.dataset.hasButton = true;

      const button = document.createElement('button');
      button.classList.add('btn-copiar-ejercicio');
      button.style.width = '40px';
      button.style.transition = 'width 0.4s ease, background-color 0.3s ease';

      const icon = document.createElement('span');
      icon.classList.add('icon-copy');
      icon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      `;
      button.appendChild(icon);

      const text = document.createElement('span');
      text.classList.add('text-hover');
      text.textContent = 'Copia el código!';
      text.style.marginLeft = '8px';
      button.appendChild(text);

      button.addEventListener('mouseenter', () => {
          const fullWidth = icon.offsetWidth + 8 + text.offsetWidth + 24;
          button.style.width = fullWidth + 'px';
      });

      button.addEventListener('mouseleave', () => {
          button.style.width = '40px';
      });

      button.addEventListener('click', () => {
          const container = h2.closest('.ex');
          if (!container) return;

          const script = container.querySelector('script');
          if (!script) return;

          const limpiarScript = contenido => contenido
            .replace(/if\s*\([^)]*container[^)]*\)\s*\{(?:[^{}]|\{[^{}]*\})*\}/gs, '')
            .replace(/if\s*\([^)]*container[^)]*\)\s*\{[\s\S]*?\n\}/g, '')
        .replace(/^\s*.*document\.createElement.*$/gm, '')
        .replace(/^\s*.*appendChild.*$/gm, '')
        .replace(/^\s*.*classList\.add.*$/gm, '')
        .replace(/^\s*.*textContent.*$/gm, '')
        .replace(/^\s*.*style\..*$/gm, '')
        .replace(/^\s*.*innerHTML.*$/gm, '')
        .replace(/^\s*.*container.*$/gm, '')
        .replace(/^\s*.*contenedor.*$/gm, '')
        .replace(/document\.getElementById\(.*?\);?/g, '')
        .replace(/\w+\.forEach\s*\([^)]*\)\s*=>\s*\{\s*(?:[\r\n\s]*)\s*\}/g, '')
        .replace(/{\s*}/g, '')
        .replace(/\n{2,}/g, '\n')
        .replace(/^\s*\n/gm, '')
        .trim();

          const textoACopiar = script.src 
              ? fetch(script.src).then(res => res.text()).then(limpiarScript)
              : limpiarScript(script.textContent);

          Promise.resolve(textoACopiar).then(t => {
              navigator.clipboard.writeText(t).then(() => {
                  text.textContent = 'Código Copiado';
                  button.classList.add('copiado');

                  setTimeout(() => {
                      text.textContent = 'Copia el código!';
                      button.classList.remove('copiado');
                  }, 2000);
              });
          });
      });

      h2.appendChild(button);
  });
}

export function copyCodeButton() {
  const codeBlocks = document.querySelectorAll("pre code.language-javascript");

  codeBlocks.forEach(codeBlock => {

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
              const originalText = copyBtn.textContent;
              copyBtn.textContent = "Copied!";
              setTimeout(() => {
                  copyBtn.textContent = originalText;
              }, 2000);
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

export function loadPage(url, main) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      main.innerHTML = html;
      normalizeCodeBlocks(main);
      executeScripts(main);
      createAside();
      Prism.highlightAll();
      runJsEditor();
      copyCodeButton();
      copyExButton();
    })
    .catch(err => console.error("Error cargando página:", err));
}