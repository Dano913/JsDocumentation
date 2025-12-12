console.log("%c===== Ejercicio 1: Definición y operación de variables =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");
const hidden = document.getElementById('ej1-hidden');    // Rescato htmls
const pokemon = document.getElementById('pokemon');
const boton = hidden.querySelector('.showme');          
const h1 = hidden.querySelector('#pillado');
const parrafos = Array.from(hidden.querySelectorAll('p'));  // Rescato los html y convierto en array
const pokemons = Array.from(hidden.querySelectorAll('.pokemon'));
const personajes = Array.from(hidden.querySelectorAll('[data-function="testMe"]'));

const tercerPersonaje = personajes[2]; // Saco el de la tercera posicion

console.log(boton);                                  // Imprimo
console.log(h1);
parrafos.forEach(p => console.log(p.textContent));   // Recorro el array e imprimo su textcontent
pokemons.forEach(p => console.log(p.textContent)); 
console.log(tercerPersonaje);                        // Imprimo
                                                     // Template literal
pokemon.innerHTML = `
    <p><strong>Botón:</strong> ${boton.outerHTML}</p>
    <p><strong>H1:</strong> ${h1.outerHTML}</p>
    <p><strong>Párrafos:</strong><br>${parrafos.map(p => p.outerHTML).join('<br>')}</p>
    <p><strong>Pokemons:</strong><br>${pokemons.map(p => p.outerHTML).join('<br>')}</p>
    <p><strong>3er personaje:</strong> ${tercerPersonaje.outerHTML}</p>
`;





console.log("%c===== Ejercicio 2: Definición y operación de variables =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const hidden2 = document.getElementById('ej2-hidden');     // Rescato html
const resultado2 = document.getElementById('resultado2');
//2.1
const div = document.createElement('div');                 // Creo div
div.textContent = "Nuevo div añadido dinámicamente";       // Estilos
div.style.margin = "0px 0px 10px 0px"; 
hidden2.appendChild(div);                                  // Meto div en html
//2.2
const p1 = document.createElement('p');                    // Creo p
p1.textContent = "Este párrafo está dentro del div";       // Meto contenido
const divconP = document.createElement('div');             // Creo div
divconP.style.margin = "0px 0px 10px 0px";                 // Estilos
divconP.appendChild(p1);                                   // Meto p en div
hidden2.appendChild(divconP);                              // Meto div en html
//2.3
const divcon6P = document.createElement('div');            // Creo div
divcon6P.style.margin = "0px 0px 10px 0px";                // Estilos
for (let i=1; i <= 6; i++){                                // Recorro 6 veces y por cada vuelta
    const ploop = document.createElement('p');             // Creo p
    ploop.textContent = `Párrafo dinámico ${i}`;           // Meto contenido con elemento dinámico
    divcon6P.appendChild(ploop);                           // Meto los p en el div
}
hidden2.appendChild(divcon6P);                             // Meto div en el html
//2.4
const pdinamico = document.createElement('p');             // Creo p
pdinamico.textContent = `Soy dinámico!`;                   // Contenido
pdinamico.style.margin = "0px 0px 10px 0px";               // Estilos
hidden2.appendChild(pdinamico);                            // Meto div en html
//2.5
const h2 = hidden2.querySelector('.fn-insert-here');       // Rescato html
h2.textContent = `Wubba Lubba dub dub`;                    // Meto contenido
//2.6
const apps = [                                             // Defino array
    'Facebook', 
    'Netflix', 
    'Instagram', 
    'Snapchat', 
    'Twitter'
]; 
const ul = document.createElement('ul');                   // Creo ul
apps.forEach(app => {                                      // Recorro array y por cada vuelta
    const li = document.createElement('li');               // Creo li
    ul.style.paddingLeft = "40px";                         // Estilos
    li.textContent = app;                                  // Meto el contenido en el li
    ul.appendChild(li);                                    // Meto el li en la ul
})
ul.style.margin = "0px 0px 10px 0px";                      // Estilos
hidden2.appendChild(ul);                                   // Meto la ulen el div
//2.7
const nodos = hidden2.querySelectorAll('.fn-remove-me');   // Rescato varios htmls
nodos.forEach(nodo => {                                    // Recorro y por vuelta
    const mensaje = document.createElement('p');           // Creo p
    mensaje.textContent = `Elemento "${nodo.textContent}" eliminado`; // Contenido dinamico
    mensaje.style.color = "red";                           // Estilo

    nodo.insertAdjacentElement('afterend', mensaje);       // El contenido dinamico lo coloca justo despues del nodo rescatado
    nodo.remove();                                         // lo elimina
});
//2.8
const vaciodiv1 = hidden2.querySelector('div:nth-of-type(1)');     // Rescato html
vaciodiv1.textContent = "Div vacío";                               // Contenido
vaciodiv1.style.margin = "0px 0px 10px 0px";                       // Estilo
const vaciodiv2 = hidden2.querySelector('div:nth-of-type(2)');     // Rescato html
vaciodiv2.textContent = "Div vacío";                               // Contenido
vaciodiv2.style.margin = "0px 0px 10px 0px";                       // Estilo
vaciodiv2.style.width = "95%";                                     // Estilo
const pMedio = document.createElement('p');                        // Creo p
pMedio.textContent = '¡Voy en medio!';                             // Contenido
vaciodiv1.parentNode.insertBefore(pMedio, vaciodiv2);              // Inserto pMedio justo despues de vaciodiv2, compartiendo padre
//2.9
const divInsert = hidden2.querySelectorAll('div.fn-insert-here');  // Rescato html
divInsert.forEach(div => {                    // Los recorro y por cada uno
    div.textContent = "Voy dentro!";          // Contenido
    div.style.margin = "0px 0px 10px 0px";    // Estilo
});

console.log(hidden2);                         // Imprimo
resultado2.innerHTML = hidden2.innerHTML;     // Muestro pantalla





console.log("%c===== Ejercicio 3: Definición y operación de variables =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const hidden3 = document.getElementById('ej3-hidden');   // Rescato html
const resultado3 = document.getElementById('resultado3');

const clone = hidden3.cloneNode(true);                   // Crea una copia de un nodo del DOM
clone.style.display = 'block';
resultado3.appendChild(clone);

// 1.1 Crear lista de países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulPais = document.createElement('ul');           // Creo ul
countries.forEach(country => {                         // Recorro
    const liPais = document.createElement('li');       // Creo li
    liPais.textContent = country;                      // Meto el pais
    ulPais.appendChild(liPais);                        // Lo meto en la lista
});
ulPais.style.paddingLeft = "40px";
ulPais.style.margin = "0px 0px 10px 0px";
clone.appendChild(ulPais);                             // Meto la ul en el clonado


// 1.2 Eliminar elemento con clase .fn-remove-me
const nodo = clone.querySelector('.fn-remove-me');     // Rescato html dentro del clon
if (nodo) {
    const mensaje = document.createElement('p');       // Creo p
    mensaje.textContent = `Elemento "${nodo.textContent}" eliminado`; // Meto contenido dinamico
    mensaje.style.color = "red";                 
    nodo.insertAdjacentElement('afterend', mensaje);   // Lo coloco justo despues del nodo
    nodo.remove();                                     // Elimino el nodo
}

// 1.3 Crear lista de coches en div[data-function="printHere"]
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];   // Array
const ulPrint = clone.querySelector('div[data-function="printHere"]'); // Rescato html del nodo
const ulCar = document.createElement('ul');                            // Creo ul
cars.forEach(car => {                                // Recorro y por vuelta
    const liPrint = document.createElement('li');    // Creo li
    liPrint.textContent = car;                       // Meto el contenido
    ulCar.appendChild(liPrint);                      // Meto el li en la ul
});
ulCar.style.paddingLeft = "40px";
ulCar.style.margin = "0px 0px 10px 0px";
ulPrint.appendChild(ulCar);                          // Meto la ul en el clone

// 1.4 Crear serie de divs con h4 e img
const countries2 = [                                 // Array
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries2.forEach(country2 => {                      // Recorro y por cada vuelta
    const divCountry = document.createElement('div'); // Creo div
    divCountry.style.margin = "0px 0px 10px 0px";

    const h4 = document.createElement('h4');          // Creo h4
    h4.textContent = country2.title;                  // Meto el titulo en el h4 
    divCountry.appendChild(h4);                       // El h4 en el div

    const img = document.createElement('img');        // Creo imagen
    img.src = country2.imgUrl;                        // Meto la url en el src
    img.alt = country2.title;                         // Meto el titulo en el alt
    img.style.width = "90%";                          // Estilo
    img.style.maxWidth = "200px";
    divCountry.appendChild(img);                      // Meto la imagen en el div

    // ⭐ ----------- 1.6 BOTÓN INDIVIDUAL PARA BORRAR EL DIV -----------
    const btnDelete = document.createElement('button'); // Rescato el html
    btnDelete.textContent = "Eliminar este div";        // Meto contenido
    btnDelete.style.display = "block";
    btnDelete.style.marginTop = "5px";

    btnDelete.addEventListener("click", () => {         // Escucho el evento de click
        divCountry.remove();                            // Elimina el div
    });

    divCountry.appendChild(btnDelete);                  // Meto el boton de eliminar en el div 

    clone.appendChild(divCountry);                      // Meto el div en el clone
});

// 1.5 Crear botón para eliminar último div de countries2
const btnEliminarUltimo = document.createElement('button');  // Rescato el html
btnEliminarUltimo.textContent = "Eliminar último div";       // Meto el texto
btnEliminarUltimo.style.margin = "10px 0";
clone.appendChild(btnEliminarUltimo);                        // Meto el boton en el clone 

btnEliminarUltimo.addEventListener('click', () => {          // Escucho evento click
    // Solo eliminamos los divs que contienen h4 e img
    const divs = Array.from(clone.querySelectorAll('div'))              // Rescato el array de divs de clone
        .filter(d => d.querySelector('h4') && d.querySelector('img'));  // Filtro los que tengan h4 e img
    if (divs.length > 0) {                      // Comprueba si hay al menos un div
        divs[divs.length - 1].remove();         // Coge el ultimo div del array y lo elimina
    }
});

console.log(clone);                                           // Imprimo el clon





console.log("%c===== Ejercicio 3: Definición y operación de variables =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

// 1.1 Evento click
const btn = document.getElementById("btnToClick");                 // Rescato boton html
 
btn.addEventListener("click", (event) => {                         // Escucho el evento click
    console.log("Evento CLICK:", event);                           // Imprimo
});

const inputFocus = document.querySelector(".focus");               // Rescato html

inputFocus.addEventListener("focus", (event) => {                  // Escucho el evento de focus
    console.log("Valor del input en FOCUS:", event.target.value);  // Imprimo
});

const inputValue = document.querySelector(".value");               // Rescato input html

inputValue.addEventListener("input", (event) => {                  // Escucho el evento de escribir
    console.log("Escribiendo:", event.target.value);               // Imprimo
});





console.log("%c===== Ejercicio 3: Definición y operación de variables =====", "color: white; background-color: #085f0cff; font-weight: bold; padding: 2px 6px; border-radius: 3px;");

const albums = [                  // Creo array
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const rockPage = document.getElementById('rockPage');  // Rescato html

const ulRock = document.createElement('ul');           // Creo ul
albums.forEach(album => {                              // Recorro array y por cada elemento
  const li = document.createElement('li');             // Creo li
  li.textContent = album;                              // Meto el contenido del elemento en el li
  ulRock.appendChild(li);                              // Meto li en la ul
});

rockPage.appendChild(ulRock);                          // Meto la lista en el html
