function ejecutarEj1() {
  const resultado = document.getElementById("resultado");
  if (!resultado) return;

  let miSuperheroeFavorito = "Hulk";
  let numeroFavorito = 50;
  let altura = 5;
  let longitud = 10;
  let suma = altura + longitud;

  resultado.innerHTML = "";

  const datos = document.createElement("div");
  datos.style.padding = "0.5rem 2rem";
  datos.style.whiteSpace = "pre-line";
  datos.style.color = "var(--text-color)";
  datos.textContent = `Mi superhéroe favorito es: ${miSuperheroeFavorito}
    Mi número favorito es: ${numeroFavorito}
    Mi altura es: ${altura}
    Mi longitud es: ${longitud}
    La suma de altura y longitud es: ${suma}`;

  resultado.appendChild(datos);

  resultado.style.borderRadius = "4px";
  resultado.style.padding = "0";

  console.log({ miSuperheroeFavorito, numeroFavorito, altura, longitud, suma });
}

window.addEventListener("DOMContentLoaded", ejecutarEj1);
setTimeout(ejecutarEj1, 50);
