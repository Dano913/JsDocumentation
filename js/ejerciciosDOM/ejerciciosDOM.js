console.log("%c===== Ejercicio 1: Definición y operación de variables =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
const hidden = document.getElementById('ej1-hidden');
const pokemon = document.getElementById('pokemon');

// 1.1 Mostrar botón .showme
const boton = hidden.querySelector('.showme');

// 1.2 Mostrar h1 #pillado
const h1 = hidden.querySelector('#pillado');

// 1.3 Todos los <p>
const parrafos = Array.from(hidden.querySelectorAll('p'));

// 1.4 Todos los .pokemon
const pokemons = Array.from(hidden.querySelectorAll('.pokemon'));

// 1.5 Todos los elementos con data-function="testMe"
const personajes = Array.from(hidden.querySelectorAll('[data-function="testMe"]'));

// 1.6 El 3er personaje
const tercerPersonaje = personajes[2];

console.log(boton);
console.log(h1);
parrafos.forEach(p => console.log(p.textContent));
pokemons.forEach(p => console.log(p.textContent)); 
console.log(tercerPersonaje);
pokemon.innerHTML = `
    <p><strong>Botón:</strong> ${boton.outerHTML}</p>
    <p><strong>H1:</strong> ${h1.outerHTML}</p>
    <p><strong>Párrafos:</strong><br>${parrafos.map(p => p.outerHTML).join('<br>')}</p>
    <p><strong>Pokemons:</strong><br>${pokemons.map(p => p.outerHTML).join('<br>')}</p>
    <p><strong>3er personaje:</strong> ${tercerPersonaje.outerHTML}</p>
`;





console.log("%c===== Ejercicio 2: Definición y operación de variables =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const hidden2 = document.getElementById('ej2-hidden');
const resultado2 = document.getElementById('resultado2');

const div = document.createElement('div');
div.textContent = "Nuevo div añadido dinámicamente";
div.style.margin = "0px 0px 10px 0px"; 
hidden2.appendChild(div);

const p1 = document.createElement('p');
p1.textContent = "Este párrafo está dentro del div";
const divconP = document.createElement('div');
divconP.style.margin = "0px 0px 10px 0px";
divconP.appendChild(p1);
hidden2.appendChild(divconP);

const divcon6P = document.createElement('div');
divcon6P.style.margin = "0px 0px 10px 0px";
for (let i=1; i <= 6; i++){
    const ploop = document.createElement('p');
    ploop.textContent = `Párrafo dinámico ${i}`;
    divcon6P.appendChild(ploop);
}
hidden2.appendChild(divcon6P);

const pdinamico = document.createElement('p');
pdinamico.textContent = `Soy dinámico!`;
pdinamico.style.margin = "0px 0px 10px 0px";
hidden2.appendChild(pdinamico);

const h2 = hidden2.querySelector('.fn-insert-here');
h2.textContent = `Wubba Lubba dub dub`;

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
    const li = document.createElement('li');
    ul.style.paddingLeft = "40px";
    li.textContent = app;
    ul.appendChild(li);
})
ul.style.margin = "0px 0px 10px 0px";
hidden2.appendChild(ul);

const nodos = hidden2.querySelectorAll('.fn-remove-me');
nodos.forEach(nodo => {
    const mensaje = document.createElement('p');
    mensaje.textContent = `Elemento "${nodo.textContent}" eliminado`;
    mensaje.style.color = "red";

    nodo.insertAdjacentElement('afterend', mensaje);
    nodo.remove();
});

const vaciodiv1 = hidden2.querySelector('div:nth-of-type(1)');
vaciodiv1.textContent = "Div vacío";
vaciodiv1.style.margin = "0px 0px 10px 0px";
const vaciodiv2 = hidden2.querySelector('div:nth-of-type(2)');
vaciodiv2.textContent = "Div vacío";
vaciodiv2.style.margin = "0px 0px 10px 0px";
vaciodiv2.style.width = "95%";
const pMedio = document.createElement('p');
pMedio.textContent = '¡Voy en medio!';
vaciodiv1.parentNode.insertBefore(pMedio, vaciodiv2);

const divInsert = hidden2.querySelectorAll('div.fn-insert-here');

divInsert.forEach(div => {
    div.textContent = "Voy dentro!";
    div.style.margin = "0px 0px 10px 0px";
});

console.log(hidden2);

resultado2.innerHTML = hidden2.innerHTML;





console.log("%c===== Ejercicio 3: Definición y operación de variables =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const hidden3 = document.getElementById('ej3-hidden');
const resultado3 = document.getElementById('resultado3');

// Clonamos el contenido del hidden para manipularlo
const clone = hidden3.cloneNode(true);
clone.style.display = 'block';
resultado3.appendChild(clone);

// 1.1 Crear lista de países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulPais = document.createElement('ul');
countries.forEach(country => {
    const liPais = document.createElement('li');
    liPais.textContent = country;
    ulPais.appendChild(liPais);
});
ulPais.style.paddingLeft = "40px";
ulPais.style.margin = "0px 0px 10px 0px";
clone.appendChild(ulPais);


// 1.2 Eliminar elemento con clase .fn-remove-me
const nodo = clone.querySelector('.fn-remove-me');
if (nodo) {
    const mensaje = document.createElement('p');
    mensaje.textContent = `Elemento "${nodo.textContent}" eliminado`;
    mensaje.style.color = "red";
    nodo.insertAdjacentElement('afterend', mensaje);
    nodo.remove();
}

// 1.3 Crear lista de coches en div[data-function="printHere"]
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ulPrint = clone.querySelector('div[data-function="printHere"]');
const ulCar = document.createElement('ul');
cars.forEach(car => {
    const liPrint = document.createElement('li');
    liPrint.textContent = car;
    ulCar.appendChild(liPrint);
});
ulCar.style.paddingLeft = "40px";
ulCar.style.margin = "0px 0px 10px 0px";
ulPrint.appendChild(ulCar);

// 1.4 Crear serie de divs con h4 e img
const countries2 = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries2.forEach(country2 => {
    const divCountry = document.createElement('div');
    divCountry.style.margin = "0px 0px 10px 0px";

    const h4 = document.createElement('h4');
    h4.textContent = country2.title;
    divCountry.appendChild(h4);

    const img = document.createElement('img');
    img.src = country2.imgUrl;
    img.alt = country2.title;
    img.style.width = "90%";
    img.style.maxWidth = "200px";
    divCountry.appendChild(img);

    // ⭐ ----------- 1.6 BOTÓN INDIVIDUAL PARA BORRAR EL DIV -----------
    const btnDelete = document.createElement('button');
    btnDelete.textContent = "Eliminar este div";
    btnDelete.style.display = "block";
    btnDelete.style.marginTop = "5px";

    btnDelete.addEventListener("click", () => {
        divCountry.remove();   // ← elimina solo su div
    });

    divCountry.appendChild(btnDelete);
    // -----------------------------------------------------------------

    clone.appendChild(divCountry);
});

// 1.5 Crear botón para eliminar último div de countries2
const btnEliminarUltimo = document.createElement('button');
btnEliminarUltimo.textContent = "Eliminar último div";
btnEliminarUltimo.style.margin = "10px 0";
clone.appendChild(btnEliminarUltimo);

btnEliminarUltimo.addEventListener('click', () => {
    // Solo eliminamos los divs que contienen h4 e img
    const divs = Array.from(clone.querySelectorAll('div')).filter(d => d.querySelector('h4') && d.querySelector('img'));
    if (divs.length > 0) {
        divs[divs.length - 1].remove();
    }
});

console.log(clone);





console.log("%c===== Ejercicio 3: Definición y operación de variables =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

// 1.1 Evento click
const btn = document.getElementById("btnToClick");

btn.addEventListener("click", (event) => {
    console.log("Evento CLICK:", event);
});

// 1.2 Evento focus
const inputFocus = document.querySelector(".focus");

inputFocus.addEventListener("focus", (event) => {
    console.log("Valor del input en FOCUS:", event.target.value);
});

// 1.3 Evento input
const inputValue = document.querySelector(".value");

inputValue.addEventListener("input", (event) => {
    console.log("Escribiendo:", event.target.value);
});





console.log("%c===== Ejercicio 3: Definición y operación de variables =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const resultado5 = document.getElementById('resultado5');

const ulRock = document.createElement('ul');
albums.forEach(album => {
  const li = document.createElement('li');
  li.textContent = album;
  ulRock.appendChild(li);
});

resultado5.appendChild(ulRock);
