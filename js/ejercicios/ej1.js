let miSuperheroeFavorito = "Hulk";
let numeroFavorito = 50;
let altura = 5;
let longitud = 10;
let suma = altura + longitud;

document.getElementById("resultado").innerHTML = `
  <ul class="lista-estilizada">
    <li>Mi superhéroe favorito es: ${miSuperheroeFavorito}</li>
    <li>Mi número favorito es: ${numeroFavorito}</li>
    <li>Mi altura es: ${altura}</li>
    <li>Mi longitud es: ${longitud}</li>
    <li>La suma de altura y longitud es: ${suma}</li>
  </ul>
`;
console.log("%c===== Ejercicio 1 =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
console.log({ miSuperheroeFavorito, numeroFavorito, altura, longitud, suma });